let boton = document.getElementById("snd-nota");

boton.addEventListener("click",()=>{
    let mensaje = [];
    try{
        let nota = parseInt(document.getElementById("nota").value);
        if(isNaN(nota)){
            throw "Gracioso";
        }
        mensaje[0] = verificarResultado(9, 7, nota);
        mensaje[1] = crearMensaje(nota);
        console.log(nota)
        if(nota > 0 && nota <= 10){
            modal(mensaje[0],mensaje[1]);
        }
        else{
            alert("no puede ingresar una nota menor a 0 ni mayor a 10");
        }   
    }
    catch(error){
        console.log("¿Sos gracioso?");
        console.log("He notado que intentaste Hackear el sitio");
    }

});
 
const crearMensaje = (nota)=>{
    let mensaje;
    switch(nota){
        case 1: mensaje = "Que HDP";
        break;
        case 2: mensaje = "Sos malísimo para mi materia";
        break;
        case 3: mensaje = "Re mal";
        break;
        case 4: mensaje = "Mal";
        break;
        case 5: mensaje = "Insuficiente";
        break;
        case 6: mensaje = "Regular";
        break;
        case 7: mensaje = "¡Bien!";
        break;
        case 8: mensaje = "¡Buenísimo!";
        break;
        case 9: mensaje = "!Excelente!";
        break;
        case 10: mensaje = "¡El mejor hijo de su pinshi madre!";
        break;
        default:
        null;
    }
    return `<span class="mensaje">${mensaje}</span>`;
}
 
const verificarResultado = (nota1, nota2, nota3)=>{
    let promedio = Math.round((nota1 + nota2 + nota3) / 3);
    if(promedio > 7){
        return `<h2 class="resultado green">Aprobado</h2>`
    }
    return `<H2 class="resultado red">Reprobado</h2>`
}
const modal = (resultado, mensaje)=>{
    const modal = document.createElement("DIV");
    const contenedor = document.querySelector(".modal-background");
    modal.classList.add("modal");
    modal.innerHTML = resultado + mensaje;
    contenedor.appendChild(modal);
    contenedor.style.display = "flex";
    contenedor.style.animation = "aparecer 1s forwards";
}

//{}[]||