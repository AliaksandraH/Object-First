import State from "../State/State";
import Trend from "../Trend/Trend";

import styles from "./Charts.module.css";
const { chartsContainer } = styles;

const Charts = () => {
    return (
        <div className={chartsContainer}>
            <State />
            <Trend />
        </div>
    );
};

export default Charts;
