// Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
const numbers = [1, 5, 9]

if (numbers[0] > numbers[1] && numbers[0] > numbers[2]) {
    console.log(`O número ${numbers[0]} é o maior.`)
} else if (numbers[1] > numbers[2]) {
    console.log(`O número ${numbers[1]} é o maior.`)
} else {
    console.log(`O número ${numbers[2]} é o maior.`)
}

if (numbers[0] < numbers[1] && numbers[0] < numbers[2]) {
    console.log(`O número ${numbers[0]} é o menor.`)
} else if (numbers[1] < numbers[2]) {
    console.log(`O número ${numbers[1]} é o menor.`)
} else {
    console.log(`O número ${numbers[2]} é o menor.`)
}
//*Ciente que a resolução acima vai dar problema se os números forem iguais

//Fazendo de outro jeito bem mais simples
//console.log(`O número ${Math.min(...numbers)} é o menor.`)
// console.log(`O número ${Math.max(...numbers)} é o maior.`)
