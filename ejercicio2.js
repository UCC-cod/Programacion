/*let edad = 25;

if (edad<18) {
    console.log("Eres menor de edad");
}
else if (edad < 0){
    console.log ("Edad no valida por ser negativa");
    
}
else{
    console.log("Eres menor de edad ");
}
*/

let edad2 = 24;
switch (edad2){
    case edad2>=18:
        console.log ("Eres mayor de edad");
        break;
    case edad2<18:
        console.log ("Eres menor de edad");
        break;
    default:
    console.log ("Edad no valida");
    break;
}

for(let i=0; i < 3; i++){
    console.log("Esta es la iteracion numero: "+i);
}

let frutas = ["manzana","pera","uva"];
for (let i =0; i<frutas.length; i++){
    console.log("La fruta es: "+frutas[i]);
}

for (let fruta in frutas){
    console.log("la fruta del arreglo es:"+frutas[fruta]);
}

frutas.push("naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.unshift("fresa");
console.log(frutas);

frutas.shift();
console.log(frutas);

//Posicion, canidad a eliminar (0,0)
frutas.splice(0,1);
console.log(frutas);

let porcion = frutas.slice(0,2);
console.log(porcion);

frutas.forEach(frutas => {
    console.log("La fruta es:"+frutas)
})

let numero = [1,2,3,4,5,6,7,8,9,10];
let numerosPares = numero.filter(num => num % 2 === 0)
console.log(numerosPares);  

let primerPar = numero.find(num => num % 2 === 0);
console.log (primerPar);

let suma = numero.reduce((acum,num )=> acum + num,0);
console.log(suma);

let frutas3= ["manzana","pera","uva","banana"];
frutas3.sort();
console.log(frutas3);

numerosDesordenados = [5,3,8,1,4];
numerosDesordenados.sort((a,b) => b-a);
console.log(numerosDesordenados);

frutas3.reverse();
console.log(frutas3);

const persona = {
    nombre:"Juan",
    Apellido:"Pérez",
    edad:30,
    saludar :function(){
        console.log("Hola, mi nombre es "+ this.nombre);
    }
}

const libros =  [
    {titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605},
    {titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967},
    {titulo: "1984", autor: "George Orwell", año: 1949},
]

gabriel=libros.filter(libro => libro.autor === "Gabriel García Márquez");
console.log (gabriel);

libros.sort();
console.log(libros);