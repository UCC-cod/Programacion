const formulario = document.getElementById("formulario");

const password = document.getElementById("pass");

formulario.addEventListener('submit', (event)=>{

    event.preventDefault();
    if(password.length <= 8){
        alert("Contraseña es muy corta")
    }
})



