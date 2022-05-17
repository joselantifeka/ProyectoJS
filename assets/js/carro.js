//Clase carrito   
class Carrito {
    constructor() {
        this.lista = [];
    }
    agregar(item) {
        this.lista.push(item);
        mostrarCarrito();
    }
    eliminar(numero) {
        this.lista.splice(numero, 1);
        mostrarCarrito();
    }
}

//funciones click agregar  
function functionAgregar(numero) {
    for(let i = 0; i < articulos.length; i++){
        if(numero === `A${articulos[i].id}`){
            carro.agregar(articulos[i])
        }
    }
}
function total() {
    let total = 0;
    for (let i = 0; i < carro.lista.length; i++) {
        total += carro.lista[i].precio;
    }
    let nuevo = getID('total');
    nuevo.innerText = total + "$";
    sessionStorage.setItem("carro",JSON.stringify(carro.lista));
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
let catalogo = getID('catalogo');

//evento click agregar
for (let i = 0; i < articulos.length; i++) {
    catalogo.innerHTML += `<div class="content-item" data-aos="fade-up"
    data-aos-anchor-placement="center-bottom">
        <div class="imagen${i + 1}"></div>
        <div class="content-item__description">
            <h3>${articulos[i].nombre} - 59Fifty Cerrada</h3>
            <p>${articulos[i].precio}$</p>
            <button id="A${articulos[i].id}"><p id="A${articulos[i].id}"><i class="fa-solid fa-cart-shopping menos"></i><i class="fa-solid fa-cart-plus mas" id="A${articulos[i].id}"></i></p></button>
        </div>
    </div>`
}
catalogo.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "I" || e.target && e.target.tagName === "BUTTON" || e.target && e.target.tagName === "P") {
        functionAgregar(e.target.id);
    }
})

// evento eliminar 
almacen.addEventListener('click', (e) => {
    if (e.target && e.target.tagName === "I") {
        let numero = e.target.id;
        for (let i = 0; i < carro.lista.length; i++) {
            if (numero === `deleteA-${i}`) {
                carro.eliminar(i);
            }
        }
    }
})

// sessionStorage
if(!!sessionStorage.getItem("carro")){
    let guardado = JSON.parse(sessionStorage.getItem("carro"));
    if(guardado.length > 0){
        carro.lista = guardado;
        mostrarCarrito();
        clickCarrito();
    }
}