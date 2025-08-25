const formulario = document.getElementById("formulario");
const pasword = document.getElementById("pass");
const nombre = document.getElementById("nombre");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let pass = pasword.value;
    if (pasword.value.length <= 8) {
        
        console.log("la contraseña es muy corta");
        alert("la contraseña es muy corta");
    }

    if (nombre.value === "") {
        alert("el campo nombre es obligatorio y no puede estar vacio");
        console.log("el campo nombre es obligatorio y no puede estar vacio");
    }
});