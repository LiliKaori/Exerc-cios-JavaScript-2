//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.
let i = 10
//for(let i = 0; i <= 10; i++)

if(i == 0){
    console.log(`Nota ${i}: Esse não tem esperança.`)
} else if(i == 1){
    console.log(`Nota ${i}: Você precisa estudar além dos outros e é obrigatório ir nas aulas de reforço.`)
} else if(i == 2){
    console.log(`Nota ${i}: Você precisa estudar muito, as aulas de reforço vão te ajudar.`)
} else if(i == 3){
    console.log(`Nota ${i}: Você precisa estudar muito, pode melhorar indo nas aulas de reforço.`)
} else if(i == 4){
    console.log(`Nota ${i}: Você precisa estudar muito.`)
} else if(i == 5){
    console.log(`Nota ${i}: Você precisa estudar mais.`)
} else if(i == 6){
    console.log(`Nota ${i}: Por pouco não passa, você ainda precisa estudar mais.`)
} else if(i == 7){
    console.log(`Nota ${i}: Boa, você passou! Mas cuidado para não diminuir sua nota.`)
} else if(i == 8){
    console.log(`Nota ${i}: Muito bom! Mas pode melhorar mais.`)
} else if(i == 9){
    console.log(`Nota ${i}: Ótima nota! Se esforçar mais, vai chegar na excelência.`)
} else{
    console.log(`Nota ${i}: Meus parabéns! Merece uma estrela de aluno exemplar!.`)
}