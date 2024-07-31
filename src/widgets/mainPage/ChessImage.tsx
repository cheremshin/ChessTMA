import Image from "next/image";

import Picture from "../../../public/chess.png";


const ChessImage = () => {
    return (
        <Image src={Picture} fill={false} alt="" className="m-auto"/>
    );
};

export default ChessImage;