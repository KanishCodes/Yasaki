import React from 'react';
import '../styles/hours-location.css';

const HoursLocation = () => {
  return (
    <div className="hours-location-page">
      

      <section className="location-section">
        <div className="location-info">
          <h1 className="fade-in">Hours & Location</h1>
          <p className="slide-up">
            Find us in the heart of Mumbai, India. Yasaki offers an authentic Japanese dining experience in a city bustling with culture and flavor. Come and visit us!
          </p>
          <div className="hours">
            <h2>Operating Hours</h2>
            <ul>
              <li>Monday - Friday: 11:00 AM - 10:00 PM</li>
              <li>Saturday: 12:00 PM - 11:00 PM</li>
              <li>Sunday: 12:00 PM - 9:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120579.38859181695!2d72.77593531824248!3d19.075989901014557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce602f1f5d13%3A0xbec49b41a7072d6a!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sin!4v1697196575910!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Yasaki Location"
          ></iframe>
        </div>
      </section>

      <footer>
        <div className="icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-snapchat"></i>
          <i className="fa-brands fa-pinterest"></i>
        </div>
        <p>Copyright © 2024 Yasaki. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HoursLocation;
