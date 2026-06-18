let numeros = [1, 2, 3, 4, 5]; 
let maiornumero = numeros[0]; 

for (let i = 0; i < numeros.length; i++) { 
    if (numeros[i] >= maiornumero){ 
        maiornumero = numeros[i];
    }
} 

console.log('Maior número é ' + maiornumero)