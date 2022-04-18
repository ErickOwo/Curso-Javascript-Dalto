const container = document.querySelector(".flex-container");
const fragmento = document.createDocumentFragment();

const crearLlave = (name, model, price) =>{
    let div = document.createElement("DIV");
    let contImg = document.createElement("DIV");
    contImg.classList.add("cont-img");
    let imagen = document.createElement("IMG");
    imagen.setAttribute("src","IMG/llave.png");
    imagen.classList.add("img");
    contImg.appendChild(imagen);
    let nombre = document.createElement("H3");
    nombre.innerHTML = name;
    let modelo = document.createElement("P");
    modelo.innerHTML = model;
    let precio = document.createElement("B"); 
    precio.innerHTML = price;
    div.appendChild(contImg);
    div.appendChild(nombre);
    div.appendChild(modelo);
    div.appendChild(precio);
    return div;
}

for(let i=0; i < 20; i++){
    let div = document.createElement("DIV");
    let modelo = Math.round(Math.random()*1000+1000);
    let precio = Math.round((Math.random()*30+20));
    
    div = crearLlave(`LLave ${i+1}`,`Modelo ${modelo}`,`Q. ${precio}.00`);
    fragmento.appendChild(div);
    div.classList.add("item");
    div.classList.add(`item-${i+1}`);
    div.tabIndex = i;
    div.addEventListener("click",()=>{
        document.querySelector(".key-data").value = modelo;
    })
}

container.appendChild(fragmento);



// {}[]