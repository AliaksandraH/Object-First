import { useSelector } from "react-redux";
import ProgressBar from "../ProgressBar/ProgressBar";
import Arrows from "/images/arrows.svg";
import Copy from "/images/copy.svg";
import GoodImg from "/images/alerts/good.svg";
import CriticalImg from "/images/alerts/critical.svg";
import ImportantImg from "/images/alerts/important.svg";
import ModerateImg from "/images/alerts/moderate.svg";
import styles from "./ServerTable.module.css";

const columns = [
    { key: "id", label: "ID", sortable: false },
    { key: "state", label: "State", sortable: true },
    { key: "host", label: "Host server", sortable: false },
    { key: "cpu", label: "CPU", sortable: true },
    { key: "memory", label: "Memory", sortable: true },
    { key: "uptime", label: "Uptime", sortable: true },
    { key: "alerts", label: "Alerts", sortable: false },
];

const icons = {
    Good: GoodImg,
    Critical: CriticalImg,
    Important: ImportantImg,
    Moderate: ModerateImg,
};

const ServerTable = () => {
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    const gbToGib = (gb) => {
        return (gb / 1.073741824).toFixed(2);
    };

    const toUperCaseFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const renderAlerts = (alerts) => {
        return (
            <div className={styles.wrapper}>
                <img
                    src={icons[alerts.type]}
                    alt={alerts.type}
                    className={styles.alertsImg}
                />
                {alerts.count > 0 ? (
                    <>
                        <strong>{alerts.count}</strong>{" "}
                        <span>{alerts.type}</span>
                    </>
                ) : (
                    <span>All good</span>
                )}
            </div>
        );
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    {columns.map((col) => (
                        <th key={col.key}>
                            {col.sortable ? (
                                <div
                                    className={styles.wrapper}
                                    onClick={() => handleSort(col.key)}
                                >
                                    <span>{col.label}</span>
                                    <img src={Arrows} alt="arrows" />
                                </div>
                            ) : (
                                col.label
                            )}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {virtualMachines.map(
                    ({ id, state, host, cpu, memory, uptime, alerts }) => (
                        <tr key={id}>
                            <td>
                                <div className={styles.wrapper}>
                                    <img src={Copy} alt="copy" />
                                    <span className={styles.idText}>{id}</span>
                                </div>
                            </td>
                            <td>
                                <span
                                    className={`${styles.state} ${
                                        state === "running"
                                            ? styles.running
                                            : styles.stopped
                                    }`}
                                >
                                    {toUperCaseFirstLetter(state)}
                                </span>
                            </td>
                            <td>{host}</td>
                            <td>
                                <ProgressBar value={cpu} max={12} label="CPU" />
                            </td>
                            <td>
                                <ProgressBar
                                    value={gbToGib(memory)}
                                    max={gbToGib(50)}
                                    label="GiB"
                                />
                            </td>
                            <td>{uptime}</td>
                            <td>{renderAlerts(alerts)}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    );
};

export default ServerTable;
