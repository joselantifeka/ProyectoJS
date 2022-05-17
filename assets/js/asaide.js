//evento click despliegue carrito
function clickCarrito(){
    if(carritoButton.children[0].className == 'fa-solid fa-cart-shopping'){
        let barrita = getID('allCarrito');
        barrita.className = "carrito op";
        carritoButton.children[0].className = 'fa-solid fa-x';
        carritoButton.className = 'button-float button-float-asaide'
    } else{
        let barrita = getID('allCarrito');
        barrita.className = "carrito";
        carritoButton.children[0].className = 'fa-solid fa-cart-shopping';
        carritoButton.className = 'button-float'
    } 
}

//var click click despliegue carrito
let carritoButton = getID('allCarritoButton');
    carritoButton.onclick = () => clickCarrito();