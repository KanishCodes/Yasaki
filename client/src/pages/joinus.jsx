import React, { useState } from 'react';
import '../styles/joinus.css';

const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: '',
    resume: null,
    message: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, position } = formData;
    alert(`Thank you, ${name}! Your application for the ${position} position has been received. We'll get in touch via ${email}.`);
    setFormData({
      name: '',
      email: '',
      position: '',
      resume: null,
      message: '',
    });
  };

  return (
    <div className="join-page">
      <div className="team-container">
        <header className="team-header">
          <h1>Join Our Team at Yasaki</h1>
          <p>Be a part of our growing family. Together, let's create memorable experiences for our guests.</p>
        </header>

        <section className="team-info">
          <h2>Why Work With Us?</h2>
          <p>
            At Yasaki, we value passion, dedication, and a love for Japanese cuisine.
            Whether you're a seasoned professional or a budding talent, we offer a nurturing environment where you can thrive and grow.
          </p>
          <ul>
            <li>Competitive Salaries</li>
            <li>Comprehensive Training</li>
            <li>Opportunities for Career Growth</li>
            <li>Collaborative and Supportive Work Culture</li>
          </ul>
        </section>

        <section className="apply-now">
          <h2>Apply Now</h2>
          <form id="application-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name:</label>
              <input type="text" id="name" name="name" required placeholder="Enter your full name" value={formData.name} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address:</label>
              <input type="email" id="email" name="email" required placeholder="Enter your email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="position">Position Applied For:</label>
              <select id="position" name="position" required value={formData.position} onChange={handleChange}>
                <option value="" disabled>Select a position</option>
                <option value="Chef">Chef</option>
                <option value="Server">Server</option>
                <option value="Host">Host</option>
                <option value="Manager">Manager</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="resume">Upload Resume:</label>
              <input type="file" id="resume" name="resume" accept=".pdf,.doc,.docx" onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Why You Want to Join:</label>
              <textarea id="message" name="message" rows="4" required placeholder="Share your passion for working with us" value={formData.message} onChange={handleChange}></textarea>
            </div>
            <button type="submit" className="submit-button">Apply Now</button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Join;
