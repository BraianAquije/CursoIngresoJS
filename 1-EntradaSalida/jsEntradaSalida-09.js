/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let descuento;
	let resultado;
	let mensaje;

	

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);

	descuento = (sueldo * 10) /100;
	resultado = sueldo + descuento;
	
	mensaje = "Importe final: " + resultado + " con un 10% de aumento";

	document.getElementById("txtIdResultado").value = mensaje;

	
}
