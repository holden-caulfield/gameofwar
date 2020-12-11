const express = require("express")
const app = express()
const port = 3000
const { applyRulesToMap } = require("./model/rules")

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Use /cycle to post a map status and get the next one")
})

app.post("/cycle", (req, res) => {
  res.status(200)
  res.json(applyRulesToMap(req.body.map))
})

app.listen(port, () => {
  console.log(`Gameofwar backend listening at http://localhost:${port}`)
})
