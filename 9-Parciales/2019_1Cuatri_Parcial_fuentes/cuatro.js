function mostrar() {
    let num1;
    let num2;
    let operacionSuma;
    let operacionResta;

    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un segundo numero"))
    operacionSuma = num1 + num2;
    operacionResta = num1 - num2;

    if (num1 == num2) {
        alert("El primer numero " + num1 + " es igual al segundo numero " + num2);
    }
    else {
        if (num1 < num2) {
            alert("El resultado de la suma es: " + operacionSuma);
        }
        else {
            if (num1 > num2 && operacionResta > 10) {
                alert("La resta es: " + operacionResta + " y superó el 10");
            }
            else {
                alert("La resta es: " + operacionResta);
            }
        }
    }
}
