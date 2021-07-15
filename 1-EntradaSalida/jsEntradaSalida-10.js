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
	const VEINTICINCO_PORC = 25;
	

	importe = parseInt(document.getElementById("txtIdImporte").value);
	descuento = (importe * VEINTICINCO_PORC)/100;
	resultado = importe - descuento;

	mensaje = "El importe total es de: $"+resultado+ " con un descuento del " +VEINTICINCO_PORC+"%";
	document.getElementById("txtIdResultado").value = mensaje;

}
