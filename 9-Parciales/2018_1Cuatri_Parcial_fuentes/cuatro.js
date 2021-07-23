function mostrar() 
{
    let num1;
    let num2;
    let operacionResta;
    let operacionSuma;

    num1 = parseInt(prompt("Ingrese un numero"));
    num2 = parseInt(prompt("Ingrese un numero"));
    operacionSuma = num1 + num2;
    operacionResta = num1 - num2;

    if (num1 == num2) {
        alert("El primer numero: " + num1 + " y el segundo numero: " + num2 + " son iguales");
    }
    else 
    {
        if (num1>num2) 
        {
            alert("la resta es: " +operacionResta)
        }
        else 
        {
            if(num1<num2&&operacionSuma>10)
            {
                alert("la suma es: " +operacionSuma+" y supero el 10");
            }
            else
            {
                alert("la suma es: " +operacionSuma);
            }
       }
   }
   
}
