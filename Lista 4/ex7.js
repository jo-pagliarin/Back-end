// Questão 7 - 	Hora da verdade!
// 	Usando a interpolação de strings (`ao invés de aspas, use crase`) componha uma string bem bacana para colocar como texto interno do elemento do exercício anterior. A string que você irá compor irá usar os valores de alguns idosos. Faça algo seguindo o exemplo abaixo e usando a sintaxe adequada.


const idosos = [
    { id: 0, nome: "genoveva", idade: "65", vivo: true },
    { id: 1, nome: "creitons", idade: "58", vivo: true },
    { id: 2, nome: "genival", idade: "81", vivo: false },
    { id: 3, nome: "irineu", idade: "60", vivo: null },
    { id: 4, nome: "iracema", idade: "32", vivo: true },
    { id: 5, nome: "mirileu", idade: "85", vivo: false },
    { id: 6, nome: "virmondo", idade: "123", vivo: true },
    { id: 7, nome: "vinhado", idade: "12", vivo: false },
    { id: 8, nome: "Lindomar", idade: "60", vivo: true },
    { id: 9, nome: "celestino", idade: "68", vivo: true },
    { id: 10, nome: "felisberg", idade: "72", vivo: false },
    { id: 11, nome: "eunice", idade: "67", vivo: true },
    { id: 12, nome: "josefina", idade: "92", vivo: true },
    { id: 13, nome: "virosvaldo", idade: "12", vivo: false },
    { id: 14, nome: "masteromio", idade: "85", vivo: false  }
]

function exibeIdoso(){
    var i = document.getElementById("recebeIdoso").value;
    var estado; 

    if (idosos[i].vivo == true)
    var estado = "vivo"; 

    else if(idosos[i].vivo == false)
    var estado = "morto";

    else
    var estado = "vivo ou morto, não sabemos"; 

    document.getElementById("exibeIdoso").innerText = `O nome do idoso é ${idosos[i].nome}, ele tem ${idosos[i].idade} anos e está ${estado}`
}

