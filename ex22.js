let produtos1 = ["Pastel", "Suco", "Coxinha", "Chocolate"];
let produtoBuscado = "Coxinha";
let encontrado = false;

for (let i = 0; i < produtos1.length; i++) {
    if (produtos1[i] === produtoBuscado) {
        encontrado = true;
    }
}

if (encontrado) {
    console.log("O produto foi encontrado!");
} else {
    console.log("Produto não encontrado.");
}
