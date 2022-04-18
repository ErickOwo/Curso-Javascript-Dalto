const materias = {
    fisica: ["Perez","Carlos", "Luís", "Coffla"],
    calculo: ["Rosales","Luís", "José", "Alvin", "Lucas"],
    logica: ["Romero","José", "Yescenia", "Coffla", "José"],
    programacion: ["Rodríguez","Yecy", "Elías", "Alan", "Coffla"]
}
const inscribir = (alumno, materia) =>{
    if(materias[materia].length <= 21){
        materias[materia].push(alumno);
        document.write(`<b>Alumno ${alumno}: </b><b style = "color: gray">Se te ha inscrito a la materia ${materia} con éxito.</b><br>`);
    }
    else{
        document.write(`<b style="color: red">Lo sentimos ${alumno} pero la materia de ${materia} ya está llena.</b><br>`);
    }
    return materias[materia];
}

document.write(`<b>Alumnos en Física: </b><b style= "color: blue">${materias['fisica']}</b>`);
document.write(`<br><b>Alumnos en Cáculo: </b><b style= "color: blue">${materias['calculo']}</b>`);
document.write(`<br><b>Alumnos en Lógica: </b><b style= "color: blue">${materias['logica']}</b>`);
document.write(`<br><b>Alumnos en Programación: </b><b style= "color: blue">${materias['programacion']}</b><br><br><br>`);

inscribir("Jorge","fisica");
inscribir("Juan","fisica");
inscribir("Valeria","fisica");
inscribir("Vani","fisica");
inscribir("Lourdes","fisica");
inscribir("Monica","fisica");
inscribir("Jeny","fisica");
inscribir("Josué","fisica");
inscribir("Yeison","fisica");
inscribir("Ramses","fisica");
inscribir("Torico","fisica");
inscribir("Gosel","fisica");
inscribir("Hilario","fisica");
inscribir("Hilary","fisica");
inscribir("Camila","fisica");
inscribir("Ana","fisica");
inscribir("Estefany","fisica");
inscribir("Esmeralda","fisica");
inscribir("Arduina","fisica");
inscribir("Lacio","logica");


document.write(`<br><br><br><b>Alumnos en Física: </b><b style= "color: green">${materias['fisica']}</b>`);
document.write(`<br><b>Alumnos en Cáculo: </b><b style= "color: green">${materias['calculo']}</b>`);
document.write(`<br><b>Alumnos en Lógica: </b><b style= "color: green">${materias['logica']}</b>`);
document.write(`<br><b>Alumnos en Programación: </b><b style= "color: green">${materias['programacion']}</b>`);



//{}[]
