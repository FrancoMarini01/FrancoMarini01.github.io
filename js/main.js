let admin = true;
let admin = (prompt("Coloque 1 si usted es administrador. En su defecto, 2 si usted es cliente"));

if (admin == 1){
    (alert(`Ingrese desde la base de datos por favor.`));
} else if (admin != 1){
    (alert("puede seguir comprando!"));
}

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


        









