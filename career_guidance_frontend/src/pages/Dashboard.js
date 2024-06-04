// src/pages/Dashboard.js

import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function Dashboard() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setProfile(response.data);
            } catch (error) {
                console.error("Failed to fetch profile", error);
            }
        };

        fetchProfile();
    }, []);

    if (!profile) return <div>Loading...</div>;

    return (
        <>
            <div>
                <h2>Dashboard</h2>
                <p>Username: {profile.username}</p>
                <p>Email: {profile.email}</p>
                <p>Role: {profile.role}</p>
                <p>First Name: {profile.first_name}</p>
                <p>Last Name:{profile.last_name}</p>
                <p>
                    Career Interests:{" "}
                    {profile.career_interests
                        ? profile.career_interests
                        : "None"}
                </p>
            </div>

            <div>
                <Link to="/update-profile">Update Profile</Link>
            </div>
        </>
    );
}

export default Dashboard;
