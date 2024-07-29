import { 
    ReactNode,
    createContext,
    useRef,
    useState
} from "react";
import { Chess } from "chess.js";
import { Puzzle } from "@/shared/types/types";
import { Game, BoardSide } from "@/shared/types/board";
import usePuzzlePage from "@/shared/hooks/usePuzzlePage";


export const BoardContext = createContext<Game>({
    fen: "",
    solve: [],
    aiSteps: [],
    game: new Chess(),
    side: "white",
    completed: false,
    setCompleted: () => {},
});

interface Props {
    children: ReactNode;
};

export const BoardContextProvider = ({ children }: Props) => {
    const { task } = usePuzzlePage();
    const { fen, solve } = task;
    const game = new Chess(fen);

    const [completed, setCompleted] = useState(false);

    const splitMoves = solve.split(" ");

    const playerSteps = splitMoves.filter((_, index) => index % 2 === 1);
    const aiSteps = splitMoves.filter((_, index) => index % 2 === 0);

    const side = useRef<BoardSide>(fen.split(" ")[1] === "w" ? "black" : "white");

    return (
        <BoardContext.Provider value={{
            fen,
            solve: playerSteps,
            aiSteps,
            game,
            side: side.current,
            completed,
            setCompleted,
        }}>
            {children}
        </BoardContext.Provider>
    );
};
