//Clase carrito   
class Carrito {
    constructor() {
        this.lista = [];
    }
    agregar(item) {
        if(this.lista.length != 0){
            for(let i = 0; i < this.lista.length; i++){
                if(item.id === this.lista[i].id ){
                    this.lista[i].cantidad++;
                    mostrarCarrito();
                }else{
                    this.lista.push(item);
                    mostrarCarrito();
                }
            }
        }else{
            this.lista.push(item);
            mostrarCarrito();
        }
    }
    eliminar(numero) {
        this.lista.splice(numero, 1);
        mostrarCarrito();
    }
}

//funciones     
function functionAgregar(numero) {
    for (let i = 0; i < articulos.length; i++) {
        (numero === `A${articulos[i].id}`) && carro.agregar(articulos[i]);
    }
}

function total() {
    let total = 0;
    for (const produ of carro.lista) {
        total += produ.precio;
    }
    let nuevot = getID('total');
    nuevot.innerText = total + "$";
    sessionStorage.setItem("carro", JSON.stringify(carro.lista));
    let nuevoc = getID('conteo')
    let contado = 0;
    for(let i = 0; i < carro.lista.length; i++){
        contado += carro.lista[i].cantidad
    }
    nuevoc.innerText = contado;
}

function mostrarCarrito() {
    almacen.innerHTML = null;
    for (let i = 0; i < carro.lista.length; i++) {
        almacen.innerHTML += `<div class="asaide-articulos"><img src=${carro.lista[i].img1}><p>${carro.lista[i].nombre}</p><span>${carro.lista[i].precio + "$"}
        <i class="fa-solid fa-trash-arrow-up deleteA " id="deleteA-${i}"></i></span></div>\n`;
    }
    total();
}

// variables
let carro = new Carrito();
let almacen = getID('articulos');

// eventos
almacen.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "I") {
        let numero = e.target.id;
        for (let i = 0; i < carro.lista.length; i++) {
            (numero === `deleteA-${i}`) && carro.eliminar(i);
        }
    }
})

// sessionStorage
if (!!sessionStorage.getItem("carro")) {
    let guardado = JSON.parse(sessionStorage.getItem("carro"));
    if (guardado.length > 0) {
        carro.lista = guardado;
        mostrarCarrito();
        clickCarrito();
    }
}