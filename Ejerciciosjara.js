/*let nombre1 = "Andres";
const pi = 3.14;
var nombre2 = "Jara";

// Métodos String
nombre2 = nombre2.toLocaleUpperCase();

console.log(nombre2);
console.log(nombre1);
console.log(typeof pi);
// metodo longitud
let longitud =nombre2.length
console.log(longitud);

let validarletra = nombre2.includes ("j");
let validarletraJ = nombre2.includes ("J");
console.log(validarletra)
console.log(validarletraJ)

let contador = 0;
for (let i = 0; i < nombre2.length; i++) {
    if (nombre2[i].toLowerCase() === "a") {
        contador++;
    }
}
console.log(`La palabra "${nombre2}" tiene ${contador} letras "a"`);


edad = 21;
//Metodo pasar linea de caracteres como resultado a numeros 
edad = parseInt(edad);
console.log(edad)

//Metodo para validar si es numero entero 
let Isnumero = Number.isInteger(edad);
console.log(Isnumero)
// pi no es entero = resultado Falso
let Isnumeropi = Number.isInteger(pi);
console.log(Isnumeropi)
*/

//Funciones Declaradas
function saludar(){
    return "hola";
}
//Nueva variable para llamar a el resultado de la funcion Saludar 
let saludo = saludar();
console.log (saludo);

//tener en cuanta los parentesis al final de las variables , Caso contrario no sirve 
function Saludar2() {
    return "Hola Jara";
}
    let SaludaNombre = Saludar2();
    console.log (SaludaNombre);
//suma
function sumar(num1, num2){
    return num1+num2
}
let suma = sumar (5 , 6)
console.log (suma);

//resta
function resta(num1, num2){
    return num1-num2
}
let restar = resta (5 , 6)
console.log (restar);
// EN LAS FUNCIONES siempre se guardan valores primero luego de declarar la funcion para poder mostrarse en consola con el console.log
// FUNCIONES TIPO FLECHA 
const multiplicacion =(num1 , num2)=>{
    num2 = 10;
    return num1*num2
}
console.log(multiplicacion(3,2)); /* Aqui le asigno el valor 2 a num 2 , Pero . 
en la linea 72 reasigno el valor de num2 pero solamente al escribir ese return debajo 
guardo ese dato */

//ARRAYS

let semana =["lunes" , "martes" , "Miercoles" , "jueves" , "viernes"]
console.log(semana.length);

let semana1 = semana[0]
console.log(semana1)