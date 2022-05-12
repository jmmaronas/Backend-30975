const express=require("express")
const router=require("./src/routes/router")
const app=express()

const PORT=process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/",express.static(__dirname + "public"))

app.use("/", router)

app.get("/", (req, res)=>{
    res.sendFile("./index.html")
})

const server=app.listen(PORT, ()=>{
    console.log(`Servidor on port ${server.address().port}`)
})
server.on("error", error=> console.log(`Error en servidor ${error}`))