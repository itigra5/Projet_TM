const { Sequelize } = require('sequelize');

// Create a Sequelize instance 
const sequelize = new Sequelize(
  process.env.DB_NAME,       
  process.env.DB_USER,       
  process.env.DB_PASSWORD,   
  {
    host: process.env.DB_HOST, 
    dialect: 'mysql',          
  }
);

// Test of the connection
sequelize.authenticate()
  .then(() => console.log('Connecté à la base'))
  .catch(err => console.error('Erreur connexion :', err));
  
module.exports = sequelize;