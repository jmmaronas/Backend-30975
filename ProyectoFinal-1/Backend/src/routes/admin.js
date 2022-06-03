const express = require("express")
const { Router } = express
const { productos } = require("../services/service.js")
const routesAdmin = Router()
let x = ""
let y = ""
let administradro = true
let errorMessage = { error: -1, description: `ruta ${x} metodo ${y} no autorizadas` }

routesAdmin.get("/:id?", async (req, res) => {
    const { id } = req.params && req.params
    const arrayProductos = id ? await productos.getById(Number(id)) : await productos.getAll()
    return res.json(arrayProductos)
})
routesAdmin.post("/", (req, res) => {
    x = "/"
    y = "post"
    if (administradro) {
        productos.add(req.body)
        return res.json({message:"Agregado"})
    } else return res.json(errorMessage)
})
routesAdmin.put("/:id", (req, res) => {
    x = "/:id"
    y = "put"
    if (administradro) {
    productos.update(Number(req.params.id), {...req.body, timestamp: new Date().toLocaleDateString()})
    return res.json({message:"Updated"})
    }else res.json(errorMessage)
})
routesAdmin.delete("/:id", (req, res) => {
    x = "/:id"
    y = "delte"
    if (administradro) {
    productos.deleteById(Number(req.params.id))
    return res.json({message:"deleted"})
    }else res.json(errorMessage)
})

module.exports = routesAdmin