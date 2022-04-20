"use strict";

let installed = false;
let closed = true;

class App{
    constructor(downloads, stars, weight){
        this.downloads = downloads;
        this.stars = stars;
        this.weight = weight;
    }
    information(){
        document.write(`
             <b>Descargas: </b><b style="color: green">${this.downloads}</b><br>
             <b>Puntuación: </b><b style="color: green">${this.stars}</b><br>
             <b>Peso: </b><b style="color: green">${this.weight}</b><br>
             <br><br>
        `);
    }
    open(){
        if(installed && closed){
            alert("La aplicación se ha iniciado");
            closed = false;
        }
    }
    close(){
        if(installed && closed != true){
            alert("La aplicación se ha cerrado");
            closed = true;
        }
    }
    install(){
        if(installed != true){
            alert("La aplicación se ha instalado correctamente");
            installed = true
        }
    }
    uinstall(){
        if(installed){
            alert("La aplicación se ha desinstalado correctamente");
            installed = false;
        }
    }
}

const app1 = new App("5,000","4 estrellas","500 MB");
const app2 = new App("4,500","4.3 estrellas","800 MB");
const app3 = new App("15,000","3 estrellas","300 MB");
const app4 = new App("50,000","3.5 estrellas","1.5 GB");
const app5 = new App("5,700","4 estrellas","520 MB");

app1.information();
app2.information();
app3.information();
app4.information();
app5.information();

app1.install();
app1.open();
app1.close();
app1.uinstall();


// {}[]