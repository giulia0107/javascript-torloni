// Faça um programa que imprima na tela a tabuada de um número qualquer escolhido pelo usuário até o 10.

let tabuada = parseInt(prompt("Digite o número da Tabuada desejada:"));

//==========TABUADA===========
// 2 X 1 = 2
// 2 X 2 = 
// 2 X 3 =
// 2 X 4 = 

// 1 numero da condicão do for - inicialização - variavel
// 2 numero dentro da condicao do for - condicao - verifica a volta da variavel
// 3 numero dentro da condicao do for - incremento - soma as voltas
// i++ igual a i = i+1

console.log(`Tabuada do ${tabuada}:`);

for (let i = 1; i <= 10; i++) {
    // 2 x 4 =
    console.log(tabuada + " X " + i + " = " + (tabuada * i));
}



