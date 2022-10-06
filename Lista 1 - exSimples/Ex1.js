let qntdd = prompt("qntdd hamburgueres: ");
let pesoQueijo = qntdd*2*0.05;
let pesoPresunto = qntdd*0.05;
let pesoHamburguer = qntdd*0.1;
let pesoTotal = pesoQueijo + pesoHamburguer + pesoPresunto;
alert("Peso total: " + pesoTotal.toFixed(2));
