import ChooseTheme from "@/widgets/mainPage/ChooseTheme";
import Header from "@/widgets/mainPage/Header";
import RandomTask from "@/widgets/mainPage/RandomTask";
import Navbar from "@/widgets/navbar/Navbar";

import styles from "./page.module.css";
import Title from "@/widgets/mainPage/Title";
import ChessImage from "@/widgets/mainPage/ChessImage";

const MainPage = () => {
    return (
        <>
            <Header />
            <div className={styles.container}>
                <Title />
                <div></div>
                <ChessImage />
                <div className="flex flex-col gap-5 mt-auto mb-auto">
                    <RandomTask />
                    <ChooseTheme />
                </div>
            </div>
            <Navbar />
        </>
    );
};

export default MainPage;