const express = require("express");
const app = express()
const cors = require("cors")
const models = require("./models");
const runningPort = require('./config').runningPort
const routes = require('./routes/index')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded(
  { extended: true }
))
app.use("/", routes)
app.use('/path', (req, res, next) => {
  res.send('hoho')
});



models
  .sequelize
  .sync({ forced: true })
  .then(() => app.listen(runningPort, () => console.log(`Server is running on ${runningPort}`)))
  ;




