

let productos = prompt(`Ingrese el objeto que quiere comprar y tipee ESC al finalizar:
1 - Auricular
2 - Parlante
3 - Accesorio
4 - Fundas
5 - Celular`)

function productosOpcion(productos) {
    if (productos !=1 || destinos !=2 || destinos !=3 || destinos !=4 || destinos !=5){
        alert("DEBE INGRESAR UN VALOR DEL 1 al 5");
        }
}

let suma = " "
let totalCompra = 0

while (productos != "ESC"){

switch (productos){
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
        suma = 0;
        destinosOpcion(destinos);
    break;
}



totalCompra += suma

productos = prompt(`Ingrese el objeto que quiere comprar y tipee ESC al finalizar:
1 - Auricular
2 - Parlantes
3 - Accesorio
4 - Fundas
5 - Celular`)
}
alert(`El total de su compra es de ${totalCompra}$`)

const carritoCompras = []

carritoCompras.push("Auricular")
carritoCompras.push("Parlante")
carritoCompras.push("Accesorio")
carritoCompras.push("Fundas")
carritoCompras.push("Celular")
