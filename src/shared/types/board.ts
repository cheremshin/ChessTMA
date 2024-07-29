import { Chess } from "chess.js";


export type BoardSide = "white" | "black";

export type Game = {
    fen: string;
    solve: string[];
    aiSteps: string[];
    game: Chess;
    side: BoardSide;
    completed: boolean;
    setCompleted: (completed: boolean) => void;
};

