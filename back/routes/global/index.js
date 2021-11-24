const express = require('express')
const Index = express.Router()

Index.use("/", (req, res) => {
  console.log("object")
  res.send({ testBack: 'res send testBack', test222: "totoestMagique", onemore: "hoho" })

}
)



module.exports = Index