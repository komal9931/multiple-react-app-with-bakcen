import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router for navigation

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
      </div>
      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <Link to="/admin" className="sidebar-link">
            Admin
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/product-list" className="sidebar-link">
            Product List
          </Link>
        </li>
        <li className="sidebar-item">
          <Link to="/settings" className="sidebar-link">
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
