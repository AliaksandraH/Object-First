import { createSlice } from "@reduxjs/toolkit";

const virtualMachinesSlice = createSlice({
    name: "vm",
    initialState: {
        virtualMachines: [
            {
                id: "3ad8358e5645",
                name: "Server 1",
                state: "running",
                host: "43C07-27",
                cpu: "7.72",
                memory: "16.68",
                uptime: "4:12:41:09",
                alerts: { type: "Important", count: 3 },
            },
            {
                id: "3ad8353483636456e",
                name: "Server 2",
                state: "stopped",
                host: "43C07-27",
                cpu: "2.24",
                memory: "21.68",
                uptime: "4:12:41:09",
                alerts: { type: "Critical", count: 3 },
            },
            {
                id: "3ad463463683634658e",
                name: "Server 3",
                state: "running",
                host: "43C07-27",
                cpu: "6.74",
                memory: "45.38",
                uptime: "4:12:41:09",
                alerts: { type: "Moderate", count: 5 },
            },
            {
                id: "3ad34634634523hggdf358e",
                name: "Server 4",
                state: "running",
                host: "43C07-26",
                cpu: "5.72",
                memory: "5.68",
                uptime: "4:12:41:09",
                alerts: { type: "Good", count: 0 },
            },
            {
                id: "3ad835dfghdgdt7548e",
                name: "Server 5",
                state: "stopped",
                host: "43C07-23",
                cpu: "2.24",
                memory: "21.68",
                uptime: "4:12:41:09",
                alerts: { type: "Critical", count: 1 },
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
