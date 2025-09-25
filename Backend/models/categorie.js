const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorie', {
    idCategorie: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    NomCategorie: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ImagePhone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    ImagePC: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'categorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCategorie" },
        ]
      },
      {
        name: "idCategorie_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCategorie" },
        ]
      },
    ]
  });
};
