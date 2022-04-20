"use strict";

const language = localStorage.getItem("language");
let nameData = localStorage.getItem("name");
const overlay = document.querySelector(".overlay-modal");
const buttonEspanish = document.querySelector(".es");
const buttonEnglish = document.querySelector(".en");
const contentContainer = document.querySelector(".content-container");

document.getElementById("reloadBtn").addEventListener("click", ()=> reload());

const cerrarModal = language =>{
    overlay.style.animation = "disappear 2s forwards"
    setTimeout(()=>{
        overlay.style.display = "none";
        if(language == "es") contentSpanish();
        else if(language == "en") contentEnglish();
    }, 1000)
}

const setLanguage = ()=>{
    buttonEspanish.addEventListener("click",()=>{
        let leng = buttonEspanish.value;
        localStorage.setItem("language", leng);
        cerrarModal(leng);
    })
    buttonEnglish.addEventListener("click",()=>{
        let leng = buttonEnglish.value;
        localStorage.setItem("language", leng);
        cerrarModal(leng);
    })
}
const createElements = (t, p)=>{
    const content = document.createElement("DIV");
    const title = document.createElement("H2");
    const parraf = document.createElement("P");

    content.classList.add("content");

    title.textContent = t;
    parraf.textContent = p;

    content.appendChild(title);
    content.appendChild(parraf);
    contentContainer.appendChild(content);
}

const contentSpanish = ()=>{
    contentContainer.innerHTML = "";
    let title = "Has escogido visualizar la página en Español";
    let parraf = `Bienvenido a la página, ${nameData}. 
    Esta es una muestra de como puedes visualizar la página en distintos idiomas atravez de código.`;
    createElements(title, parraf);
}
const contentEnglish = ()=>{
    contentContainer.innerHTML = "";
    let title = "You have choose the english language to the page";
    let parraf = `Welcome to the page, ${nameData}. 
    This is a show of how you can see a page in differents types of languages with code.`;
    createElements(title, parraf);
}
const languageManager = ()=> {
    if(language === null){
        overlay.style.display = "flex";
        overlay.style.animation = "appear .2s forwards"
        setLanguage();
    }
    else {
        if(language == "es") contentSpanish();
        else if(language == "en") contentEnglish();
    }
}
const reload = ()=>{
    localStorage.removeItem("language");
    location.reload();
}
if(nameData === null) {
    nameData = prompt("Introduzca su nombre: ");
    localStorage.setItem("name",nameData);
    
    languageManager();
}
else {
    languageManager();
}

//[] {}