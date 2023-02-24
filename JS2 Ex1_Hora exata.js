//Escreva um programa onde, você chame uma função, e ela diga a hora exata!

function Time (){
    const Today= new Date()
    return console.log(`${Today.getHours()}:${Today.getMinutes()}:${Today.getSeconds()}`)
}

Time()

//outro jeito:
console.log (new Date().toLocaleTimeString("pt-BR"))