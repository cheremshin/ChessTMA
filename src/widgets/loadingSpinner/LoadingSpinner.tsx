import styles from "./page.module.css";


const LoadingSpinner = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-20">
            <span className={` ${styles.loader}`}></span>
        </div>
    );
};

export default LoadingSpinner;
