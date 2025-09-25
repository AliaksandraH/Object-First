import Charts from "../../components/Charts/Charts";
import ServerTable from "../../components/ServerTable/ServerTable";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
    return (
        <main className={styles.dashboardContainer}>
            <Charts />
            <div>
                <h2>Virtual machines</h2>
                <ServerTable />
            </div>
        </main>
    );
};

export default Dashboard;
