/**
 * Exemplo de uso da estrutura switch case
 * @author Caio Lopes
 */

const input= require('readline-sync')

let opcao

console.clear()
console.log("BOOT")
console.log("1. Carregar o sistema Windows")
console.log("2. Carregar o sistema linux")

opcao = Number(input.question("Digite a opcao desejada: "))

switch (opcao) {
    case 1:
 console.log("       ....iilllllllllllll")
 console.log("       ....iillll  lllllllllllllllllll")
 console.log("   iillllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("")   
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   llllllllllllll  lllllllllllllllllll")
 console.log("   `^^^^^^lllllll  lllllllllllllllllll")
 console.log("         ````^^^^  ^^lllllllllllllllll")
 console.log("                        ````^^^^^^llll")
 
        console.clear()
        console.log ("Carregando o sistema Windows......")
           break


    case 2:
            `
        console.clear()
        console.log("Carregando o sistema linux......")
        break
    defaut:
    console.log("Opção inválida")
}