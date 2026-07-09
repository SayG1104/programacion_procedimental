console.log("Hola, mundo!");
let nombre = document.getElementById("nombre").value;
let apellido = document.getElementById("apellido").value;
let tipo_documento = document.getElementByName("tipo_documento").value;
let numero_documento = document.getElementByName("numero_documento").value;
let telefono = document.getElementById("telefono").value;
let correo_electronico = document.getElementById("correo_electronico").value;
let genero = document.getElementByName("genero").value;
let cargo = document.getElementByName("cargo").value;
let fecha_nacimiento = document.getElementById("fecha_nacimiento").value;
let contraseña = document.getElementById("contraseña").value;

function ValidarDatos(){

    if(!/^[a-zA-Z]+$/.test(nombre)){
        console.log("El nombre solo debe contener letras");
    }

    if(!/^[a-zA-Z]+$/.test(apellido)){
        console.log("El apellido solo debe contener letras");
    }

    if(!/^[0-9]+$/.test(numero_documento)){
        console.log("El número de documento no puede tener letras");
    }

    if(telefono.length < 10){
        console.log("El teléfono debe tener mínimo 10 números");
    }

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)){
        console.log("El correo es inválido");
    }
}