import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import TasksTable from "../pages/TasksTable/TasksTable";

function Routers() {
    <Routes>
        <Route exact path="/"  component={Home} />
        <Route path="taskstable"  component={TasksTable} />
    </Routes>
}

export default Routers