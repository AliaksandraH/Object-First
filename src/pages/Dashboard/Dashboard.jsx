import Charts from "../../components/Charts/Charts";
import ServerTableWrapper from "../../components/ServerTableWrapper/ServerTableWrapper";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <main className={styles.dashboardContainer}>
            <Charts />
            <ServerTableWrapper />
        </main>
    );
};

export default Dashboard;
