"use strict";

const mostrarHelado = (nombre, dinero) =>{
    if (dinero >= .6 && dinero < 1) {
        alert(`${nombre}, comprate el helado de agua`);
        alert(`Y te sobran ${dinero-.6}`)
    }
    else if (dinero >= 1 && dinero < 1.6) {
        alert(`${nombre}, comprate el helado de crema`);
        alert(`Y te sobran ${dinero-1}`)
    }
    else if (dinero >= 1.6 && dinero < 1.7) {
        alert(`${nombre}, comprate el helado de heladix`);
        alert(`Y te sobran ${dinero-1.6}`)
    }
    else if (dinero >= 1.7 && dinero < 1.8) {
        alert(`${nombre}, comprate el helado de heladovich`);
        alert(`Y te sobran ${dinero-1.7}`)
    }
    else if (dinero >= 1.8 && dinero < 2.9) {
        alert(`${nombre}, comprate el helado de helardo`);
        alert(`Y te sobran ${dinero-1.8}`)
    }
    else if (dinero >= 2.9) {
        alert(`${nombre}, comprate el helado de confites o el pote 1/4`);
        alert(`Y te sobran ${dinero-2.9}`)
    }
    else alert(`No te alcanza para ningún helado pobre de mierda`);
}

const elementos = {
    nombres: ["Roberto", "Rodrigo", "Cofla"],
    dinero: [0, 0, 0]
}

for(const elemento in elementos["nombres"]){
    elementos["dinero"][elemento] = parseFloat(prompt(`¿Cuanto dinero tenés ${elementos["nombres"][elemento]}?`));
}

for(const elemento in elementos["nombres"]){
    mostrarHelado(elementos["nombres"][elemento],elementos["dinero"][elemento]);
}

//{}[]