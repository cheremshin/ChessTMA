import Image from "next/image";
import Link from "next/link";

import ArrowLeft from "../../../public/arrow_left.svg";


const Header = () => {
    return (
        <div className="
            h-[60px] 
            w-full
            bg-[#232323]
            text-white
            flex
            justify-between
            items-center
            font-semibold
            text-[22px]
            px-10 // Adds horizontal padding to the entire header
        ">
            <Link href="/">
                    <Image src={ArrowLeft} alt="Back" width={30} height={30}/>
            </Link>
            <div className="flex-grow"></div> {/* This div takes up remaining space */}
            <p className="text-center mx-auto pr-8">Список тем</p>
            <div className="flex-grow"></div> {/* This div takes up remaining space */}
        </div>
    );
};

export default Header;
