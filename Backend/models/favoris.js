const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const Favoris = sequelize.define('favoris', {
    idUser_favoris: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idProduit_favoris: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true,
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

    Favoris.associate = (models) => {
    Favoris.belongsTo(models.User, {
        foreignKey: "idUser_favoris",
        as: "user"
            });

    Favoris.belongsTo(models.Produit, {
        foreignKey: "idProduit_favoris",
        as: "produit"
    });
  };

  return Favoris;

};
