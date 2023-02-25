//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
const number = 1
let coef = 0

for(let i=1; i < number; i++)

if(number % i === 0)
coef++

if(number % 2 === 0){
    if(number % 5 === 0) console.log (`O número ${number} é par e mútiplo de 5`)
    else console.log (`O número ${number} é par e não é múltiplo de 5.`)
} else {
    if(coef === 1) console.log(`O número ${number} é ímpar e primo`)
    else console.log(`O número ${number} é ímpar e não é primo`)
}