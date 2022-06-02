const fs = require("fs")

class Contenedor{
    constructor(nombreDelArchivo){
        this.nombreDelArchivo=nombreDelArchivo
    }

    async add(objeto){
        let objetos =await this.getAll() || []
        const objetoNuevo={...objeto, id:objetos.length>0?objetos[objetos.length-1].id+1:1}
        objetos.push(objetoNuevo)
        try{
            await fs.promises.writeFile(this.nombreDelArchivo,JSON.stringify(objetos))            
            console.log("Saved!!")
        }catch(err){
            console.log(err)
        }
        return objetoNuevo.id
    }
    async getById(id){
        let objetos =await this.getAll()
        return Promise.resolve(objetos.find(e=>e.id===id))
    }
    async getAll(){
        try{
            const data=await fs.promises.readFile(this.nombreDelArchivo, "utf-8")
            const objetos= data?Promise.resolve(JSON.parse(data)) : []
            return objetos
        }catch(err){
            console.log(err)
        }
    }
    async update(id, newObject){
        let objetos =await this.getAll()
        let indice=objetos.findIndex(e=>e.id==id)
        objetos[indice]=newObject
        await fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(objetos))
    }
    async deleteById(id){
        let objetos =await this.getAll()
        let result=objetos.filter(e=>e.id!==id)
        await fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(result))
    }
    async deleteAll(){
        await fs.promises.writeFile(this.nombreDelArchivo,"")
    }
    async addToCart(cartId, product){
        let carts=await this.getAll()
        const indice=carts.find(e=>e.id==cartId)
        carts[indice].push(product)        
        await fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(carts))
    }
}
const carrito=new Contenedor("carrito.json")
const productos=new Contenedor("productos.json")
module.exports={carrito, productos}