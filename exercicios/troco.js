/**
 * Calculo do troco
 * @author Caio Lopes
 */

const input = require ('readline-sync')

// váriaveis
let troco, valorPago, total

//entrada
valorPago, total
total = Number (input.question("Digite o valor total da compra: "))
valorPago = Number (input.question("Digite o valor que o cliente pagou: "))

//processamento
troco = (valorPago - total)

//saida
console.log(`valor que recebera de troco é: R$ ${troco.toFixed(2)}`)


 
