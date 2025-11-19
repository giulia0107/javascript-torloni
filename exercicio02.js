// let numero = parseInt(prompt("Digite um número de 1 a 7: "))

// let dias = [  
// "Segunda-Feira",
// "Terça-Feira",
// "Quarta-Feira",
// "Quinta-Feira",
// "Sexta-Feira",
// "Sábado",
// "Domingo"
// ];

// if (numero>= 1 && numero <= 7) {

//     alert(Dias[numero - 1]);
// } else{
//     alert("Número inválido! Digite um número de 1 a 7.")
// }

let num = prompt("Digite um número de 1 a 7 para representar um dia da semana:");

num = Number(num);

let dia;

switch (num) {
    case 1:
        dia = "Domingo";
        break;
    case 2:
        dia = "Segunda-Feira";
        break;
    case 3:
        dia = "Terça-Feira";
        break;
    case 4:
        dia = " Quarta-Feira";
        break;
    case 5:
        dia = "Quinta-Feira";
        break;
    case 6:
        dia = "Sexta-Feira";
        break;
    case 7:
        dia = "Sabado";
        break;
    default:
        dia = "Número inválido! Digite um número de 1 a 7.";
}

alert(dia);