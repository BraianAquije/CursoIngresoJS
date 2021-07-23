function mostrar()
{
let num1;
let num2;
let suma;
let dividir;

num1 = parseInt(prompt("Ingrese un numero"));
num2 = parseInt(prompt("Ingrese un segundo numero"));
suma = num1+num2;
dividir = num1 / num2;

if (num1 == num2)
{
    alert("El numero "+num1+" es igual al numero "+num2);
}
else
{
    if(num1 > num2)
    {
        alert("La división es " +dividir);
    }
    else
    {
       if (num1<num2&&suma<50)
       {
        alert("la suma es "+suma+ " y es menor a 50");
       }
       else
       {
           alert("la suma es "+suma);
       }
    }
}
}
