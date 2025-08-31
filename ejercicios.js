/*let nombre1=5;
let pi = 3.14;
var nombre2;
let nombre = "adriana";


/*Métodos de string
nombre = nombre.toUpperCase(); //Método para poner el texto en may
console.log(nombre);

nombre = nombre.toLowerCase(); //Método para poner el texto en min
console.log(nombre);

let longitud = nombre.length;
console.log(longitud);

let coincidencia = nombre.includes("d");
console.log(coincidencia);


let edad = "37";
console.log(typeof edad);

edad = Number(edad);
console.log(edad);

edad = parseInt(edad);
console.log(edad);

console.log(typeof pi);
//pi = parseFloat(pi);
console.log(typeof pi);
let isNumero = Number.isInteger(edad);
console.log(isNumero);*/





//Declaradas
function saludar(){
    return "Hola";
}
let saludo = saludar();
//console.log(saludo);

function saludar2(nombre){
    return "Hola " + nombre;
}

let saludo2 = saludar2("Adriana");
//console.log(saludo2);

saludo2 = saludar2(2015);
//console.log(saludo2);

function sumar(num1=0, num2=0){
    //console.log("número de la función " + num2);
    return num1+num2;
}

let suma = sumar(5, 7);
//console.log(suma);





//Expresión
const resta = function(num1=0, num2=0){
    return num1-num2;
}
//console.log(resta(4));





//Flecha
const multiplicacion = (num1=1, num2) => {
    num2 = 10;
    return num1*num2
};
//console.log(multiplicacion());



//Arrays
let semana = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
console.log(semana.length);

let pos1 = semana[8];
//semana.push("nuevo día") Agrega en la última
//semana.shift(); //Elimina el primero
//semana.pop(); //Elimina el último
//semana.unshift(2); //Agrega al inicio
console.log(semana);























