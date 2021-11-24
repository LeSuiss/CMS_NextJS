
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/config.json')[env];
const express = require('express')
const CRUD = require('express-sequelize-crud')
const _ = require('lodash')
const { camelCase } = require('../../tools/array')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const models = require('../../models');
const { Authentification, login } = require('../../controllers/registerAdmin');
const { sequelize } = require('../../models');

console.log(`sequelize`, sequelize.models.Users.prototype)
const Index = express.Router()

const globalStructure = {}
const ManyToManyRelations = {}

for (const ModelName of Object.keys(models.sequelize.models).filter(name => name.slice(0, 3) !== 'TJ_')
) {
  Index.use(CRUD.crud(`/${ModelName}`, models[ModelName]))
  //if is not jointure table
  _.mergeWith(globalStructure, { [camelCase(ModelName)]: models[ModelName].rawAttributes })
  //for each "column" in db add the type
  Object.keys(models[ModelName].rawAttributes)
    .map(fieldName => { Object.assign(globalStructure[camelCase(ModelName)][fieldName], { "typeof": globalStructure[camelCase(ModelName)][fieldName].type.constructor.name.toLowerCase() }) })
}
Object.keys(models.sequelize.models)
  .filter(name => name.slice(0, 3) === 'TJ_')
  .map(ModelName => {
    let cuttingCaracter = ModelName.lastIndexOf('_')
    let [tab1, tab2] = [ModelName.slice(3, cuttingCaracter), ModelName.slice(cuttingCaracter + 1, ModelName.length)]
      .map(element => {
        return camelCase(element)
      });
    _.mergeWith(globalStructure[tab1], { ['ManyToMany_' + tab2]: { field: tab2, joinTable: ModelName, ...globalStructure[tab2] } })
    _.mergeWith(globalStructure[tab2], { ['ManyToMany_' + tab1]: { field: tab1, joinTable: ModelName, ...globalStructure[tab1] } })

  })


// console.log(`globalStructure`, globalStructure.Users.ManyToMany_Projects)
Index.get('/getStructure', (req, res) => {
  res.send(globalStructure)
});

Index.post("/login", login)
Index.post("/checkAuth", Authentification)


module.exports = Index



