import { FC } from "react";
import { IMenuLink } from "./button-interface";
import Image from "next/image";
import Link from "next/link";

interface IMenuItem {
    item: IMenuLink;
}

const Button = ({item} : IMenuItem) => {
    return (
       <>
            { item.bigButton
                ? <BigButton item={item} />
                : <CommonButton item={item} />
            }
       </>
    )
};

const BigButton = ({item}: IMenuItem) => {
    return (
        <Link href={item.url} className="relative h-[120px] -top-[17px] flex flex-col items-center justify-center">
            <Image className="border-[2px] border-[#C1C1C1] rounded-full p-[8px] bg-white" src={item.icon} alt="" width={70} height={70}/>
            { item.name }
        </Link>
    )
}

const CommonButton= ({item}: IMenuItem) => {
    return (
        <Link href={item.url} className="flex flex-col items-center">
            <Image src={item.icon} alt="" width={35} height={35}/>
            { item.name }
        </Link>
    )
}

export default Button;
