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
function Carrito(producto){
    this.producto = producto || []
}

//Funciónes para agregar productos y cantidad al carrito
Carrito.prototype.addProducto = function(producto){
    this.productos.info.push(producto)
}
Carrito.prototype.addCantidad = function(cantidad){
    this.productos.cantidad = cantidad
}

//Definir miCarrito
let miCarrito = new Carrito()
console.log(miCarrito)

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
             miCarrito.addProducto(producto1)
             break;

         case '2':
             miCarrito.addProducto(producto2)
             break;

         case '3':
             miCarrito.addProducto(producto3)
             break;

         case '4':
             miCarrito.addProducto(producto4)
             break;

         case '5':
             miCarrito.addProducto(producto5)
             break;

         default:
             alert('Ups...no tenemos ese producto por el momento, por favor elige una opción disponible.')
             break;

    }

}while(miCarrito.productos.length == 0)

do{
    let cantidad = parseInt(prompt('Ingrese la cantidad de unidades'))

    if(cantidad >= 0){
        miCarrito.addCantidad(cantidad)
    }else{
        alert('La cantidad de unidades debe ser mayor que 0')
    }
}while(miCarrito.productos.cantidad == 0)

console.log(miCarrito.productos.cantidad)

