import styles from "./ProgressBar.module.css";

const ProgressBar = ({ value, max, label }) => {
    const percent = Math.min((value / max) * 100, 100);

    return (
        <div className={styles.wrapper}>
            <span>
                {value} {label}
            </span>
            <div className={styles.track}>
                <div
                    className={styles.fill}
                    style={{ width: `${percent}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
