//Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

const score = 10

switch (score) {
    case 0:
        console.log(`Esse não tem esperança.`)
        break;
    case 1:
        console.log(`Você precisa estudar além dos outros e é obrigatório ir nas aulas de reforço.`)
        break;
    case 2:
        console.log(`Você precisa estudar muito, as aulas de reforço vão te ajudar.`)
        break;
    case 3:
        console.log(`Você precisa estudar muito, pode melhorar indo nas aulas de reforço.`)
        break;
    case 4:
        console.log(`Você precisa estudar muito.`)
        break;
    case 5:
        console.log(`Você precisa estudar mais.`)
        break;
    case 6:
        console.log(`Por pouco não passa, você ainda precisa estudar mais.`)
        break;
    case 7:
        console.log(`Boa, você passou! Mas cuidado para não diminuir sua nota.`)
        break;
    case 8:
        console.log(`Muito bom! Mas pode melhorar mais.`)
        break;
    case 9:
        console.log(`Ótima nota! Se esforçar mais, vai chegar na excelência.`)
        break;
    case 10:
        console.log(`Meus parabéns! Merece uma estrela de aluno exemplar!.`)
        break;
    default:
        break;
}