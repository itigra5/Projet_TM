const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    idUser: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Nom: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    'Prénom': {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "Email_UNIQUE"
    },
    Adresse: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    'Mot_de_passe': {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    'Photo de profil': {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    Role: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    "Nombre d'etoile": {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Langue: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
      {
        name: "Email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Email" },
        ]
      },
      {
        name: "iduser_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idUser" },
        ]
      },
    ]
  });
};
