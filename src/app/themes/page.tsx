"use client"

import ThemesPage from "@/pages/themesPage/page";
import { useThemes } from "@/shared/hooks/useThemes";

const Page = () => {
    const themes = useThemes();

    return (
        <>
            <ThemesPage themes={themes}/>
        </>
    );
};

export default Page;