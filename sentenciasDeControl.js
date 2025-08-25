/*let edad = -3;
switch(edad) {
    case edad >= 18:
        console.log("Eres mayor de edad");
        break;
    case edad <18:
        console.log("Eres menor de edad");
        break;
    default:
        console.log("Edad no es válida");
}*/

/*for (let i=1; i<3; i++) {
    console.log("Esta es la iteracion #: " + i );

}*/

// let frutas = ["manzana", "pera", "uva", "sandia", "melon", "kiwi"];
    /*for(let fruta in frutas) {
            console.log("la fruta es: " + frutas[fruta]);
    }

    //Agregar un elemento al inicio del array
    frutas.unshift("naranja");
    console.log(frutas);*/

    //Eliminar un elemento  al inicio
    //frutas.shift();

    //Eliminar un elemento en cualquier posicion
    //posicion , cantidad a eliminar
    // si solo pongo la posicion elimina desde esa posicion hasta el final
   // frutas.splice(2,1);

   // let porcion = frutas.slice(1,4); //hace una copia del array desde la posicion 1 hasta la 4 (sin incluir la 4)
   // console.log(porcion);

/*let frutas = ["manzana", "pera", "uva", "sandia", "melon", "kiwi"];
frutas.forEach(frutas => {
    console.log("la fruta es: " + frutas);
}
) */

/*let frutas = ["manzana", "pera", "uva", "sandia", "melon", "kiwi"];
let frutasMayuscula = frutas.map(fruta =>fruta.toUpperCase()); 
console.log(frutasMayuscula);*/

let numeros = [1,2,3,4,5,6,7]; //me devuelve un nuevo array con los numeros pares
/*let pares= numeros.filter(numero => numero % 2 === 0);
console.log(pares);
//me devuelve el primer numero par que encuentra
let primerPar= numeros.find(numero => numero % 2 === 0);
console.log(primerPar);*/

let suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
//console.log(suma);

let frutas = ["manzana", "pera", "uva", "sandia", "melon", "kiwi"];
 frutas.sort(); //ordena alfabeticamente
// console.log(frutas);

 frutas.sort((a,b) => b-a); //ordena de la z a la a
 //console.log(frutas);

const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad : 25,
    saludar: function() {
        console.log("Hola,soy " + this.nombre);
    }
}

/*console.log(persona);
console.log(persona.edad);
console.log(persona.saludar());*/

const libros =
[
    {titulo: "El Quijote", autor: "Miguel de Cervantes", anio: 1605},
    {titulo: "Cien años de soledad", autor: "Gabriel Garcia Marquez", anio: 1967},
    {titulo: "La ciudad y los perros", autor: "Mario Vargas Llosa", anio: 1963},
    {titulo: "La casa de los espiritus", autor: "Isabel Allende", anio: 1982},
    
]
let libroGGm = libros.filter(libro => libro.autor === "Gabriel Garcia Marquez");
//console.log(libroGGm);

libro.sort((a,b) => a.titulo - b.titulo); //ordena alfabeticamente por titulo