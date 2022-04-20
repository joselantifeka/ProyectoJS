let total = 0;
let carrito = "";

const AgregarAlCarrito = (articulo, precio) => {
    total = total + precio
    carrito += `- ${articulo}: ${precio} \n`
    alert(`Carrito de compras: \n ${carrito} \n Precio a pagar: ${total}`)
}


while(1) {

    let pregunta = prompt("Quieres comprar algun articulo ? \n Si/no");

    if (pregunta == "si"){
        let articulo = prompt("escribe el nombre del articulo");

        if(articulo === ""){
            alert("ingresa un nombre!");
            continue;
        }

        let precio = parseInt(prompt("ingresa el precio del articulo"));

        if (!precio) {
            alert("ingresa un numero!");
            continue;
        } else {
            AgregarAlCarrito(articulo, precio);
        }
    } else{
        break;
    }
}