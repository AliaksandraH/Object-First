import { useSelector } from "react-redux";
import ServerTable from "../../components/ServerTable/ServerTable";
import Plus from "/images/plus.svg";
import styles from "./ServerTableWrapper.module.css";

const ServerTableWrapper = () => {
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    return (
        <section className={styles.vmContainer}>
            <div className={styles.vmHeader}>
                <div className={styles.vmInfo}>
                    <h1>Virtual machines</h1>
                    <div className={styles.vmCount}>
                        {virtualMachines.length}
                    </div>
                </div>
                <button type="button" className={styles.vmBtn}>
                    <img src={Plus} alt="plus" />
                    <span>New</span>
                </button>
            </div>
            <ServerTable />
        </section>
    );
};

export default ServerTableWrapper;
