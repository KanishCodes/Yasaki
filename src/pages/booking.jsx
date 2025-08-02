import React, { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "../styles/booking.css";

const tableData = [
  { n: 1, s: 2, b: false },
  { n: 2, s: 4, b: true },
  { n: 3, s: 2, b: false },
  { n: 4, s: 6, b: true },
  { n: 5, s: 2, b: false },
  { n: 6, s: 4, b: true },
  { n: 7, s: 6, b: false },
  { n: 8, s: 8, b: false },
  { n: 9, s: 4, b: false },
  { n: 10, s: 2, b: true },
  { n: 11, s: 3, b: false },
  { n: 12, s: 8, b: false }
];

const Booking = () => {
  const scrollRef = useRef(null);
  const [hoverInfo, setHoverInfo] = useState(
    "Hover over a table to see its status and seating capacity."
  );

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true
    });

    return () => scroll.destroy();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for booking a table at Yasaki!");
    e.target.reset();
  };

  return (
    <div data-scroll-container ref={scrollRef}>
      

      <section className="hero-section">
        <div className="hero-overlay">
          <h1 data-scroll data-scroll-speed="2">Live Table Booking</h1>
          <p data-scroll data-scroll-speed="1">Select Your Table & Enjoy!</p>
        </div>
      </section>

      <section className="table-map-section">
        <h2>Select Your Table</h2>
        <div className="table-map">
          {tableData.map((t) => (
            <div
              key={t.n}
              className={`table ${t.b ? "booked" : "available"}`}
              data-table={t.n}
              data-seats={t.s}
              onMouseOver={() =>
                setHoverInfo(`Table ${t.n} (${t.s} seats) is ${t.b ? "Booked" : "Available"}.`)
              }
              onMouseOut={() =>
                setHoverInfo("Hover over a table to see its status and seating capacity.")
              }
            >
              Table {t.n}
            </div>
          ))}
          <p className="table-info">{hoverInfo}</p>
        </div>
      </section>

      <section className="booking-form-section">
        <h2>Book Your Table</h2>
        <form id="booking-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Time:</label>
          <input type="time" id="time" name="time" required />

          <label htmlFor="table">Table Number:</label>
          <select id="table" name="table" required>
            <option value="" disabled selected>Select a table</option>
            {[1, 3, 5, 7, 8, 9, 11].map((n) => {
              const seatMap = { 1: 2, 3: 2, 5: 2, 7: 6, 8: 8, 9: 4, 11: 3 };
              return (
                <option key={n} value={n}>
                  Table {n} ({seatMap[n]} seats)
                </option>
              );
            })}
          </select>

          <button type="submit" className="btn-primary">Book Now</button>
        </form>
      </section>

      <footer>
        <p>© 2024 Yasaki. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Booking;
