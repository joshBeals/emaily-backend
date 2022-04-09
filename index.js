import express from 'express';
import './services/passport.js';

const app = express();

//Import Routes
import authRoute from './routes/authRoutes.js';

//Route Middlewares
app.use('/auth/google', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);