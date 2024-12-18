import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <Link to="/" className="h3 text-white text-decoration-none">EdTech</Link>
        <nav>
          <ul className="nav">
          <li className="nav-item">
              <Link to="/" className="nav-link text-white">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/register" className="nav-link text-white">Register</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-white">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/dashboard" className="nav-link text-white">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/admin" className="nav-link text-white">Admin</Link>
            </li>
            <li className="nav-item">
              <Link to="/email" className="nav-link text-white">Email Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
