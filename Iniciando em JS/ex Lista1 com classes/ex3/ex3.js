document.addEventListener("DOMContentLoaded", main)

function main()
{
    const horatrabalhada = prompt("Quantas horas você trabalhou hoje?");
    const horaextra = prompt("Quantas horas extras você trabalhou hoje?");
    alert("Seu salário bruto é " + salarioBruto(horatrabalhada, horaextra));
    alert("Seu salário líquido é " + salarioLiquido(horatrabalhada, horaextra));
    
    function salarioBruto(horatrabalhada, horaextra){
        const SalarioBruto = 10*horatrabalhada + 15*horaextra;
        return SalarioBruto.toFixed(2); 
    }
    
    function salarioLiquido(horatrabalhada, horaextra)
    {
        const SalarioLiquido = (salarioBruto(horatrabalhada, horaextra) * 0.9)
        return(SalarioLiquido.toFixed(2)); 
    }
}


