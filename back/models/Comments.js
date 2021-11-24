const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Comments', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fk_Users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    fk_Articles: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Articles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Comments',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "fk_Comments_Users_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Users" },
        ]
      },
      {
        name: "fk_Comments_Articles1_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Articles" },
        ]
      },
    ]
  });
};
