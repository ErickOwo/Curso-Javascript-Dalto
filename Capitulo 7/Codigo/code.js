let width = window.screen.availWidth;
let height = window.screen.availHeight;
let = respuesta = false;

respuesta = confirm(`El ancho de la pantalla es ${width} y el alto es de ${height} ¿Quiere realizar la compra?`);

if(respuesta){
    alert("Se ha realizado la compra");
} else{
    alert("No se ha tomado la compra");
}

// {}[] ||