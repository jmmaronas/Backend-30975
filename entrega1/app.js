class Usuario{
    constructor(nombre, apellido, libros=[], mascotas=[]){
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    getFullName(){
        return `${this.nombre} ${this.apellido}` 
    }
    addMascotas(string){
        this.mascotas.push(string)
        return this.mascotas
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(nombre, autor){
        this.libros.push({nombre, autor})
        return this.libros
    }
    getBookNames(){
        let result=[]
        for(const libro of this.libros){
            result.push(libro.nombre)
        }
        return result
    }
}

const usuario1= new Usuario("Juan", "Maroñas", [{nombre:"SP", autor:"autor"}, {nombre:"Tranformer", autor:"autor2"}], ["Gato", "Perro"])

console.log(usuario1.getFullName())
console.log(usuario1.addMascotas("Pajaro"))
console.log(usuario1.countMascotas())
console.log(usuario1.addBook("Batman", "autor3"))
console.log(usuario1.getBookNames())

// function crearGritaNombre(nombre){
//     const signosExclamascion="!!!"
//     return (name=nombre)=>console.log(`${name} ${signosExclamascion}`)
// }

// const gritarCH= crearGritaNombre("Juan")
// gritarCH()
// gritarCH("Coder")

// function mostrarLista(lista){
//     return lista || "lista vacia"
// }

//desafio clase
/*
const mostrarLista=(lista)=>Array.isArray(lista) && lista || "lista vacia"

console.log(mostrarLista([1,2,3]))
console.log(mostrarLista())

function crearMultiplicador(num1){
    return (num2)=>num1*num2
}

const duplicar=crearMultiplicador(2)
const triplicar=crearMultiplicador(3)

console.log(duplicar(4))
console.log(triplicar(4))
*/

/*
class Contador{
    constructor(nombre){
        this.nombre=nombre
        this.cuenta=0
    }
    static cuentaGlobal=0

    obtenerResponsable(){
        return this.nombre
    }
    obtenerCuentaIndividual(){
        return this.cuenta
    }
    obtenerCuentaGlobal(){
        return Contador.cuentaGlobal
    }
    contar(){
        this.cuenta++
        Contador.cuentaGlobal++
    }
}

const juan= new Contador("juan")
juan.contar()
console.log(juan.obtenerCuentaGlobal())
console.log(juan.obtenerCuentaIndividual())
*/