function somar (a,b){
    console.log(a+b) 
}

function subtrair (a,b){
    console.log(a-b) 
}

function multiplicar (a,b){
    console.log(a*b) 
}

function dividir(a,b){
    if (a%b == 0)
        console.log(a/b)
    else
        console.log(`divisão não inteira, resultado inteiro: ${parseInt(a/b)} `)
}

module.exports = ({
    somar,
    subtrair,
    multiplicar,
    dividir
})
