let nombre1=5; 
let pi = 3.14;
var nombre2;
let nombre = "luis miguel";
let nombre4 = "MARIANO";


/*metodos de stream*/

nombre = nombre.toLocaleUpperCase(); /*convierte a mayusculas*/
nombre4 = nombre4.toLocaleLowerCase(); /*convierte a minusculas*/

console.log(typeof pi); /*convierte a string*/

console.log(nombre);
console.log(nombre4);

let longitud = nombre.length; /*longitud de la cadena*/
console.log(longitud);

let coinsidencia = nombre.includes("l"); /*verifica si existe la letra u*/
console.log(coinsidencia);

let edad = "21"; /*verifica si es un numero*/
console.log(typeof edad);  /*verifica el tipo de dato*/

edad = Number(edad);
console.log(edad); /*verifica el tipo de dato*/

edad = parseInt(edad); /*convierte a entero*/
console.log(edad); /*verifica el tipo de dato*/

let isNumber = Number.isInteger(pi); /*verifica si es un numero entero*/
console.log(isNumber); /*verifica el tipo de dato*/ 

//declaradas

function saludar(){ /*funcion declarada*/
    return 'hola mundo';
}

console.log(saludar()); /*llama a la funcion*/

function saludar2(nombre){
    return 'hola ' + nombre; /*concatenacion de cadenas*/
} /*funcion declarada con parametro*/

console.log(saludar2("papucho")); /*llama a la funcion con parametro*/


function sumar(num1, num2){ /*funcion declarada con dos parametros*/
    return num1 + num2; /*suma de dos numeros*/
}
console.log(sumar(5, 10)); /*llama a la funcion con parametros*/

//expresion de funcion
const resta = function(num1,num2){
    return num1-num2; /*resta de dos numeros*/
}

console.log(resta(6,8)); /*llama a la funcion expresion*/

//funcion flecha

/*const multiplicar = (num1,num2) => num1*num2 ; /*funcion flecha sin parametros*/
/*console.log(multiplicar(3,2)); /*llama a la funcion flecha*/

const multiplicar = (num1,num2) =>{
    num2 = 10 /*asigna un valor a num2*/
    return num1 * num2; /*funcion flecha con retorno*/
}

console.log(multiplicar(3,2)); /*llama a la funcion flecha con parametros*/


//Arrays 

let semana = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"]; /*array de dias de la semana*/

console.log(semana.length); /*longitud del array*/

let posicion1= semana[0]; /*accede al primer elemento del array*/
console.log(posicion1); /*imprime el primer elemento del array*/

semana.push("nuevo dia"); /*agrega un nuevo elemento al final del array*/
console.log(semana); /*imprime el array con el nuevo elemento*/

semana.shift(); /*elimina el primer elemento del array primero*/
console.log(semana); /*imprime el array sin el primer elemento*/

semana.pop(); /*elimina el ultimo elemento del array*/
console.log(semana); /*imprime el array sin el ultimo elemento*/

