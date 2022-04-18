const formulario = document.getElementById("formulario-1");
const divResultado = document.createElement("DIV");
divResultado.classList.add("resultado");
formulario.appendChild(divResultado);

const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");

boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let error = validarCampos();
    if (error[0]){
        divResultado.innerHTML = error[1];
        divResultado.classList.add("red");
    }
    else{
        divResultado.innerHTML = "Tu solicitud ha sido enviada correctamente";
        divResultado.classList.add("green");
        divResultado.classList.remove("red");
    }
});
const validarCampos = ()=>{
    let error = [];
    if(nombre.value.length < 4){
        error[0] = true;
        error[1] = "El nombre no puede contener menos de 4 caracteres";
        return error;
    }
    else if(nombre.value.length > 40){
        error[0] = true;
        error[1] = "El nombre no puede Contener más de 40 caracteres"
        return error;
    }
    else if(email.value.length < 4 || email.length > 40){
        error[0] = true;
        error[1] = "El email no es valido"
        return error;
    }
    else if(email.value.indexOf("@") == -1){
        error[0] = true;
        error[1] = `El email no contiene "@"`
        return error;
    }
    else if(email.value.indexOf(".") == -1){
        error[0] = true;
        error[1] = `El email no contiene "."`
        return error;
    }
    else if(materia.value.length < 4 || materia.length > 40){
        error[0] = true;
        error[1] = "La materia no es valida";
        return error;
    }
    return error[0] = false;
}

//{}[] ||

