//Acrescenta no valor de mercado 10%, filtrar companias fundadas antes de 2000 e por fim somar o valor de mercado dessas companias

const companies = [
    { name: "Samsung", marketValue: 50, CEO:"Kim Hyun Suk", foundedOn: 1938},
    { name: "Microsoft", marketValue: 415, CEO:"Satya Nadella", foundedOn: 1975},
    { name: "Intel", marketValue: 117, CEO:"Brian Krzanich", foundedOn: 1968},
    { name: "Facebook", marketValue: 383, CEO:"Mark Zuckerberg", foundedOn: 2004},
    { name: "Spotify", marketValue: 30, CEO:"Daniel Ek", foundedOn: 2006},
    { name: "Apple", marketValue: 845, CEO:"Tim Cook", foundedOn: 1976}
]

const add10MarketValue = company => {
    company.marketValue = company.marketValue + company.marketValue * 10/100
    return company
}

const OldCompanies = company => company.foundedOn<2000

const AllMarketValue = (acc, current) => acc + current.marketValue

const BestCompanies = companies.map(add10MarketValue).filter(OldCompanies).reduce(AllMarketValue,0)
console.log(BestCompanies)


//Fazendo de outro jeito
// const Add10Companies2 = companies.map((company2) => {
//     company2.marketValue = company2.marketValue + company2.marketValue * 10/100
//     return company2
// })
// //console.log(Add10Companies2)

// const OldCompanies2 = Add10Companies2.filter((company2) => company2.foundedOn<2000)
// //console.log(OldCompanies2)

// const BestCompanies2 = OldCompanies2.reduce((acc, current2) => acc+current2.marketValue, 0)
// console.log(BestCompanies2)