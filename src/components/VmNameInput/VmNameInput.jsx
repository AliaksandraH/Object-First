import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import InputField from "../InputField/InputField";
import styles from "../CreateVmModal/Modal.module.css";

const VmNameInput = ({ name, setName, setStep }) => {
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    const [activBtn, setActivBtn] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (
            name.length > 0 &&
            name.trim().length > 0 &&
            !error &&
            isUnique(name)
        ) {
            setActivBtn(true);
        } else {
            setActivBtn(false);
        }
    }, [name, error]);

    const isUnique = (name) => !virtualMachines.some((vm) => vm.name === name);

    return (
        <section className={styles.vmNameInput}>
            <div className={styles.wrapper}>
                <header className={styles.header}>
                    <h3>Select a name</h3>
                    <p>
                        A virtual machine requires storage so that you can
                        install an operating system.
                    </p>
                </header>
                <InputField
                    label="Name"
                    type="text"
                    value={name}
                    onChange={setName}
                    error={error}
                    setError={setError}
                    hint="Enter unique name up to 80 characters"
                />
            </div>
            <div className={styles.btnWrapper}>
                <button
                    className={`${activBtn && styles.active} ${styles.btn}`}
                    onClick={() => {
                        if (activBtn) setStep(1);
                    }}
                >
                    <p>Next</p>
                </button>
            </div>
        </section>
    );
};

export default VmNameInput;
