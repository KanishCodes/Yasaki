/*
This file handles all API endpoints related to bookings.
Keeping routes in separate files makes the application easier to manage as it grows.
*/
const express = require('express');
const router = express.Router();

// --- CREATE A NEW BOOKING ---
// This route handles POST requests to '/api/bookings/create'.
// The frontend will send the booking form data to this endpoint.
router.post('/create', (req, res) => {
  // The form data sent from the frontend is available in req.body.
  const bookingData = req.body;

  console.log('Received new booking request:');
  console.log(bookingData);

  // --- DATABASE LOGIC (Placeholder) ---
  // In a real application, this is where you would:
  // 1. Validate the incoming data (e.g., check if the email is valid, date is in the future).
  // 2. Save the bookingData to a database (like MongoDB, PostgreSQL, or Firestore).
  // 3. Handle any potential errors during the database operation.

  // For now, we'll just log the data and send a success response.
  // This confirms to the frontend that the data was received.
  res.status(201).json({
    message: 'Booking received successfully!',
    booking: bookingData
  });
});

module.exports = router;