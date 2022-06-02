const express = require("express")
const { carrito, productos } = require("../services/service")
const { Router } = express
const routesUsers = Router()

routesUsers.post("/", (req, res) => {
    const result=carrito.add({})
    return res.send("Nuevo carrito Id"+result)
})
routesUsers.delete("/:id", (req, res) => {
    carrito.deleteById(req.params.id)
    return res.send("cart deleted")
})
routesUsers.get("/:id/productos", (req, res) => {
    const cart=carrito.getById(req.params.id)
    return res.json(cart)
})
routesUsers.post("/:id/productos/", (req, res) => {
    const {id, qty}= req.body
    let product = productos.getById(id)
    carrito.addToCart(req.params.id, product)
    return res.send("producto agregado la carrito")
})
routesUsers.delete("/:id/productos/:id_prod", (req, res) => {
    return res.send("producto elimando del carrito")
})

module.exports = routesUsers