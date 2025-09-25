var DataTypes = require("sequelize").DataTypes;
var _categorie = require("./categorie");
var _favoris = require("./favoris");
var _followers = require("./followers");
var _historique des achats = require("./historique des achats");
var _panier = require("./panier");
var _photo produit = require("./photo produit");
var _produit = require("./produit");
var _sous-categorie = require("./sous-categorie");
var _transaction = require("./transaction");
var _user = require("./user");

function initModels(sequelize) {
  var categorie = _categorie(sequelize, DataTypes);
  var favoris = _favoris(sequelize, DataTypes);
  var followers = _followers(sequelize, DataTypes);
  var historique des achats = _historique des achats(sequelize, DataTypes);
  var panier = _panier(sequelize, DataTypes);
  var photo produit = _photo produit(sequelize, DataTypes);
  var produit = _produit(sequelize, DataTypes);
  var sous-categorie = _sous-categorie(sequelize, DataTypes);
  var transaction = _transaction(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);

  sous-categorie.belongsTo(categorie, { as: "idCategorie_Sous_categorie", foreignKey: "idCategorie_Sous"});
  categorie.hasMany(sous-categorie, { as: "sous-categories", foreignKey: "idCategorie_Sous"});
  produit.belongsTo(catégorie, { as: "idCatégorie_produit_catégorie", foreignKey: "idCatégorie_produit"});
  catégorie.hasMany(produit, { as: "produits", foreignKey: "idCatégorie_produit"});
  favoris.belongsTo(produit, { as: "idProduit_favoris_produit", foreignKey: "idProduit_favoris"});
  produit.hasMany(favoris, { as: "favoris", foreignKey: "idProduit_favoris"});
  historique des achats.belongsTo(produit, { as: "idProduit_historique_achats_produit", foreignKey: "idProduit_historique_achats"});
  produit.hasMany(historique des achats, { as: "historique des achats", foreignKey: "idProduit_historique_achats"});
  panier.belongsTo(produit, { as: "idProduit_panier_produit", foreignKey: "idProduit_panier"});
  produit.hasMany(panier, { as: "paniers", foreignKey: "idProduit_panier"});
  photo produit.belongsTo(produit, { as: "idProduit_Photo_produit", foreignKey: "idProduit_Photo"});
  produit.hasMany(photo produit, { as: "photo produits", foreignKey: "idProduit_Photo"});
  transaction.belongsTo(produit, { as: "idProduit_transaction_produit", foreignKey: "idProduit_transaction"});
  produit.hasMany(transaction, { as: "transactions", foreignKey: "idProduit_transaction"});
  favoris.belongsTo(user, { as: "idUser_favoris_user", foreignKey: "idUser_favoris"});
  user.hasMany(favoris, { as: "favoris", foreignKey: "idUser_favoris"});
  followers.belongsTo(user, { as: "idAbonné_user", foreignKey: "idAbonné"});
  user.hasMany(followers, { as: "followers", foreignKey: "idAbonné"});
  followers.belongsTo(user, { as: "idAbonnement_user", foreignKey: "idAbonnement"});
  user.hasMany(followers, { as: "idAbonnement_followers", foreignKey: "idAbonnement"});
  historique des achats.belongsTo(user, { as: "idUser_historique_achats_user", foreignKey: "idUser_historique_achats"});
  user.hasMany(historique des achats, { as: "historique des achats", foreignKey: "idUser_historique_achats"});
  panier.belongsTo(user, { as: "idUser_panier_user", foreignKey: "idUser_panier"});
  user.hasMany(panier, { as: "paniers", foreignKey: "idUser_panier"});
  produit.belongsTo(user, { as: "idUser_produit_user", foreignKey: "idUser_produit"});
  user.hasMany(produit, { as: "produits", foreignKey: "idUser_produit"});
  transaction.belongsTo(user, { as: "idAcheteur_user", foreignKey: "idAcheteur"});
  user.hasMany(transaction, { as: "transactions", foreignKey: "idAcheteur"});
  transaction.belongsTo(user, { as: "idVendeur_user", foreignKey: "idVendeur"});
  user.hasMany(transaction, { as: "idVendeur_transactions", foreignKey: "idVendeur"});

  return {
    categorie,
    favoris,
    followers,
    historique des achats,
    panier,
    photo produit,
    produit,
    sous-categorie,
    transaction,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
