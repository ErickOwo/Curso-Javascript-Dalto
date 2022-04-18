const contenedor = document.querySelector(".grid-container");

let alumnos = [{
    nombre: "José Rodríguez",
    email: "jos@gmail.com",
    materia: "Física"
},{
    nombre: "Luís Facundo",
    email: "facundo@gmail.com",
    materia: "Cálculo"
},{
    nombre: "Jessy López",
    email: "jess@gmail.com",
    materia: "Computación"
},{
    nombre: "Joss León",
    email: "joss@gmail.com",
    materia: "Literatura"
},{
    nombre: "Alejando Gracía",
    email: "alejo@gmail.com",
    materia: "Física 3"
},{
    nombre: "Coffa XDDD",
    email: "cofflalol@gmail.com",
    materia: "Recreo"
}]

for(alumno in alumnos){
    let nombre = alumnos[alumno]["nombre"];
    let email = alumnos[alumno]["email"];
    let materia = alumnos[alumno]["materia"]

    let codigoHtml = `
        <div class="grid-item nombre">${nombre}</div>
        <div class="grid-item email">${email}</div>
        <div class="grid-item materia">${materia}</div>
        <div class="grid-item semana">
             <select class="semana-elegida">
                 <option value="Semana 1">Semana 1</option>
                 <option value="Semana 2">Semana 2</option>
             </select>
        <div>
    `;
    contenedor.innerHTML += codigoHtml;
}

const boton = document.querySelector(".confirmar")

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Estás seguro de que deseas confirmar?");
    if(confirmar){
        document.querySelector("body").removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");

        for(elemento in elementos){
            let semana = elementos[elemento];
            semana.innerHTML = semanaElegida[elemento].value;
            semana.classList.add("bordes");
        }
    }
})


//{}[] ||