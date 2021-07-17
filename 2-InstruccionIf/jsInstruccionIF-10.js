function mostrar()
{
	let nota;
	let minimo=1;
	let maximo=10;

	nota = Math.round(Math.random() * (maximo - minimo)+minimo);
	
	if (nota>=9)
	{
		alert("Su nota es "+nota+" : ¡¡EXCELENTE!!");
	}
	else if (nota>=4)
	{
		alert("Su nota es "+nota+" : ¡APROBÓ!");
	}
	else
	{
		alert("Su nota es "+nota+" : ¡VAMOS QUE LA PROXIMA SE PUEDE!");
	}


}//FIN DE LA FUNCIÓN