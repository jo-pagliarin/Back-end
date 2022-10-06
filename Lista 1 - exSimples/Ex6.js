let qntddLata350 = parseInt(prompt("Qntdd de latas de 350ml: "));
let qntddLata600 = parseInt(prompt("Qntdd de latas de 600ml: "));
let qntddLata2000 = parseInt(prompt("Qntdd de latas de 2L: "));
let volumeTotal = qntddLata600 + qntddLata350 + qntddLata2000;
alert("O volume total eh " + volumeTotal.toFixed(2) + " litros");
