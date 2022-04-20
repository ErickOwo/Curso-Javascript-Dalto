const obtenerInfo = async()=>{
    let aproved = document.querySelector(".aprobados");
    let desaproved = document.querySelector(".desaprobados");
    let busqueda = document.getElementById("buscador").value;
    try{
        if (busqueda == "") throw("HOLA")
        let peticion = await axios(busqueda);
        aproved.textContent = `Aprobados: ${peticion.data.aprobados}`;
        desaproved.textContent = `Desaprobados: ${peticion.data.desaprobados}`;    
    }catch(e){
        aproved.textContent = "la API falló";
        desaproved.textContent = "la API falló";
    }        
}
document.getElementById("snd-request").addEventListener("click",(e)=>{
    e.preventDefault();
    obtenerInfo();
});
//{}[]