/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;
	let mensaje;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseFloat(importe);
	descuento = (importe * 25)/100;
	resultado = importe - descuento;

	mensaje = "El importe total es de: $"+resultado+ " con un descuento del 25%";
	document.getElementById("txtIdResultado").value = mensaje;

}
