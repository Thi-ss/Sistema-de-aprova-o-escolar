let numeros = [1, 2, 3, 4, 5];
let menornumero = numeros[3];
for (let i = 0; i < numeros.length; i++){
    if (numeros[i]  < menornumero){
        menornumero = numeros[i];
    }
}
console.log ('Menor número é ' + menornumero);
