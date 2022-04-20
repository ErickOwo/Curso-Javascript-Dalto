const htmlCode = document.querySelector(".materias");

const materias = [
    {
        nombre: "Matemáticas Avanzadas 1",
        nota: "7"
    },
    {
        nombre: "Calculo 2",
        nota: "8"
    },
    {
        nombre: "Física Cuantica",
        nota: "7"
    },
    {
        nombre: "Física 2",
        nota: "7"
    },
    {
        nombre: "Programación Avanzada 1",
        nota: "9"
    }
]

const obtenerMateria = (id) =>{
    return new Promise((resolve, reject)=>{
        let materia = materias[id];
        if(materia == undefined) reject("No Exíste la materia");
        setTimeout(()=>{resolve(materia)}, Math.random()*1500);
    })
}

const devolverMateria = async ()=>{
    let i = 0;
    for(mate in materias){
        let materia = await obtenerMateria(mate);
        htmlCode.innerHTML += `
            <div class="materia">
                <div class="nombre"><b>${i+1}.</b>${materia.nombre}</div>
                <div class="nota">${materia.nota}</div>
            </div>
        `;
        i++;
    }
}

devolverMateria();

//{}[]