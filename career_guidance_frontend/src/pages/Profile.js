import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        career_interests: "",
    });
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.put("/auth/users/me/", userData);
            alert("Profile Updated Successfully");
            navigate("/dashboard");
        } catch (error) {
            console.log("Error updating profile");
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="first_name"
                    onChange={handleChange}
                    value={userData.first_name}
                    placeholder="First Name"
                />
                <input
                    type="text"
                    name="last_name"
                    onChange={handleChange}
                    value={userData.last_name}
                    placeholder="Last Name"
                />
                <textarea
                    name="career_interests"
                    onChange={handleChange}
                    value={userData.career_interests}
                    placeholder="Career Interest"></textarea>
                <button type="submit">Update Profile</button>
            </form>
        </>
    );
};

export default Profile;
