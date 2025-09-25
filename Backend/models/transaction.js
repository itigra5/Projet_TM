const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    idAcheteur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idVendeur: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'user',
        key: 'idUser'
      }
    },
    idProduit_transaction: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'idProduit'
      }
    },
    Prix: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    Statut: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'transaction',
    timestamps: false,
    indexes: [
      {
        name: "idAcheteur_idx",
        using: "BTREE",
        fields: [
          { name: "idAcheteur" },
        ]
      },
      {
        name: "idVendeur_idx",
        using: "BTREE",
        fields: [
          { name: "idVendeur" },
        ]
      },
      {
        name: "idProduit_transaction_idx",
        using: "BTREE",
        fields: [
          { name: "idProduit_transaction" },
        ]
      },
    ]
  });
};
