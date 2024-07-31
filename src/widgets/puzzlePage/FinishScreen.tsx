import { useContext, useEffect, useState } from "react";

import { BoardContext } from "./BoardContext";

import styles from "./FinishScreen.module.css";
import Link from "next/link";


const FinishScreen = () => {
    const { status, completed } = useContext(BoardContext);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(completed)
        }, 300);
    }, [completed]);

    return (
        <>
            { visible && (
                <div className={styles.container}>
                    <div className={styles.screen}>
                        <div className="mt-auto">
                            Вы справились с задачей!
                        </div>
                        <div className="flex mt-auto mb-[30px] gap-5">
                            <a href="/" className={styles.button}>
                                На главную
                            </a>
                            <a href="/puzzle" className={styles.button}>
                                Следующая
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FinishScreen;