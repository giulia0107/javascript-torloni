let mercedes = {
    modelo: "G63",
    ano: "2025",
    fabricante: "mercedes",
    cor: "preto fosco",
    acelerar(){
        console.log("Acelerando...vrum...vrum");
    },
    freiar(){
        console.log("Freiando...");
    }
};
console.log(mercedes.modelo);
console.log(mercedes.acelerar());



let Pofessor = {
nome:"Jonas Ribeiro",
salario:10.000,
cor: "branco",
dataNasc: new Date(1980, 5, 30),
hobbie: ["treinar", "fotografar", "escutar musicas"],

atribuirNota(){},
baterPonto(){
    let horarioBatido = new Date(2025, 10, 28, 17, 5 );
    console.log(horarioBatido);
}
}

console.log(professorJonas.hobbie);
console.log(professorJonas.dataNasc);
console.log(professorJonas.baterPonto());