const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('followers', {
    idAbonnement: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    'idAbonné': {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    }
  }, {
    sequelize,
    tableName: 'followers',
    timestamps: false,
    freezeTableName: true,
    indexes: [
      {
        name: "idAbonnement_idx",
        using: "BTREE",
        fields: [
          { name: "idAbonnement" },
        ]
      },
      {
        name: "idAbonné_idx",
        using: "BTREE",
        fields: [
          { name: "idAbonné" },
        ]
      },
    ]
  });
};
