// database.js
const { Sequelize } = require('sequelize');

// Create Sequelize instance
const sequelize = new Sequelize('your_database_name', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'mysql',
});

// Test connection
sequelize.authenticate()
  .then(() => console.log('✅ Connection has been established successfully.'))
  .catch(err => console.error('❌ Unable to connect to the database:', err));

module.exports = sequelize;
