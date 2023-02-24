//Escreva um programa onde, você chame uma função, e ela diga que ano estamos!

function year () {
    const Today = new Date()
    return Today.getFullYear()
}

console.log(`Hoje estamos em ${year()}!`)