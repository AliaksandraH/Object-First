import ErrorImg from "/images/error.svg";
import styles from "./WarningModal.module.css";

const WarningModal = ({ setIsShowWarning, onCloseModal }) => {
    return (
        <div className={styles.wrapper}>
            <img src={ErrorImg} alt="Error" className="w-6 h-6" />
            <h2 className={styles.title}>Cancel creating?</h2>
            <p className={styles.text}>
                You have unsaved changes that will be lost. Do you want to
                continue?
            </p>
            <div className={styles.actions}>
                <button
                    className={styles.leaveBtn}
                    onClick={() => onCloseModal()}
                >
                    Leave
                </button>
                <button
                    className={styles.cancelBtn}
                    onClick={() => setIsShowWarning(false)}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default WarningModal;
