const express = require('express')
const Index = express.Router()

Index.use("/", (req, res) => {
  res.send({ testBack: 'res send testBack', test222: "totoestMagique", onemore: "hoho" })

}
)



module.exports = Index