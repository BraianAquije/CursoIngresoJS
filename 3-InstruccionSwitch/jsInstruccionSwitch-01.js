function mostrar()
{
	
	let mesDelAño = document.getElementById("txtIdMes").value;
/*
	if (mesDelAño == "Enero"){
		alert("Que comience bien el anio");
	}
	else if (mesDelAño == "Marzo"){
		alert("A clases");
	} 
	else if (mesDelAño == "Julio"){
		alert("Se vienen las vacaciones")
	}
	else if (mesDelAño == "Diciembre"){
		alert("Felices Fiestas")
	}*/


	switch(mesDelAño){
		case "Enero":
			alert("Que comience bien el anio");
			break;
		case "Marzo":
			alert("A clases");
			break;
		case "Julio":
			alert("Se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices Fiestas");
			break;
		
	}



}//FIN DE LA FUNCIÓN