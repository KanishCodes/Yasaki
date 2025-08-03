// The booking routes, now using Prisma to interact with the database.
import express, { Request, Response } from 'express';
import prisma from '../db'; // Import our prisma client

const router = express.Router();

// --- CREATE A NEW BOOKING ---
// POST /api/bookings/create
router.post('/create', async (req: Request, res: Response) => {
  const { name, email, date, time, guests, table } = req.body;

  // 1. Validation
  if (!name || !email || !date || !time || !guests || !table) {
    return res.status(400).json({ message: 'Missing required booking information.' });
  }

  try {
    // 2. Save to Database using Prisma
    // --- FIX: Ensure data types match the schema ---
    // We explicitly convert 'guests' and 'table' to strings before saving.
    const newBooking = await prisma.booking.create({
      data: {
        name: String(name),
        email: String(email),
        date: String(date),
        time: String(time),
        guests: String(guests),
        table: String(table),
      },
    });

    console.log('Successfully created booking:', newBooking);

    // 3. Send Success Response
    res.status(201).json({
      message: 'Booking created successfully!',
      booking: newBooking,
    });
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ message: 'Failed to create booking.' });
  }
});

// --- GET ALL BOOKINGS ---
// GET /api/bookings
router.get('/', async (req: Request, res: Response) => {
  try {
    const allBookings = await prisma.booking.findMany({
      orderBy: {
        createdAt: 'desc', // Show newest bookings first
      },
    });

    res.status(200).json({
      message: 'Bookings retrieved successfully!',
      bookings: allBookings,
    });
  } catch (error) {
    console.error('Error retrieving bookings:', error);
    res.status(500).json({ message: 'Failed to retrieve bookings.' });
  }
});

export default router;
