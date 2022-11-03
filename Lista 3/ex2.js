function recebeNome(){
    nome = prompt("Digite seu nome");
    return nome; 
}

document.getElementById("recebeNome").textContent = `Tenha um bom dia, ${recebeNome()}`; 
