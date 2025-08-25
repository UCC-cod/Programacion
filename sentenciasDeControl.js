/*let edad = -3 

if (edad >= 18) {
    console.log("Eres mayor de edad")
}   

else if (edad < 0) {
    console.log("Edad no valida")
}

else {
    console.log("Es menor de edad")
}*/

/*let edad  = -3 
switch(edad) {
    case edad >= 18:
        console.log("Es mayor de edad")
        break;
    case edad < 18:
        console.log("Es menor de edad")
        break;
    default:
        console.log("Edad no valida")
}*/

//let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

/*for (let fruta in frutas) {
    console.log("La fruta es: " + frutas[fruta]);
}

for(let i = 0; i < frutas.length; i++) {
    console.log("La fruta es: " + frutas[i]);
}*/

//Agregar un elemento al final
//frutas.push("naranja");

//ELiminar un elemento final
//frutas.pop();

//Agregar un elemento al inicio
//frutas.unshift("naranja");

//Eliminar un elemento al inicio
//frutas.shift();

//Eliminar cualquier elemento del array
//Posicion, Cantidad a eliminar
//Si solo pongo la posicion, elimina desde esa posicion hasta el final
//frutas.splice(2, 1); 

//Hace una copia de una porcion del array
//Posicion inicial, posicion final (no incluida)
//let porcion = frutas.slice(1,3);
//console.log(porcion);

//let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

/*frutas.forEach(fruta => {
    console.log("La fruta es: " + fruta);
})*/

//Frutas en mayuscula
//let frutasMayuscula = frutas.map(fruta => fruta.toUpperCase());
//console.log(frutasMayuscula);

let numeros = [1, 2, 3, 4, 5, 6, 7];

//Me devuelve un nuevo array que cumple la condicion
let pares = numeros.filter(numero => numero % 2 === 0);
//console.log(pares);

//Solo me devuelve el primer elemento que cumple la condicion
let primerPar = numeros.find(numero => numero % 2 === 0);
//console.log(primerPar);

let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
//console.log(suma);

let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

//Ordena alfabeticamente de manera ascendente
frutas.sort();
//console.log(frutas);

//Ordena alfabeticamente de manera descendente
frutas.reverse();
//console.log(frutas);

const persona = {
    nombre: "Juan", 
    apellido: "Perez",  
    edad: 25,
    saludar: function() {
        console.log("Hola, soy" + this.nombre);
    }
}

/*console.log(persona);
console.log(persona.edad);
console.log(persona.saludar());*/

const libros = [
    {titulo: "Cien Años de Soledad", autor: "Gabriel Garcia Marquez", año: 1967},
    {titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605},
    {titulo: "La Sombra del Viento", autor: "Carlos Ruiz Zafon", año: 2001},
    {titulo: "El Amor en los Tiempos del Colera", autor: "Gabriel Garcia Marquez", año: 1985},
]

let libroGabrielGarciaMarquez = libros.filter(libro => libro.autor === "Gabriel Garcia Marquez");
//console.log(libroGabrielGarciaMarquez);

libros.sort((a, b) => a.titulo - b.titulo);
console.log(libros);