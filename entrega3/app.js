import fs from "fs"

class Contenedor{
    constructor(nombreDelArchivo){
        this.nombreDelArchivo=nombreDelArchivo
    }

    async save(objeto){
        let objetos =await this.getAll()
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
    async deleteById(id){
        let objetos =await this.getAll()
        let result=objetos.filter(e=>e.id!==id)
        await fs.promises.writeFile(this.nombreDelArchivo, JSON.stringify(result))
    }
    async deleteAll(){
        await fs.promises.writeFile(this.nombreDelArchivo,"")
    }
}
/*class Contenedor {
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
*/

export default Contenedor
//const archivoTxt = new Contenedor("./entrega2.json")

//archivoTxt.save({ title: "PC", price: 100000, thumbnail: "https://upload.wikimedia.org/wikipedia/commons/4/49/Dell_Inspiron_One_23_Touch_AIO_Desktop_PC.png" })

//archivoTxt.getAll().then(data => console.log("get"+data))

//;(async()=>{console.log(await archivoTxt.getAll())})()

//archivoTxt.getById(2).then(data =>console.log(data))

//;(async()=>{console.log(await archivoTxt.getById(1))})()

//archivoTxt.deleteById(7)

//archivoTxt.deleteAll()