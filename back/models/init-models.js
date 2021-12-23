var DataTypes = require("sequelize").DataTypes;
var _Articles = require("./Articles");
var _Projects = require("./Projects");
var _TJ_Projects_Users = require("./TJ_Projects_Users");
var _Users = require("./Users");

function initModels(sequelize) {
  var Articles = _Articles(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var TJ_Projects_Users = _TJ_Projects_Users(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Projects.belongsToMany(Users, { through: TJ_Projects_Users, foreignKey: "fk_Projects", otherKey: "fk_Users" });
  Users.belongsToMany(Projects, { through: TJ_Projects_Users, foreignKey: "fk_Users", otherKey: "fk_Projects" });
  TJ_Projects_Users.belongsTo(Projects, { as: "fk_Projects_Project", foreignKey: "fk_Projects"});
  Projects.hasMany(TJ_Projects_Users, { as: "TJ_Projects_Users", foreignKey: "fk_Projects"});
  Articles.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(Articles, { as: "Articles", foreignKey: "fk_Users"});
  TJ_Projects_Users.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(TJ_Projects_Users, { as: "TJ_Projects_Users", foreignKey: "fk_Users"});

  return {
    Articles,
    Projects,
    TJ_Projects_Users,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
