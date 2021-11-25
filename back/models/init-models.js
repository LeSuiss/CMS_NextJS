var DataTypes = require("sequelize").DataTypes;
var _Articles = require("./Articles");
var _Projects = require("./Projects");
var _Users = require("./Users");

function initModels(sequelize) {
  var Articles = _Articles(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Articles.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(Articles, { as: "Articles", foreignKey: "fk_Users"});

  return {
    Articles,
    Projects,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
