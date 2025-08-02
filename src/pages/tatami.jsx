import React from 'react';
import '../styles/tatami.css';

const Tatami = () => {
  return (
    <div className="tatami-page">
      <div className="tatami-container">
        <div className="tatami-header">
          <div className="title">
            <h1>TATAMI ROOMS</h1>
          </div>
          <div className="subtitle">
            <h2>Reservations</h2>
          </div>
          <div className="description">
            <p>
              Nakato boasts the only private Tatami Rooms, or traditional Tea Rooms, in the Southeast...
              {/* (rest of your paragraph here) */}
            </p>
          </div>
        </div>

        <div className="room-gallery">
          {[
            { name: 'Standard Room', capacity: '2 people', src: '/images/tatami/standard tatami.jpeg' },
            { name: 'Deluxe Room', capacity: '4 people', src: '/images/tatami/tatami for 4.jpeg' },
            { name: 'Family Room', capacity: '6 people', src: '/images/tatami/tatami for 6.jpg' },
            { name: 'Single Room', capacity: '1 person', src: '/images/tatami/tatami for 1.jpeg' },
            { name: 'Private Suite', capacity: '2 people', src: '/images/tatami/tatami for 2.webp' },
            { name: 'Group Room', capacity: '10 people', src: '/images/tatami/tatami for 8.jpg' },
          ].map((room, index) => (
            <div className="room-card" key={index}>
              <img src={room.src} alt={room.name} />
              <h3>{room.name}</h3>
              <p>Capacity: {room.capacity}</p>
            </div>
          ))}
        </div>

        <h2 className="form-heading">Reserve Your Room</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Reservation submitted (to be implemented)'); }}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="room">Select Room:</label>
          <select id="room" name="room" required>
            <option value="standard">Standard Room</option>
            <option value="deluxe">Deluxe Room</option>
            <option value="family">Family Room</option>
            <option value="single">Single Room</option>
            <option value="suite">Private Suite</option>
            <option value="group">Group Room</option>
          </select>

          <label htmlFor="date">Reservation Date:</label>
          <input type="date" id="date" name="date" required />

          <label htmlFor="time">Reservation Time:</label>
          <select id="time" name="time" required>
            <option value="12:00">12:00 PM</option>
            <option value="14:00">2:00 PM</option>
            <option value="16:00">4:00 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="20:00">8:00 PM</option>
          </select>

          <div className="checkbox-container">
            <input type="checkbox" id="terms" name="terms" required />
            <label htmlFor="terms">I agree to the terms and conditions</label>
          </div>

          <button type="submit">Reserve</button>
        </form>
      </div>
    </div>
  );
};

export default Tatami;
