//1 
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


//4 - Chamar a função e atribuir peso e altura
let resultado = calcularIMC(80, 1.75);
console.log(resultado);
}
//2
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

//3
function conferirSequencia() {
    

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));

if (n1 < n2 && n2 < n3) {
    alert("Os números estão em ordem crescente.");
// } else {
//     alert("Os números NÃO estão em ordem crescente.");
// 
}
    //verificar o decrescente
if (n1 > n2 && n2 > n3) {
    alert("Os numeros estão em ordem decrescente ")
}
// verificar o aleatório

else {
    alert("Os numeros estao em ordem aleatória");
}
conferirSequencia();

}
//4

function exibirNumerosPares() {
    

let numero = parseInt(prompt("Digite um número(qualquer um)"));

if (numero % 2 === 0) {
 alert("O número " + numero + " é PAR.");
} else {
    alert("O número " + numero + " é ÍMPAR.");
}exibirNumerosPares();
}

//5
function verificarUsuario() {
    let username = prompt("Digite o seu nome: ")

let senha = prompt("Digite sua senha: ")

if (username == "admin" && senha == "senha123") {
    console.log("Login bem-sucedidido!")
}
else{
    console.log("Login incorreto!")
}verificarUsuario();
}

