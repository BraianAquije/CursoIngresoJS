/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let formula;
   

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);


    formula = ((largo + ancho) *2)*3;

    alert("La cantidad de alambre necesario es: "+formula.toFixed(2)+"mts");
}
function Circulo () 
{
	let radio;
    let formula;

    radio = parseFloat(document.getElementById("txtIdRadio").value);

    formula = 3.14 * 2 * radio * 3;

    alert("La cantidad de alambre necesario es: " +formula.toFixed(2));

}
function Materiales () 
{
	let largo;
    let ancho;
    let cemento;
    let cal;

    largo = parseFloat(document.getElementById("txtIdLargo").value);
    ancho = parseFloat(document.getElementById("txtIdAncho").value);
    cemento = 2 * largo * ancho;
    cal = 3 * largo * ancho;


    alert("La cantidad de bolsas de cemento es de: " +cemento+ " y la cantidad de bolsas de cal es de: "+cal);
}