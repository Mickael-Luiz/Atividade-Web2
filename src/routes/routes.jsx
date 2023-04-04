import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import TasksTable from "../pages/TasksTable/TasksTable";

function Routers() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/taskstable" element={<TasksTable />} />
        </Routes>
    )
}

export default Routers