import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Email = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/send-email', formData);
      alert('Email sent successfully');
    } catch (error) {
      alert('Email sent successfully');
      navigate('/')
    }
  };

  return (
    <form onSubmit={handleSubmit}
    style={{ 
        width: "100%",        // Makes the image responsive in width
        height: "516px",      // Fixed height of 566px
        objectFit: "contain" ,
         // Ensures the image maintains its aspect ratio
      }}
      
      className='mt-5'>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input
        type="text"
        placeholder="Subject"
        value={formData.subject}
        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
      />
      <textarea 
        placeholder="Message"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
      />
      <button type="submit">Send Email</button>
    </form>
  );
};

export default Email;
