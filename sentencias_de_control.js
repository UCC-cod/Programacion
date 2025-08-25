//let edad = 25;
/*if(edad >= 18){
    console.log("es mayor de edad");
}

else if(edad <  0){
    console.log("edad no valida");
}
else{
    console.log("es menor de edad");
}*/


/*let edad = 7;

switch(edad){  //estructura de un switch
    case edad >= 18:
        console.log("es mayor de edad");
        break;
    case edad <= 18:
        console.log("es menor de edad");
        break;
    default:
        console.log("edad no valida");
        break;
}*/

for(let i = 0; i <= 10; i++){
    console.log("iteracion " + i);
    
}

let frutas = ["manzana", "pera", "uva", "sandia", "melon"];

/*for(let fruta in frutas){
    console.log("fruta: " + frutas[fruta]);
}*/

/*frutas.push("naranja")

console.log(frutas);

frutas.pop()

console.log(frutas);
frutas.shift()

frutas.unshift("melon")
console.log(frutas);


frutas.splice(1,2)//en el parentesis el 1 es la posicion del Array, y el 2 es la cantidad a eliminar
console.log(frutas);

let porcion = frutas.slice(1,4);

console.log(porcion);
console.log(frutas);

*/

/*frutas.forEach(fruta =>{
    console.log("la fruta es" + fruta);
    
    
})*/


let numeros = [1,2,3,4,5,6,7]

/*let pares = numeros.filter(num => num %2 == 0)

console.log(pares);*/


/*let primerPar = numeros.find(num=> num % 2 === 0)

console.log(primerPar);*/

//let unicoValor = numeros.reduce((acumulador,num) => acumulador + num, 0)

//console.log(unicoValor);



//let frutas1 = ["manzana", "pera", "uva", "sandia", "melon"];

//frutas1.sort()
//frutas1.reverse()
//console.log(frutas1);

const persona ={
    nombre : "juan",
    apellido : "Pares",
    edad: 25,

}

/*saludar:function() {
    console.log("hola, soy " + this.nombre);
    
}
console.log(persona);
console.log(persona.edad);
console.log(persona.saludar);*/


const libros = [
    {titulo: "cien años de soledad", autor: "GGM"},
    {titulo: "el amor en los tiempos del colera", autor: "GGM"},
    {titulo: "de la tierra en la luna", autor: "julio venedicto"},
    {titulo: "pinocho", autor: "CC"}

]

let librosGGM = libros.filter(libro => libro.autor === "GGM");
console.log(librosGGM);
