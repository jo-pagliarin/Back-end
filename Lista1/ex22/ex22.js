// Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário
document.addEventListener("DOMContentLoaded", main)

function main()
{
    const numero = prompt("Número:  ");
    calculaTabuada(numero);

    function calculaTabuada (numero)
    {
        let i=1; 

        while(i<=10)
        {
            let resultado = numero*i;
            const Tabela = [
                {   
                    numero: parseInt(numero), 
                    multiplicador: i,
                    resultado: resultado
                }
            ];
            i++;
            console.table(Tabela); 
        }
    }
}