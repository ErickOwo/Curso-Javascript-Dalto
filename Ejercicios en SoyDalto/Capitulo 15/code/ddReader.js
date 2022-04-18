"use trict";

const zona = document.querySelector(".zona");
const p = document.querySelector(".zona p");
const res = document.querySelector(".archivos");
const barra = document.querySelector(".barra-de-carga");

zona.addEventListener("dragover", e =>{
    e.preventDefault();
    p.style.color = "#333";
    zona.style.border = `dashed 5px #333`;
})
zona.addEventListener("dragleave", e =>{
    e.preventDefault();
    p.style.color = "#777";
    zona.style.border = `dashed 5px #777`;
})
zona.addEventListener("drop", e =>{
    e.preventDefault();
    p.style.color = "#fff";
    zona.style.border = `solid 5px #fff`;
    cargarArchivo(e.dataTransfer.files);
})

const archivoImg = (archivo, num)=>{
    const fragmento = document.createDocumentFragment();
    for(let i=0; i <= num; i++){
        const img = document.createElement("IMG");
        const reader = new FileReader();
        reader.readAsDataURL(archivo[i]);
        reader.addEventListener("progress",(e)=>{
            let carga = Math.round(e.loaded / archivo[i].size * 100);
            p.textContent = `${carga}%`
            barra.style.width = `${carga}%`;
        })
        reader.addEventListener("load",(e)=>{
            p.textContent = "¡Completado!"
            p.style.color = "rgb(8, 223, 8)";
            zona.style.border = `solid 5px rgb(8, 223, 8)`;
            let url = URL.createObjectURL(archivo[i]);
            img.src = url;
            fragmento.appendChild(img);
            if(archivo.length == i+1) res.appendChild(fragmento);
        })
    }
}

const archivoVideo = (archivo, num)=>{
    const fragmento = document.createDocumentFragment();
    for(let i=0; i <= num; i++){
        const vid = document.createElement("VIDEO");
        const reader = new FileReader();
        reader.readAsArrayBuffer(archivo[i]);
        reader.addEventListener("progress",(e)=>{
            let carga = Math.round(e.loaded / archivo[i].size * 100);
            p.textContent = `${carga}%`
            barra.style.width = `${carga}%`;
        })
        reader.addEventListener("load",(e)=>{
            p.textContent = "¡Completado!"
            p.style.color = "rgb(8, 223, 8)";
            zona.style.border = `solid 5px rgb(8, 223, 8)`;
            let video = new Blob([new Uint8Array(e.currentTarget.result)])
            let url = URL.createObjectURL(video);
            vid.src = url;
            fragmento.appendChild(vid);
            vid.play()
            if(archivo.length == i+1) res.appendChild(fragmento);
        })
    }
}

const archivoTxt = (archivo, num)=>{
    const fragmento = document.createDocumentFragment();
    for(let i=0; i <= num; i++){
        const parrafo = document.createElement("P");
        const reader = new FileReader();
        reader.readAsText(archivo[i]);
        reader.addEventListener("progress",(e)=>{
            let carga = Math.round(e.loaded / archivo[i].size * 100);
            p.textContent = `${carga}%`
            barra.style.width = `${carga}%`;
        })
        reader.addEventListener("load",(e)=>{
            p.textContent = "¡Completado!"
            p.style.color = "rgb(8, 223, 8)";
            zona.style.border = `solid 5px rgb(8, 223, 8)`;
            parrafo.textContent = e.currentTarget.result;
            fragmento.appendChild(parrafo);
            if(archivo.length == i+1) res.appendChild(fragmento);
        })
    }
}

const cargarArchivo = (archivo)=>{
    for(let i=0; i < archivo.length; i++){
        if(   archivo[i].name.endsWith(".png") 
           || archivo[i].name.endsWith(".jpg")
           || archivo[i].name.endsWith(".jpeg")
        ) {
            if (i+1 == archivo.length) archivoImg(archivo, i);
        }
        else if(archivo[i].name.endsWith(".mp4")) {
            if (i+1 == archivo.length) archivoVideo(archivo, i);
        }
        else if(archivo[i].name.endsWith(".txt")
             || archivo[i].name.endsWith(".html")
             || archivo[i].name.endsWith(".css")
             || archivo[i].name.endsWith(".js")
        ) {
            if (i+1 == archivo.length) archivoTxt(archivo, i);
        }
        else p.textContent = "Archivo no Valido";
    }    
}

//||