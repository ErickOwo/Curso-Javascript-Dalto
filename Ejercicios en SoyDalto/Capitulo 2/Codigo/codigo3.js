"use strict";

const sumar = (num1, num2)=>{
    return num1 + num2;
}
const restar = (num1, num2)=>{
    return num1 - num2;
}
const multiplicar = (num1, num2)=>{
    return num1 * num2;
}
const dividir = (num1, num2)=>{
    return num1 / num2;
}

let op = prompt(`
1. Suma 
2. Resta 
3. Multiplicar 
4. Dividir

Ingrese la Operación que desee realizar:
`);

if(op > 0 && op < 5){
    let num1 = parseFloat(prompt(`Ingrese primer número a operar`));
    let num2 = parseFloat(prompt(`Ingrese segundo número a operar`));

    if(op == 1) alert(`El resultado de la suma es: ${sumar(num1, num2)}`);
    else if(op == 2) alert(`El resultado de la resta es: ${restar(num1, num2)}`);
    else if(op == 3) alert(`El resultado de la multiplicación es: ${multiplicar(num1, num2)}`);
    else if(op == 4) alert(`El resultado de la división es: ${dividir(num1, num2)}`);
}
else alert("La operación a realizar no exíste");

//{}[]