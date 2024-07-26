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
    const { game, side } = useContext(BoardContext);

    const [fen, setFen] = useState(game.fen());

    const [moveFrom, setMoveFrom] = useState<string>("");
    const [moveTo, setMoveTo] = useState<Square | null>(null);
    const [optionSquares, setOptionSquares] = useState<{ [key: string]: SquareHighlight }>({});

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

            return move;
        });

        squares[square] = {
            "background": "rgba(255, 255, 0, 0.4)",
        }

        setOptionSquares(squares);

        return true;
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
                ...optionSquares,
            }}
        />
    );
};
