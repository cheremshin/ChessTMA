import { ComponentProps, FC } from "react";
import Button from "./button/Button";

import { menu } from "./navbar.data";


type PropsT = ComponentProps<"div">;

const Navbar : FC<PropsT> = (props) => {
    return (
        <nav {...props}>
            {/* Navbar buttons */}
            { menu.map((item) => <Button key={item.name} item={item} />) }
        </nav>
    );
};

export default Navbar;