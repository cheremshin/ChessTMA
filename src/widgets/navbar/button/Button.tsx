import { FC } from "react";
import { IMenuLink } from "./button-interface";
import Image from "next/image";
import Link from "next/link";

interface IMenuItem {
    item: IMenuLink;
}

const Button : FC<IMenuItem> = ({item}) => {
    return (
        <Link href={item.url} className="flex flex-col items-center justify-center">
            <Image src={item.icon} alt={""} width={40} height={40}/>
            { item.name }
        </Link>
    );
};

export default Button;
