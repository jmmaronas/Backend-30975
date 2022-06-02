const express = require("express")
const { Router } = express
const { productos } = require("../services/service.js")
const routesAdmin = Router()


routesAdmin.get("/", async (req, res) => {
    //const { id } = req.params.id
    //const arrayProductos = id ?await productos.getById(id) : await productos.getAll()
    const arrayProductos = await productos.getAll()
    return res.json(arrayProductos)
})
routesAdmin.post("/", (req, res) => {
    console.log(req.body)
    productos.add(req.body)
    return res.send("Agregado")
})
routesAdmin.put("/:id", (req, res) => {
    productos.update(req.params.id, req.body)
    return res.send("Actualizado")
})
routesAdmin.delete("/:id", (res, req) => {
    productos.deleteById(req.params.id)
    return res.send("deleted")
})

module.exports = routesAdmin