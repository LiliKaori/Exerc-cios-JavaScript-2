// Escreva um programa onde, você chame uma função enviando um número (aceitar somente valores entre 1 e 10) e escrever a tabuada de 1 a 10 do valor lido.

function tabuada (number1, number2){
    return number1*number2    
}

let a = 9

for (let i=1; i<=10; i++)
if(a > 0 && a <= 10){
    console.log(`${a} X ${i} = ${tabuada(a,i)}`)
} else {
    console.log (`Número inválido.`)
    break
}

//RESOLUÇÂO

//function tabuada (number){
//    if(number <= 0 && number > 10){
//        console.log (`Número inválido.`)
//    }
//    for (let i=1; i<=10; i++)
//    console.log(`${number} X ${i} = ${number*i}`)    
//}
//tabuada(4)
