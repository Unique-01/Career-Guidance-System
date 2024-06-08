import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/careers">Career Lists</Link>
                    </li>
                    <li>
                        <Link to="careers/new">Add Career</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;
