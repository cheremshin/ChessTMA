import Image from "next/image";

import ArrowLeft from "../../../public/arrow_left.svg";


const BackButton = () => {
    return (
        <a href="/"
            className="
            w-[50px]
            h-[50px]
            rounded-full
            bg-black
            p-2
        ">
            <Image src={ArrowLeft} alt={""} />
        </a>
    );
};

export default BackButton;
