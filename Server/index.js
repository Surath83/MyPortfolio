import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import contactRoutes from './routes/contact.js';
import newsletterRoutes from './routes/newsletter.js'; // Import Newsletter Routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes); // Use Newsletter Routes

// MongoDB Connection
const MONGO_URI = 'mongodb+srv://root:root@portfolio.rjmxk.mongodb.net/portfoliodb?retryWrites=true&w=majority&appName=portfolio';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log('DB Connection Error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
