"use strict";

const container = document.querySelector(".nombres");

const IDBrequest = indexedDB.open("dataBase", 1);

IDBrequest.addEventListener("upgradeneeded",()=>{
    const db = IDBrequest.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
});

IDBrequest.addEventListener("success",()=>{
    readObjects();
});

IDBrequest.addEventListener("error",(e)=>{
    console.log(e);
});

document.getElementById("addButton").addEventListener("click", ()=>{
    const nombre = document.getElementById("name").value;
    if(nombre.length > 3){
        if(document.querySelector(".possible") != undefined){
            if(confirm("Hay Objetos sin guardar ¿Desea continuar?")){
                container.innerHTML = "";
                addObject({nombre});
                readObjects();
                document.getElementById("name").value = "";
            }
        } else{
            container.innerHTML = "";
            addObject({nombre});
            readObjects();
            document.getElementById("name").value = "";
        }
    }
})

const addObject = objeto =>{
    const obStore = transactionOperation("readwrite");
    obStore.add(objeto);
}

const readObjects = ()=>{
    const fragmento = document.createDocumentFragment();
    const obStore = transactionOperation("readonly");
    const cursor = obStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            const elemento = codeHtml(cursor.result.key, cursor.result.value)
            fragmento.appendChild(elemento);
            cursor.result.continue();
        }else container.appendChild(fragmento);
    })
}

const putObject = (key, objeto) =>{
    const obStore = transactionOperation("readwrite");
    obStore.put(objeto, key);
}

const deleteObject = key =>{
    const obStore = transactionOperation("readwrite");
    obStore.delete(key);
}

const transactionOperation = (mode) =>{
    const db = IDBrequest.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");

    return objectStore;
}

const codeHtml = (id, name)=>{
    const contenedor = document.createElement("DIV");
    const nombre = document.createElement("H2");
    const options = document.createElement("DIV");
    const guardar = document.createElement("BUTTON");
    const eliminar = document.createElement("BUTTON");

    contenedor.classList.add("contenedor");
    options.classList.add("options");

    guardar.classList.add("impossible");
    guardar.textContent = "Guardar";
    eliminar.textContent = "Eliminar";

    nombre.textContent = name.nombre;

    nombre.setAttribute("contenteditable","true");
    nombre.setAttribute("spellcheck","false");

    nombre.addEventListener("keyup",()=>{
        guardar.classList.replace("impossible","possible")
    })
    guardar.addEventListener("click",()=>{
        if(guardar.className == "possible"){
            putObject(id, {nombre: `${nombre.textContent}`})
            guardar.classList.replace("possible","impossible")
        }
    })
    eliminar.addEventListener("click",()=>{
        deleteObject(id);
        setTimeout(()=>{
            container.removeChild(contenedor);
        }, 50)
    })

    options.appendChild(guardar);
    options.appendChild(eliminar);

    contenedor.appendChild(nombre);
    contenedor.appendChild(options);

    return contenedor;
}
