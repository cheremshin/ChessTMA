import Navbar from "@/widgets/navbar/Navbar";
import { Board } from "@/widgets/puzzlePage/Board";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";


const PuzzlePage = () => {
    return (
        <>
            <BoardContextProvider>
                <Board />
            </BoardContextProvider>
            <Navbar />
        </>
    );
};

export default PuzzlePage;
