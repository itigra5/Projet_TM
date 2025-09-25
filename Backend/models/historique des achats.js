const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('historique des achats', {
    idUser_historique_achats: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idProduit_historique_achats: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'idProduit'
      }
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'historique des achats',
    timestamps: false,
    indexes: [
      {
        name: "idUser_historique_achats_idx",
        using: "BTREE",
        fields: [
          { name: "idUser_historique_achats" },
        ]
      },
      {
        name: "idProduit_historique_achats_idx",
        using: "BTREE",
        fields: [
          { name: "idProduit_historique_achats" },
        ]
      },
    ]
  });
};
