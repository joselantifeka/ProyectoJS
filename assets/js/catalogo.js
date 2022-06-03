// Helpers
function getID(id) {
    return document.getElementById(id);
}

function getClass(id) {
    return document.getElementsByClassName(id)
};

// funciones para toastify
function hallar(id) {
    let hallado = "";
    for (let i = 0; i < articulos.length; i++) {
        if (id === `A${i}`) {
            hallado = articulos[i].nombre;
        }
    }
    return hallado
}

// funcion mostrar articulos
function articuloos() {
    for (let i = 0; i < articulos.length; i++) {
        catalogo.innerHTML += `<div class="content-item" data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
        <img src="${articulos[i].img1}" class="imagen" id="IDA${articulos[i].id}" onmouseover="this.src = '${articulos[i].img2}'" onmouseout="this.src = '${articulos[i].img1}'">
        <div class="content-item__description">
        <h3>${articulos[i].nombre} - 59Fifty Cerrada</h3>
        <p>${articulos[i].precio}$</p>
        <button id="A${articulos[i].id}"><p id="A${articulos[i].id}"><i class="fa-solid fa-cart-shopping menos"></i><i class="fa-solid fa-cart-plus mas" id="A${articulos[i].id}"></i></p></button>
        </div>
        </div>`
    }
}

// variables
let articulos = [];
fetch('./assets/js/data.json')
    .then((res) => res.json())
    .then((data) => {
        articulos = data;
        articuloos();
    });
let catalogo = getID('catalogo');

// evento mostrar catalogo

catalogo.addEventListener('click', (e) => {
    (e.target && e.target.tagName === "I" || e.target && e.target.tagName === "BUTTON" || e.target && e.target.tagName === "P") && functionAgregar(e.target.id);
    if (e.target && e.target.tagName === "I" || e.target && e.target.tagName === "BUTTON" || e.target && e.target.tagName === "P"){
        Toastify({
            text: `Se agrego ${hallar(e.target.id)}`,
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "white",
                color: "black"
            },
            onClick: () => despliegue() // Callback after click
        }).showToast();
    }
});