import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import CandidateDashboard from './components/CandidateDashboard';
import AdminDashboard from './components/AdminDashboard';
import Home from './pages/Home';
import Email from './components/Email';

const App = () => {
  return (
    <div>
      <Header />
      {/* <div className="d-flex"> */}
        {/* <Navigation /> */}
        <div className="container flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<CandidateDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/email" element={<Email />} />

          </Routes>
        </div>
      {/* </div> */}
      <Footer />
    </div>
  );
};

export default App;
