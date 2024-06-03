// src/pages/Dashboard.js

import React, { useEffect, useState } from 'react';
import api from '../services/api';

function Dashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/auth/users/me/');
        setProfile(response.data);
        console.log(response)
      } catch (error) {
        console.error('Failed to fetch profile', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) return <div>Loading...</div>;

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Username: {profile.username}</p>
      <p>Email: {profile.email}</p>
    <p>Role: {profile.role}</p>
        <p>Career Interests: {profile.career_interests ? profile.career_interests.map((interest) => interest.title).join(', '):'None'}</p>
      
      
    </div>
  );
}

export default Dashboard;
