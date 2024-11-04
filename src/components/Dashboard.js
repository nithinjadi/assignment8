// src/components/Dashboard.js
import React from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const students = useSelector((state) => state.students.list);

  return (
    <div>
      <h1 style={{ textAlign: 'center', color:'white', fontSize:40}}>Welcome to the Student Management Portal</h1>
      <p style={{ color: 'white', textAlign: 'center', fontSize:20, padding:20 }}>
      "Empowering educators, students, and administrators to stay organized, informed, and connected. Our Student Management Portal is a comprehensive platform built to simplify and enhance the way academic information is managed. Whether you're tracking attendance, managing grades, viewing schedules, or communicating with teachers and students, everything you need is just a click away.Designed with user-friendliness and efficiency in mind, this portal centralizes all essential academic tools in one place, ensuring seamless access to vital information and enhancing collaboration across the school community.

From personalized dashboards to advanced reporting tools, we’re here to support your success every step of the way. Explore features that help streamline daily tasks, improve data accuracy, and save time—so you can focus on what truly matters: education and growth.
      </p>
      
      <div className="summary" style={{ textAlign: 'center' }}>
        <h2>Student Summary</h2>
        <p>Total Students: {students.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;
