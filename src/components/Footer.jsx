import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center p-3 mt-5">
      <div className="container">
        <p>© 2024 EdTech. All rights reserved.</p>
        <div>
          <a href="/privacy" className="text-white text-decoration-none mx-2">Privacy</a>
          <a href="/terms" className="text-white text-decoration-none mx-2">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
