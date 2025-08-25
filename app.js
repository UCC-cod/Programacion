console.log(body);

const p = document.querySelectorAll("p");
console.log(p);

const primerP = document.querySelector("p");
console.log(primerP);

const primerDia = document.querySelector("li");
console.log(primerDia);

primerDia.textContent = "lunes modificado";


const boton = document.querySelector("boton");
const mensaje = document.querySelector("mensaje");

boton.addEventListener("click", () => {
    mensaje.textContent = "hola mundo";
});

console.log(boton);
console.log(mensaje);