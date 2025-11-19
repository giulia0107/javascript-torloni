alert("Informe as notas de 0 a 10")

let numero01 = parseFloat(prompt("Digite a primeira nota: "))
let numero02 =parseFloat(prompt( "Digite a segunda nota: "))
let numero03 =parseFloat(prompt( "Digite a terceira nota: "))
let numero04 =parseFloat(prompt( "Digite a quarta nota: "))

let media = (numero01 + numero02 + numero03 + numero04) / 4;
let mensagem = "";

if (media >= 7.0) {
    mensagem = " APROVADO";
} else if (media >= 5.0) {
    mensagem = " RECUPERAÇÃO"
} else{
    mensagem = " REPROVADO";
}

alert("Média: " + media.toFixed(2) + "\nSituação: " + mensagem);