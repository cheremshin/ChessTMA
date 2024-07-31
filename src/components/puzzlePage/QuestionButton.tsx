import Image from "next/image";

import Help from "../../../public/question.svg";


const QuestionButton = () => {
    return (
        <a className="
            w-[50px]
            h-[50px]
            rounded-full
            bg-black
            p-2
        ">
            <Image src={Help} alt={""} />
        </a>
    );
};

export default QuestionButton;
