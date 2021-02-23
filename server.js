const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/users", require("./routes/user.routes"));
require("./db");
app.get('/', (req, res) => res.send("Welcome to Students Database!"))
app.listen(port, () => console.log(`Example app listening on port port!`))