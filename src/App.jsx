import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header/Header";
import Dashboard from "./pages/Dashboard/Dashboard";
import Events from "./pages/Events/Events";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/events" element={<Events />} />
            </Routes>
        </>
    );
}

export default App;
