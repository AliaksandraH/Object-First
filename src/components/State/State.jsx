import { useMemo } from "react";
import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Legend, Label } from "recharts";
import CustomChartLabel from "../CustomChartLabel/CustomChartLabel";
import styles from "./State.module.css";

const { wrapper, title, legendValue, legendName } = styles;

function State() {
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    const data = useMemo(() => {
        const runningCount = virtualMachines.filter(
            (vm) => vm.state === "running"
        ).length;
        const stoppedCount = virtualMachines.filter(
            (vm) => vm.state === "stopped"
        ).length;
        return [
            { name: "Stopped", value: stoppedCount },
            { name: "Running", value: runningCount },
        ];
    }, [virtualMachines]);

    return (
        <section className={wrapper}>
            <p className={title}>State</p>
            <PieChart width={320} height={240}>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={60}
                    outerRadius={85}
                >
                    {data.map((entry) => (
                        <Cell
                            key={entry.name}
                            fill={
                                entry.value ===
                                Math.min(...data.map((d) => d.value))
                                    ? "#DC3545"
                                    : "#459E74"
                            }
                        />
                    ))}
                    <Label
                        content={<CustomChartLabel data={data} />}
                        align="center"
                    />
                </Pie>
                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    iconType="circle"
                    iconSize={10}
                    formatter={(value, entry) => (
                        <>
                            <span className={legendValue}>
                                {entry.payload.value}
                            </span>
                            <span className={legendName}>{value}</span>
                        </>
                    )}
                />
            </PieChart>
        </section>
    );
}

export default State;
