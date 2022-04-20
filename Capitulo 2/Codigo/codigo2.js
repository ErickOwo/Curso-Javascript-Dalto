"use strict";

const alumnos = {
    nombres: [],
    asistencias: [0, 0, 0, 0],
    mensaje: []
}
const recuentoAlumnos= ()=>{
    let alumno;
    for(let i=0; i < 4; i++){
        alumno = prompt(`Ingrese nombre del alumno No. ${i+1}:`);
        alumnos["nombres"].push(alumno);
    }
}
const tomarAsistencia = ()=>{
    let presencia;
    let mensaje;
    for(let i=0; i < 30; i++){
        for(let j=0;j < 4; j++){
            presencia = prompt(`tomando asistencia del alumno: ${alumnos["nombres"][j]} día ${i+1}`);
            if(presencia == "p" || presencia == "P"){
               alumnos["asistencias"][j]++;
            }
        }
        
    }
    for(let i=0; i < 4; i++){     
        if(alumnos["asistencias"][i] < 18){
            mensaje = "Lo sentimos " + alumnos["nombres"][i] + " usted ha reprobado por falta de asistencias";
            alumnos["mensaje"].push(mensaje);
        }
        else{
            mensaje = "Felicidades " + alumnos["nombres"][i] + " usted ha aprobado en asistencias";
            alumnos["mensaje"].push(mensaje);
        }
    }
    
}
recuentoAlumnos();
tomarAsistencia();
for(let i=0; i<4; i++){
    console.log(`Nombre: ${alumnos["nombres"][i]} Asistencias: ${alumnos["asistencias"][i]} Ausencias: ${30 - alumnos["asistencias"][i]}`);
    console.log(alumnos["mensaje"][i]);
}


//{}[]