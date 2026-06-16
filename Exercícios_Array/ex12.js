let filmes = ['Dia D', 'Todo Mundo em Pânico', 'Mestres do Universo', 'Backrooms: Um Não-Lugar', 'Hit para Dois']

for (let indice = 0; indice < filmes.length; indice++){
    for (let numeracao; numeracao < filmes.length; numeracao++){
        console.log(numeracao + '- ' + filmes[indice]);
    }
}
