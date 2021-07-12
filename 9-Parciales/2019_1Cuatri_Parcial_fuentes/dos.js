function mostrar()
{
    let nombre1;
    let nombre2;
    let peso1;
    let peso2;
    let pesoTotal;
    let promedio;

    nombre1 = prompt("Nombre primer persona:");
    peso1 = prompt("Peso primer persona:");
    peso1 = parseInt(peso1);
    nombre2 = prompt("Nombre segunda persona:");
    peso2 = prompt("Peso segunda persona:");
    peso2 = parseInt(peso2);
    pesoTotal = peso1 + peso2;
    promedio = (peso1 + peso2)/2;

    alert("Ustedes se llaman "+nombre1+" y "+nombre2+" pesan " +peso1+ "kg y "+peso2+"kg respectivamente, que sumados son " +pesoTotal+ "kg y el promedio de peso es de "+promedio+" kg");


}   
