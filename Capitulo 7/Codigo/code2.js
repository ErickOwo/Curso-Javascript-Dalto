let href = window.location.href;
let hostName = window.location.hostname;
let pathName = window.location.pathname;
let protocol = window.location.protocol;

document.write(`El Protocolo es: <b>${protocol}</b> <br>
                El Host Name es: <b>${hostName}</b> <br>
                El Path Name es: <b>${pathName}</b> <br><br>
                Y la URL completa es <b>${href}</b>
`);
