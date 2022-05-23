class Services{
    constructor(){
        this.arrayProductos=[]
    }

    getAll(){
        return this.arrayProductos
    }
    getById(id){
        return this.arrayProductos.find(e=>e.id===id)||{error:"producto no encontrado"}
    }
    add(objeto){
        let indice=this.arrayProductos.findIndex(e=>e.id==objeto.id)
        if(indice!==-1){
            this.arrayProductos[indice]={...objeto}
            return this.arrayProductos
        }
        this.arrayProductos.push(objeto)
        return this.arrayProductos
    }
    deleteById(id){
        this.arrayProductos=this.arrayProductos.filter(e=>e.id!==id)
        return(id)
    }
}

const services=new Services()
module.exports = {services}