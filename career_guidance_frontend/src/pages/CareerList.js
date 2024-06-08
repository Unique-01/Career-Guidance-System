import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';  // Adjust the import path as necessary

const CareerList = () => {
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    api.get('/careers/')
      .then(response => {
        setCareers(response.data);
      })
      .catch(error => {
        console.error('Failed to fetch careers', error);
      });
  }, []);

  return (
    <div>
      <h2>Career List</h2>
      <ul>
        {careers.map(career => (
          <li key={career.id}>
            <Link to={`/careers/${career.id}`}>{career.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CareerList;
