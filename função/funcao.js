function exibirTabuada(){

    let tabuada = parseInt(prompt("Digite o número da Tabuada desejada:"));

    console.log(`Tabuada do ${tabuada}:`);

for (let i = 1; i <= 10; i++) {
    // 2 x 4 =
    console.log(tabuada + " X " + i + " = " + (tabuada * i));
}
//chama a funcao
exibirTabuada();

}

// //crie uma funcao que solicite o nome da pessoa
// function exibirNomeSolicitado(){
//     let exibirNomeSolicitado = prompt("Digite o seu nome: ")

//     return exibirNomeSolicitado;
// }

// let nome = exibirNomeSolicitado();
// alert(nome);


// function somarDoisNumeros(n1, n2){
//     console.log(n1 + n2);
// }
// somarDoisNumeros(10, 10);

//crie uma funcao para o exercicio 08 de Esrrutura Condicional
//Passe via parametro o peso e altura.


    function calcularIMC(peso, altura) {

    //2 - Copiar do IMC
    //3 - Colar o código do IMC dentro da função
    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 15.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III ou Mórbida";
    }

    //Retornando o resultado
    return `IMC: ${imc.toFixed(2)} - Classificação: ${classificacao}`;
}

//4 - Chamar a função e atribuir peso e altura
let resultado = calcularIMC(80, 1.75);
console.log(resultado);












