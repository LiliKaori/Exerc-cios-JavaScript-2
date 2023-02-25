//Crie 5 objetos nesse formato{ nome: "" idade:"" sexo:"" profissão: "" nacionalidade:"" }Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
const list = [{
    name: "Liliam",
    age: 35,
    gender: "female",
    occupation: "seller",
    nationality: "Brazil"
},
{
    name: "Jiale",
    age: 40,
    gender: "male",
    occupation: "researcher",
    nationality: "China"
},
        {
    name: "Beimar",
    age: 17,
    gender: "male",
    occupation: "operator",
    nationality: "Bolivia"
},
            {
    name: "Aurélio",
    age: 36,
    gender: "male",
    occupation: "analyst",
    nationality: "Brazil"
},
                {
    name: "Megumi",
    age: 16,
    gender: "female",
    occupation: "student",
    nationality: "Brazil"
}]

for(let i = 0; i < list.length; i++)


if((list[i].age >= 18) && (list[i].nationality === "Brazil")){
    console.log(`${list[i].name} está aprovado(a) no precesso.`)
}else{
    console.log(`${list[i].name} não está aprovado(a) no processo.`)
}