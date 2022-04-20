"use strict";

const addZeros = n =>{
    if(n.toString().length < 2) return "0".concat(n);
    return n;
}

const valueDay = d =>{
    if(d == 0) return "Domingo";
    if(d == 1) return "Lunes";
    if(d == 2) return "Martes";
    if(d == 3) return "Miercoles";
    if(d == 4) return "Jueves";
    if(d == 5) return "Viernes";
    if(d == 6) return "Sábado";
}

const valueMonth = m =>{
    if(m == 0) return "Enero";
    if(m == 1) return "Febrero";
    if(m == 2) return "Marzo";
    if(m == 3) return "Abril";
    if(m == 4) return "Mayo";
    if(m == 5) return "Junio";
    if(m == 6) return "Julio";
    if(m == 7) return "Agosto";
    if(m == 8) return "Septiembre";
    if(m == 9) return "Octubre";
    if(m == 10) return "Noviembre";
    if(m == 11) return "Diciembre";
}

const relojTime = ()=>{
    const time = new Date();

    let hour = addZeros(time.getHours());
    let min = addZeros(time.getMinutes());
    let sec = addZeros(time.getSeconds());

    document.querySelector(".hour").textContent = hour; 
    document.querySelector(".min").textContent = min; 
    document.querySelector(".sec").textContent = sec; 
}
const actualtime = ()=>{
    const fecha = new Date();

    let day = valueDay(fecha.getDay());
    let date = fecha.getDate();
    let month = valueMonth(fecha.getMonth());
    let year = fecha.getYear() + 1900;

    document.querySelector(".day").textContent = day + ",";
    document.querySelector(".date").textContent = date + " de";
    document.querySelector(".month").textContent = month + " de";
    document.querySelector(".year").textContent = year;
}

relojTime(); 
actualtime();

setInterval(() => {
    relojTime();  
    actualtime();
}, 1000);

