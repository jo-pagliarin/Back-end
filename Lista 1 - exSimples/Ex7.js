let moedas1c = prompt("Qntdd moedas 1 centavo:  ");
let moedas5c = prompt("Qntdd meodas 5 centavos:  ");
let moedas10c = prompt("Qntdd moedas 10 centavos: ");
let moedas25c = prompt("Qntdd moedas 25 centavos: ");
let moedas50c = prompt("Qntdd moedas 50 centavos: ");
let moedas1r = prompt("Qntdd moedas l real:  ");
let total = moedas1c*0.01 + moedas5c*0.05 + moedas10c*0.1 + moedas25c*0.25 + moedas50c*0.5 + moedas1r
alert("Total de dinheiro:  " + total + "reais");
