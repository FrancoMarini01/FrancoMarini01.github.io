let admin = (prompt("Coloque 1 si usted es administrador. En su defecto, 2 si usted es cliente"));

    if (admin == 1){
        (alert(`Ingrese desde la base de datos por favor.`));
    } else if (admin != 1) {
        (alert("puede seguir comprando!"));
    }

function Cliente() {
    

let nombreCliente = prompt("Cual es su nombre?");
let emailCliente = prompt("Cual es su email?");
let calleCliente = prompt("Cual es su direccion?");
let nuevoCliente = prompt("Es usted cliente nuevo? Responda si o no");
let propNuevoCliente;
    if (nuevoCliente == "si"){
    nuevoCliente = true
    } else{
        nuevoCliente = false
    }

const clienteNuevo = new Cliente(nombreCliente, emailCliente, calleCliente, propNuevoCliente);
console.log(clienteNuevo);
return clienteNuevo;
}



class Administrador{
    constructor(nombre, departamento, precio){
        this.nombre =  nombre;
        this.departamento = departamento;
        this.precio = precio;

    }
}
let listaProductos = [
    {nombre: "Yerba Playadito", departamento: "Infusiones", precio: "100"},
    {nombre: "Arroz Gallo DC", departamento: "Alimentos", precio: "100"},
];

const agregarProducto = () => {
    let nombre = prompt("Cual es el producto a ingresar?");
    let departamento = prompt("A que departamento pertenece?");
    let precio = parseFloat(prompt("Que precio tiene?"));

    let productoNuevo = new Administrador(nombre, departamento, precio);

    listaProductos.push(productoNuevo);
    return listaProductos;
}
