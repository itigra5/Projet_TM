const sequelize = require('../lib/db.js'); //connect to the db

const categories = require('./categorie.js')(sequelize, require('sequelize').DataTypes);
const User = require('./user.js')(sequelize, require('sequelize').DataTypes);
const SousCategorie = require('./SousCategorie.js')(sequelize, require('sequelize').DataTypes)

const models = { categories, User, SousCategorie};

module.exports = { models };


