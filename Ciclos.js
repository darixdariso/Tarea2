let resultado1 = [];
let resultado2 = [];
let resultado3 = [];
let resultado4 = [];
let resultado5 = [];
let resultado6 = [];
let resultado7 = [];
let resultado8 = [];

// 1. Imprimir en consola los números del 1 al 10.
for (let i = 1; i <= 10; i++) {
    resultado1.push(i);
}
console.log("Números del 1 al 10:", resultado1);

// 2. Imprimir en consola los números del 10 al 1.
for (let i = 10; i >= 1; i--) {
    resultado2.push(i);
}
console.log("Números del 10 al 1:", resultado2);

// 3. Imprimir en consola los números del 1 al 10 pero solo los pares.
for (let i = 1; i <= 10; i++) {
    if (par(i)) {
        resultado3.push(i);
    }
}
console.log("Números pares del 1 al 10:", resultado3);

// 4. Imprimir en consola los números del 1 al 10 pero solo los impares.
for (let i = 1; i <= 10; i++) {
    if (!par(i)) {
        resultado4.push(i);
    }
}
console.log("Números impares del 1 al 10:", resultado4);

// 5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
for (let i = 1; i <= 10; i++) {
    if (multiplo3(i)) {
        resultado5.push(i);
    }
}
console.log("Números múltiplos de 3 del 1 al 10:", resultado5);

// 6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
for (let i = 1; i <= 10; i++) {
    if (multiplo5(i)) {
        resultado6.push(i);
    }
}
console.log("Números múltiplos de 5 del 1 al 10:", resultado6);

// 7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
for (let i = 1; i <= 10; i++) {
    if (multiplo3(i) && multiplo5(i)) {
        resultado7.push(i);
    }
}
console.log("Números múltiplos de 3 y 5 del 1 al 10:", resultado7);

// 8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
for (let i = 1; i <= 10; i++) {
    if (multiplo3(i) || multiplo5(i)) {
        resultado8.push(i);
    }
}
console.log("Números múltiplos de 3 o 5 del 1 al 10:", resultado8);

// Funciones auxiliares
function par(numero) {
    return numero % 2 === 0;
}

function multiplo3(numero) {
    return numero % 3 === 0;
}

function multiplo5(numero) {
    return numero % 5 === 0;
}
