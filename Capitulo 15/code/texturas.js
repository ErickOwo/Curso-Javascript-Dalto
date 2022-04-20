"use strict";

const zona = document.querySelector(".zona-arrastre");
const texto = document.querySelector(".texto");

for(let i = 1; i < document.querySelector(".texturas").children.length + 1; i++){
    document.getElementById(`textura-${i}`).addEventListener("dragstart", e =>{
        e.dataTransfer.setData("fondo",i);
    })
}

zona.addEventListener("dragover", e => e.preventDefault());

zona.addEventListener("dragenter", e => {
    if(texto.style.display != "none"){
        zona.style.border = "dashed #000 4px";
        zona.background = "#267";
        texto.style.color = "#000";
    }
});

zona.addEventListener("dragleave", e => {
    if(texto.style.display != "none"){
        zona.style.border = "dashed #333 4px";
        zona.background = "#489";
        texto.style.color = "#333";
    }
});

zona.addEventListener("drop", e=>{
    let n = e.dataTransfer.getData("fondo");
    if(n != ""){
        zona.style.background = `url(texturas/fondo${n}.png) no-repeat center`
        zona.style.backgroundSize = "cover";
        zona.style.border = "none";
        texto.style.display = "none";
    }
});
//[] {}