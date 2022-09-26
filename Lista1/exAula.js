let filaNormal = [];
let filaPrioritaria = []; 
let filaAtendidos = [];

class Cliente
    {
        constructor(nome, cpf)
        {
            this.nome = nome;
            this.cpf = cpf;
            this.prioridade = Boolean; 
        }    
    }

let resposta = 0; 
while (resposta != 3)
{ 
    resposta = prompt("1 - cadastrar cliente\n2 - chamar cliente\n3 - Sair do programa"); 

    if (resposta == 1)
    {leCliente();}

    else if (resposta == 2)
    {atendeCliente();}

    else
    {mostraRelatorio();}
}

function leCliente()
{
    nome = prompt("Nome: ");
    cpf = prompt("CPF:  ");

    if (confirm("Prioridade? ") == true)
    {
        filaPrioritaria.push(new Cliente (nome, cpf, true));  //push adc no final
        alert(`Olá, ${this.nome}, de CPF ${this.cpf}, você foi cadastrado com sucesso na fila prioritária!\nSua senha é `+ filaPrioritaria.length);
    }

    else
    {
        filaNormal.push(new Cliente (nome, cpf, false)); 
        alert(`Olá, ${this.nome}, de CPF ${this.cpf}, você foi cadastrado com sucesso na fila normal!\nSua senha é `+ filaNormal.length);
    }
}

function atendeCliente()
{
    let resposta = prompt("1 - Atender fila prioritária\n2 - Atender fila normal");
    if(resposta == 1)
    {
        alert("Cliente " + filaPrioritaria[0].nome + " atendido");
        filaAtendidos.push(filaPrioritaria[0].nome); 
        filaPrioritaria.shift(); // shift remove o primeiro elemento
        alert("Tamanho atual da fila prioritária:  " + filaPrioritaria.length);
    }

    else
    {
        filaAtendidos.push(filaNormal[0].nome);
        alert("Cliente " + filaNormal[0].nome + " atendido\n");
        filaNormal.shift();
        alert("Tamanho atual da fila normal:  " + filaNormal.length);    
    }

    alert("Total de atendidos: " + filaAtendidos.length); 
}

function mostraRelatorio()
{
    alert("Relatório de atendimentos: \n");
    for(let i = 0; i < filaAtendidos.length; i++)
    {
        if(filaAtendidos[i].Boolean == true)
        {
            alert((i+1) + "º atendimento: " + filaAtendidos[i].nome + "\nTipo prioritário"); 
        }
        else
        {
            alert((i+1) + "º atendimento: " + filaAtendidos[i].nome + "\nTipo normal"); 
        }
    }
}