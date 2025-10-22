const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  const PhotoProduit = sequelize.define('photo_produit', {
    idPhoto: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    idProduit_Photo: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'produit',
        key: 'idProduit'
      }
    },
    Images: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'photo_produit',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPhoto" },
        ]
      },
      {
        name: "idProduit_Photo_idx",
        using: "BTREE",
        fields: [
          { name: "idProduit_Photo" },
        ]
      },
    ]
  });


  PhotoProduit.associate = function(models) {
    PhotoProduit.belongsTo(models.Produit, {
      foreignKey: 'idProduit_Photo',
      as: 'produit'  // ce nom sera utilisé dans include
    });
  };

  return PhotoProduit;
};


