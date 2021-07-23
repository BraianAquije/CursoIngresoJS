function mostrar() {
	let estacionIngresada;
	let destinoIngresado;
	let precioFinal;
	let porcentajeAumento = 0;
	let porcentajeDescuento = 0;

	const TARIFA = 15000;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (estacionIngresada) {
		case "Invierno":
			{
				if (destinoIngresado == "Bariloche") {
					porcentajeAumento = 20;
				}
				else if (destinoIngresado == "Mar del plata") {
					porcentajeDescuento = 20;
				}
				else {
					porcentajeDescuento = 10;
				}
			}
			break;
		case "Verano":
			{
				if (destinoIngresado == "Bariloche") {
					porcentajeDescuento = 20;
				}
				else if (destinoIngresado == "Mar del plata") {
					porcentajeAumento = 20;
				}
				else {
					porcentajeAumento = 10;
				}
			}
			break;
		default:
			if (destinoIngresado != "Cordoba") {
				porcentajeAumento = 10;
			}
			break;
	}

	if (porcentajeAumento != 0) {
		precioFinal = TARIFA + TARIFA * porcentajeAumento / 100;
	}
	else if (porcentajeDescuento != 0) {
		precioFinal = TARIFA - TARIFA * porcentajeDescuento / 100;
	}
	else {
		precioFinal = TARIFA;
	}

	alert("Habinedo elegido "+destinoIngresado+" en "+estacionIngresada+" el precio final es: $"+precioFinal);

}//FIN DE LA FUNCIÓN