//Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
const number = 1

if (number % 2 === 0){

    if(number % 5 === 0) console.log (`O número ${number} é par e mútiplo de 5`)
    else console.log (`O número ${number} é par e não é múltiplo de 5.`)
} else {
    
    for(let i = 2; i < number; i++)
        if (number % i === 0) {
            console.log(`O número ${number} é ímpar e primo`)
            break
        } else {
            if(i === number - 1)
            console.log(`O número ${number} é ímpar e não é primo`)
    }
}

//O resolvido da aula: A fórmula do número primo não aceita 1