const express = require("express")
const app = express()
const cors = require("cors")

const { applyRulesToMap } = require("./model/rules")

const port = 3030

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Use /cycle to post a map status and get the next one")
})

app.post("/cycle", (req, res) => {
  res.status(200)
  console.log(req.body)
  res.json(applyRulesToMap(req.body.map))
})

app.listen(port, () => {
  console.log(`Gameofwar backend listening at http://localhost:${port}`)
})
