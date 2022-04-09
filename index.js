import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieSession from 'cookie-session';
import passport from 'passport';
import './services/passport.js';

dotenv.config();

// Connect to DB
mongoose.connect(process.env.mongoURI)
.then(() => console.log('DB Connection Successful!'))
.catch((err) => console.log(err));

// Initialize app
const app = express();

// Make use of cookies
app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [process.env.cookieKey] 
}));

app.use(passport.initialize());
app.use(passport.session());

// Import Routes
import authRoute from './routes/authRoutes.js';
import apiRoute from './routes/apiRoute.js';

// Route Middlewares
app.use('/auth/google', authRoute);
app.use('/api', apiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);