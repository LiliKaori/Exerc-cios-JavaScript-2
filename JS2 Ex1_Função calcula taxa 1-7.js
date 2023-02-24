//Faça um programa onde, você chame uma função que calcule a taxa mensal de juros de um inve tnto.
//Você deve enviar como argumentos da função - Valor inicial investido - Valor atual do inve tnto - Tempo em meses, que o valor está investidoA função deve RETORNAR a taxa de juros, já formatada. Ex: 2,5%. Siga a formula desse vídeo para te auxiliar com o cálculo.
//Cálculo taxa = juros(Valor atual do inve tnto - Valor inicial investido) / Valor inicial investido * tempo

let a0 = 1000
let at = 1200
let t = 10

function tax (InitialValue, CurrentValue, Time){
    const calc =  (CurrentValue-InitialValue)/(InitialValue*Time)*100
    console.log(`Rendimento de ${calc.toFixed(2)} %`)
}

tax(a0, at, t)