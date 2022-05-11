
// Este es el segundo algoritmo creado! (ACTUALMENTE LINKEADO)

 //Clase carrito   
 class Carrito {
    constructor(){
        this.lista = [];
    }

    agregar(item){
        this.lista.push(item);
        mostrarCarrito();
    }

    eliminar(){
        this.lista.pop();
        mostrarCarrito();
    }
}


//evento click carrito
function clickCarrito(){
    if(carritoButton.children[0].className == 'fa-solid fa-cart-shopping'){
        let barrita = getID('allCarrito');

        barrita.className = "carrito op";

        carritoButton.children[0].className = 'fa-solid fa-x'
    } else{
        let barrita = getID('allCarrito');

        barrita.className = "carrito";

        carritoButton.children[0].className = 'fa-solid fa-cart-shopping';
    } 
}

 //evento click agregar  
function fAgg(numero){
    carro.agregar(articulos[numero])
}

function total(){
    let total = 0;

    for(i = 0; i < carro.lista.length; i++){
    total += carro.lista[i].precio;
    }
  
    let nuevo = getID('total');
    nuevo.innerText = total + "$";
}

function mostrarCarrito(){
    let almacen = getID('articulos');
    almacen.innerHTML = null;

    for(const el of carro.lista){
        almacen.innerHTML +=`<p>- ${el.nombre}: ${el.precio}$</p>\n`;
    }

    total();
}

// HELPER

function getID(id){
    return document.getElementById(id)
}


let articulos = [
    {
    nombre: "New York Yankees - 59Fifty Cerrada",
    precio: 35,
    img1: "./assets/img/gorras/NY.png",
    img2: "./assets/img/gorras/NY2.jpg"},
    {
    nombre: "Boston Sox SS - 59Fifty Cerrada",
    precio: 37,
    img1: "./assets/img/gorras/B.jpg",
    img2: "./assets/img/gorras/B2.jpg"},
    {
    nombre: "Chicago White Sox - 59Fifty Cerrada",
    precio: 34,
    img1: "./assets/img/gorras/S.jpg",
    img2: "./assets/img/gorras/S2.jpg"}
]

let carro = new Carrito();

 //var click carrito
let carritoButton = getID('allCarritoButton');
    carritoButton.onclick = () => clickCarrito();

 //var click agregar

let agregarArticulo = getID('buttonAddNY');
    agregarArticulo.onclick = () => fAgg(0);

let agregarArticuloB = getID('buttonAddB');
    agregarArticuloB.onclick = () => fAgg(1);

let agregarArticuloSX = getID('buttonAddSX');
    agregarArticuloSX.onclick = () => fAgg(2);

 //Var click eliminar  

let eliminarArticulo = getID('deleteU') ;
    eliminarArticulo.onclick = () => {
        let almacen = getID("articulos");
        if(almacen.childElementCount === 0){

        }else{
        carro.eliminar();
        }
    };