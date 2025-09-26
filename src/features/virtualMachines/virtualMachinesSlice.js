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
                uptime: "9:12:41:09",
                alerts: { type: "Critical", count: 3 },
            },
            {
                id: "3ad463463683634658e",
                name: "Server 3",
                state: "running",
                host: "43C07-27",
                cpu: "6.74",
                memory: "45.38",
                uptime: "9:10:41:09",
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
        isShowModal: false,
        sortDirections: {
            state: "asc",
            cpu: "asc",
            memory: "asc",
            uptime: "asc",
        },
    },
    reducers: {
        openModal: (state) => {
            state.isShowModal = true;
        },
        closeModal: (state) => {
            state.isShowModal = false;
        },
        addVM: (state, action) => {
            state.virtualMachines = [...state.virtualMachines, action.payload];
        },
        sotrByState: (state) => {
            const dir = state.sortDirections.state === "asc" ? "desc" : "asc";
            state.sortDirections.state = dir;
            state.virtualMachines.sort((a, b) => {
                if (dir === "desc") {
                    return b.state.localeCompare(a.state);
                }
                return a.state.localeCompare(b.state);
            });
        },
        sortByNumericField: (state, action) => {
            const field = action.payload;
            const dir = state.sortDirections[field] === "asc" ? "desc" : "asc";
            state.sortDirections[field] = dir;
            state.virtualMachines.sort((a, b) => {
                const valA = parseFloat(a[field]);
                const valB = parseFloat(b[field]);
                return dir === "desc" ? valB - valA : valA - valB;
            });
        },
        sotrByUptime: (state) => {
            const dir = state.sortDirections.uptime === "asc" ? "desc" : "asc";
            state.sortDirections.uptime = dir;
            const toSeconds = (str) => {
                const [d, h, m, s] = str.split(":").map(Number);
                return ((d * 24 + h) * 60 + m) * 60 + s;
            };
            state.virtualMachines.sort((a, b) => {
                const upA = toSeconds(a.uptime);
                const upB = toSeconds(b.uptime);
                if (dir === "desc") {
                    return upB - upA;
                }
                return upA - upB;
            });
        },
    },
});

export const {
    openModal,
    closeModal,
    addVM,
    sotrByState,
    sortByNumericField,
    sotrByUptime,
} = virtualMachinesSlice.actions;

export default virtualMachinesSlice.reducer;
