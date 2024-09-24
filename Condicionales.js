const numero1 = 10;
const numero2 = 20;
const numero3 = 30;

let todosLosNumeros = [numero1, numero2, numero3];
console.log(todosLosNumeros);

//Imprimir en consola el número mayor de los tres.
console.log("El número mayor es:", Math.max(...todosLosNumeros));


//Imprimir en consola el número menor de los tres.
console.log("El número menor es:", Math.min(...todosLosNumeros));

//Imprimir en consola si el numero1 es par o impar.
par(numero1);

//Imprimir en consola si el numero2 es par o impar.
par(numero2);

//Imprimir en consola si el numero3 es par o impar.
par(numero3);

//Imprimir en consola si el numero1 es múltiplo de 5.
multiplo5(numero1);

//Imprimir en consola si el numero2 es múltiplo de 5.
multiplo5(numero2);

//Imprimir en consola si el numero3 es múltiplo de 5.
multiplo5(numero3);




function par(numero){
    if(numero%2===0){
        console.log(numero, "es par");
    }else{
        console.log(numero, "es impar")
    } 

}

function multiplo5(numero){
    if(numero%5===0){
        console.log(numero, "es multiplo de 5");
    }else{
        console.log(numero, "no es multiplo de 5");
    }
}