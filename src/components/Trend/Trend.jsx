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
        <section className="h-full flex flex-col justify-center flex-1 bg-white rounded-2xl">
            <div className="flex justify-between items-center pt-6 px-6">
                <p className="font-bold">Trend</p>
                <div className="flex items-center justify-center gap-1 text-sm cursor-pointer">
                    <p>Last 14 days</p>
                    <img src={ChevronDown} alt="chevron down" />
                </div>
            </div>
            <div className="flex justify-center">
                <AreaChart width={700} height={240} data={data}>
                    <defs>
                        <linearGradient
                            id="colorUv"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="#5F3196"
                                stopOpacity={0.3}
                            />
                            <stop
                                offset="95%"
                                stopColor="#5F3196"
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
                        stroke="#5F3196"
                        fillOpacity={1}
                        fill="url(#colorUv)"
                    />
                </AreaChart>
            </div>
        </section>
    );
};

export default Trend;
