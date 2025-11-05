const sequelize = require('../lib/db.js'); //connect to the db

const categories = require('./categorie.js')(sequelize, require('sequelize').DataTypes);
const User = require('./user.js')(sequelize, require('sequelize').DataTypes);
const SousCategorie = require('./SousCategorie.js')(sequelize, require('sequelize').DataTypes)
const Produit = require('./produit.js')(sequelize, require('sequelize').DataTypes)
const PhotoProduit = require('./photo_produit.js')(sequelize, require('sequelize').DataTypes)
const Follower = require('./followers.js')(sequelize, require('sequelize').DataTypes)
const Panier = require('./panier.js')(sequelize, require('sequelize').DataTypes)



const models = { categories, User, SousCategorie, Produit, PhotoProduit, Follower, Panier};

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

module.exports = { models };


