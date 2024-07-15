import { ComponentProps, FC } from "react";
import Button from "./button/Button";

import { menu } from "./navbar.data";


type PropsT = ComponentProps<"div">;

const Navbar : FC<PropsT> = (props) => {
    return (
        <nav className="
            w-full
            h-[80px]
            fixed
            flex
            bottom-0
            z-50
            bg-white
            border-t-[2px]
            border-[#C1C1C1]
            items-center
            justify-evenly
        ">
            {/* Navbar buttons */}
            { menu.map((item) => <Button key={item.name} item={item} />) }
        </nav>
    );
};

export default Navbar;