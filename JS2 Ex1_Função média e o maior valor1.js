//A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. A prefeitura deseja saber: - média do salário da população; - média do número de filhos; - maior salário; - O final da leitura de dados se dará com a entrada de um salário negativo. - Faça isso usando uma função!

const data = [{
    Name: "Liliam",
    Salário: 1500,
    Filhos: 2
},
{
    Name:"Aurélio",
    Salário: 3000,
    Filhos: 3
},
{
    Name:"Jéssica",
    Salário: 5000,
    Filhos: 1
},
{
    Name:"Mateus",
    Salário: 7000,
    Filhos: 5
},{
    Name:"Dalio",
    Salário: 2000,
    Filhos: 0
}
]

function SalárioMédio() {
    let i=0
    let sum=0
   while (i<data.length){
    sum = sum + data[i++].Salário;
   }
   return sum/data.length
}

function MédiaFilhos() {
    let i=0
    let sum=0
   while (i<data.length){
    sum = sum + data[i++].Filhos;
   }
   return sum/data.length
}

function MaiorSalário() {
    let largestMoney=0
    for(let i=0; i<data.length; i++)
    if(data[i].Salário > largestMoney){
        largestMoney=data[i].Salário
    }else{
        largestMoney=largestMoney
    }
    
    return largestMoney
}

let OMaiorSalário = MaiorSalário()

console.log(`Resultado da análise:`)
console.log (`Salário Médio: R$ ${SalárioMédio()},00`)
console.log (`Média de filhos: ${MédiaFilhos()} fillhos.`)
console.log (`O maior salário é de R$ ${OMaiorSalário},00`)
