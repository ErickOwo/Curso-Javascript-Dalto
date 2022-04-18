class Calculadora{
    constructor(){}
    static sumar(n1, n2){return n1+n2}
    static restar(n1, n2){return n1-n2}
    static multiplicar(n1, n2){return n1*n2}
    static dividir(n1, n2){return n1/n2}
    static potenciar(n, exponente){return n**exponente}
    static raiz2(n){return Math.sqrt(n)}
    static raiz3(n){return Math.cbrt(n)}
}

let n1, n2;

let opc = prompt("1. Suma  2. Resta 3. Multiplicación 4. División 5. Potenciación 6. Raíz Cuadrada 7. Raíz Cúbica");
if(opc > 0 && opc < 6){
    n1 = parseFloat(prompt("Primer número a operar:"));
    n2 = parseFloat(prompt("Segundo número a operar:"));
}
if(opc > 5 && opc < 8){
    n1 = parseFloat(prompt("Numero a operar:"));
}
else{
    alert("Usted marcó una opción inexistente.");
}


if(opc == 1){
    alert(`La suma es: ${Calculadora.sumar(n1,n2)}`);
}
if(opc == 2){
    alert(`La resta es: ${Calculadora.restar(n1,n2)}`);
}
if(opc == 3){
    alert(`La multiplicación es: ${Calculadora.multiplicar(n1,n2)} `);
}
if(opc == 4){
    alert(`La división es: ${Calculadora.dividir(n1,n2)}`)
}
if(opc == 5){
    alert(`El resultado de la potencia de ${n1} es: ${Calculadora.potenciar(n1, n2)}`)
}
if(opc == 6){
    alert(`La Raíz Cuadrada de ${n1} es: ${Calculadora.raiz2(n1)}`)
}
if(opc == 7){
    alert(`La Raíz Cúbica de ${n1} es: ${Calculadora.raiz3(n1)}`)
}
