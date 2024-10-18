/**
* Ficha de um aluno de academia
*@author Caio Lopes
*/
// bibliotecas
const input = require('readline-sync')
const colors = require('colors')

// variaveis 
let nome, idade, peso, altura, fcm, imc, consumo

// limpar a tela
console.clear()

// banner
console.log(" |\     /|(  ____ \(  ___  )( \   \__   __/|\     /|  (  ____ \(  ___  )( \      (  ____ \|\     /|( \      (  ___  )\__   __/(  ___  )(  ____ )")
console.log(" | )   ( || (    \/| (   ) || (      ) (   | )   ( |  | (    \/| (   ) || (      | (    \/| )   ( || (      | (   ) |   ) (   | (   ) || (    )|")
console.log(" |  ___  ||  __)   |  ___  || |      | |   |  ___  |  | |      |  ___  || |      | |      | |   | || |      |  ___  |   | |   | |   | ||     __)")
console.log(" | (   ) || (      | (   ) || |      | |   | (   ) |  | |      | (   ) || |      | |      | |   | || |      | (   ) |   | |   | |   | || (\ (   ")
console.log(" | )   ( || (____/\| )   ( || (____/\| |   | )   ( |  | (____/\| )   ( || (____/\| (____/\| (___) || (____/\| )   ( |   | |   | (___) || ) \ \__")
console.log(" |/     \|(_______/|/     \|(_______/)_(   |/     \|  (_______/|/     \|(_______/(_______/(_______)(_______/|/     \|   )_(   (_______)|/   \__/")

console.log("")

// entrada de dados
nome = input.question ("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade:"))
peso = Number(input.question("Digite o seu peso em Kg: "))
altura= Number(input.question("Digite a sua altura em metros: "))

// processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035

// saida
console.log("Ficha do Aluno")
console.log("_______________________________")
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`FCM: ${fcm}`)
console.log(`IMC: ${imc.toFixed(2)}`)

//tabela imc
if (imc < 18.5) {
    console.log("Abaixo do Peso".cyan)
} else if (imc < 25) {
    console.log("Peso Normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade Grau I".magenta)
} else if (imc < 40) {
    console.log("Obesidade Grau II (severa)".red)
} else {
    console.log("Obesidade Grau III (morbida)".bgRed)
}
// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)