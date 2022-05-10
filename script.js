

 //Clase carrito   
class Carrito {
    constructor(){
        this.lista = [];
    }

    agregar(item){
        this.lista.push(item);

        let nuevo = document.createElement("p");
        nuevo.innerHTML = `- ${item.nombre}: ${item.precio}$\n <br>`;
        document.body.children[1].children[1].children[2].append(nuevo);
        total();
    }

    eliminar(){
        this.lista.pop();
        document.body.children[1].children[1].children[2].children[0].remove();
        total();
    }
}


//evento click carrito
function clickCarrito(){
    if(carritoButton.children[0].className == 'fa-solid fa-cart-shopping'){
        let barrita = document.getElementById('allCarrito');

        barrita.className = "carrito op";

        carritoButton.children[0].className = 'fa-solid fa-x'
    } else{
        let barrita = document.getElementById('allCarrito');

        barrita.className = "carrito";

        carritoButton.children[0].className = 'fa-solid fa-cart-shopping';
    } 
}

 //evento click agregar  
function totalAndArticule(numero){
    carro.agregar(articulos[numero])
}

function total(){
    let total = 0;
    for(i = 0; i < carro.lista.length; i++){
    total += carro.lista[i].precio;
    }
  
    let nuevo = document.getElementById('total');
    nuevo.innerText = total + "$";
}



let articulos = [
    {
    nombre: "New York Yankees - 59Fifty Cerrada",
    precio: 35},
    {
    nombre: "Boston Sox SS - 59Fifty Cerrada",
    precio: 37},
    {
    nombre: "Chicago White Sox - 59Fifty Cerrada",
    precio: 34}
]

let carro = new Carrito();

 //var click carrito
let carritoButton = document.getElementById('allCarritoButton');
    carritoButton.onclick = () => clickCarrito();

 //var click agregar

let agregarArticulo = document.getElementById('buttonAddNY');
    agregarArticulo.onclick = () => totalAndArticule(0);

let agregarArticuloB = document.getElementById('buttonAddB');
    agregarArticuloB.onclick = () => totalAndArticule(1);

let agregarArticuloSX = document.getElementById('buttonAddSX');
    agregarArticuloSX.onclick = () => totalAndArticule(2);

 //Var click eliminar  

let eliminarArticulo = document.getElementById('deleteU') ;
    eliminarArticulo.onclick = () => {
        if(document.body.children[1].children[1].children[2].childElementCount === 0){

        }else{
        carro.eliminar();
        }
    };