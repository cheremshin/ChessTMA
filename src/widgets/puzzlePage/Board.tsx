import { Chessboard } from "react-chessboard";
import { Chess, Square } from "chess.js";
import { useEffect, useRef, useState, useContext, FC } from "react";

import { BoardContext } from "./BoardContext";
import { SolveStatus } from "@/shared/types/board";


interface SquareHighlight {
    background?: string;
    borderRadius?: string;
}


export const Board = () => {
    const {
        fen,
        side,
        solve,
        aiSteps,
        status,
        setStatus,
        completed,
        setCompleted,
    } = useContext(BoardContext);

    const aiStepsRef = useRef<string[]>(aiSteps);
    const [game, setGame] = useState(new Chess(fen));

    const [moveFrom, setMoveFrom] = useState<string>("");
    const [moveTo, setMoveTo] = useState<Square | null>(null);
    const [optionSquares, setOptionSquares] = useState<{ [key: string]: SquareHighlight }>({});
    const [lastMoveSquares, setLastMoveSquares] = useState<{ [key: string]: SquareHighlight }>({});

    useEffect(() => {
        if (completed && status == SolveStatus.inProgress) {
            setStatus(SolveStatus.success);
        }
    }, [completed]);

    /**
     * Make init ai step
     */
    useEffect(() => {
        setTimeout(() => {
            const initStep = aiStepsRef.current.shift();
    
            if (initStep) {
                const move = game.move(initStep);
    
                if (move) {
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
        const move = aiStepsRef.current.shift();

        if (move) {
            const square = game.move(move);
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

            const gameCopy = new Chess(game.fen());

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

            const valid = solve[0] == move.from + move.to;

            if (!valid) {
                setTimeout(() => {
                    game.undo();
                    setGame(gameCopy);
                    setStatus(SolveStatus.fail);
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
        <div className="flex mx-[30px] h-full items-center pb-[200px]">
            <div className="w-full bg-[#ededed] p-1 rounded-[6px]">
            <Chessboard
                position={game.fen()}
                boardOrientation={side}
                arePiecesDraggable={false}
                onSquareClick={onSquareClick}
                customSquareStyles={{
                    ...lastMoveSquares,
                    ...optionSquares,
                }}
            />
            </div>
        </div>
    );
};
