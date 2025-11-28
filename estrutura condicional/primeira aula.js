// window.alert("Binho lindo cheiroso")

// window.confirm("Hoje é sexta?")

//comentario
/*
comentando varias 
linhas*/

// let nome = window.prompt("Qual é o seu nome?")
// window.alert("Bem vindo!" + nome)

// console.log("Apresenta a mensagem na tela")


// let numero01 = parseInt (prompt("Digite o primeiro numero: "))

// let numero02 = parseInt( prompt("Digite o segundo numero: "))

// let soma = numero01 + numero02

// console. log(soma)

// let num01 = parseFloat(prompt("Digite algum numero: "))

// let num02 = parseFloat(prompt("Digite algum numero: "))

// let resultado = num01 + num02

// console. log(resultado) 

// let idade = parseInt(prompt("Qual é sua idade"))

// if (idade >= 18) {
//     console.log("Você é maior de idade, da-lheee")
// }
// else{
//     console.log("Você é menor de idade, Jovem")
// }

let estacoes = prompt("Digite uma estação do ano: ")
switch (estacoes) {
    case "Verão":
        console.log("Muito calor e praia")
        break;

    case "Outono":
        console.log("Äs folhas caem no final")
        break;

    case "Primavera":
        console.log("Eu vejo flores em você")
        break;


    default:
        console.log("Não existe essa estação!")
        break;
}