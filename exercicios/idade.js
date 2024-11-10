/**
 * Verificar maioridade
 * @author Caio Lopes
 */

const input = require ('readline-sync')

let idade

console.clear()
console.log("verificar maioridade")
idade = Number(input.question("Digite a idade"))
console.log(`Idade: ${idade}`)
if (idade < 18) {
console.log("Menor de idade")
} else {
    console.log("Maior de idade")
}
