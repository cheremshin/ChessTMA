import { ComponentProps, FC } from "react";

import UserRectangle from "@/components/mainPage/UserRectangle";
import CoinsBlock from "@/components/mainPage/CoinsBlock";


type PropsT = ComponentProps<"header">

const Header : FC<PropsT> = (props) => {
    return (
        <header className="w-full flex justify-between items-center px-[25px] pt-[30px]">
            <UserRectangle />
            <CoinsBlock />
        </header>
    );
}

export default Header;
