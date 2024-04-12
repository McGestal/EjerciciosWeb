let contenido = document.getElementById("contenido");
let colores = ["white","red", "green", "blue", "yellow", "orange","pink","grey","brown"];
let indice = 0;

function cambiarColor(){
    indice = indice % colores.length;
    contenido.style.backgroundColor = colores[indice];
    indice ++;
}

setInterval(cambiarColor, 1000);