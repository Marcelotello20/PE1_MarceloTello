

let saludoIntro= "¡Hola! es un gusto";
let menorDeEdad= "Al ser menor te recomendamos que para comprar tengas el consentimiento de tus padres o un adulto a cargo de ti.";

// Introduccion datos - Nombre y Apellido
let nombreIntroducido = prompt("Introduce tu nombre:")
let apellidoIntroducido = prompt("Introduce tu apellido:")
let nombreCompleto = nombreIntroducido + " " + apellidoIntroducido ;

function saludoNombre () {
    if ((nombreIntroducido === "") || (apellidoIntroducido === "")){
        alert ("Completar datos solicitados porfavor");
    } else {
        alert ( saludoIntro + " " + nombreCompleto);
        let edadIntroducida = prompt("Introduce tu edad:");
        mensajeEdad(edadIntroducida);
    }    
}

// Introducción datos - Edad

function mensajeEdad(edad) {
    if ( edad === "") {
        alert("Introduzca su edad porfavor");
    } else if (edad >= 18){
        alert("Eres mayor de edad y puedes disfrutar del contenido completo de nuestra sitio.");
    } else {
        alert(menorDeEdad);
    }
}

saludoNombre();

// Que productos buscas? Variable y Funcion para redirigir el mensaje

let productoIntroducido = prompt("¿Cual es el producto que buscas?Beat, Grabación o Producción Completa?");
productoIntroducido = productoIntroducido.toLowerCase();

function productoMensaje() {
    if ( productoIntroducido === "") {
        alert ("Elegir una de las opciones porfavor");
    } else if (( productoIntroducido === "beat" ) || ( productoIntroducido === "beats" )){
        alert ("Elegiste beat" + " " + nombreCompleto + ", el siguiente paso es que me hables sobre tu proyecto");
        let tuBeat = prompt("Cuentame sobre tu proyecto, la referencia , su concepto, etc. y te intentare responder lo mas rápido para proceder a trabajar. Muchas gracias.");
        return tuBeat;
    } else if (( productoIntroducido === "grabacion" ) || ( productoIntroducido === "grabación")) {
        alert ("Elegiste grabación" + " " + nombreCompleto + ", el siguiente paso es que me hables sobre tu proyecto");
        let tuGrabacion = prompt("Cuentame sobre tu proyecto, si posees la instrumental , su concepto, etc. y te intentare responder lo mas rápido para proceder a trabajar. Muchas gracias.");
        return tuGrabacion;
    } else if (( productoIntroducido === "produccion completa" ) || ( productoIntroducido === "producción completa")) {
        alert ("Elegiste producir el beat y la grabacion en promo" + " " + nombreCompleto + ", el siguiente paso es que me hables sobre tu proyecto");
        let tuGrabacion = prompt("Cuentame sobre tu proyecto, si ya tienes alguna maqueta, alguna referencia, su concepto, etc. y te intentare responder lo mas rápido para proceder a trabajar. Muchas gracias.");
        return tuGrabacion;
    }
}

productoMensaje();

