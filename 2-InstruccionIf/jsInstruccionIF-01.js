function mostrar()
{
	let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);
	console.log(typeof edad);

	if(edad == 15)
	{
		mensaje = "Niña bonita"
		document.getElementById("txtIdEdad").value = mensaje ;
	}

}//FIN DE LA FUNCIÓN



// 18 numero
// "18" string

// == valida el contenido 
// === valida tipo y contenido
// != distinto de
// !== distinto tipo y dato
