const passworrd = document.getElementById('password');
const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const password2 = document.getElementById('password2');
formulario.addEventListener('submit', (event)=>{
    event.preventDefault();
    let password = passworrd.value
    if(passworrd.value.length < 8){
        alert('La contraseña debe tener al menos 8 caracteres');
    }else{
        alert('Formulario enviado correctamente');
        formulario.reset();
    }

    if (nombre.value === ""){
        alert('El campo nombre no puede estar vacio');
    }

    if(password.value == password2.value){
        alert("Contraseña correcta")
    }
    else{
        alert("Contraseña incorrecta")
    }
})