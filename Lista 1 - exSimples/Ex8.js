let altura = prompt("Sua altura:  ");
let comprimentoSombra = prompt("Comprimento de sua sombra:  ");
let comprimentoSombraPredio = prompt("Comprimento sombra do prédio:  ")
let alturaPredio = (altura*comprimentoSombraPredio) / comprimentoSombra
alert("A altura do predio eh " + alturaPredio.toFixed(2));