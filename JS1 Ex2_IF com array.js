//Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO

const array = [{
    name: "Liliam",
    country: "Brazil"
},
{
    name: "Jiale",
    country: "China"
},
{
    name: "Beimar",
    country: "Bolívia"
}]

const number1 = 0

if(array[number1].country == "Brazil"){
    console.log (`${array[number1].name} é brasileiro(a).`)
} else {
    console.log (`${array[number1].name} é estrageiro(a).`)
}