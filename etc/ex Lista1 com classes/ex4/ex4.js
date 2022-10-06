document.addEventListener("DOMContentLoaded", main)

function main()
{
    const qntddFrangos = parseInt(prompt("Qual a quantidade de frangos? "));
    alert("Gasto:  " + gasto(qntddFrangos));

    function gasto (qntddFrangos)
    {
        return 11*qntddFrangos;  
    }
}

