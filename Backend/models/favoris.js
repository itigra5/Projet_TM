const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favoris', {
    idUser_favoris: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idProduit_favoris: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'idProduit'
      }
    }
  }, {
    sequelize,
    tableName: 'favoris',
    timestamps: false,
    indexes: [
      {
        name: "unique_favoris",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser_favoris" },
          { name: "idProduit_favoris" },
        ]
      },
      {
        name: "idProduit_idx",
        using: "BTREE",
        fields: [
          { name: "idProduit_favoris" },
        ]
      },
    ]
  });
};
