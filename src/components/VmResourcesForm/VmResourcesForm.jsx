import { useState, useEffect } from "react";
import InputField from "../InputField/InputField";
import RamSlider from "../RamSlider/RamSlider";
import modalStyles from "../CreateVmModal/Modal.module.css";
import styles from "./VmResourcesForm.module.css";

const VmResourcesForm = ({
    cpu,
    setCpu,
    ram,
    setRam,
    setStep,
    isEnabledCpu,
    setIsEnabledCpu,
}) => {
    const [activBtn, setActivBtn] = useState(false);
    const [errorCpu, setErrorCpu] = useState(false);
    const [errorRam, setErrorRam] = useState(false);

    useEffect(() => {
        if (
            cpu > 0 &&
            cpu < 13 &&
            ram > 0 &&
            ram < 51 &&
            !errorCpu &&
            !errorRam
        ) {
            setActivBtn(true);
        } else {
            setActivBtn(false);
        }
    }, [cpu, ram, errorCpu, errorRam]);

    return (
        <section className={modalStyles.vmNameInput}>
            <div className={modalStyles.wrapper}>
                <header className={modalStyles.header}>
                    <h3>General Settings</h3>
                    <p>Configure the virtual machine hardware.</p>
                </header>
                <InputField
                    label="CPU"
                    type="number"
                    max={12}
                    value={cpu}
                    onChange={setCpu}
                    error={errorCpu}
                    setError={setErrorCpu}
                    hint="Enter number of processors up to 12"
                    errorText="Number of processors must be up to 12"
                />
                <div className={styles.checkbox}>
                    <input
                        type="checkbox"
                        id="checkbox"
                        checked={isEnabledCpu}
                        onChange={() => setIsEnabledCpu((prev) => !prev)}
                    />
                    <label htmlFor="checkbox">
                        Enable virtualized CPU performance counters
                    </label>
                </div>
                <InputField
                    label="RAM"
                    type="number"
                    max={50}
                    value={ram}
                    onChange={setRam}
                    error={errorRam}
                    setError={setErrorRam}
                    hint="Enter memory amount up to 50GB"
                    errorText="Enter memory amount up to 50GB"
                />
                <RamSlider value={ram} />
            </div>
            <div className={modalStyles.btnWrapper}>
                <button
                    className={modalStyles.btnBack}
                    onClick={() => setStep(0)}
                >
                    Back
                </button>
                <button
                    className={`${activBtn && modalStyles.active} ${
                        modalStyles.btn
                    }`}
                    onClick={() => {
                        if (activBtn) setStep(2);
                    }}
                >
                    <p>Next</p>
                </button>
            </div>
        </section>
    );
};

export default VmResourcesForm;
