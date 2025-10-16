const { Sequelize } = require('sequelize');

// Create a Sequelize instance 
const sequelize = new Sequelize(
  "tm",       
  "root",       
  "Spiceyourlife18!",   
  {
    host: "localhost", 
    dialect: 'mysql',          
  }
);

// Test of the connection
sequelize.authenticate()
  .then(() => console.log('Connecté à la base'))
  .catch(err => console.error('Erreur connexion :', err));
  
module.exports = sequelize;