console.log("Si esa conectado")

const logo = document.getElementById("logo")
console.log(logo)

const body = document.getElementsByClassName("container")
console.log(body)

const p = document.querySelectorAll("p")
console.log(p)

const primerP = document.querySelector("p")
console.log(primerP)

const primerdia  = document.querySelector("li")
console.log(primerdia)

primerdia.textContent = "Primer dia de la semana"

const boton = document.getElementById("boton")
const mensaje = document.getElementById("mensaje")

boton.addEventListener('click', () => {
    mensaje.textContent = "Se hizo click"
})


