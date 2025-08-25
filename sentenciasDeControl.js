/*let edad = -3;
if(edad >= 18){
    console.log("Es mayor de edad");
    
}else if (edad < 0){
    console.log("Edad no válida");
}else{
    console.log("Es menor de edad");
}*/

/*
let edad = -3;
switch(edad){
    case edad >= 18:
        console.log("Es mayor de edad");
        break;
    case edad <18:
        console.log("Es menor de edad");
        break;
    default:
        console.log("La edad no es válida");        
}
*/
/*
for(let i = 1; i<3; i++){
    console.log("Esta es la iteración #: " + i);
}*/

/*
for (let fruta in frutas) {
    console.log("La fruta es: " + frutas[fruta]); 
}

for(let i = 0; i <= frutas.length; i++){
    console.log("La fruta es: " + frutas[i]);
}*/

//Operaciones con Arrays


//Agregar un elemento al final
//frutas.push("naranja")

//Eliminar un elemento al final
//frutas.pop();

//Agregar un elemento al inicio
//frutas.unshift("naranja");

//Eliminar un elemento al inicio
//frutas.shift();

//Eliminar cualquier elemento del array
//Posición, cantidad a eliminar
//Si solo pongo la posición, se eliminan todas las posiciones
//frutas.splice(2, 1);

//Hace una copia de una porción de un array
//posición de inicio, la posición final sin tomar ese valor
//let porcion = frutas.slice(1, 4);
//console.log(porcion);



//console.log(frutasMayuscula);


let numeros = [1, 2, 3, 4, 5, 6, 7];

//Me devuelve un nuevo array que cumpla con una condición
let pares = numeros.filter(num => num % 2 === 0);
//console.log(pares);

//Solo me devuelve el primer elemento que cumple con la condición
let primerPar = numeros.find(num => num % 2 === 0);
//console.log(primerPar);

let suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
//console.log(suma);

let frutas = ["manzana", "fresa", "limón", "cereza", "naranja"];

//frutas.sort();

frutas.sort((a,b) => b-a);
//console.log(frutas);

let numerosDesordenados = [10, 8, 2, 1, 12, 15];
let ascendente = numerosDesordenados.sort();
let descente= numerosDesordenados.sort((a,b) => a-b);
//console.log(descente);

//console.log("Reverse: ", numerosDesordenados.reverse());

const persona = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 25,
    saludar:function(){
        console.log("Hola, soy: " + this.nombre);
    }
}

/*console.log(persona);
console.log(persona.edad);
console.log(persona.saludar());*/

const libros = [
    {titulo: "Cien Años de soledad", autor: "GGM"},
    {titulo: "El amor en los tiempos del cólera", autor: "GGM"},
    {titulo: "De la tierra a la luna", autor: "Julio Verne"},
    {titulo: "Pinocho", autor: "CC"}
]

let libroGGM = libros.filter(libro => libro.autor === "GGM");
//console.log(libroGGM);

libros.sort((a,b)=>a.titulo-b.titulo);
console.log(libros);



























