import Dash from "/images/dash.svg";
import Check from "/images/check.svg";
import styles from "./AsideModal.module.css";

const AsideModal = ({ step }) => {
    return (
        <div className={styles.cover}>
            <div className={styles.title}>
                <p className={styles.welcome}>Welcome to the </p>
                <p className={styles.wizard}>New Virtual Machine Wizard</p>
            </div>
            {step.step === 1 && (
                <div className={styles.steps}>
                    <div className={styles.wrapper}>
                        <img src={Dash} alt="dash" />
                        <p className={styles.active}> Virtual Machine Name</p>
                    </div>
                    <p>General Settings</p>
                </div>
            )}
            {step.step === 2 && (
                <div className={styles.steps}>
                    <div className={styles.wrapper}>
                        <img src={Check} alt="check" />
                        <p>Virtual Machine Name</p>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={Dash} alt="dash" />
                        <p className={styles.active}> General Settings</p>
                    </div>
                </div>
            )}
            {step.step === 3 && (
                <div className={styles.steps}>
                    <div className={styles.wrapper}>
                        <img src={Check} alt="check" />
                        <p>Virtual Machine Name</p>
                    </div>
                    <div className={styles.wrapper}>
                        <img src={Check} alt="check" />
                        <p>General Settings</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AsideModal;
