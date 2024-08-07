import StatusBlock from "@/components/puzzlePage/StatusBlock";
import Navbar from "@/widgets/navbar/Navbar";
import { Board } from "@/widgets/puzzlePage/Board";
import { BoardContextProvider } from "@/widgets/puzzlePage/BoardContext";
import FinishScreen from "@/widgets/puzzlePage/FinishScreen";
import Header from "@/widgets/puzzlePage/Header";


const PuzzlePage = () => {
    return (
        <>
            <Header />
            <StatusBlock />
            <Board />
            <FinishScreen />
            <Navbar />
        </>
    );
};

export default PuzzlePage;
