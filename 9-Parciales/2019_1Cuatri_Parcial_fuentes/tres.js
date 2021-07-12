function mostrar()
{
    let precio;
    let descuento;
    let mensaje;
    let formula;

    precio = prompt("Ingrese precio");
    precio = parseFloat(precio);
    descuento = prompt("Ingrese porcentaje de descuento");
    descuento = parseFloat(descuento);
    formula = precio - (precio * descuento/100)
    mensaje = "El precio final es de $"+formula+" con un descuento del "+descuento+"%";

    document.getElementById("elPrecioFinal").value = mensaje;
}
