"use strict";

const name = document.getElementById("name");
const add = document.getElementById("add");
const names = document.getElementById("names");
const del = document.getElementById("icon-delete");

if(!("Notification" in window)){
    console.log("No están permitidas las notificaciones")
}

Notification.requestPermission(()=>{
    if(Notification.permission == "granted"){
        new Notification("Wenaaaas");
    }
})

const requestIDB = indexedDB.open("data","1");

requestIDB.addEventListener("upgradeneeded",()=>{
    console.log("Todo salió correctamente");
    const db = requestIDB.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })
});
requestIDB.addEventListener("success",()=>{
    readObjects();  
})
requestIDB.addEventListener("error",()=>{
    console.log("Ha ocurrido un error");
})
add.addEventListener("click",()=>{
    if(name.value.length > 3) {
        if(document.querySelector(".possible")!= undefined) {
            if(confirm("Hay elementos sin guardar ¿Desea continuar?")){
                addObject({nombre: name.value});
                name.value = "";
                names.innerHTML = "";
                readObjects();
            }
        } else{
            addObject({nombre: name.value});
            name.value = "";
            names.innerHTML = "";
            readObjects();
        }
    }
});
del.addEventListener("dragenter",()=>{
    del.style.color = "#f42";
    del.style.transform = "scale(1.3)"
})
del.addEventListener("dragleave",()=>{
    del.style.color = "#59b";
    del.style.transform = "scale(1)";
})
del.addEventListener("dragover", e=>{
    e.preventDefault();
})
del.addEventListener("drop", e=>{
    const key = e.dataTransfer.getData("key");
    deleteObject(parseInt(key));
    names.innerHTML = "";
    readObjects();
    del.style.color = "#59b";
    del.style.transform = "scale(1)";
})

const readObjects = ()=>{
    const fragment = document.createDocumentFragment();
    const obStore = transactionOperation("readonly");
    const cursor = obStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            const element = htmlCode(cursor.result.value, cursor.result.key);
            fragment.appendChild(element);
            cursor.result.continue();
        }else names.appendChild(fragment);
    })
}
const addObject = objeto =>{
    const obStore = transactionOperation("readwrite", "Objeto agregado correctamente");
    obStore.add(objeto);
}
const putObject = (key, objeto) =>{
    const obStore = transactionOperation("readwrite", "Objeto modificado correctamente");
    obStore.put(objeto, key);
}
const deleteObject = key =>{
    const obStore = transactionOperation("readwrite", "Objeto eliminado correctamente");
    obStore.delete(key)
}
const transactionOperation = (mode, msg)=>{
    const db = requestIDB.result;
    const IDBtransaction = db.transaction("nombres", mode);
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete",()=>{
        new Notification(msg);
    })
    return objectStore;
}

const htmlCode = (name, id) => {
    const container = document.createElement("DIV");
    const content = document.createElement("H2");
    const saveButton = document.createElement("BUTTON");

    saveButton.textContent = "Guardar";
    content.textContent = name.nombre;

    container.classList.add("container");
    content.classList.add("content");
    saveButton.id = "saveButton"
    saveButton.classList.add("impossible");

    content.setAttribute("contentEditable","true")

    container.appendChild(content);
    container.appendChild(saveButton);

    content.addEventListener("keyup", ()=>{
        saveButton.classList.replace("impossible","possible")
    })

    saveButton.addEventListener("click",()=>{
        if(saveButton.className = "possible"){
            putObject(id,{nombre: content.textContent});
            saveButton.classList.replace("possible","impossible");
        }
    })

    container.addEventListener("dragstart",e=>{
        e.dataTransfer.setData("key",id);
        e.dataTransfer.setData("element", e.target)
    })

    return container;
}
