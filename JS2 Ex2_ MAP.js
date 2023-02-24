//Exerc1: Transforme a lista a baixo usando MAP, acrescentendo mais uma categoria "section".
//Se vip=true, a section é "black" caso contrário será "green"
const list = [
    { name: "Rodolfo", vip: true},
    { name: "Maria", vip: false},
    { name: "João", vip: true},
    { name: "Bruno", vip: true},
    { name: "Carla", vip: false},
    { name: "Ana", vip: true},
    { name: "Julio", vip: false}
]

const NewList = list.map(client =>{
    const NewList = {
        name: client.name,
        vip: client.vip,
        section: client.vip ? "black" : "green"
    }
    return NewList
})

console.log(NewList)

//Exerc2: Transforme a lista abaixo substituindo a nota para resultado final (finalResult)
//Se tirar nota de 7 para createImageBitmap, está aprovado

const students = [
    { name:"Rodolfo", testGrade: 7},
    { name:"Maria", testGrade: 5},
    { name:"João", testGrade: 8},
    { name:"Bruno", testGrade: 9},
    { name:"Carla", testGrade: 3},
    { name:"Ana", testGrade: 2},
    { name:"Julio", testGrade: 10},
]

const NewStudents = students.map ( student =>{
    const NewStudents = {
        name: student.name,
        finalResult: student.testGrade >= 7 ? "Aprovado" : "Reprovado"

    }
    return NewStudents
})

console.log (NewStudents)