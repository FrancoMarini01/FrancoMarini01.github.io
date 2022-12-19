let admin = (prompt("Coloque 1 si usted es administrador. En su defecto, 2 si usted es cliente"));

//  ---------- Cliente ----------

class Cliente{
    constructor(nombre, calle, nuevoCliente) {
        this.nombre = nombre;
        this.calle = calle;
        this.nuevoCliente = nuevoCliente;
    }
}

function crearCliente() {

    let nombreCliente = prompt("Cual es su nombre?");
    let calleCliente = prompt("Cual es su direccion?");
    let clienteExistente = prompt("Es usted cliente nuevo? Responda si o no");
    let propClienteExistente;
        if (clienteExistente == "si"){
            clienteExistente = true
        } else{
            clienteExistente = false
        }
    const clienteNuevo = new Cliente(nombreCliente, calleCliente, propClienteExistente);

    console.log(clienteNuevo);
    return clienteNuevo;
}

//      ---- Administrador -----
class Administrador{
    constructor(nombre, departamento, precio){
        this.nombre =  nombre;
        this.departamento = departamento;
        this.precio = precio;

    }
}
let listaProductos = [
    {nombre: "Yerba Playadito", departamento: "Infusiones", precio: "400"},
    {nombre: "Arroz Gallo DC", departamento: "Alimentos", precio: "98"},
];

const agregarProducto = () => {
    let nombre = prompt("Cual es el producto a ingresar?");
    let departamento = prompt("A que departamento pertenece?");
    let precio = parseFloat(prompt("Que precio tiene?"));

    let productoNuevo = new Administrador(nombre, departamento, precio);

    listaProductos.push(productoNuevo);
    return listaProductos;
}

if (admin == 1){
    (alert(`Ingrese desde la base de datos por favor.`));
    agregarProducto();
    console.log(listaProductos)
} else if (admin != 1) {
    crearCliente();
}

listaProductos.forEach((producto)=> {
    console.log(`${producto.nombre} vale $${producto.precio}`)
});

// const menorQueCien = listaProductos.filter(p => p.precio <= 100);
// console.log(menorQueCien);




