let admin = (prompt("Coloque 1 si usted es administrador. En su defecto, 2 si usted es cliente"));

if (admin == 1){
    (alert(`Ingrese desde la base de datos por favor.`));
} else if (admin != 1){
    (alert("puede seguir comprando!"));
}


let productos = parseInt (prompt("CUANTOS PRODUCTOS DESEA COMPRAR?"));

    for (let i = 0; i < productos ; i++) {
        if (productos === 0){
            alert ("Siga recorriendo la pagina sin problemas!");
        } else{
            alert ("Puede ver nuestras ofertas y promociones!");
        }
    }
