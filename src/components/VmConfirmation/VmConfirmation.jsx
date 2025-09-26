import Change from "/images/change.svg";
import modalStyles from "../CreateVmModal/Modal.module.css";
import styles from "./VmConfirmation.module.css";

const VmConfirmation = ({ name, cpu, ram, setStep, createVm }) => {
    return (
        <section className={modalStyles.vmNameInput}>
            <div className={modalStyles.wrapper}>
                <header className={modalStyles.header}>
                    <h3>Ready to complete</h3>
                    <p>
                        Review your settings selection before finishing the
                        wizard.
                    </p>
                </header>
                <div className={styles.card}>
                    <div className={styles.row}>
                        <span className={styles.label}>Name</span>
                        <span className={styles.value}>{name}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>CPU</span>
                        <span className={styles.value}>{cpu}</span>
                    </div>
                    <div className={styles.row}>
                        <span className={styles.label}>RAM</span>
                        <span className={styles.value}>{ram} GB</span>
                    </div>
                    <button
                        className={styles.editBtn}
                        onClick={() => setStep(0)}
                        title="Edit"
                    >
                        <img src={Change} alt="edit" />
                    </button>
                </div>
            </div>
            <div className={modalStyles.btnWrapper}>
                <button
                    className={modalStyles.btnBack}
                    onClick={() => setStep(1)}
                >
                    Back
                </button>
                <button
                    className={`${modalStyles.active} ${modalStyles.btn}`}
                    onClick={createVm}
                >
                    <p>Create</p>
                </button>
            </div>
        </section>
    );
};

export default VmConfirmation;
