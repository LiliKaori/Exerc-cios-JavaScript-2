// Escreva um programa onde, você cria uma função geradora de desconto.
// A função aceita 4 parâmetros (Nome do cliente, valor total da compra, um booleano que diz se é a primeira compra do cliente ou não, um booleando que diz se o cliente vai pagar a vista ou não)
// Os descontos funcionam da seguinte forma:
// Se é a primeira compra do cliente, pagar a vista, e a compra for maior que R$ 1000 => 30% de desconto
// Se é a primeira compra do cliente, pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 25% de desconto
// Se é a primeira compra do cliente, pagar a vista e a compra for menor que R$ 500 => desconto de 20%
// Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for maior que R$ 1000 => 20% de desconto 
// Se é a primeira compra do cliente, NÃO pagar a vista, e a compra for menor que R$ 1000, e maior que R$ 500 => 15% de desconto
// Se é a primeira compra do cliente, NÃO pagar a vista e a compra for menor que R$ 500 => desconto de 10%

function analisys (NomeCliente, ValorCompra, PrimeiraCompra, PagarAVista) {
    if(PrimeiraCompra==="Sim" && PagarAVista==="Sim" && ValorCompra > 1000){
        console.log(`${NomeCliente} tem 30% de desconto.`)
    } else if (PrimeiraCompra=== "Sim" && PagarAVista==="Sim" && ValorCompra < 1000 && ValorCompra > 500){
        console.log(`25% de desconto.`)
    } else if (PrimeiraCompra==="Sim" && PagarAVista==="Sim" && ValorCompra < 500){
        console.log(`${NomeCliente} tem 20% de desconto.`)
    } else if (PrimeiraCompra==="Sim" && PagarAVista==="Não" && ValorCompra > 1000){
        console.log(`${NomeCliente} tem 20% de desconto.`)
    } else if (PrimeiraCompra=== "Sim" && PagarAVista==="Não" && ValorCompra < 1000 && ValorCompra > 500){
        console.log(`${NomeCliente} tem 15% de desconto.`)
    } else if (PrimeiraCompra==="Sim" && PagarAVista==="Não" && ValorCompra < 500){
        console.log(`${NomeCliente} tem 10% de desconto.`)
    } else {
        console.log(`${NomeCliente} tem Não tem desconto.`)
    }   
}

const array = [{
    Name: "Liliam",
    Value: 1200,
    FirstBuy: "Sim",
    CashPayment: "Sim"
},{
    Name: "Aurélio",
    Value: 800,
    FirstBuy: "Sim",
    CashPayment: "Não"
}
]

let i=1
analisys (array[i].Name, array[i].Value, array[i].FirstBuy, array[i].CashPayment)