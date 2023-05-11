import { Routes, Route, BrowserRouter, Outlet, Navigate } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import TasksTable from "../pages/TasksTable/TasksTable";
import { useContext } from "react";
import { Context } from "../components/Context";

function PrivateRouters({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to='/login' />
}

function NotPrivateRouters({ isLogged }) {
    return isLogged ? <Navigate to='/home' /> : <Outlet />
}

function Routers() {

    const { isLogged } = useContext(Context)

    return (
        <Routes>
            <Route element={<PrivateRouters isLogged={isLogged} />}>
                <Route path="/home" element={<Home />} />
                <Route path="/taskstable" element={<TasksTable />} />
            </Route>
            <Route element={<NotPrivateRouters isLogged={isLogged} />}>
                <Route path="/login" element={<Login />} />
            </Route>
        </Routes>
    )
}

export default Routers