import { useMemo } from "react";
import { useSelector } from "react-redux";
import {
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    AreaChart,
    Area,
} from "recharts";
import ChevronDown from "/images/chevron_down.svg";
import styles from "./Trend.module.css";

const { wrapper, header, title, period } = styles;

const Trend = () => {
    const virtualMachines = useSelector((state) => state.vm.virtualMachines);

    const data = useMemo(
        () =>
            [...virtualMachines]
                .sort((a, b) => parseFloat(a.cpu) - parseFloat(b.cpu))
                .map((vm) => ({
                    name: parseFloat(vm.cpu),
                    uv: parseFloat(vm.memory),
                })),
        [virtualMachines]
    );
    return (
        <section className={wrapper}>
            <div className={header}>
                <p className={title}>Trend</p>
                <div className={period}>
                    <p>Last 14 days</p>
                    <img src={ChevronDown} alt="chevron down" />
                </div>
            </div>
            <AreaChart
                width={744}
                height={240}
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
            >
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="5%"
                            stopColor="#8884d8"
                            stopOpacity={0.8}
                        />
                        <stop
                            offset="95%"
                            stopColor="#8884d8"
                            stopOpacity={0}
                        />
                    </linearGradient>
                </defs>
                <XAxis
                    dataKey="name"
                    tickFormatter={(value) => `${value}СPU`}
                />
                <YAxis tickFormatter={(value) => `${value}GB`} />
                <CartesianGrid strokeDasharray="1 0" />
                <Tooltip />
                <Area
                    type="monotone"
                    dataKey="uv"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorUv)"
                />
            </AreaChart>
        </section>
    );
};

export default Trend;
