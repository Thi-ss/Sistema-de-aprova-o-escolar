let notas = [7, 5 , 7, 8 , 10];
let abaixo = false
for (let i = 0; i < notas.length; i++){
    if (notas [i] < 6){
       abaixo = true;
       break;
    }
}

if (abaixo === true){
    console.log ('Existe nota abaixo da média.');
}else if (abaixo === false){
    console.log ('Todas as notas estão acima da média.');
}