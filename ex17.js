let notas = [10, 9, 7, 8];
let soma = 0; 
for (i = 0; i < notas.length; i ++){
    soma = soma + notas[i];
}
let media = soma/notas.length;
console.log ('A média é: ' + media)