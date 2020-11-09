var iva = 19;
var precio = 20;
totalIva = (precio * iva / 100);

function sum(iva, precio, totalIva) {
    console.log(`el valor sin iva es ${precio}, el valor del iva es ${totalIva}, valor total es ${totalIva + precio}`);
};

sum(iva, precio, totalIva);


