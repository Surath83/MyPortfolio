import express from 'express';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;

        // Check for required fields
        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Create a new contact document
        const newContact = new Contact({
            firstName,
            lastName,
            email,
            phone,
            message
        });

        // Save to MongoDB
        await newContact.save();

        res.status(201).json({ message: 'Contact saved successfully' });
    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
