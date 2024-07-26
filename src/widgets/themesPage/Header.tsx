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
            justify-center
            items-center
            font-semibold
            text-[22px]
        ">
            <Link href="/" className="fixed left-10">
                <Image src={ArrowLeft} alt="" width={30} height={30}/>
            </Link>
            <p>Список тем</p> 
        </div>
    );
};

export default Header;
