'use strict';


const Sequelize = require('sequelize');
const config = require('../config/index');
const db = {};


const sequelizeLogger = require('sequelize-log-syntax-colors');
console.log(`config`, config)
config.logging = function (text) { console.log(sequelizeLogger(text)); }

let sequelize = new Sequelize(config.database, config.username, config.password, config);

const initModels = require("./init-models");
Object.assign(db, initModels(sequelize));

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;
