let horasFixas = prompt("Horas fixas trabalhadas:  ");
let horasExtras = prompt("Horas extras trabalhadas:  ");
let salarioBruto = horasFixas*10 + horasExtras*15;
let salarioLiquido = salarioBruto*0.9; 
alert("Salario bruto eh " + salarioBruto.toFixed(2) + ", enquanto o salario liquido eh " + salarioLiquido.toFixed(2));
