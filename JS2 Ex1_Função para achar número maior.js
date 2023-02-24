//Escreva um programa onde, você chame uma função mandando dois argumentos, 2 números, e a função responde qual número é maior

function compare (number1, number2) {
    if(number1>number2){
        console.log (`O número ${number1} é maior.`)
    } else if (number1<number2) {
        console.log (`O número ${number2} é maior.`)
    } else {
        console.log (`Os números são iguais.`)
    }
}

compare(4, 2)