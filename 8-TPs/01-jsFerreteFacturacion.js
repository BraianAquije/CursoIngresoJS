/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno+precioDos+precioTres;

    alert("La suma total de importes es:"+suma);
}
function Promedio () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let promedio;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    promedio = (precioUno+precioDos+precioTres)/3;

    alert("La promedio de los importes es: "+promedio.toFixed(2));
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let precioFinal;
    const IVA_AGREGADO = 21;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);
    suma = precioUno+precioDos+precioTres;
    iva = (suma*  IVA_AGREGADO)/100;
    precioFinal = iva + suma ;

    alert("El importe total con un "+IVA_AGREGADO+" % de IVA es de "+precioFinal.toFixed(2));

}