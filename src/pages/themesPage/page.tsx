import Navbar from "@/widgets/navbar/Navbar";
import ThemeBlock from "@/widgets/themesPage/ThemeBlock";

import styles from "./page.module.css";

import Header from "@/widgets/themesPage/Header";
import { useThemes } from "@/shared/hooks/useThemes";
import { Tag } from "@/shared/types/api/themes/TagDTO";
import { FC, ReactNode } from "react";


interface Props {
    themes?: Tag[] | null;
    childred?: ReactNode;
}

const ThemesPage: FC<Props> = (props) => {
    const { themes } = props;

    return (
        <>
            <Header />
            <div className={styles.container}>
                { themes?.map((theme) => <ThemeBlock key={theme.name} tag={theme}/>) }
            </div>
            <Navbar />
        </>
    );
};

export default ThemesPage;
