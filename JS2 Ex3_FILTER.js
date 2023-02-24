//Filtrar o array list com número pares e múltiplo de 5
const list = [20,3,232,12,17,541,6,87,275,1000]

const NewList = list.filter(number => number%2===0 && number%5===0)
console.log (NewList)


//Filtrar o array companies fundadas depois 1975 e tenha mais de 200 de valor de mercado
const companies = [
    { name: "Samsung", marketValue: 50, CEO:"Kim Hyun Suk", foundedOn: 1938},
    { name: "Microsoft", marketValue: 415, CEO:"Satya Nadella", foundedOn: 1975},
    { name: "Intel", marketValue: 117, CEO:"Brian Krzanich", foundedOn: 1968},
    { name: "Facebook", marketValue: 383, CEO:"Mark Zuckerberg", foundedOn: 2004},
    { name: "Spotify", marketValue: 30, CEO:"Daniel Ek", foundedOn: 2006},
    { name: "Apple", marketValue: 845, CEO:"Tim Cook", foundedOn: 1976}
]

const NewCompanies = companies.filter((company) => company.foundedOn>1975 && company.marketValue>200)
console.log(NewCompanies)