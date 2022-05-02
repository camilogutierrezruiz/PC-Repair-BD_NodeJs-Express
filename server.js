const { app } = require('./app');
const { User } = require('./models/user.model');
const { Repair } = require('./models/repair.model');
const dotenv = require('dotenv');

// Environtment Variables
dotenv.config('./config.env');

// Database from Utils
const { db } = require('./utils/database');

// Authenticate DataBase
db.authenticate()
  .then(() => console.log('Database authenticated'))
  .catch((err) => console.log(err));

// Establish Model Relations
User.hasMany(Repair);
Repair.belongsTo(User);

// Sync Sequiliize Models
db.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.log(err));

// Server
const PORT = process.env.PORT || 1969;

app.listen(PORT, () => {
  console.log(`Express app running on port: ${PORT}`);
});