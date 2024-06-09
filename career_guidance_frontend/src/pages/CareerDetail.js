import React, { useEffect, useState } from "react";
import api from "../services/api";
import { useParams } from "react-router-dom";

const CareerDetail = () => {
    const {careerId} = useParams()
    const [career, setCareer] = useState({
        title: "",
        description: "",
        qualifications: "",
        job_outlook: "",
        pathways: "",
    });
    useEffect(() => {
        const fetchCareer = async () => {
            console.log('careerId',careerId)
            try {
                const response = await api.get(`/careers/${careerId}/`);
                setCareer(response.data);
            } catch (error) {
                console.error("Unable to fetch career data", error);
            }
        };
        fetchCareer();
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
        </>
    );
};

export default CareerDetail;
