/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let importeUno;
    let importeDos;
    let importeTres;
    let suma;

    importeUno = document.getElementById("txtIdPrecioUno").value;
    importeUno = parseFloat(importeUno);
    importeDos = document.getElementById("txtIdPrecioDos").value;
    importeDos = parseFloat(importeDos);
    importeTres = document.getElementById("txtIdPrecioTres").value;
    importeTres = parseFloat(importeTres);

    suma = importeUno +importeDos + importeTres;

    alert("La suma de los 3 precios es: " +suma);

}
function Promedio () 
{
	let importeUno;
    let importeDos;
    let importeTres;
    let promedio;

    importeUno = document.getElementById("txtIdPrecioUno").value;
    importeUno = parseFloat(importeUno);
    importeDos = document.getElementById("txtIdPrecioDos").value;
    importeDos = parseFloat(importeDos);
    importeTres = document.getElementById("txtIdPrecioTres").value;
    importeTres = parseFloat(importeTres);

    promedio = (importeUno +importeDos + importeTres)/3;
    
    alert("El promedio de los 3 precios es de: " +promedio.toFixed(2));
}
function PrecioFinal () 
{
	let importeUno;
    let importeDos;
    let importeTres;
    let iva;
    let precioFinal;

    importeUno = document.getElementById("txtIdPrecioUno").value;
    importeUno = parseFloat(importeUno);
    importeDos = document.getElementById("txtIdPrecioDos").value;
    importeDos = parseFloat(importeDos);
    importeTres = document.getElementById("txtIdPrecioTres").value;
    importeTres = parseFloat(importeTres);
    iva = (importeUno +importeDos + importeTres)*21/100;
    precioFinal = (importeUno + importeDos + importeTres) + iva;
    
    alert("El precio total es de: $" + precioFinal.toFixed(2) + " con IVA incluido del 21%");
}