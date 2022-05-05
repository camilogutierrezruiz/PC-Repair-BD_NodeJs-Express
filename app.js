const express = require('express');
const cors = require('cors');
const { globalErrorHandler } = require('./controllers/errors.controller');

// Routers from Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

// Init express app
const app = express();

// Enable CORS
app.use(cors());

// Available Json
app.use(express.json());

// API base URL
const URL_API = '/api/v1';

// Endpoints after https://localhost:PORT
app.use(`${URL_API}/users`, usersRouter);
app.use(`${URL_API}/repairs`, repairsRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };