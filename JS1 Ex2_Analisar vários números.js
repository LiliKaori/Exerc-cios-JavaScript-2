//Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.

const numbers = [2, 4, 8, 10]
let coef = 0

for(let i = 0; i < numbers.length; i++)

if(numbers[i] % 2 === 0)
coef++

if(coef === numbers.length)
{
    console.log (`Todos os números são pares.`)
} else if(coef === 0){
    console.log (`Todos os números são ímpares.`)
} else {
    console.log (`Há números pares e ímpares.`)
}