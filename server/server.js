const express = require('express');
const cors = require('cors');

// --- INITIALIZE EXPRESS APP ---
const app = express();
const PORT = process.env.PORT || 5000; // The server will run on port 5000


// --- MIDDLEWARE ---
// Middleware are functions that execute during the request-response cycle.
// Enable CORS for all routes. This is crucial for allowing your React frontend
// (which runs on a different port, e.g., 3000) to send requests to this server.
app.use(cors());

// This middleware parses incoming JSON requests and puts the parsed data in req.body.
// It's necessary for handling data sent from your frontend forms (like the booking form).
app.use(express.json());


// --- API ROUTES ---
// We'll organize our routes into separate files to keep server.js clean.
// Here, we are importing the routes related to bookings.
const bookingRoutes = require('./routes/bookingRoutes');

// We tell the app to use the booking routes for any request that starts with '/api/bookings'.
// For example, a POST request to '/api/bookings/create' will be handled by our booking router.
app.use('/api/bookings', bookingRoutes);


// --- ROOT ENDPOINT ---
// This is a simple test route to make sure the server is running correctly.
// You can access this by navigating to http://localhost:5000 in your browser.
app.get('/', (req, res) => {
  res.send('Welcome to the Yasaki Restaurant Backend API!');
});


// --- START THE SERVER ---
// This command starts the server and makes it listen for incoming requests on the specified port.
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});