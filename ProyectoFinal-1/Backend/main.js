const express=require("express")
const routesAdmin = require("./src/routes/admin.js")
const routesUsers = require("./src/routes/users.js")

const PORT=process.env.PORT || 8080
let administrador=false
const app=express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))

app.get("/", (req,res)=>{
    res.sendFile("index.html")
})
app.use("/api/productos", routesAdmin)
app.use("/api/carrito", routesUsers)
app.use("/*", (req,res)=>{
    let x=req.url
    let y=req.method
    res.json({error:-2, description:`ruta ${x} metodo ${y} no implementada`})
})

const server= app.listen(PORT, ()=>{
    console.log(`Server on port: ${server.address().port}`)
})
server.on("error", (err)=>{console.error(err)})