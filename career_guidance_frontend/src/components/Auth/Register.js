import axios from "axios";
import React, { useState } from "react";
import { API_BASE_URL } from "../../services/api";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [re_password, setRePassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${API_BASE_URL}auth/users/`, {
                username,
                email,
                password,
                re_password,
            });
            navigate("/login");
            alert("Registration successful");
        } catch (error) {
            if (error.response && error.response.data) {
                // Extract error messages from the response
                const errorData = error.response.data;
                let errorMsg = "";

                // Concatenate all error messages into a single string
                for (const key in errorData) {
                    if (errorData.hasOwnProperty(key)) {
                        errorMsg += `${errorData[key].join(" ")} `;
                    }
                }
                setError(
                    errorMsg.trim() || "An error occurred during registration"
                );
            } else {
                setError("An error occurred during registration");
            }
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <input
                    type="text"
                    value={username}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    value={email}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={re_password}
                    placeholder="Password"
                    onChange={(e) => setRePassword(e.target.value)}
                    required
                />
                <button type="submit">Register</button>
            </form>
        </>
    );
};

export default Register;
