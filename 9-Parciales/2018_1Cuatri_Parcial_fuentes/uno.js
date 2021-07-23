
function mostrar()
{
    let ancho;
    let largo;
    let perimetro;

    ancho = parseInt(prompt("Ingrese ancho"));
    largo = parseInt(prompt("Ingrese largo"));
    perimetro = (largo + ancho)*2;

    alert("El perimetro del rectangulo es: "+perimetro);
}
