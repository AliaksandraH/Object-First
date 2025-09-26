import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../../features/virtualMachines/virtualMachinesSlice";
import AsideModal from "../AsideModal/AsideModal";
import VmNameInput from "../VmNameInput/VmNameInput";
import VmResourcesForm from "../VmResourcesForm/VmResourcesForm";
import VmConfirmation from "../VmConfirmation/VmConfirmation";
import ToggleableImg from "/images/toggleable.svg";
import styles from "./CreateVmModal.module.css";

const CreateVmModal = () => {
    const dispatch = useDispatch();
    const isOpen = useSelector((state) => state.vm.isShowModal);

    const [step, setStep] = useState(0);
    const [name, setName] = useState("");
    const [cpu, setCpu] = useState(0);
    const [ram, setRam] = useState(0);
    const [isEnabledCpu, setIsEnabledCpu] = useState(false);

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
        { step: 3, name: "Ready to complete", component: <VmConfirmation /> },
    ];

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

    const onClose = () => {
        dispatch(closeModal());
    };

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className={styles.overlay}>
            <section
                className={styles.modal}
                onClick={(e) => e.stopPropagation()}
            >
                <header className={styles.header}>
                    <p className={styles.title}>New virtual machine</p>
                    <button className={styles.closeButton} onClick={onClose}>
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
