const productos = [
    {
        id:"telefono-1",
        titulo: "iPhone 12",
        imagen: "img/iphone/iphone12.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-apple"
        },
        precio:450000
    },
    {
        id:"telefono-2",
        titulo: "iPhone 13",
        imagen: "img/iphone/iphone13.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-apple",
        },
        precio:550000
    },
    {
        id:"telefono-3",
        titulo: "iPhone 14",
        imagen: "img/iphone/iphone14.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-apple"
        },
        precio:650000
    },
    {
        id:"telefono-4",
        titulo: "Moto Edge 20",
        imagen: "img/motorola/edge20.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-motorola"
        },
        precio:350000
    },
    {
        id:"telefono-5",
        titulo: "Moto Edge 30",
        imagen: "img/motorola/edge30.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-motorola"
        },
        precio:400000
    },
    {
        id:"telefono-6",
        titulo: "Moto G 72",
        imagen: "img/motorola/g72.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-motorola"
        },
        precio:120000
    },
    {
        id:"telefono-7",
        titulo: "S20",
        imagen: "img/samsung/s20.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-samsung"
        },
        precio:200000
    },
    {
        id:"telefono-8",
        titulo: "S21",
        imagen: "img/samsung/s21.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-samsung"
        },
        precio:250000
    },
    {
        id:"telefono-9",
        titulo: "S22",
        imagen: "img/samsung/s22.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-samsung"
        },
        precio:300000
    },
    {
        id:"telefono-10",
        titulo: "S23",
        imagen: "img/samsung/s22.jpg",
        categoria: {
            nombre:"Telefono",
            id:"celulares-samsung"
        },
        precio:400000
    },
]


const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numero = document.querySelector("#numero")

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "" ;
    
    productosElegidos.forEach(producto => {

        const div =  document.createElement("div")
        div.classList.add("producto")
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar"${producto.id}>Agregar</button>
        </div>
        `;

        contenedorProductos.append(div)
    })
    
    actualizarBotonesAgregar()
}
cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"))        
        e.currentTarget.classList.add("active");

    if(e.currentTarget.id != "todos"){
        const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id)
        tituloPrincipal.innerText = productoCategoria.categoria.nombre
        const productoSeleccionado = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
        cargarProductos(productoSeleccionado)
    }else{
        tituloPrincipal.innerText = "Todos los productos"
        cargarProductos(productos)
    }


    })
})

function actualizarBotonesAgregar () {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}
let productosEnCarrito

let productoEnCarritoLS = localStorage.getItem("productos-en-carrito")
 
if(productosCarritoLS){
   productosEnCarrito = JSON.parse(productosEnCarritoLS)
   actualizarNumerito()
}else{
     productosCarrito = []
}


const productosCarrito= []

function agregarAlCarrito() {

    const idBoton = e.currentTarget.id
    const productosAgregados = producots.find(producto => producto.id === idBoton)

    if(productosCarrito.some(producto => producto.id === idBoton)){
        productosCarrito.findIndex(producto => producto.id === idBoton)
        productosCarrito[index].cantidad++
    }else{
        productosAgregados.cantidad = 1 
        productosCarrito.push(productosAgregados)
    }
    actualizarNumero()

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numero.innerText = nuevoNumerito;
}