import { 
    FC,
    ReactNode,
    createContext,
    useEffect,
    useRef,
    useState
} from "react";
import { Chess } from "chess.js";
import { Puzzle } from "@/shared/types/types";
import { Game, BoardSide, SolveStatus } from "@/shared/types/board";
import usePuzzlePage from "@/shared/hooks/usePuzzlePage";


export const BoardContext = createContext<Game>({
    fen: "",
    solve: [],
    aiSteps: [],
    side: "white",
    rating: 0,
    status: SolveStatus.inProgress,
    setStatus: () => {},
    completed: false,
    setCompleted: () => {},
});

interface Props {
    children: ReactNode;
};

export const BoardContextProvider: FC<Props> = ({children}) => {
    const { task } = usePuzzlePage();
    const { fen, solve } = task;

    const [status, setStatus] = useState(SolveStatus.inProgress);
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
            side: side.current,
            rating: 2100,
            status,
            setStatus,
            completed,
            setCompleted,
        }}>
            {children}
        </BoardContext.Provider>
    );
};
