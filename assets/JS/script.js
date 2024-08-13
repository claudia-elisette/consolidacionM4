//Función constructora de Producto
function Producto(nombre, precio){
    this.nombre = nombre
    this.precio = precio
}

//Definir productos
let producto1 = new Producto('Leche', 1000)
let producto2 = new Producto('Pan', 2000)
let producto3 = new Producto('Queso', 1200)
let producto4 = new Producto('Mermelada', 890)
let producto5 = new Producto('Azúcar', 1300)

//Función constructora de carrito
function Carrito(productos){
    this.productos = productos || []
}

//Funciónes para agregar productos al preCarrito
Carrito.prototype.addProducto = function(producto){
    this.productos.push(producto)
}

//Definir preCarrito
let preCarrito = new Carrito()

//Ciclo a repetir
let fin = 0
let totalCompra = 0

do{
    //Capturar seleccion de productos
    do{
        let producto = prompt(
            `Productos disponibles:
            1.- Leche $1000
            2.- Pan de Molde $2000
            3.- Queso $1200
            4.- Mermelada $890
            5.- Azúcar $1300

            Ingresa el número del producto que deseas agregar al carrito:
            `
        )

        switch(producto){
            case '1':
                preCarrito.addProducto(producto1)
                break;

            case '2':
                preCarrito.addProducto(producto2)
                break;

            case '3':
                preCarrito.addProducto(producto3)
                break;

            case '4':
                preCarrito.addProducto(producto4)
                break;

            case '5':
                preCarrito.addProducto(producto5)
                break;

            default:
                alert('Ups...no tenemos ese producto por el momento, por favor elige una opción disponible.')
                break;
        }

    }while(preCarrito.productos.length == 0)

    //Capturar cantidad de productos
    let cantidad = 0

    do{
        let cant = parseInt(prompt("Ingrese la cantidad de unidades"))

        if(cant > 0){
            cantidad = cant
        }else{
            alert("La cantidad de unidades debe ser mayor a 0")
        }

    }while(cantidad == 0)

    //crear miCarrito
    let miCarrito = preCarrito.productos.map((producto)=>{
        let newProducto = producto
        newProducto.cantidad = cantidad

        return newProducto
    })


    alert(`${miCarrito[miCarrito.length - 1].cantidad} ${miCarrito[miCarrito.length - 1].nombre}(s) agregado(s) al carrito.`)


    do{let cerrar = prompt("¿Deseas seguir agregando productos? (si/no)")
    if(cerrar == "si"){
        fin = 1
    }else if(cerrar == "no"){
        fin = 2
    }else(alert("Por favor, ingresa una opción válida"))

    }while(fin == 0)

    let precioTotal = miCarrito.reduce((total, producto)=>{
        return total + (producto.precio*producto.cantidad)
    },0)

   totalCompra = precioTotal

}while(fin == 1)

alert(`Total de la compra: $${totalCompra}`)

