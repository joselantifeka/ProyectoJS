let articulos = [
    {
    id: 0,
    nombre: "New York Yankees",
    precio: 35,
    img1: "./assets/img/gorras/NY.png",
    img2: "./assets/img/gorras/NY2.jpg"},
    {
    id: 1,
    nombre: "Boston Sox SS",
    precio: 37,
    img1: "./assets/img/gorras/B.jpg",
    img2: "./assets/img/gorras/B2.jpg"},
    {
    id: 2,
    nombre: "Chicago White Sox",
    precio: 34,
    img1: "./assets/img/gorras/S.jpg",
    img2: "./assets/img/gorras/S2.jpg"}
    
]

// Helpers
function getID(id){
    return document.getElementById(id)
}

function getClass(id){
    return document.getElementsByClassName(id)
}