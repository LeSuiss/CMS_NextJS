var DataTypes = require("sequelize").DataTypes;
var _Articles = require("./Articles");
var _Comments = require("./Comments");
var _Projects = require("./Projects");
var _TJ_Users_Projects = require("./TJ_Users_Projects");
var _Users = require("./Users");

function initModels(sequelize) {
  var Articles = _Articles(sequelize, DataTypes);
  var Comments = _Comments(sequelize, DataTypes);
  var Projects = _Projects(sequelize, DataTypes);
  var TJ_Users_Projects = _TJ_Users_Projects(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  Projects.belongsToMany(Users, { through: TJ_Users_Projects, foreignKey: "fk_Projects", otherKey: "fk_Users" });
  Users.belongsToMany(Projects, { through: TJ_Users_Projects, foreignKey: "fk_Users", otherKey: "fk_Projects" });
  Comments.belongsTo(Articles, { as: "fk_Articles_Article", foreignKey: "fk_Articles"});
  Articles.hasMany(Comments, { as: "Comments", foreignKey: "fk_Articles"});
  TJ_Users_Projects.belongsTo(Projects, { as: "fk_Projects_Project", foreignKey: "fk_Projects"});
  Projects.hasMany(TJ_Users_Projects, { as: "TJ_Users_Projects", foreignKey: "fk_Projects"});
  Articles.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(Articles, { as: "Articles", foreignKey: "fk_Users"});
  Comments.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "fk_Users"});
  TJ_Users_Projects.belongsTo(Users, { as: "fk_Users_User", foreignKey: "fk_Users"});
  Users.hasMany(TJ_Users_Projects, { as: "TJ_Users_Projects", foreignKey: "fk_Users"});

  return {
    Articles,
    Comments,
    Projects,
    TJ_Users_Projects,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
