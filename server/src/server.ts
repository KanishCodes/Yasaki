// File: server/src/server.ts
// This is the main server file, now in TypeScript.
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingRoutes from './routes/bookingRoutes';

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/bookings', bookingRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Yasaki Restaurant Backend API!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});