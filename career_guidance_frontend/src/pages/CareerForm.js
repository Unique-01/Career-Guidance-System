import React, { useState, useEffect } from "react";
import api from "../services/api"; // Adjust the import path as necessary
import { useParams } from "react-router-dom";

const CareerForm = () => {
    const {careerId} = useParams()
    const [careerData, setCareerData] = useState({
        title: "",
        description: "",
        qualifications: "",
        job_outlook: "",
        pathways: "",
    });
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        // Fetch user role
        const fetchUserRole = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setUserRole(response.data.role);
            } catch (error) {
                console.error("Failed to fetch user role", error);
            }
        };

        fetchUserRole();

        if (careerId) {
            // Fetch career data if editing an existing career
            api.get(`/careers/${careerId}/`)
                .then((response) => {
                    setCareerData(response.data);
                })
                .catch((error) => {
                    console.error("Failed to fetch career data", error);
                });
        }
    }, [careerId]);

    const handleChange = (e) => {
        setCareerData({
            ...careerData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const method = careerId ? "patch" : "post";
        const url = careerId ? `/careers/${careerId}/` : "/careers/";

        try {
            await api[method](url, careerData);
            alert("Career saved successfully");
        } catch (error) {
            console.error("Failed to save career", error);
        }
    };

    if (userRole !== "admin") {
        return <p>You do not have permission to add or edit careers.</p>;
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    type="text"
                    name="title"
                    value={careerData.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description</label>
                <textarea
                    name="description"
                    value={careerData.description}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Qualifications</label>
                <textarea
                    name="qualifications"
                    value={careerData.qualifications}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Job Outlook</label>
                <textarea
                    name="job_outlook"
                    value={careerData.job_outlook}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Pathways</label>
                <textarea
                    name="pathways"
                    value={careerData.pathways}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Save Career</button>
        </form>
    );
};

export default CareerForm;
