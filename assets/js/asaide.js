// funciones
function despliegue(){
        barrita.className = "carrito op";
        carritoButton.children[0].className = 'fa-solid fa-x';
        carritoButton.className = 'button-float button-float-asaide'
}
function esconderD(){
        barrita.className = "carrito";
        carritoButton.children[0].className = 'fa-solid fa-cart-shopping';
        carritoButton.className = 'button-float'
}

//evento click despliegue carrito
function clickCarrito(){
    (carritoButton.children[0].className == 'fa-solid fa-cart-shopping') ? despliegue() : esconderD();
}

//variables
let barrita = getID('allCarrito');
let carritoButton = getID('allCarritoButton'); 
 /*evento click despliegue */
    carritoButton.onclick = () => clickCarrito();
