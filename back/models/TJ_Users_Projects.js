const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TJ_Users_Projects', {
    fk_Users: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Users',
        key: 'id'
      }
    },
    fk_Projects: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Projects',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'TJ_Users_Projects',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "fk_Users" },
          { name: "fk_Projects" },
        ]
      },
      {
        name: "fk_TJ_Users_Projects_Projects1_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Projects" },
        ]
      },
      {
        name: "fk_TJ_Users_Projects_Users1_idx",
        using: "BTREE",
        fields: [
          { name: "fk_Users" },
        ]
      },
    ]
  });
};
