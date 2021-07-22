function mostrar()
{
	let destinoIngresado =document.getElementById("txtIdDestino").value;
	
	switch(destinoIngresado)
	{
		case("Bariloche"):
			alert("Bariloche se encuentra al Oeste de Argentina");
			break;
		case("Cataratas"):
			alert("Cataratas se encuentra al Norte de Argentina");
			break;
		case("Mar del plata"):
			alert("Mar del Plata se encuentra al Este de Argentina");
			break;
		case("Ushuaia"):
			alert("Ushuaia se encuentra al Sur de Argentina");
			break;
	}

}//FIN DE LA FUNCIÓN