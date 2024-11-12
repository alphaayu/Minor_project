import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import reportRoutes from './routes/reportRoutes.js';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
const PORT = 3000;

// Database connection
mongoose.connect('mongodb://localhost:27017/inventory')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });

// CORS configuration
app.use(cors({
    origin: ['http://localhost:3001', 'http://localhost:5000'],
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Chatbot route using Cohere API with direct HTTP request
app.post('/api/chatbot', async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch('https://api.cohere.ai/v1/generate', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${process.env.COHERE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                model: 'command-xlarge-nightly',
                prompt: message,
                max_tokens: 100,
            }),
        });

        const data = await response.json();
        console.log('Cohere API Response:', data); // Log the full response

        // Check if the response contains generations and retrieve the reply text
        if (response.ok && data.generations && data.generations.length > 0) {
            const reply = data.generations[0].text;
            res.json({ reply });
        } else {
            console.error('No valid response from Cohere API:', data);
            res.status(500).json({ error: 'No valid response from Cohere API' });
        }
    } catch (error) {
        console.error('Error with Cohere API:', error);
        res.status(500).json({ error: 'Failed to fetch chatbot response' });
    }
});

// Routes for other functionalities
app.use('/api/reports', reportRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
