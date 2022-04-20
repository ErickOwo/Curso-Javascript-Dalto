"use strict";

const IDBrequest = indexedDB.open("database","1");
navigator.serviceWorker.register("sw.js");

const messages = document.getElementById("messages");
const btnSend = document.getElementById("send-message");
const textMsg = document.getElementById("write-message");

IDBrequest.addEventListener("upgradeneeded",e=>{
    console.log("Todo salió correctamente")
    const db = IDBrequest.result;
    db.createObjectStore("messages",{
        autoIncrement: true
    })
})
IDBrequest.addEventListener("success",e=>{
    readMessages();
})

btnSend.addEventListener("click",()=>{
    addObject(textMsg.value,"me");
    messages.innerHTML = "";
    readMessages();
    textMsg.value = "";
    navigator.serviceWorker.ready.then(
        res =>{
            res.active.postMessage({
                IDnav: navigator.connection.downlink,
                message: textMsg.value
            })
        }
    )
})


const createMessageHTML = (message, cl) => {
    const contMessage = document.createElement("DIV");
    contMessage.textContent = message;
    contMessage.classList.add(cl);
    return contMessage;
}

const readMessages = ()=>{
    const fragment = document.createDocumentFragment();
    const obStore = transactionOperation("readonly");
    const cursor = obStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            const msg = cursor.result.value;
            const element = createMessageHTML(msg.message, msg.id);
            fragment.appendChild(element);
            cursor.result.continue();
        } else messages.appendChild(fragment);
    })
}

const addObject = (message, id) =>{
    const obStore = transactionOperation("readwrite");
    obStore.add({message, id});
}

const transactionOperation = mode =>{
    const db = IDBrequest.result;
    const IDBtransaction = db.transaction("messages", mode);
    const obStore = IDBtransaction.objectStore("messages");

    return obStore;
}
