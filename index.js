import express from 'express';
import mongoose from 'mongoose';
import './services/passport.js';
import keys from "./config/keys.js";

// Connect to DB
mongoose.connect(keys.mongoURI)
.then(() => console.log('DB Connection Successful!'))
.catch((err) => console.log(err));

// Initialize app
const app = express();

// Import Routes
import authRoute from './routes/authRoutes.js';

// Route Middlewares
app.use('/auth/google', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);