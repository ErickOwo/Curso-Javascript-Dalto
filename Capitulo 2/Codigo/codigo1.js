"use strict";
let free = true;

const verificacionEntrada = (edad, tiempo) =>{
    if (edad >= 18){
        if(tiempo >= 2 && tiempo < 4 && free){
            alert("Eres la primera persona en llegar después de la 2 am. Puedes pasar gratis");
            free = false;
        }
        else alert(`Podes pasar pero tenés que pagar. Son las ${tiempo}`);
    }
    else alert("Alto ahí maquinola, eres menor de edad por lo tanto no podés pasar");
}

verificacionEntrada(15,11);
verificacionEntrada(18,11.5);
verificacionEntrada(19,0);
verificacionEntrada(19,1.5);
verificacionEntrada(20,2);
verificacionEntrada(22,3);
verificacionEntrada(15,4);
//{}[]