const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Produit = sequelize.define('produit', {
    idProduit: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idUser_produit: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    NomProduit: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Prix: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    'Quantité': {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    'idCategorie_produit': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'idCategorie'
      }
    }
  }, {
    sequelize,
    tableName: 'produit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProduit" },
        ]
      },
      {
        name: "idUser_idx",
        using: "BTREE",
        fields: [
          { name: "idUser_produit" },
        ]
      },
      {
        name: "idCatégorie_produit_idx",
        using: "BTREE",
        fields: [
          { name: "idCategorie_produit" },
        ]
      },
    ]
  });

 Produit.associate = function (models) {

    // un produit a plusieurs photos
    Produit.hasMany(models.PhotoProduit, {
      foreignKey: 'idProduit_Photo',
      as: 'photos'
    });

    // un produit peut être dans plusieurs paniers
    Produit.hasMany(models.Panier, {
      foreignKey: "idProduit_panier"
    });

    // un produit peut être dans plusieurs favorits
    Produit.hasMany(models.Favoris, {
      foreignKey: "idProduit_favoris",
      as: "favoris"
    });

    // un produit appartient à un vendeur (User)
    Produit.belongsTo(models.User, {
      as: 'vendeur',
      foreignKey: 'idUser_produit'
    });
  };
  

  return Produit;
};


