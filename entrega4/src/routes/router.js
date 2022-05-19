const express = require("express")
const { Router } = express
const { Services } = require("../services/Services")
const router = Router()
const services = new Services()

let id = 0

router.get("/productos", (req,res)=>{
    let products =services.getAll()
    res.render("index", {products})
})

router.get("/productos/:id", (req, res) => {
    const { id } = req.params
    res.json(services.getById(Number(id)))
})

router.post("/productos", (req, res) => {
    let objeto= req.body.id ? req.body : { ...req.body, id: ++id }
    services.add(objeto)
    
    res.redirect("/productos")
})

router.put("/api/productos/:id", (req, res) => {
    const { id } = req.params
    const newObject = { ...req.query, id: Number(id) }
    services.put(Number(id), newObject)
    res.redirect("/productos", services.getAll())
})

router.delete("/api/productos/:id", (req, res) => {
    const { id } = req.params
    services.deleteById(Number(id))
    res.redirect("/productos", services.getAll())
})

module.exports = router