const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'Mishis1234',
  database: 'pc_repairs',
  logging: false,
});;

module.exports = { db };