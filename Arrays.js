let numeros = [1, 2, 3, 4, 5];
console.log(numeros);

let frutas = ["Manzana", "Naranja", "Plátano", "Uva"];
console.log(frutas);

// 1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.

function sumaArray(array){
    let suma =  0;
    for(let i=0 ; i<array.length ; i++){
        suma += array[i];
    }
    return suma;
}

console.log("Suma del Array:", sumaArray(numeros));

// 2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.

function promedioArray(array){
    let suma = 0;
    for(let i=0 ; i<array.length ; i++){
        suma += array[i];
    }
    return suma/array.length;
}

console.log("El promedio del Array:", promedioArray(numeros));

// 3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.

function mayusString(array){
    let arrayNuevo = [];
    for(let i=0 ; i<array.length ; i++){
        arrayNuevo.push(array[i].toUpperCase());
    }
    return arrayNuevo;
}

console.log("Array en mayúsculas:", mayusString(frutas));
// 4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.

function arrayPares(array){
    let arrayNuevo = [];
    for(let i=0; i<array.length; i++){
        if(array[i] % 2 === 0){
            arrayNuevo.push(array[i]);
        }
    }
    return arrayNuevo;
}
console.log("Unicamente los pares:", arrayPares(numeros));
