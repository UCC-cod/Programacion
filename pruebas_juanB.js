
let nombre1 = 5; 
let pi = 3.14;
var nombre2;
let nombre = "juan";

/*Metodos de string*/

//Metodo para poner texto en mayuscula
nombre = nombre.toLocaleUpperCase(); 
console.log(nombre);

//Metodo para poner texto en minuscula 
nombre = nombre.toLowerCase();
console.log(nombre);

//Metodo para saber longitud de una cadena
let longitud = nombre.length;
console.log(longitud);

//Metodo para saber si hay x cosa en texto
let coincidencia = nombre.includes("a");
console.log(coincidencia);
console.log("-----------------------------");
console.log("   ")

// numeros
let edad = "21";
console.log(typeof edad);


edad = parseInt(edad);
console.log(edad);

console.log(typeof pi);

let isNumero = Number.isInteger(edad);
console.log(isNumero);

// Tipos de funciones
//Declaradas 
function saludar(){
    return "hola";
}

let saludo = saludar();
//console.log(saludo);


function saludar2(nombre){
    return "hola " + nombre
}

let saludo2 = saludar2("Juan");
//console.log(saludo2);

saludo2 = saludar2(2015);
//console.log(saludo2);


//----Para sumar---- 
function sumar(num1=0, num2=0){
    return num1 + num2;
}

let suma = sumar(5, 7);
//console.log(suma);



//funciones expresion
const resta = function(num1=0, num2=0){
    return num1-num2;
}

//console.log(resta(4));



//----funcion flecha----

//const multiplicacion = () => 5*5;
//console.log(multiplicacion());

const multiplicacion = (num1=2, num2) => {
    num2 = 10;
    return num1*num2
};
//console.log(multiplicacion());


//----Arrays----
// los arrarys pueden ser:

let semana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
console.log(semana.length);

let pos1 = semana[9];
//semana.push("nuevo dia")  //para agregar a lo ultimo
//semana.shift();  //borra el primero
//semana.pop(); //elimina el ultimo
semana.unshift(2); //agrega al inicio 
console.log(semana);