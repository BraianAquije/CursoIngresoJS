 
function mostrar()
{
    let lateral;
    let formula;

    lateral = prompt("Ingrese medida de lateral del triangulo");
    lateral = parseFloat(lateral);

    formula = lateral *3;

    alert("Si el lateral de un triangulo equilatero mide "+lateral+" su perimetro es de "+formula);
}
