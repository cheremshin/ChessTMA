import { FC } from "react";

import { Tag } from "@/shared/types/api/themes/TagDTO";
import { useRouter } from "next/navigation";


export type PropsT = {
    tag: Tag;
}

const ThemeBlock =  (props: PropsT) => {
    const { tag } = props;
    const router = useRouter();

    const handleRedirect = () => {
        console.log(
            `/puzzle/${tag.id}`
        );
        router.push(`/puzzle/${tag.id}`);
    }

    return (
        <div className="
            bg-[#232323]
            text-white
            p-3
            flex
            flex-col
            rounded-xl
        " onClick={handleRedirect}>
            <div className="font-semibold text-sm">{tag.name}</div>
            <div className="font-light text-xs">{tag.description}</div>
        </div>
    );
};

export default ThemeBlock;
