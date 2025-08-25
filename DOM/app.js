const logo = document.getElementById
console.log(logo);

const body = document.getElementsByClassName("body");
console.log(primerP);

const primerDia = document.querySelector("li");
console.log(primerDia);

const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

boton.addEventListener('click', ()=>{
    mensaje.textContent("Se hizo click")
})
