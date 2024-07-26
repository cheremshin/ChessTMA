import { 
    ReactNode,
    createContext,
    useState
} from "react";
import { Chess } from "chess.js";
import { BoardSide, Task } from "@/shared/types/types";


type Game = {
    fen: string;
    game: Chess;
    side: BoardSide;
};

export const BoardContext = createContext<Game>({
    fen: "",
    game: new Chess(),
    side: "black",
});

interface Props {
    task: Task;
    children: ReactNode;
};

export const BoardContextProvider = ({ task, children }: Props) => {
    const { fen } = task;
    const [game, setGame] = useState(new Chess(fen));

    return (
        <BoardContext.Provider value={{
            fen,
            game,
            side: fen.split(" ")[1] === "w" ? "white" : "black",
        }}>
            {children}
        </BoardContext.Provider>
    );
};
