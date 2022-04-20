let tp = "100 minutos trabajo practico";
let estudio = "100 minutos estudio";
let homework = "30 minutos tareas domésticas";
let descanso = "10 minutos descanso";
let trabajo = "480 minutos Trabajar";

console.log("TAREAS");

for(let i=0; i < 14; i++){
    if(i==0){
        console.group("Semana 1");
    }
    console.groupCollapsed("Día "+ (i+1));
    console.log(trabajo);
    console.log(descanso);
    console.log(homework);
    console.log(estudio);
    console.log(tp);
    console.groupEnd();

    if(i==7){
        console.groupEnd();
        console.groupEnd();
        console.groupCollapsed("Semana 2");
    }
}

//{}[] ||