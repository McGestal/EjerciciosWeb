let elementos = document.querySelectorAll(".now");
function horaActual(){
    let fecha = new Date();
    let hora = fecha.toLocaleTimeString('es-ES');
    elementos.forEach(e => {
        e.innerText = hora;
    });
};

setInterval(horaActual, 1000);

