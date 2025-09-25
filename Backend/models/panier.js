const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('panier', {
    idUser_panier: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idProduit_panier: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'idProduit'
      }
    },
    Timer: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'panier',
    timestamps: false,
    indexes: [
      {
        name: "idUser_panier_idx",
        using: "BTREE",
        fields: [
          { name: "idUser_panier" },
        ]
      },
      {
        name: "idProduit_panier_idx",
        using: "BTREE",
        fields: [
          { name: "idProduit_panier" },
        ]
      },
    ]
  });
};
