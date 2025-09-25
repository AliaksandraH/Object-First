import { createSlice } from "@reduxjs/toolkit";

const virtualMachinesSlice = createSlice({
    name: "vm",
    initialState: {
        virtualMachines: [
            {
                id: 1,
                name: "vm1",
                state: "running",
                hostServer: "server1",
                CPU: "2.72",
                memory: "16",
                uptime: "5:20:41:09",
                alerts: 0,
            },
            {
                id: 2,
                name: "vm2",
                state: "running",
                hostServer: "server1",
                CPU: "8 CPU",
                memory: "16 GiB",
                uptime: "4:12:43:09",
                alerts: 0,
            },
            {
                id: 3,
                name: "vm2",
                state: "running",
                hostServer: "server1",
                CPU: "3 CPU",
                memory: "16 GiB",
                uptime: "4:12:45:09",
                alerts: 0,
            },
            {
                id: 4,
                name: "vm2",
                state: "stopped",
                hostServer: "server1",
                CPU: "5 CPU",
                memory: "6 GiB",
                uptime: "5:12:45:09",
                alerts: 0,
            },
        ],
        value: 0,
        sum: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        incrementSum: (state) => {
            state.sum += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount, incrementSum } =
    virtualMachinesSlice.actions;

export default virtualMachinesSlice.reducer;
