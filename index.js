class carrito {

    constructor(articulo, precio) {
        this.articulo = articulo;
        this.precio = precio;
    }
}

function totalAndArticule() {
    mostrar = "";
    total = 0;

    for (let i = 0; i < carro.length; i++) {
        mostrar += `${i + 1}. ${carro[i].articulo}: ${carro[i].precio}$\n`;
        total += carro[i].precio;
    }
}

function filtrarBusqueda(arr,name){
    let filtracion = arr.find((el) => el.nombre.includes(name));
    return filtracion
}

function sacarDelCarrito(numero){
    numero--;
    carro.splice(numero, numero);
}

let total = 0;

let mostrar;

let carro = [];

let articulos = [];

while (1) {
    let pregunta = prompt("Deseas comprar algun articulo? \n si/no")

    if (pregunta == "si" || pregunta == "SI" || pregunta == "Si") {
        let articulo = prompt("Ingresa el nombre del articulo");
        let precio = parseInt(prompt("ingresa el precio del articulo"));

        if (!precio) {
            alert("ingresa un precio valido!")

        } else {
            carro.push(new carrito(articulo, precio));
            totalAndArticule();

            alert(`Tus productos agregados al carro son: \n${mostrar} \nTotal: ${total}$`)

            pregunta = prompt("Deseas eliminar algun articulo? \nsi/no")
            
            if (pregunta == "si" || pregunta == "SI" || pregunta == "Si") {
                pregunta = parseInt(prompt(`Selecciona el numero de lista del articulo que quieras eliminar: \n${mostrar} \nTotal: ${total}$`));

                if (pregunta <= carro.length) {
                    sacarDelCarrito(pregunta)   
                    totalAndArticule();
                    
                    alert(`Tus productos agregados al carro son: \n${mostrar}\nTotal :${total}$`)
                } else {
                    alert("ingresaste un dato invalido!")
                }
            }
        }

    } else {
        break;
    }
}