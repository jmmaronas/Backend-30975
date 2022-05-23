const express = require("express")
const router = require("./src/routes/router")
const path = require("path")
const { engine } = require("express-handlebars")
const app = express()

const PORT = process.env.PORT || 8080



const engineFn = engine({
    extname: ".hbs",
    defaultLayout: __dirname + "/views/index.hbs",
    layoutsDir: __dirname +"/views/layouts",
    partialsDir: __dirname +"/views/partials"
})
app.engine("hbs", engineFn)

app.set("view engine", "hbs")
app.set("views", path.join(__dirname, "views"))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + "public"))

app.use("/", router)


const server = app.listen(PORT, () => {
    console.log(`Servidor on port ${server.address().port}`)
})
server.on("error", error => console.log(`Error en servidor ${error}`))