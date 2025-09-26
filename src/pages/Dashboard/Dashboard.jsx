import Charts from "../../components/Charts/Charts";
import ServerTableWrapper from "../../components/ServerTableWrapper/ServerTableWrapper";
import CreateVmModal from "../../components/CreateVmModal/CreateVmModal";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <main className={styles.dashboardContainer}>
            <Charts />
            <ServerTableWrapper />
            <CreateVmModal />
        </main>
    );
};

export default Dashboard;
