// -----------Preentrega 1 ------------------

// let administrador = (prompt("Coloque 1 si usted es administrador. En su defecto, 2 si usted es cliente"));

// if (administrador == 1){
//     (alert(`Ingrese desde la base de datos por favor.`));
// } else if (administrador != 1){
//     (alert("puede seguir comprando!"));
// }

// let pass = 1234;
// let dato = parseInt(prompt("cual es la clave?"));
// let intentos = 3;

// while (dato != pass && intentos > 0 ) {
//     intentos--;
//      alert(`la clave es incorrecta, te quedan ${intentos} intentos`);
//    if (intentos != 0) {
//         dato = parseInt(prompt("cual es la clave?"));
//     }
// }


// ---------------Preentrega 2 -------------------


let admin = document.getElementById("admin")
const boton = document.getElementById("btn")
//  ---------- Cliente ----------

class Cliente{
    constructor(nombre, calle, nuevoCliente) {
        this.nombre = nombre;
        this.calle = calle;
        this.nuevoCliente = nuevoCliente;
    }
}

function crearCliente() {

    let nombreCliente = document.querySelector("#nombreCliente").value;
    let calleCliente = document.querySelector("#direcCliente").value;
    let clienteExistente = document.querySelector("#nvoCliente").value;
    
    const clienteNuevo = new Cliente(nombreCliente, calleCliente, clienteExistente);

    console.log(clienteNuevo);
    return clienteNuevo;
}

JSON.parse(localStorage.getItem("cliente")) || localStorage.setItem("cliente", JSON.stringify(cliente));

//      ---- Administrador -----
class Administrador{
    constructor(nombre, departamento, precio){
        this.nombre =  nombre;
        this.departamento = departamento;
        this.precio = precio;

    }
}
let listaProductos = [
    {id: 1, nombre: "Yerba Playadito", departamento: "Infusiones", precio: "400"},
    {id: 2, nombre: "Arroz Gallo DC", departamento: "Alimentos", precio: "98"},
    {id: 3, nombre: "Coca Cola 1.5L", departamento: "Gaseosas", precio: "200"},
];

const agregarProducto = () => {
    let nombre = document.getElementById("nombre").value;
    let departamento = document.getElementById("departamento").value;
    let precio = parseInt(document.getElementById("precio")).value;

    let productoNuevo = new Administrador(nombre, departamento, precio);
    console.log(productoNuevo);
}

const generarCardsProductos = (productosInicio) => {
    divProductos.innerHTML = "";
  
    productosInicio.forEach((producto) => {

    const { id, nombre, imagen, departamento, precio} = producto
     
      let card = document.createElement("div");
      card.className = "item";
      card.innerHTML = `            
        <div class="item">
            <h4>${nombre}</h4>
            <img src="${imagen}" class="imgItems">
            <h5>$${precio}</h5>
            <input type="button" value="AÑADIR AL CARRITO🛒" class="carritoButton"><a href=""></a>
        </div>`;
  
      divProductos.appendChild(card);

      const btnComprar = document.getElementById(`btn${id}`)
      btnComprar.addEventListener("click", () => comprarProducto(id))
    
    });
};
    
JSON.parse(localStorage.getItem("productos")) || localStorage.setItem("productos", JSON.stringify(productoNuevo));



if (admin == 1){
    admin = true;
    agregarProducto();
    console.log(listaProductos);
} else if (admin != 1) {
    crearCliente();
}

 const menorQueCien = listaProductos.filter(p => p.precio <= 100);
    console.log(menorQueCien);

        









