class AgregarAlCarrito {

    constructor(articulo, precio) {
        this.articulo = articulo;
        this.precio = precio;
    }
}

let total = 0;

let mostrar = "";

let carrito = [];

while (1) {

    let pregunta = prompt("Deseas comprar algun articulo? \n si/no")

    if (pregunta == "si" || pregunta == "SI" || pregunta == "Si") {

        let articulo = prompt("Ingresa el nombre del articulo");

        let precio = parseInt(prompt("ingresa el precio del articulo"));

        if (!precio) {
            alert("ingresa un precio valido!")

        } else {
            carrito.push(new AgregarAlCarrito(articulo, precio));

            mostrar = "";
            total = 0;

            for (let i = 0; i < carrito.length; i++) {
                mostrar += `${i + 1}. ${carrito[i].articulo}: ${carrito[i].precio}$\n`;
                total += carrito[i].precio;
            }

            alert(`Tus productos agregados al carrito son: \n${mostrar} \nTotal: ${total}$`)

            pregunta = prompt("Deseas eliminar algun articulo?")
            if (pregunta == "si" || pregunta == "SI" || pregunta == "Si") {

                pregunta = parseInt(prompt(`Selecciona el numero de lista del articulo que quieras eliminar: \n${mostrar} \nTotal: ${total}$`))
                if(pregunta < carrito.length){

                    pregunta--;
                    carrito.splice(pregunta,pregunta);

                    mostrar = "";
                    total = 0;
                    for (let i = 0; i < carrito.length; i++) {
                        mostrar += `${i + 1}. ${carrito[i].articulo}: ${carrito[i].precio}$\n`;
                        total += carrito[i].precio;
                    }

                    alert(`Tus productos agregados al carrito son: \n${mostrar}\nTotal :${total}$`)
                } else{
                    alert("ingresaste un dato invalido!")
                }
            }
        }

    } else {
        break;
    }
}