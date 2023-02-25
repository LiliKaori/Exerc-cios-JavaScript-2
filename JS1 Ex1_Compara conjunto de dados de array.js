//Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em dois objetos separados. Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
const array = [{
  Name: "Liliam",
  Age: 35,
  Andress: "Rua Alfa, 145",
  Weight: 46,
  Gender: "Female"
},
            {
  Name: "Aurélio",
  Age: 36,
  Andress: "Rua Beta, 169",
  Weight: 58,
  Gender: "Male"
},
            {
  Name: "Dalio",
  Age: 37,
  Andress: "Rua Gama, 394",
  Weight: 50,
  Gender: "Male"
},
            {
  Name: "Emilia",
  Age: 69,
  Andress: "Rua Delta, 60",
  Weight: 46,
  Gender: "Female"
},
            {
  Name: "Beatriz",
  Age: 49,
  Andress: "Rua Ômega, 1525",
  Weight: 68,
  Gender: "Female"
}]
  
  
  let object1 = (array[0].Name)
  object1 = (array[1].Name)
    
  let compare1 = object1 == array[0].Name
  let compare2 = object1 == array[1].Name
    
  console.log (object1)
  console.log (compare1)
  console.log (compare2)
    
  const compare3 = array[0].Name == array[0].Name
  const compare4 = array[0].Name == array[1].Name
    
  console.log (compare3)
  console.log (compare4)
  