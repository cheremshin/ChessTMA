import { useContext } from "react";
import { BoardContext } from "@/widgets/puzzlePage/BoardContext";



const PuzzleRating = () => {
    const { rating } = useContext(BoardContext);

    return (
        <div className="flex flex-col text-center space-[-5px] pt-2">
            <span className="text-base leading-3">Рейтинг задачи</span>
            <span className="text-xl font-semibold">{rating}</span>
        </div>
    );
};

export default PuzzleRating;