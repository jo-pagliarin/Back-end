
// Uma confecção produz X blusas de lã e para isto gasta uma certa quantidade de novelos. Faça 
// um algoritmo para calcular quantos novelos de lã ela gasta por blusa. 

document.addEventListener("DOMContentLoaded", main)

function main()
{
    const numBlusas = prompt("Qntdd de blusas:  ");
    const numNovelos = prompt("Qntdd de novelos por blusa: ");
    const precoNovelo = prompt("Preço por novelo: ");
    alert("No total, vc irá gastar " + gastoTotal (numNovelos, precoNovelo, numBlusas) + " com as blusas");
    
    function gastoComNovelo (numNovelos, precoNovelo){
        const gastoComNovelo = numNovelos * precoNovelo; 
        return gastoComNovelo;  
    }
    
    function gastoTotal (numNovelos, precoNovelo, numBlusas)
    {
        const gastoTotal = gastoComNovelo(numNovelos, precoNovelo) * numBlusas; 
        return(gastoTotal.toFixed(2)); 
    }
}


