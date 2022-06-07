const express = require("express")
const { carrito, productos } = require("../services/service")
const { Router } = express
const routesUsers = Router()

routesUsers.post("/",async (req, res) => {
    const id =await carrito.add(req.body)
    return res.json({id})
})
routesUsers.delete("/:id", (req, res) => {
    carrito.deleteById(Number(req.params.id))
    return res.json({message:"cart deleted"})
})
routesUsers.get("/:id/productos",async (req, res) => {
    const cart=await carrito.getById(Number(req.params.id))
    return res.json(cart)
})
routesUsers.post("/:id/productos/",async (req, res) => {
    const cartId = Number(req.params.id)
    //const {id, qty}= req.body
    //let product =await productos.getById(id)
    //carrito.addToCart(cartId, {...product, qty})
    carrito.addToCart(cartId, req.body)
    return res.json({message:"producto agregado la carrito"})
})
routesUsers.delete("/:id/productos/:id_prod", (req, res) => {
    const {id, id_prod}=req.params
    carrito.deleteProductById(id, id_prod)
    return res.json({message:"producto elimando del carrito"})
})

module.exports = routesUsers