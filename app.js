

let destinos = prompt(`Ingrese el numero de las ciudades de destino que quiere calcular e ingrese ESC al finalizar:
1 - Mar Del Plata
2 - Mendoza
3 - Bariloche
4 - Puerto Madryn
5 - Tucuman`)

function destinosOpcion(destinos) {
    if (destinos !=1 || destinos !=2 || destinos !=3 || destinos !=4 || destinos !=5){
        alert("DEBE INGRESAR UN VALOR DEL 1 al 5");
        }
}

let suma = " "
let totalViajes = 0

while (destinos != "ESC"){

switch (destinos){
    case "1":
        suma = 400;
    break;
    case "2":
        suma = 1500;
    break;
    case "3":
        suma = 1650;
    break;
    case "4":
        suma = 1900;
    break;
    case "5":
        suma = 2200;
    break
    default :
        destinosOpcion(destinos);
    break;
}



totalViajes += suma

destinos = prompt(`Ingrese el numero de las ciudades de destino que quiere calcular e ingrese ESC al finalizar:
1 - Mar Del Plata
2 - Mendoza
3 - Bariloche
4 - Puerto Madryn
5 - Tucuman`)
}
alert(`El total de KMs de sus viajes desde Bs As es de ${totalViajes} KM`)