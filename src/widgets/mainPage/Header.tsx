import { ComponentProps, FC } from "react";

import UserRectangle from "@/components/mainPage/UserRectangle";
import CoinsBlock from "@/components/mainPage/CoinsBlock";


type PropsT = ComponentProps<"header">

const Header : FC<PropsT> = (props) => {
    return (
        <header {...props}>
            <UserRectangle />
            <CoinsBlock coins={1274} />
        </header>
    );
}

export default Header;
