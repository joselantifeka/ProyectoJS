let articulos = [];
fetch('./assets/js/data.json')
    .then((res) => res.json())
    .then((data) => {
        articulos = data;
        articuloos();
    })

// Helpers
function getID(id) {
    return document.getElementById(id);
}

function getClass(id) {
    return document.getElementsByClassName(id)
};

// funcion mostrar articulos
function articuloos() {
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
}