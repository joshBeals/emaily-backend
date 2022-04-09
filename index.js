const express = require('express');
require('./services/passport');

const app = express();

//Import Routes
const authRoute = require('./routes/authRoutes');

//Route Middlewares
app.use('/auth/google', authRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);