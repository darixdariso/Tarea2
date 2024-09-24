// 1. **Crear un objeto de persona**: Define un objeto llamado "persona" que tenga propiedades como nombre, edad y género. Luego, muestra la información de esa persona por la consola.
let persona = {
    nombre : "Diego",
    edad : "22",
    genero : "Masculino"
}

console.log(persona);


/* 2. Crear un objeto llamado caja: La caja se compone de cuadernos, lápices, papel, fotografías y indica el estado si esta en buen estado o no.
Imprimir el objeto entero por consola, imprimir cada propiedad del objeto y el tipo de dato que es.*/

let caja = {
    cuadernos : 3,
    lapices : 5,
    papel : 10,
    fotografias : 2,
    estado : "Mal estado"
}

console.log(caja);
console.log(`Cuadernos: ${caja.cuadernos}, Tipo de dato: ${typeof caja.cuadernos}`);
console.log(`Lapices: ${caja.lapices}, Tipo de dato: ${typeof caja.lapices}`);
console.log(`Papel: ${caja.papel}, Tipo de dato: ${typeof caja.papel}`);
console.log(`Fotografias: ${caja.fotografias}, Tipo de dato: ${typeof caja.fotografias}`);
console.log(`Estado: ${caja.estado}, Tipo de dato: ${typeof caja.estado}`);