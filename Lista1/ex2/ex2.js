document.addEventListener("DOMContentLoaded", main())
function main()
{
    const tCelsius = prompt("Digite uma temperatura em Celsius:  ");
    alert(ConverteFahrenheit(tCelsius)); 

    function ConverteFahrenheit (tCelsius)
    {
        const tFahrenheit = 1.8*tCelsius + 32;
        return tFahrenheit.toFixed(2);
    }
}
