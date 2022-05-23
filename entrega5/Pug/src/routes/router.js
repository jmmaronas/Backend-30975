const express = require("express")
const { Router } = express
const { services } = require("../services/Services")
const router = Router()


let id = 0

router.get("", (req, res) => {
    let products = services.getAll()
    res.render("index", { products })
})

router.get("/productos/cargar", (req, res) => {
    const { id } = req.params
    const product = services.getById(Number(id))
    res.render("./pages/cargarProductos", { product })
})

router.get("/productos/:id", (req, res) => {
    const { id } = req.params
    const product = services.getById(Number(id))
    res.render("./pages/cargarProductos", { product })
})

router.post("/productos", (req, res) => {
    console.log(req.body)
    let objeto = req.body.id ? req.body : { ...req.body, id: ++id }
    let products = services.add(objeto)    
    res.redirect("/")
})

router.delete("/productos/:id", (req, res) => {
    const { id } = req.params
    services.deleteById(Number(id))
    res.render("./pages/cargarProductos", services.getAll())
})

module.exports = router