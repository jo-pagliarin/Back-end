// Questão 6 - 	 Em seu arquivo Javascript, crie um novo elemento e atribua este elemento à uma variável const coisa = document.createElement(‘coisa’)
// 	Defina o texto interno deste elemento para “elemento criado”
// 	Dê a boa notícia à div do exercício anterior e informe a ela que ela tem um filho.   ElementoPai.appendChild(nomeDoFilho)
// 	Dica: Perceba que os ID são tão importantes quanto variáveis. Escolha nomes que facilitarão a correção das atividades.

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

document.body.onload = criaElemento();

function criaElemento() {
  const pai = document.createElement("pai");

  const filho = document.createTextNode(`vc tem um novo filho, parabéns, ${idosos[6].nome}!`);

  pai.appendChild(filho);

  const anunciaFilho = document.getElementById("anunciaFilho");
  document.body.insertBefore(pai, anunciaFilho);
}

