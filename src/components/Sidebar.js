import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/reports">Reports</Link></li>
      
      </ul>
    </aside>
  );
};

export default Sidebar;
