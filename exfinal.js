let produtos = ['Salgado', 'Suco', 'Coxinha', 'Refrigerante', 'Bolo'];

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

produtos.push('Pastel');

produtos.shift();

produtos[1] = 'Suco de Laranja';

for (let i = 0; i < produtos.length; i++) {
    console.log(produtos[i]);
}

console.log('Quantidade final de produtos: ' + produtos.length);

let encontrado = false;

for (let i = 0; i < produtos.length; i++) {
    if (produtos[i] === 'Coxinha') {
        encontrado = true;
        break;
    }
}

if (encontrado === true) {
    console.log('O produto Coxinha foi encontrado na lista.');
} else {
    console.log('O produto Coxinha não foi encontrado na lista.');
}