//Número primo que reconhece o número 1

let number = 1
let coef = 0

for(let i=1; i < number; i++)

if(number % i === 0)
coef++

if(coef === 1)
{
    console.log (`O número ${number} é primo.`)
} else {
    console.log (`O número ${number} não é primo.`)
}