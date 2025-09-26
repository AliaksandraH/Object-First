import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const Dashboard = React.lazy(() => import("./pages/Dashboard/Dashboard"));
const Events = React.lazy(() => import("./pages/Events/Events"));
const Help = React.lazy(() => import("./pages/Help/Help"));

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
                <Route path="/help" element={<Help />} />
            </Routes>
        </>
    );
}

export default App;
