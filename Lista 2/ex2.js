    // usei múltiplos objetos e função anonima 
    
    let total = 0; 

    let Sanduiche = 
    {
        integral: Number = 0,
        branco: Number = 0,
    };

    let Fruta = 
    {
        maca: Number = 0,
        mamao: Number = 0,
    };

    let Cafe = 
    {
        leite: Number = 0,
        preto: Number = 0,
    }; 
    
    resposta = 1;
    while (resposta != 0) {
        exibeMenu();
    }

    function exibeMenu() {
        resposta = parseInt(prompt("1 - Café\n 2 - Sanduíche\n 3 - Salada de frutas\n 0 - Fechar pedido"));
        if (resposta == 1) {
            alert("Você será direcionado ao menu do café!");
            cafe();
        }
        else if (resposta == 2) {
            alert("Você será direcionado ao menu do sanduíche!")
            sanduiche();
        }
        else if (resposta == 3) {
            alert("Você será direcionado ao menu das frutas!");
            frutas();
        }
        else if (resposta == 0) {
            alert("Você será direcionado ao fechamento do pedido!");
            calculaConta();
        }

        else {
            alert("Digite um número válido");
        }
    }


    function cafe() {
        resposta = 1;
        while (resposta != 0) {
            resposta = parseInt(prompt("1 - Café preto 1 real\n 2 - Café com leite 2 reais\n 0 - Retornar ao menu"));
            if (resposta == 1) {
                Cafe.preto += 1;  
                total += 1; 
                alert("Café preto adicionado ao carrinho!");
            }
            else if (resposta == 2) {
                Cafe.leite += 1
                total += 2
                alert("Café com leite adicionado ao carrinho!");
            }
            else {
                alert("Retornando ao menu principal!");
                exibeMenu();
            }
        }
    }

    function sanduiche() {
        resposta = 1;
        while (resposta != 0) {
            resposta = parseInt(prompt("1 - Pão branco 1 real\n 2 - Pão Integral 2 reais\n 0 - Retornar ao menu"));
            if (resposta == 1) {
                Sanduiche.branco += 1
                total += 1
                alert("Sanduíche branco adicionado ao carrinho!");
            }
            else if (resposta == 2) {
                Sanduiche.integral += 1
                total += 2
                alert("Sanduíche integral adicionado ao carrinho!");
            }

            else {
                alert("Retornando ao menu principal!");
                exibeMenu();
            }
        }
    }

    function frutas() {
        resposta = 1;
        while (resposta != 0) {
            resposta = parseInt(prompt("1 - Maçã  1 real\n 2 - Mamão 2 reais\n 0 - Retornar ao menu"));
            if (resposta == 1) {
                Fruta.maca += 1
                total += 1
                alert("Salada de maçã adicionada ao carrinho!");
            }
            else if (resposta == 2) {
                Fruta.mamao += 1
                total += 2
                alert("Salada de mamão adicionada ao carrinho!");
            }

            else {
                alert("Retornando ao menu principal!")
                exibeMenu();
            }
        }
    }

    function calculaConta() {
        alert("Total a pagar: " + total);
        if (confirm("OK para detalhar o pedido") == true) {
            const detalha_pedido = function () {
                alert("Café preto: "
                    + Cafe.preto + "\n Café com leite: " + Cafe.leite + "\n Sanduiche branco: " + Sanduiche.branco + "\n Sanduiche integral: " + Sanduiche.integral + "\n Salada de maçã: " + Fruta.maca + "\n Salada de mamão:  " + Fruta.mamao);
            }
            detalha_pedido(); 
        }
        else {
            alert("Tchau!");
        }
    }
