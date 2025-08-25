const logo = document.getElementById("logo");
console.log(logo);

const body = document.getElementsByClassName("body");
console.log(body);

const p = document.querySelectorAll("p");
console.log(p);

const primerP = document.querySelector("p");
console.log(primerP);

const primerDia = document.querySelector("li");
console.log(primerDia);

primerDia.textContent = "Primer día de la semana";

const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener('click', ()=>{
    mensaje.textContent = "Se hizo click";
})





