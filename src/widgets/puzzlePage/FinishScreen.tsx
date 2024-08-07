import { useContext, useEffect, useState } from "react";

import { BoardContext } from "./BoardContext";

import styles from "./FinishScreen.module.css";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";


const FinishScreen = () => {
    const { status, completed } = useContext(BoardContext);
    const [visible, setVisible] = useState(false);
    const router = useRouter();


    useEffect(() => {
        setTimeout(() => {
            setVisible(completed)
        }, 300);
    }, [completed]);

    const handleNextClick = () => {
        window.location.reload();
    }

    return (
        <>
            { visible && (
                <div className={styles.container}>
                    <div className={styles.screen}>
                        <div className="mt-auto">
                            Вы справились с задачей!
                        </div>
                        <div className="flex mt-auto mb-[30px] gap-5">
                            <Link href="/" className={styles.button}>
                                На главную
                            </Link>
                            <button onClick={handleNextClick} className={styles.button}>
                                Следующая
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FinishScreen;