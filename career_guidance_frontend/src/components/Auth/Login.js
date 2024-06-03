import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../services/api";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${API_BASE_URL}auth/jwt/create`,
                {
                    username,
                    password,
                }
            );
            localStorage.setItem("accessToken", response.data.access);
            localStorage.setItem("refreshToken", response.data.refresh);
            navigate("/dashboard");
            alert("Login Successful");
        } catch (error) {
            if (error.response && error.response.data) {
                // Extract error messages from the response
                const errorData = error.response.data;
                let errorMsg = "";

                // Handle different types of error responses
                if (
                    typeof errorData === "object" &&
                    !Array.isArray(errorData)
                ) {
                    for (const key in errorData) {
                        if (errorData.hasOwnProperty(key)) {
                            if (Array.isArray(errorData[key])) {
                                errorMsg += `${errorData[key].join(" ")} `;
                            } else {
                                errorMsg += `${errorData[key]} `;
                            }
                        }
                    }
                } else {
                    errorMsg =
                        errorData.detail || "An error occurred during login";
                }
                setError(
                    errorMsg.trim() || "An error occurred during registration"
                );
            } else {
                setError("An error occurred during registration");
            }
            // alert(`Error Authenticating ${error}`);
            console.log("Login Failed", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input
                type="text"
                value={username}
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
