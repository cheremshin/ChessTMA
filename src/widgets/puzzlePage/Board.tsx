import { Chessboard } from "react-chessboard";
import { Chess, Piece, Square } from "chess.js";
import { useEffect, useState, useContext, FC } from "react";

import { BoardContext } from "./BoardContext";


interface SquareHighlight {
    background?: string;
    borderRadius?: string;
}

interface Move {
    from: Square;
    to: Square;
    promotion?: string;
}

export const Board = () => {
    const { game, side, solve, aiSteps, setCompleted } = useContext(BoardContext);

    const [fen, setFen] = useState(game.fen());

    const [moveFrom, setMoveFrom] = useState<string>("");
    const [moveTo, setMoveTo] = useState<Square | null>(null);
    const [optionSquares, setOptionSquares] = useState<{ [key: string]: SquareHighlight }>({});
    const [lastMoveSquares, setLastMoveSquares] = useState<{ [key: string]: SquareHighlight }>({});


    /**
     * Make init ai step
     */
    useEffect(() => {
        setTimeout(() => {
            const initStep = aiSteps.shift();
    
            if (initStep) {
                const move = game.move(initStep);
    
                if (move) {
                    setFen(game.fen());
                    showLastMove(move.from, move.to);
                }
            }
        }, 500);
    }, []);
    

    const showLastMove = (moveFrom: Square, moveTo: Square) => {
        setLastMoveSquares({
            [moveFrom]: {
                "background": "rgba(209, 109, 38, .6)"
            },
            [moveTo]: {
                "background": "rgba(209, 109, 38, .6)"
            },
        });
    };

    const getMoveOptions: FC<Square> = (square) => {
        const moves = game.moves({
            square,
            verbose: true,
        });

        if (moves.length === 0) {
            setOptionSquares({});
            return false;
        }

        const squares: { [key: string]: SquareHighlight } = {};
        moves.forEach((move) => {
            squares[move.to] = {
                'background':
                    game.get(move.to) &&
                    game.get(move.to).color !== game.get(square).color
                    ? "radial-gradient(circle, rgba(0,0,0,.1) 85%, transparent 85%)"
                    : "radial-gradient(circle, rgba(0,0,0,.1) 25%, transparent 25%)",
                'borderRadius': "50%",
            };

            if (lastMoveSquares[move.to] !== undefined) {
                squares[move.to] = {
                    ...squares[move.to],
                    "background" : `rgba(209, 109, 38, .8), ${squares[move.to].background}`,
                }
            }

            return move;
        });

        squares[square] = {
            "background": "rgba(255, 255, 0, 0.5)",
        };

        setOptionSquares(squares);

        return true;
    };

    const makeAIStep = () => {
        const move = aiSteps.shift();

        if (move) {
            const square = game.move(move);
            setFen(game.fen());
            showLastMove(square.from, square.to);

            return;
        }

        setCompleted(true);
    };

    const onSquareClick = (square: Square) => {
        if (!moveFrom) {
            const hasMoveOptions = getMoveOptions(square);

            if (hasMoveOptions) {
                setMoveFrom(square);
            }

            return;
        }

        if (!moveTo) {
            const moves = game.moves({
                square: moveFrom as Square,
                verbose: true,
            });

            const foundMove = moves.find(
                (m) => m.from === moveFrom && m.to === square
            );

            if (!foundMove) {
                const hasMoveOptions = getMoveOptions(square);
                setMoveFrom(hasMoveOptions ? square : "");
                return;
            }

            setMoveTo(square);

            const move = game.move({
                from: moveFrom as Square,
                to: square,
            });

            if (move === null) {
                const hasMoveOptions = getMoveOptions(square);

                if (hasMoveOptions) {
                    setMoveFrom(square);
                }

                return;
            }

            setFen(game.fen());

            const valid = solve[0] == move.from + move.to;

            if (!valid) {
                setTimeout(() => {
                    game.undo();
                    setFen(game.fen());
                }, 300);
            } else {
                solve.shift();
                showLastMove(move.from, move.to);
                setTimeout(makeAIStep, 300);
            }

            setMoveFrom("");
            setMoveTo(null);
            setOptionSquares({});
            return;
        }
    };

    return (
        <Chessboard
            position={fen}
            boardOrientation={side}
            arePiecesDraggable={false}
            onSquareClick={onSquareClick}
            customSquareStyles={{
                ...lastMoveSquares,
                ...optionSquares,
            }}
        />
    );
};
