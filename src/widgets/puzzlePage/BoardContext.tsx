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
import { Task } from "@/shared/types/api/tasks/TaskDTO";


export const BoardContext = createContext<Game>({
    task_id: "",
    fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
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
    task: Task;
    children: ReactNode;
};

export const BoardContextProvider: FC<Props> = (props) => {
    const { task, children } = props;
    const { fen, uci, rating } = task;

    const solve = uci ? uci : "";

    console.log(solve);

    const [status, setStatus] = useState(SolveStatus.inProgress);
    const [completed, setCompleted] = useState(false);

    const splitMoves = solve.split(" ");

    const playerSteps = splitMoves.filter((_, index) => index % 2 === 1);
    const aiSteps = splitMoves.filter((_, index) => index % 2 === 0);

    const side = useRef<BoardSide>(fen.split(" ")[1] === "w" ? "black" : "white");


    return (
        <BoardContext.Provider value={{
            task_id: task.id,
            fen,
            solve: playerSteps,
            aiSteps,
            side: side.current,
            rating,
            status,
            setStatus,
            completed,
            setCompleted,
        }}>
            {children}
        </BoardContext.Provider>
    );
};
