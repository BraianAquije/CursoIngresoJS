function mostrar()
{
	/*Math.random()= resultado al azar entre 0 y 1
 	Math.floor()= redondea al entero inferior
	Math.ceil()= redondea al entero superior
	Math.round()= redondea al numero mas cercano*/

	let num;
	let minimo=1;
	let maximo=10;

	num = Math.round(Math.random() * (maximo -minimo) + minimo);

	alert(num);

}//FIN DE LA FUNCIÓN