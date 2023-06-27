import "./projectlist.css"
import React from 'react';

const ProjectList = () => {
  const projects = [
    {
      title: '1001',
      name: 'NetSis',
      duration: '3 Sprints',
      teamMember: 'Team Kosova',
      customer: 'Akbank',
      timeFinish: '10.05.2023',
      progress: 'Completed',
    },
    {
      title: '1002',
      name: 'Amoung',
      duration: '5 Sprints',
      teamMember: 'Team Baus',
      customer: 'AmoungUs',
      timeFinish: '10.08.2023',
      progress: 'Continued',
    },
    {
      title: '1003',
      name: 'HallDay',
      duration: '10 Sprints',
      teamMember: 'Team Test',
      customer: 'HallUp',
      timeFinish: '10.11.2023',
      progress: 'Continued',
    },
  ];

  return (
    <div className="project-list-container">
      <p className="hh">Project List</p>
      <table className="project-table">
        <thead>
          <tr>
            <th>Project Code</th>
            <th>Project Name </th>
            <th>Time</th>
            <th>Team</th>
            <th>Customer</th>
            <th>Time To Finish</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.name}</td>
              <td>{project.duration}</td>
              <td>{project.teamMember}</td>
              <td>{project.customer}</td>
              <td>{project.timeFinish}</td>
              <td>{project.progress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectList;

