const express = require('express');

// Routers from Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

const app = express();

// Available Json
app.use(express.json());

// API base URL
const URL_API = '/api/v1';

// Endpoints after https://localhost:PORT
app.use(`${URL_API}/users`, usersRouter);
app.use(`${URL_API}/repairs`, repairsRouter);

// Global error handler
app.use('*', (error, req, res, next) => {
  console.log(`Global eeror handler... ${error}`);
});

module.exports = { app };