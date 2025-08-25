const formulario = document.getElementById("formulario");
const password = document.getElementById("pass");
const password2 = document.getElementById("passRepetida");
const nombre = document.getElementById("nombre");

formulario.addEventListener('submit', (event)=>{
    event.preventDefault();

    let pass = password.value;

    if(pass.length <= 8){
        console.log("Hizo submit");
        alert("Contraseña es muy corta")
    }
    
    if(nombre.value === ""){
        alert("el nombre no puede estar vacío");
    }

    if(password.value != password2){
        alert("Las contraseñas deben coincidir")
    }
})