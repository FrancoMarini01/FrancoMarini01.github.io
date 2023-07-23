let cliente = parseInt(prompt("si usted es cliente escriba 1. Si es administrador marque 2"));
    if (cliente = 1) {
        alert("Bienvenido a Mercado Petit online");
    } else {
        alert("Digite clave de administrador");
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






