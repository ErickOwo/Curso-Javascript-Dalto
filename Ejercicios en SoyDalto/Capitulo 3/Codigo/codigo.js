"use strict";

let off = true;

class Celular {
    constructor(color, weight, size, rc, ram){
        this.color = color;
        this.weight = weight;
        this.size = size;
        this.rc = rc;
        this.ram = ram;
    }
    information(){
        document.write(`
            <b style="color: black">Color: </b><b style="color: green">${this.color}</b><br>
            <b style="color: black">Peso: </b><b style="color: green">${this.weight}</b><br>
            <b style="color: black">Tamaño: </b><b style="color: bgreen>${this.size}</b><br>
            <b style="color: black">Resolución de Cámara: </b><b style="color: green">${this.rc}</b><br>
            <b style="color: black">Memoria RAM: </b><b style="color: green">${this.ram}</b>
            <br><br>
        `)
    }
    pushOn(){
        if(off){
            alert("El celular está iniciandose");
            alert("El celular está prendido");
            off = false;
        } else{
            alert("El celular se está apagando");
            alert("El celular se ha apagado");
            off = true;
        }
    }
    reset(){
        if(off == false){
            alert("El celular se está reiniciando");
            alert("El celular se ha reiniciado");
        }
    }
    takePicture(){
        if(off == false) alert(`Fóto tomada en una resolución de ${this.rc}`)
    }
    record(){
        if(off == false) alert(`Grabando video en una resolución de ${this.rc}`)
    }
}

class CelularAltaGama extends Celular{
    constructor(color, weight, size, rc, ram, rce){
        super(color, weight, size, rc, ram);
        this.rce = rce;
    }
    information(){
        document.write(`
            <b style="color: black">Color: </b><b style="color: blue">${this.color}</b><br>
            <b style="color: black">Peso: </b><b style="color: blue">${this.weight}</b><br>
            <b style="color: black">Tamaño: </b><b style="color: bblue>${this.size}</b><br>
            <b style="color: black">Resolución de Cámara: </b><b style="color: blue">${this.rc}</b><br>
            <b style="color: black">Resolución de Cámara Extra: </b><b style="color: blue">${this.rce}</b><br>
            <b style="color: black">Memoria RAM: </b><b style="color: blue">${this.ram}</b>
            <br><br>
        `)
    }
    slowRecord(){
        if(off == false) alert(`Grabando video lento en una resolución de ${this.rce}`);
    }
    facialRecognition(){
        if(off == false) alert(`Empezando reconocimiento facial`);
    }
}

const celular1 = new Celular("Negro", "1kg", '7"', "720p", "3GB");
const celular2 = new Celular("Gris", "1.2kg", '7.2"', "720p", "2.5GB");
const celular3 = new Celular("Blanco", "1.3kg", '7.3"', "720p", "3GB");

const celular4 = new CelularAltaGama("Blanco", "1kg", '8"', "1080p", "4GB","720p");
const celular5 = new CelularAltaGama("Gris", "1.1kg", '7.8"', "1080p", "3GB","720p");

celular1.information();
celular2.information();
celular3.information();

celular4.information();
celular5.information();

// celular1.pushOn();
// celular1.reset();
// celular1.takePicture();
// celular1.record();
// celular1.pushOn();

celular4.pushOn();
celular4.slowRecord();
celular4.facialRecognition();
celular4.pushOn();

// {}[]