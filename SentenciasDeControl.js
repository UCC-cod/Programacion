/*let edad = -3;

if (edad >=18){
    console.log("Es mayor de edad.");
}
else if(edad <0) {
    console.log("La edad no es valida.");
}
else{
    console.log("es menor de edad.");
}*/

/*let edad = -3
switch(edad){
    case edad >= 18:
}
*/


//ciclo for
/*for(let i = 0; i<3; i++){
    console.log("esta es la iteracion #: " + i);
}
*/

/*let frutas = ["manzana", "fresa", "limon", "cereza"];

for(let fruta in frutas){
    console.log("la fruta es: " + frutas[fruta]);
}*/


//operaciones con arrays
//let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

//agregar un elemento
//frutas.push("naranja");

//eliminar al final
//frutas.pop();

//Agregar al inicio
//frutas.unshift("naranja");

//Eliminar elemento al incio
//frutas.shift();

//eliminar cualquier elemento del array
//posicion, cantidad a eliminar
//si solo pongo la posicion, se eliminan todas las posiciones
//frutas.splice(2, 1);

//hace una copia de una porcion de una array
//posicion de inicio, la posicion final sin tomar ese valor
//let porcion = frutas.slice(1, 5);
//console.log(porcion);


//let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

//for que recorre el array
/*frutas.forEach(fruta =>{
    console.log("La fruta es " + fruta);
})*/

//aqui ponemos todo en mayuscula
//let frutasMayuscula = frutas.map(fruta=>fruta.toUpperCase());
//console.log(frutasMayuscula)

//devuelve un nuevo array que cumpla con una condicion
let numeros = [1, 2, 3, 4, 5, 6, 7];
//let pares = numeros.filter(num => num % 2 === 0);
//console.log(pares);

//buscar primer elemnto que cumpla con la condicion
//let primerPar = numeros.find(num => num % 2 ===0);
//console.log(primerPar);


let suma = numeros.reduce((acumulador, num) => acumulador + num, 0)
//console.log(suma);


let frutas = ["manzana", "fresa", "limon", "cereza", "naranja"];

//para odenar de forma ascendente
//frutas.sort();

//frutas.sort((a,b) => b-a);
//console.log(frutas);

let numerosDesordenados = [10, 8, 2, 1, 12, 15];
let ascendente = numerosDesordenados.sort();
let descente = numerosDesordenados.sort((a,b) => a-b);
//console.log(descente);

//console.log("Reverse: ", numerosDesordenados.reverse());


//OBJETOS
const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
    saludar:function(){
        console.log("Hola, soy: " + this.nombre);
    }
}

//console.log(persona);
//console.log(persona.edad);
//console.log(persona.saludar());

const libros =[
    {titulo: "cien años de soledad", autor: "GGM"},
    {titulo: "el amor en tiempos de colera", autor: "GGM"},
    {titulo: "De la tierra la luna", autor: "julio verne"},
    {titulo: "pinocho", autor: "CC"}
]

//libros.sort((a,b)=>a.titulo-b.titulo)
//console.log(libros);