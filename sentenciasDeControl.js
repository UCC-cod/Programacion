/*let frutas = ["manzana", "limon", "fresa", "cereza"];
for (frutas in frutas ){
    console.log("La fruta es: " + frutas[fruta]);
    
} 

let frutas = ["manzana", "limon", "fresa", "cereza"];

// Se agrega elemento al final

frutas.push("naranja")
// SE elimina elemento del final
frutas.pop();

// SE agrega elemento del inicio
frutas.unshift("platano");

// SE elimina elemento del inicio
frutas.shift();

//se elimina la poscion 
let porcion = frutas.splice(2,1)
// se hace copia de esas posciones
let porcion = frutas.slice(1,4)


let frutas = ["manzana", "limon", "fresa", "cereza"];

// Recorre el array
frutas.forEach(fruta =>{ 
    console.log("La fruta es " + fruta)
})

// Convertir Array a mayuscula
let FRUTAMAYUSCULA = frutas.map(fruta => fruta.toUpperCase())

// Filtrar numeros
let numeros = [1,2,3,4,5,6,7];
let pares = numeros.filter(num => num % 2 === 0);


console.log(pares);


const persona = {
    nombre: "Juan",
    apellido : "Mahecha",
    edad : 18,
    saludar : function(){
        console.log("Hola, soy: " + this.nombre);
    }
}

console.log(persona);
console.log(persona.edad);
console.log(persona.saludar());
*/
const libros =[
    {titulo : "Cien años de soledad", autor: "GGm"},
    {titulo : "El amor de los tiempos de colera", autor: "GGm"},
    {titulo : "De la tierra a la luna", autor:"Julio verne"},
    {titulo : "Pinocho", autor: "CC"}
]

let LibrosGGm = libros.filter(Libro => Libro.autor === "GGm");
console.log(LibrosGGm)

libros.sort((a,b)=> a.titulo-b.titulo);
console.log(libros);