let contenido = document.getElementById("contenido");

function horaActual(){
    let fecha = new Date();
    let hora = fecha.toLocaleTimeString('es-ES');
    contenido.innerText = hora;
};

setInterval(horaActual, 1000);

