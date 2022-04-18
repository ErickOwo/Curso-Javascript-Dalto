const formulario = document.getElementById("formulario-1");
const divResultado = document.createElement("DIV");
divResultado.classList.add("resultado");
formulario.appendChild(divResultado);

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error){
        divResultado.innerHTML = error;
        divResultado.classList.add("red");
    }
    else{
        divResultado.innerHTML = "Tu solicitud ha sido enviada correctamente";
        divResultado.classList.add("green");
        divResultado.classList.remove("red");
    }
});
const validarCampos = ()=>{
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const materiaValue = materia.value.trim();

    if(!/[a-z]{3,40}/i.test(nameValue) || /[\d\-\\\/@!?¿¡_\[\]\(\)]+/.test(nameValue)){
        return error = `El nombre no puede contener menos de 3 o más de 40 letras, ni números, ni los siguientes caracteres "-\/¡!¿?_[]()"`;

    }
    else if(!/[\w\.]{5,30}\+?\w{0,10}@[\w\.\-]{3,}\.\w{2,3}/i.test(emailValue)){
        return error = "El email no es valido";
    }
    else if(!/\w{4,15}/i.test(materiaValue)){
        return error = "La materia no es valida";
    }
}

//{}[] ||

