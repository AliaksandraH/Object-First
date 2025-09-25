import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    incrementSum,
} from "../../features/virtualMachines/virtualMachinesSlice";
import Charts from "../../components/Charts/Charts";
import styles from "./Dashboard.module.css";

const { dashboardContainer } = styles;

const Dashboard = () => {
    const dispatch = useDispatch();

    const countt = useSelector((state) => state.vm.value);
    const sum = useSelector((state) => state.vm.sum);

    return (
        <main className={dashboardContainer}>
            <Charts />
            <div>
                <h2>Virtual machines</h2>
            </div>
            {/* <h1>
                {countt} - {sum}
            </h1>
            <div>
                <button onClick={() => dispatch(increment())}>
                    inc is count is {countt}
                </button>
                <button onClick={() => dispatch(incrementSum())}>
                    inc sum is {sum}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p>
                Click on the Vite and React logos to learn more
            </p> */}
        </main>
    );
};

export default Dashboard;
