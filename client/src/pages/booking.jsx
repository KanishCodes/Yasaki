// File: client/src/pages/booking.jsx
// This version combines your original stylish UI with the new backend logic.

import React, { useEffect, useRef, useState } from "react";

// --- FIX FOR BUILD ERROR ---
// The lines below were causing an error because the 'locomotive-scroll' package
// is not installed. To fix this, open your terminal in the 'client' folder and run:
// npm install locomotive-scroll
// After installing, you can uncomment the next two lines.
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";

import "../styles/booking.css"; // Your original styles

// This is the URL of your running backend server.
const API_URL = 'http://localhost:5000/api/bookings';

// Your original table data
const tableData = [
  { n: 1, s: 2, b: false }, { n: 2, s: 4, b: true },
  { n: 3, s: 2, b: false }, { n: 4, s: 6, b: true },
  { n: 5, s: 2, b: false }, { n: 6, s: 4, b: true },
  { n: 7, s: 6, b: false }, { n: 8, s: 8, b: false },
  { n: 9, s: 4, b: false }, { n: 10, s: 2, b: true },
  { n: 11, s: 3, b: false }, { n: 12, s: 8, b: false }
];

const Booking = () => {
  // --- DIAGNOSTIC LOG ---
  // This log should appear in your BROWSER console as soon as the page loads.
  console.log("Booking component has rendered. If you see this, your console is working.");

  // --- STATE FROM YOUR ORIGINAL UI ---
  const scrollRef = useRef(null);
  const [hoverInfo, setHoverInfo] = useState(
    "Hover over a table to see its status and seating capacity."
  );

  // --- STATE FOR FORM HANDLING (from my version) ---
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2', // Added guests field
    table: '' // Changed from 'specialRequests' to 'table' to match your form
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // --- EFFECT FOR LOCOMOTIVE SCROLL (from your original) ---
  // This is also commented out. Once you install the package and uncomment
  // the imports above, you can uncomment this useEffect block as well.
  /*
  useEffect(() => {
    // Ensure the ref is connected before initializing
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true
      });
      return () => scroll.destroy();
    }
  }, []);
  */

  // --- EVENT HANDLERS (from my version) ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // This is the new, combined handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    setIsSuccess(false);

    // We need to add the number of guests to the data sent to the server
    const dataToSend = {
        ...formData,
        guests: tableData.find(t => t.n === parseInt(formData.table))?.s || formData.guests
    };

    console.log('Sending booking data:', dataToSend);

    try {
      const response = await fetch(`${API_URL}/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dataToSend),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || 'Something went wrong');

      console.log('Server response:', result);
      setIsSuccess(true);
      setMessage(result.message);
      setFormData({ name: '', email: '', date: '', time: '', guests: '2', table: '' }); // Reset form

    } catch (error) {
      console.error('Error submitting booking:', error);
      setIsSuccess(false);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // --- JSX (Your original structure with updated form) ---
  // I have removed the data-scroll attributes for now. You can add them back
  // after you've re-enabled the locomotive-scroll feature.
  return (
    <div ref={scrollRef}> {/* The ref is kept, but data-scroll-container is removed for now */}
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Live Table Booking</h1>
          <p>Select Your Table & Enjoy!</p>
        </div>
      </section>

      <section className="table-map-section">
        <h2>Select Your Table</h2>
        <div className="table-map">
          {tableData.map((t) => (
            <div
              key={t.n}
              className={`table ${t.b ? "booked" : "available"}`}
              onMouseOver={() => setHoverInfo(`Table ${t.n} (${t.s} seats) is ${t.b ? "Booked" : "Available"}.`)}
              onMouseOut={() => setHoverInfo("Hover over a table to see its status and seating capacity.")}
            >
              Table {t.n}
            </div>
          ))}
          <p className="table-info">{hoverInfo}</p>
        </div>
      </section>

      <section className="booking-form-section">
        <h2>Book Your Table</h2>
        {/* Updated form to connect to React state and the backend */}
        <form id="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required value={formData.name} onChange={handleInputChange} />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required value={formData.email} onChange={handleInputChange} />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required value={formData.date} onChange={handleInputChange} />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required value={formData.time} onChange={handleInputChange} />
          
          <label htmlFor="guests">Number of Guests:</label>
          <input type="number" id="guests" name="guests" required value={formData.guests} onChange={handleInputChange} min="1" />

          <label htmlFor="table">Table Number:</label>
          <select id="table" name="table" required value={formData.table} onChange={handleInputChange}>
            <option value="" disabled>Select an available table</option>
            {tableData.filter(t => !t.b).map((t) => (
              <option key={t.n} value={t.n}>
                Table {t.n} ({t.s} seats)
              </option>
            ))}
          </select>

          <button type="submit" className="btn-primary" disabled={isLoading}>
            {isLoading ? 'Booking...' : 'Book Now'}
          </button>
        </form>
        {/* --- SERVER MESSAGE DISPLAY --- */}
        {message && (
          <div className={`server-message ${isSuccess ? 'success' : 'error'}`}>
            {message}
          </div>
        )}
      </section>

      <footer>
        <p>© 2024 Yasaki. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Booking;
