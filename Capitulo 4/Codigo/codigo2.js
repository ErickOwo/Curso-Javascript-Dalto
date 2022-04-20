const obtenerInfo = (materia) =>{
    materias = {
        fisica: ["Perez","Carlos", "Luís", "Coffla"],
        calculo: ["Rosales","Luís", "José", "Alvin", "Lucas"],
        logica: ["Romero","José", "Yescenia", "Coffla", "José"],
        programacion: ["Rodríguez","Yecy", "Elías", "Alan", "Coffla"]
    }
    if(materias[materia] !== undefined){
        return([materia,materias[materia]]);
    }
    else{
        return materias;
    }
}
const mostrarInfo = (materia) =>{
    let informacion = obtenerInfo(materia);

    if(informacion !== false){
        let alumnos = informacion[1];
        let profesor = alumnos.shift();
        document.write(`<b>El profesor de ${informacion[0]} es: </b> <b style="color: red">${profesor}</b><br>
        <b>Y los alumnos son: </b><b style = "color: blue">${alumnos}</b><br><br>`);
    }
    console.log(informacion);
}
const cantidadDeClases = (alumno) =>{
    let informacion = obtenerInfo();
    let cantidad = 0;
    let clasesPresentes = [];
    for(info in informacion){
        if(informacion[info].includes(alumno)){
            cantidad++;
            clasesPresentes.push(info +" ");
        }
    }
    return `<b>El alumno ${alumno} está incrito en: </b> <b style= "color: red">${cantidad} clases</b><br>
            <b>Está cursando las clases de: </b><b style= "color: blue">${clasesPresentes}</b><br><br>
    `
}

mostrarInfo("programacion");
mostrarInfo("fisica");
document.write(cantidadDeClases("Coffla"));
document.write(cantidadDeClases("Luís"));

//{}[]