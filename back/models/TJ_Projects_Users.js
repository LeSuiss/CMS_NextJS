const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TJ_Projects_Users', {
    fk_Projects: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    },
    fk_Users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'TJ_Projects_Users',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fk_Projects" },
          { name: "fk_Users" },
        ]
      },
      {
        name: "fk_TJ_Projects_Users_Users1_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Users" },
        ]
      },
      {
        name: "fk_TJ_Projects_Users_Projects1_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Projects" },
        ]
      },
    ]
  });
};
