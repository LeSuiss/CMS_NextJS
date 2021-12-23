
const config = require('../config')
// Methods to display directory
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const models = require('../models');


const login = async (req, res) => {

  const firstConnection = await models.Users.findAll({ raw: true })
  if (firstConnection.length === 0) {
    console.log('creating new user as it is first connection')
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    await models.Users.create({ "email": req.body.username, password: hashedPassword })
  }

  const account = await models.Users.findOne({ where: { "email": req.body.username }, raw: true });


  // check account found and verify password
  if (!account || !bcrypt.compareSync(req.body.password, account.password)) {
    // authentication failed
    console.log('loggin refused')
    res.send({ isAuth: false });
  } else {
    console.log('succes in logging: sending token to front')
    // authentication successful
    const token = jwt.sign({ data: req.body.username }, config.jwt_secret, { expiresIn: '1h', });
    res.send({ isAuth: true, jwt_token: token });
  }
}

const Authentification = async (req, res) => {
  // get account from database
  let result = {
    isAuth: false,
    message: null,
  }
  try {
    let token = jwt.verify(req.body.jwt_token, config.jwt_secret)
    let current = new Date()
    result.isAuth = new Date(token.iat) < current && current > new Date(token.exp)
    if (!result.isAuth) { result.message = 'token périmé' }
  }
  catch (error) {
    console.log("catching token verification error:", error)
  }
  res.send(result)
}



module.exports = {
  login: login,
  Authentification: Authentification
}
