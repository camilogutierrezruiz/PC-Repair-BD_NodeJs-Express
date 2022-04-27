const { app } = require('./app');

// Database from Utils
const { db } = require('./utils/database');

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