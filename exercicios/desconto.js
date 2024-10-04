/**
 * Calculo do valor do desconto
 * @author Caio Lopes
 */

const input = require ('readline-sync')

// váriaveis
let otalDesconto,total,desconto

console.clear()
console.log ("Calculo do valor do desconto")

//entrada
total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em %: "))

//processamento
totalDesconto = total - ((desconto * total) / 100)

//saida
console.log(`total com desconto é: R$ ${totalDesconto.toFixed(2)}`)
