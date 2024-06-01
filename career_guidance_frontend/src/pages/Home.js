import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <h1>Welcome to Career Guidance App</h1>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </>
    );
};

export default Home;
