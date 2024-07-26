import Navbar from "@/widgets/navbar/Navbar";
import { Board } from "@/widgets/puzzlePage/Board";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";


const DEFAULT_POSITION = "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";

const PuzzlePage = async () => {
    // Some fetching logic
    const task = {
        id: 1,
        fen: "rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R b KQkq - 1 2",
    };

    return (
        <>
            <BoardContextProvider task={task}>
                <Board />
            </BoardContextProvider>
            <Navbar />
        </>
    );
};

export default PuzzlePage;
