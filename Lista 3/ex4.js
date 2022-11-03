const mensagem = document.getElementById("validacao"); 

function verificaCPF(){
    var cpf = document.getElementById("cpf").value;

    if (cpf.length == 11){
        if(confirm(`O CPF ${cpf} está correto?`) == true)
        mensagem.innerText = "CPF válido!"  
    }

    else if (cpf.length == 0){
        alert(`CPF ERRADO!`)
       mensagem.innerText = "Campo CPF não pode ser vazio"
    }

    else if (cpf.length > 11){
        alert(`CPF ERRADO!`)
        mensagem.innerText = "Campo CPF não pode ter mais de 11 dígitos"
    }

    else if (cpf.length < 11 && cpf.length != 0){
        alert(`CPF ERRADO!`)
        mensagem.innerText = "Campo CPF não pode ter menos que 11 dígitos"
    }
}

function cancela(){
    mensagem.innerText = "operação cancelada!"
}


