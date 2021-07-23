function mostrar()
{
    let precio;
    let porcentaje;
    let operacion;

    precio = parseFloat(prompt("Ingrese el precio"));
    porcentaje = parseFloat(prompt("Ingrese el porcentaje"));
    operacion = precio - ((precio * porcentaje)/100);

    document.getElementById("elPrecioFinal").value = "El precio final con un "+porcentaje+"% de descuento es de: $" +operacion;

}
