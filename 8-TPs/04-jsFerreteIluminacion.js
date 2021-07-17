/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D .	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio() {
    let cant;
    let marcas;
    let precioTotal;
    let descuento;
    let porcentaje;
    let iibb;
    let precioConIibb;


    const PRECIO_UNI = 35;

    cant = parseInt(document.getElementById("txtIdCantidad").value);
    marcas = document.getElementById("Marca").value;
    precioTotal = cant * PRECIO_UNI
    porcentaje = 0



    if (cant >= 6) 
    {
        porcentaje = 50;
    }
    else 
    {
        if (cant == 5) 
        {
            if (marcas == "ArgentinaLuz") 
            {
                porcentaje = 40;
            }
            else 
            {
                porcentaje = 30;
            }
        }
        else {
            if (cant == 4) 
            {
                if (marcas == "ArgentinaLuz" || marcas == "FelipeLamparas") 
                {
                    porcentaje = 25;
                }
                else 
                {
                    porcentaje = 20;
                }
            }
            else 
            {
                if (cant == 3) 
                {
                    if (marcas == "ArgentinaLuz") 
                    {
                        porcentaje = 15;
                    }
                    else 
                    {
                        if (marcas == "FelipeLamparas") 
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }
                }
                else 
                {
                    porcentaje = 0;
                }
            }
        }

    }

    descuento = precioTotal - (precioTotal * porcentaje) / 100;

    if(descuento>=120)
    {
        iibb= descuento * 10/100
        precioConIibb = descuento + iibb;
        alert("Usted pago "+iibb+" de IIBB");

    }


    document.getElementById("txtIdprecioDescuento").value = descuento;
 
}