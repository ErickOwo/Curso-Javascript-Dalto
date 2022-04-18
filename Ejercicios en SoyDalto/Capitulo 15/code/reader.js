"use strict";

const archivo = document.getElementById("archivo");
const fragmento = document.createDocumentFragment();
const contenedor = document.querySelector(".galeria");

archivo.addEventListener("change",(e)=>{
    leerArchivo(archivo.files);
})

const leerArchivo = (archivos)=>{
    for(let i = 0; i < archivos.length; i++){
        const reader = new FileReader();
        
        reader.readAsDataURL(archivos[i]);

        reader.addEventListener("load",e=>{
            const img = document.createElement("IMG");
            img.src = e.currentTarget.result;
            fragmento.appendChild(img);
            if(i+1 == archivos.length) contenedor.appendChild(fragmento);
        })
    }
}
