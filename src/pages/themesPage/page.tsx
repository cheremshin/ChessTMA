import Navbar from "@/widgets/navbar/Navbar";
import ThemeBlock from "@/widgets/themesPage/ThemeBlock";

import styles from "./page.module.css";

import Header from "@/widgets/themesPage/Header";


const ThemesPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                {/* { themes.map((theme) => <ThemeBlock key={theme.name}/>) } */}
            </div>
            <Navbar />
        </>
    );
};

export default ThemesPage;
