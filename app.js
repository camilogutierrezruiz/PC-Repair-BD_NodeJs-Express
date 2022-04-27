const express = require('express');

// Routers from Routers
const { usersRouter } = require('./routes/users.routes');
const { repairsRouter } = require('./routes/repairs.routes');

// Database from Utils
const { db } = require('./utils/database');

const app = express();

// Available Json
app.use(express.json());

// Endpoints after https://localhost:PORT
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/repairs', repairsRouter);

db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

const PORT = 1969;
app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});