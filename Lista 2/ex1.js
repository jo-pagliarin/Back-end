// Usei: objeto, push, for each, função anonima 

let Caixa = {
    faturamento: Number = 0,
    cachorroQuentePromocao: Number = 0,
    cachorroQuenteNormal: Number = 0,
    pedidos: [],
}

let opcao = 0;
while (opcao != 4) {
    opcao = parseInt(prompt("1) Fazer pedido\n2) Verificar caixa\n3) Verificar pedidos\n4) Sair"));
    switch (opcao) {
        case 1: {
            pedido();
            break;
        }
        case 2: {
            const verificaCaixa = function () {
                alert(`O seu faturamento foi de ${Caixa.faturamento}, sendo que houve ${Caixa.cachorroQuenteNormal} cachorros-quentes vendidos com o preço normal e ${Caixa.cachorroQuentePromocao} vendidos com o preço da promoção`);
            }
            verificaCaixa();
            break;
        }
        case 3: {
            function retornaQuantidade(item, i) {
                alert(`pedido: ${item} cachorros-quentes`);
            }
            Caixa.pedidos.forEach(retornaQuantidade);
            break;
        }

        case 4:
            alert("Tchau!");
    }
}

function pedido() {
    let quantidade = parseInt(prompt("Quantos cachorros-quentes você quer comprar?"));
    if (quantidade % 2 == 0) {
        let preco = 7.5 * quantidade;
        alert(`Total a pagar: ${preco}`);
        Caixa.faturamento += preco;
        Caixa.cachorroQuentePromocao += quantidade;
        Caixa.pedidos.push(quantidade);
    }
    else {
        let resto = quantidade % 2;
        preco = resto * 8 + (quantidade - resto) * 7.5;
        alert(`Total a pagar: ${preco}`);
        Caixa.faturamento += preco;
        Caixa.cachorroQuentePromocao += quantidade - resto;
        Caixa.cachorroQuenteNormal += resto;
        Caixa.pedidos.push(quantidade);
    }
}

