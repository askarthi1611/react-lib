import React from 'react';
// import './Sidebar.css'; // Import CSS file for styling
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Sidebar</h2>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/reg">Register</Link></li>
                <li><Link to="/userlist">User List</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;
