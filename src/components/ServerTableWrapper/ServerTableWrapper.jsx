import { useSelector, useDispatch } from "react-redux";
import { openModal } from "../../features/virtualMachines/virtualMachinesSlice";
import ServerTable from "../../components/ServerTable/ServerTable";
import Plus from "/images/plus.svg";
import styles from "./ServerTableWrapper.module.css";

const ServerTableWrapper = () => {
    const dispatch = useDispatch();
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    return (
        <section className="w-full flex flex-col gap-6">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="font-bold text-xl">Virtual machines</h1>
                    <div className={styles.vmCount}>
                        {virtualMachines.length}
                    </div>
                </div>
                <button
                    type="button"
                    className={styles.vmBtn}
                    onClick={() => dispatch(openModal())}
                >
                    <img src={Plus} alt="plus" />
                    <span>New</span>
                </button>
            </div>
            <ServerTable />
        </section>
    );
};

export default ServerTableWrapper;
