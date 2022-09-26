while(confirm("Vamos calcular as massas de queijo, presunto e hamburguer necessárias!") == true)
{
    let quantidadeSanduiche = parseInt(prompt("Digite a quantidade de sanduiches:  "));
    alert("A quantidade de sanduiches escolhida foi de " + quantidadeSanduiche);

    const CalculaPesoFatias = function (quantidadeSanduiche) {
        kgQueijo = parseInt(quantidadeSanduiche) * 2 * 0.05,
            kgPresunto = parseInt(quantidadeSanduiche) * 0.05,
            kgHamburguer = parseInt(quantidadeSanduiche) * 0.1;

        this.getkgQueijo = function () {
            return kgQueijo;
        }
        this.getkgPresunto = function () {
            return kgPresunto;
        }
        this.getkgHamburguer = function () {
            return kgHamburguer;
        }
    }
    const Sanduiche = new CalculaPesoFatias(quantidadeSanduiche);
    alert("kg de queijo:  " + Sanduiche.getkgQueijo().toFixed(2) +
        "\nkg de presunto:  " + Sanduiche.getkgPresunto().toFixed(2) +
        "\nkg de hamburguer:  " + Sanduiche.getkgHamburguer().toFixed(2));  
}
