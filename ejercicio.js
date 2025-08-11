let Variable=5;
const pi = 3.1416;
var nombre = "Juan";
let longitd = 0;
let edad = "19";

nombre = nombre.toUpperCase();
console.log(nombre); 

nombre = nombre.toLowerCase();
console.log(nombre); 

let longitud = nombre.length;
console.log(longitud); 

let concidencia = nombre.includes("a");
console.log(concidencia); 

for (let i = 0; i < nombre.length; i++) {
    if (nombre[i] === "a") {
        console.log("Encontré una a");
    }
}

console.log(typeof edad);

edad = parseInt(edad);
console.log(edad);

console.log(typeof pi);

let isNumero = Number.isInteger(edad);
console.log(isNumero);




function saludar() {
    return "Hola, ¿cómo estás?";
}

let saludo = saludar();
console.log(saludo);

function saludar2(nombre){
    return "Bien y tú?:"+nombre;
}
let saludo2 = saludar2("Santiago")
console.log(saludo2);


function sumar(num = 0,num2 = 0) {
    console.log("Parametro: "+num2);
    return num + num2;
}
let resultado = sumar(5, 10);
console.log("El resultado de la suma es de: "+resultado);


const resta = function(num1,num2) { 
    return num1 - num2;

}
console.log("El resultado de la resta es de :"+ resta(8,7));

const multiplicar = (num1, num2) =>{
    num2 = 10
    return num1 * num2;
};
console.log("El resultado de la multiplicacion "+multiplicar(5, 6));

let semana= ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
semana.push("Feriado");
console.log(semana);

semana.shift();
console.log(semana);

semana.pop();//
console.log(semana);


console.log("Tiene siete dias:"+semana.length);
let posicion = semana[0]
console.log("El primer dia de la semana es: "+posicion);