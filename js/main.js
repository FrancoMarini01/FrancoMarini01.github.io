let admin = document.getElementById("admin")
const boton = document.getElementById("btn")
//  ---------- Cliente ----------

class Cliente{
    constructor(nombre, calle, nuevoCliente) {
        this.nombre = nombre;
        this.calle = calle;
        this.nuevoCliente = nuevoCliente;
    }
<<<<<<< HEAD

let pass = 1234;
let dato = parseInt(prompt("cual es la clave?"));
let intentos = 3;

while (dato != pass && intentos > 0 ) {
    intentos--;
     alert(`la clave es incorrecta, te quedan ${intentos} intentos`);
   if (intentos != 0) {
        dato = parseInt(prompt("cual es la clave?"));
    }
}
=======
}

function crearCliente() {

    let nombreCliente = document.querySelector("#nombreCliente").value
    let calleCliente = document.querySelector("#direcCliente").value
    let clienteExistente = document.querySelector("#nvoCliente").value
    
    const clienteNuevo = new Cliente(nombreCliente, calleCliente, clienteExistente);

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
listaProductos = JSON.parse(localStorage.getItem("productos")) || [];

const agregarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let departamento = document.getElementById("departamento").value;
    let precio = parseInt(document.getElementById("precio")).value;

    let productoNuevo = new Administrador(nombre, departamento, precio);

    listaProductos.push(productoNuevo);
    localStorage.setItem("productos", listaProductos);
    localStorage.setItem("productoNvo", productoNuevo);
    return listaProductos;

}

if (admin == 1){
    admin = true;
    agregarProducto();
    console.log(listaProductos);
} else if (admin != 1) {
    crearCliente();
}
boton.addEventListener("click", agregarProducto);
    console.log(listaProductos);

listaProductos.forEach((producto)=> {
    console.log(`${producto.nombre} vale $${producto.precio}`)
});

const menorQueCien = listaProductos.filter(p => p.precio <= 100);
    console.log(menorQueCien);

>>>>>>> 462e4b88d7180a0e0f41e16f5e11f717d207419b






