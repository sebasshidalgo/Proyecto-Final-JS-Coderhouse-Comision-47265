// Creamos el array con los productos
const productos = [
    {modelo: "S21+", imagen: "../assets/img/s21+.png", pantalla: `Dynamic AMOLED 2X 6,7" Full HD+`, almacenamiento: "128 GB", memoria: "8 GB", bateria: "4800 mAh" , procesador: "Snapdragon 888" , camara: "12 mpx" , precio: 249, stock: 1},
    {modelo: "S21 Ultra", imagen: "../assets/img/s21ultra.png", pantalla: `Dynamic AMOLED 2X 6,8" 120Hz WQHD+`, almacenamiento: "256 GB" , memoria: "12 GB", bateria: "5000 mAh" , procesador: "Exynos 2100", camara: "108 mpx" , precio: 499, stock: 1},
    {modelo: "Z Fold 4", imagen: "../assets/img/zfold.png", pantalla: `Dynamic AMOLED 2X 7,6" Full HD+ y 120Hz` , almacenamiento: "512 GB", memoria: "12GB" , bateria: "4400 mAh", procesador: "Snapdragon 8+ Gen 1" , camara: "50 mpx" , precio: 799, stock: 1},
    {modelo: "Z Flip 4", imagen: "../assets/img/zflip.png", pantalla: `Dynamic AMOLED 2X 6,7" Full HD+ y 120Hz`, almacenamiento: "256 GB", memoria: "8 GB", bateria: "3700 mAh", procesador: "Snapdragon 8+ Gen 1", camara: "12 mpx" , precio: 599, stock: 1},
    {modelo: "iPhone 13", imagen: "../assets/img/13.png", pantalla: `Super Retina XDR OLED 6,1" Full HD+`, almacenamiento: "512 GB", memoria: "4 GB", bateria: "3227 mAh", procesador: "Apple A15 Bionic", camara: "12 mpx", precio: 1499, stock: 1},
    {modelo: "iPhone 12 Pro", imagen: "../assets/img/12pro.png", pantalla: `Super Retina XDR OLED 6,1" Full HD`, almacenamiento: "256 GB", memoria: "6 GB", bateria: "2815 mAh", procesador: "Apple A14", camara: "12 mpx", precio: 1299, stock: 1},
    {modelo: "iPhone 11", imagen: "../assets/img/11.png", pantalla: `IPS LCD 6,1" Full HD`, almacenamiento: "128 GB", memoria: "4 GB", bateria: "3110 mAh", procesador: "Apple A13 Bionic", camara: "12 mpx", precio: 1099, stock: 1},
    {modelo: "iPhone 8 Plus", imagen: "../assets/img/8plus.png", pantalla: `IPS LCD 5,5" HD`, almacenamiento: "64 GB", memoria: "3 GB", bateria: "2700 mAh", procesador: "Apple A11 Bionic", camara: "12 mpx", precio: 799, stock: 1},
    {modelo: "iPad 12", imagen: "../assets/img/ipad12.png", pantalla: `Liquid Retina XDR 12,9"`, almacenamiento: "512 GB", memoria: "16 GB", bateria: "5500 mAh", procesador: "Chip M1", camara: "12 mpx", precio: 899, stock: 1},
    {modelo: "iPad 10 Pro", imagen: "../assets/img/ipad10pro.png", pantalla: `LCD IPS 10,5"`, almacenamiento: "256 GB", memoria: "8 GB", bateria: "5200 mAh", procesador: "Chip A10X Fusion", camara: "12 mpx", precio: 599, stock: 1},
    {modelo: "iPad 10 Mini", imagen: "../assets/img/ipad10mini.png", pantalla: `LCD IPS 8,3"`, almacenamiento: "256 GB", memoria: "8 GB", bateria: "4700 mAh", procesador: "Chip A15 Bionic", camara: "12 mpx", precio: 499, stock: 1},
    {modelo: "iPad 11 Pro", imagen: "../assets/img/ipad11pro.png", pantalla: `Liquid Retina IPS 11"`, almacenamiento: "512 GB", memoria: "16 GB", bateria: "5200 mAh", procesador: "Chip M1", camara: "12 mpx", precio: 799, stock: 1},
];

// Traemos el div contenedor padre donde agregaremos los productos del array
const containerProductos = document.querySelector("#containerProductos");

// Recorremos el array de productos y vamos creando mediante DOM las etiquetas html para cada objeto del array
productos.forEach((item) => {
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="grid-container-2">
        <div class="box-1"> 
            <div class="productos">
                <h2>${item.modelo}</h2>
            </div>
            <div> 
                <img class="box-img" src="${item.imagen}">
            </div>
        </div>    
        
        <div class="box-2">
            <p class="caracteristicas">Características del producto:</p>
            <ul class="especificaciones">
                <li>Pantalla: ${item.pantalla}</li>
                <li>Almacenamiento: ${item.almacenamiento}</li>
                <li>Memoria RAM: ${item.memoria}</li>
                <li>Batería: ${item.bateria}</li>
                <li>Procesador: ${item.procesador}</li>
                <li>Cámara: ${item.camara}</li>
            </ul>
        </div>

        <div class="box-3">        
            <div class="precio">
                <b>Precio: ${item.precio} USD</b>
            </div>
        </div>

        <div class="box-4">
            <button class="comprar">Agregar al carrito</button>
            <b>Stock disponible: ${item.stock} unidades</b>
        </div>
    </div>
    <hr />
    `;
    //agregamos el nodo creado al html
    containerProductos.append(div);
});

// aca estoy viendo como armar una busqueda de los productos
let busqueda = document.getElementById("busqueda");

busqueda.addEventListener("input", (e) => {
    let encontrado = productos.find((item) => item.modelo == busqueda.value);

    if(encontrado){
        console.log(encontrado);
    }
});
