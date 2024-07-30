import {
    FC,
    ReactNode
} from "react";

import BackButton from "@/components/puzzlePage/BackButton";
import QuestionButton from "@/components/puzzlePage/QuestionButton";
import PuzzleRating from "@/components/puzzlePage/PuzzleRating";


interface Props {
    children?: ReactNode
}


const Header: FC<Props> = (props) => {
    return (
        <header className="
            w-full
            h-[65px]
            px-[20px]
            pt-[15px]
            flex
            justify-between
            items-center
        ">
            <BackButton />
            <PuzzleRating />
            <QuestionButton />
        </header>
    );
};

export default Header;
