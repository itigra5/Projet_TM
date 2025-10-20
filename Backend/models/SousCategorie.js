const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sous_categorie', {
    'idSousCategorie': {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    'NomSousCategorie': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'idCategorie_Sous': {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'categorie',
        key: 'idCategorie'
      }
    }
  }, {
    sequelize,
    tableName: 'sous_categorie',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idSousCategorie" },
        ]
      },
      {
        name: "idCatégorie_Sous_idx",
        using: "BTREE",
        fields: [
          { name: "idCategorie_Sous" },
        ]
      },
    ]
  });
};
