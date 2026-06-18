let notas = [5.5, 7.0, 8.5, 6.0, 9.0, 4.0];
let notasBoas = 0;

for (let i = 0; i < notas.length; i++) {
    if (notas[i] >= 7) {
        notasBoas++;
    }
}

console.log('Quantidade de notas boas: ' + notasBoas);