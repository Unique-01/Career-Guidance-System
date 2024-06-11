import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link, useParams } from "react-router-dom";

const CareerDetail = () => {
    const { careerId } = useParams();
    const [career, setCareer] = useState({
        title: "",
        description: "",
        qualifications: "",
        job_outlook: "",
        pathways: "",
    });
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const fetchCareer = async () => {
            try {
                const response = await api.get(`/careers/${careerId}/`);
                setCareer(response.data);
            } catch (error) {
                console.error("Unable to fetch career data", error);
            }
        };
        fetchCareer();
        const fetchUserRole = async () => {
            try {
                const response = await api.get("/auth/users/me/");
                setUserRole(response.data.role);
            } catch (error) {
                console.error("Unable to fetch user role", error);
            }
        };
        fetchUserRole();
    }, [careerId]);

    return (
        <>
            <div>
                <h4>{career.title}</h4>
                <p>{career.description}</p>
                <p>{career.qualifications}</p>
                <p>{career.job_outlook}</p>
                <p>{career.pathways}</p>
            </div>

            {userRole === "admin" ? (
                <Link to={`/careers/edit/${careerId}`}>Update Career</Link>
            ) : (
                ""
            )}
        </>
    );
};

export default CareerDetail;
