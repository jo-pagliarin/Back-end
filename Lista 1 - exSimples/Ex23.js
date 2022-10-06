let anoNasceu = prompt("Digite seu ano de nascimento: ");
let anoAtual = prompt("Em qual ano estamos? ");
let anosVividos = anoAtual - anoNasceu; 
let mesesVividos = anosVividos * 12; 
let diasVividos =  mesesVividos * 30; //assumindo que todo mês tem 30 dias
let semanasVividas = diasVividos/7; 

alert("Anos vividos: " + anosVividos + 
        " Meses vividos: " + mesesVividos + 
        " Dias vividos: " + diasVividos + 
        " Semanas vividas: " +semanasVividas); 



