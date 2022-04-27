const express = require('express');

// Routers from Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

const app = express();

// Available Json
app.use(express.json());

// Endpoints after https://localhost:PORT
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

module.exports = { app };