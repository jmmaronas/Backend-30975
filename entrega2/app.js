import { rejects } from "assert"
import fs from "fs"
import { resolve } from "node:path/win32"

// class Contenedor{
//     constructor(nombreDelArchivo){
//         this.nombreDelArchivo=nombreDelArchivo
//     }
//     static id=1


//     async save(objeto){
//         Contenedor.id++
//         let objetos =this.getAll()
//         console.log(objetos)
//         const objetoNuevo={...objeto, id:Contenedor.id}
//         objetos.push(objetoNuevo)
//         try{
//             await fs.promises.appendFile(this.nombreDelArchivo,JSON.stringify(objetos))            
//             console.log("Saved!!")
//         }catch(err){
//             console.log(err)
//         }
//         return objetoNuevo.id
//     }
//     async getById(id){
//         let objetos =await this.getAll()
//         return objetos.find(e=>e.id===id)
//     }
//     async getAll(){
//         try{
//             const objetos=JSON.parse(await fs.promises.readFile(this.nombreDelArchivo, "utf-8")) || []
//             return objetos
//         }catch(err){
//             console.log(err)
//         }
//     }
//     async deleteById(id){
//         let objetos =await this.getAll()
//         objetos.filter(e=>e.id!==id)

//     }
//     async deleteAll(){
//         await fs.promises.writeFile(this.nombreDelArchivo,"")
//     }
// }
class Contenedor {
    constructor(nombreDelArchivo) {
        this.nombreDelArchivo = nombreDelArchivo
    }

    save(objeto) {
        archivoTxt.getAll()
            .then(data => {                
                let objetos = data ? JSON.parse(data) : []
                const objetoNuevo = { ...objeto, id: objetos.length ?  objetos[objetos.length - 1].id + 1 : 1}
                objetos.push(objetoNuevo)
                fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(objetos))
                    .then(resp => {
                        console.log("Saved!!")
                        return objetoNuevo.id
                    })
                    .catch(err => console.log(err))
            })
            .catch(error => {
                console.log(error)
                console.log("el archivo no existe")
                fs.promises.writeFile(this.nombreDelArchivo,JSON.stringify([{ ...objeto, id:1 }]))
                    .then(result => {
                        console.log("Created!!")
                    })
                    .catch(err => console.log(err))
            })
    }

    getById(id) {
        return Promise.resolve(
            this.getAll()
                .then(objets => JSON.parse(objets).find(e => e.id == id)
                )
        )
    }
    getAll() {
        return Promise.resolve(fs.promises.readFile(this.nombreDelArchivo, "utf-8"))
    }

    deleteById(id) {
        archivoTxt.getAll()
            .then(data => {
                let objetos = JSON.parse(data).filter(e => e.id !== id)
                fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(objetos))
                    .then(resp => {
                        console.log("Deleted!!")
                    })
            })
    }
    deleteAll() {
        fs.promises.writeFile(this.nombreDelArchivo, "")
    }
}

const archivoTxt = new Contenedor("./entrega2.json")

//archivoTxt.save({ title: "PC", price: 100000, thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/49/Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png" })

//archivoTxt.getAll().then(data => console.log(data ? JSON.parse(data) : "Archivo vacio"))

//archivoTxt.getById(2).then(data =>console.log(data))

//archivoTxt.deleteById(4)

//archivoTxt.deleteAll()