import { configureStore } from "@reduxjs/toolkit";
import virtualMachinesReducer from "../features/virtualMachines/virtualMachinesSlice";

export const store = configureStore({
    reducer: {
        vm: virtualMachinesReducer,
    },
});
