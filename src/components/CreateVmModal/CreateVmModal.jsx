import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    closeModal,
    addVM,
} from "../../features/virtualMachines/virtualMachinesSlice";
import { nanoid } from "nanoid";
import WarningModal from "../WarningModal/WarningModal";
import AsideModal from "../AsideModal/AsideModal";
import VmNameInput from "../VmNameInput/VmNameInput";
import VmResourcesForm from "../VmResourcesForm/VmResourcesForm";
import VmConfirmation from "../VmConfirmation/VmConfirmation";
import ToggleableImg from "/images/toggleable.svg";
import styles from "./CreateVmModal.module.css";

const CreateVmModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.vm.isShowModal);

    const [isShowWarning, setIsShowWarning] = useState(false);
    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [cpu, setCpu] = useState(0);
    const [ram, setRam] = useState(0);
    const [isEnabledCpu, setIsEnabledCpu] = useState(false);

    useEffect(() => {
        const body = document.body;
        if (isOpen) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
        return () => {
            body.style.overflow = "auto";
        };
    }, [isOpen]);

    const onShowWarningModal = () => {
        if (name.length > 0 || cpu > 0 || ram > 0) {
            setIsShowWarning(true);
        } else {
            resetData();
        }
    };

    const onCloseModal = () => {
        resetData();
    };

    if (!isOpen) return null;

    const createVm = () => {
        const id = nanoid();
        const state = Math.random() < 0.5 ? "stopped" : "running";
        const hostNumber = Math.floor(Math.random() * 10) + 20;
        const host = `43C07-${hostNumber}`;
        const hours = Math.floor(Math.random() * 24);
        const minutes = Math.floor(Math.random() * 60);
        const uptime = `${hours}:${minutes.toString().padStart(2, "0")}:00:00`;
        const alertTypes = ["Important", "Critical", "Moderate", "All good"];
        const randomType =
            alertTypes[Math.floor(Math.random() * alertTypes.length)];
        const alerts =
            randomType === "All good"
                ? { type: randomType, count: 0 }
                : {
                      type: randomType,
                      count: Math.floor(Math.random() * 10) + 1,
                  };

        const newVm = {
            id,
            name,
            state,
            host,
            cpu: cpu,
            memory: ram,
            uptime,
            alerts,
        };
        dispatch(addVM(newVm));
        resetData();
    };

    const resetData = () => {
        setStep(0);
        setName("");
        setCpu(0);
        setRam(0);
        setIsEnabledCpu(false);
        setIsShowWarning(false);
        dispatch(closeModal());
    };

    const steps = [
        {
            step: 1,
            name: "Virtual Machine Name",
            component: (
                <VmNameInput name={name} setName={setName} setStep={setStep} />
            ),
        },
        {
            step: 2,
            name: "General Settings",
            component: (
                <VmResourcesForm
                    cpu={cpu}
                    setCpu={setCpu}
                    ram={ram}
                    setRam={setRam}
                    setStep={setStep}
                    isEnabledCpu={isEnabledCpu}
                    setIsEnabledCpu={setIsEnabledCpu}
                />
            ),
        },
        {
            step: 3,
            name: "Ready to complete",
            component: (
                <VmConfirmation
                    name={name}
                    cpu={cpu}
                    ram={ram}
                    setStep={setStep}
                    createVm={createVm}
                />
            ),
        },
    ];

    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            <section
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                {isShowWarning && (
                    <WarningModal
                        setIsShowWarning={setIsShowWarning}
                        onCloseModal={onCloseModal}
                    />
                )}
                <header className={styles.header}>
                    <p className={styles.title}>New virtual machine</p>
                    <button
                        className={styles.closeButton}
                        onClick={onShowWarningModal}
                    >
                        <img src={ToggleableImg} alt="close" />
                    </button>
                </header>
                <div className={styles.content}>
                    <AsideModal step={steps[step]} />
                    {steps[step].component}
                </div>
            </section>
        </div>,
        document.body
    );
};

export default CreateVmModal;
