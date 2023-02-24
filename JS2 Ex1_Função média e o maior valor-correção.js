const data = [{
    Name: "Liliam",
    Salary: 1500,
    Children: 2
},
{
    Name:"Aurélio",
    Salary: 3000,
    Children: 3
},
{
    Name:"Jéssica",
    Salary: 5000,
    Children: 1
},
{
    Name:"Mateus",
    Salary: 7000,
    Children: 5
},{
    Name:"Dalio",
    Salary: -2000,
    Children: 0
}
]

function analysis (){

    let i = 0
    let SumSalary = 0
    let SumChildren = 0
    let HighestSalary = 0
while (data[i].Salary>0){
    
    if(HighestSalary<data[i].Salary) HighestSalary= data[i].Salary
    else HighestSalary=HighestSalary

        SumSalary+=data[i].Salary
        SumChildren+=data[i].Children
        i++
    }
    console.log (`O salário médio é R$ ${(SumSalary/i).toFixed(2)}`)
    console.log (`A média de filhos é ${(SumChildren/i).toFixed(1)}`)
    console.log (`O maior salário é ${HighestSalary}`)
}

analysis()
