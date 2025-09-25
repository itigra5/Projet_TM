const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('produit', {
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
    'idCatégorie_produit': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'catégorie',
        key: 'idCatégorie'
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
          { name: "idCatégorie_produit" },
        ]
      },
    ]
  });
};
