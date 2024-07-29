

export type Vertical =
    | "1"
    | "2"
    | "3"
    | "4"
    | "5"
    | "6"
    | "7"
    | "8";

export type Horizontal =
    | "a"
    | "b"
    | "c"
    | "d"
    | "e"
    | "f"
    | "g"
    | "h";

export type Square = `${Horizontal}${Vertical}`;

export type Piece =
    | "wK"
    | "wQ"
    | "wR"
    | "wB"
    | "wN"
    | "wP"
    | "bK"
    | "bQ"
    | "bR"
    | "bB"
    | "bN"
    | "bP";

export type BoardSide = "white" | "black";

export type BoardPosition = Map<Square, Piece>;

export type Task = {
    id: number;
    fen: string;
    initStep: string;
    solve: string;
};
