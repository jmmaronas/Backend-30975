const express = require("express")
const router = require("./src/routes/router")
const path = require("path")
const app = express()
const ejs = require("ejs")
const { Services } = require("./src/services/Services")

const PORT = process.env.PORT || 8080

const services = new Services

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "public"))

app.use("/", router)

app.get("/", (req, res) => {
    res.render("index")
})

const server = app.listen(PORT, () => {
    console.log(`Servidor on port ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))