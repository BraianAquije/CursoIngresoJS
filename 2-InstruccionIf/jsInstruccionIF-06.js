function mostrar() 
{
	/*let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) 
	{
		alert("Es mayor de edad");
	}
	else 
	{
		if (edad >= 13 && edad <= 17) 
		{
			alert("Es adolescente");
		}
		else 
		{
			alert("Es un niño");
		}
	}*/
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	
	if (edad < 13)
	{
		alert("Es niño")
	}
	else if (edad < 18)
	{
		alert("Es un adolescente")
	}
	else if (edad < 65)
	{
		alert("Es un adulto")
	}
	else
	{
		alert("Es mayor")
	}
}//FIN DE LA FUNCIÓN