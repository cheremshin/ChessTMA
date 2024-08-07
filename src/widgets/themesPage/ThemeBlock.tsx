import { FC } from "react";

import { Tag } from "@/shared/types/api/themes/TagDTO";


export type PropsT = {
    tag: Tag;
}

const ThemeBlock =  (props: PropsT) => {
    const { tag } = props;

    const handleRedirect = () => {
        console.log(tag.name);
    }

    return (
        <button className="
            bg-[#232323]
            text-white
            p-3
            flex
            flex-col
            rounded-xl
        " onClick={handleRedirect}>
            <div className="font-semibold">{tag.name}</div>
            <div className="font-light">{tag.description}</div>
        </button>
    );
};

export default ThemeBlock;
