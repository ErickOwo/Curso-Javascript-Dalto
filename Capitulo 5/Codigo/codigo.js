const materias = {
    fisica: [90, 7, 4, "Física"],
    logica: [80, 9, 4, "Lógica"],
    matematicas: [95, 8, 3, "Matemáticas"],
    quimica: [70, 7, 3, "Química"],
    lenguaje: [80, 6, 2, "Lenguaje"],
    bbdd: [90, 8, 4, "Base de Datos"],
    estadistica: [100, 5, 3, "Estadística"],
    calculo: [95, 4, 3, "Cálculo"],
    programacion: [80, 10, 2, "Programación"]
}

const probar = ()=>{
    for(materia in materias){
        console.log(materias[materia][3]);
        if(materias[materia][0]>=90){
            console.log("%c     Asistencia Mínima","color: green");
        }
        else{
            console.log("%c     Reprobado por falta de Asistencias","color:red");
        }
        if(materias[materia][1]>=7){
            console.log("%c     Promedio en Orden","color: green");
        }
        else{
            console.log("%c     Falta de Promedio", "color: red")
        }
        if(materias[materia][2] >= 3){
            console.log("%c     Proyectos entregados", "color: green");
        }
        else{
            console.log("%c     Falta de proyectos", "color: red")
        }
    }
}

probar();



//{}[] ||