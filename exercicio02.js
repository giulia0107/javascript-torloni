let numero = parseInt(prompt("Digite um número de 1 a 7: "))

let dias = [  
"Segunda-Feira",
"Terça-Feira",
"Quarta-Feira",
"Quinta-Feira",
"Sexta-Feira",
"Sábado",
"Domingo"
];

if (numero>= 1 && numero <= 7) {

    alert(Dias[numero - 1]);
} else{
    alert("Número inválido! Digite um número de 1 a 7.")
}