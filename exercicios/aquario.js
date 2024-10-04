/**
 * Cálculo do volume de um aquário
 * @author Caio Lopes
 */

const input = require ('readline-sync')

// váriaveis
let comprimento, largura, altura, volume

console.clear()
console.log("Cálculo do volume de um aquário")

// entrada

comprimento = Number(input.question("Digite o comprimento em comprimento em cm: "))
largura = Number(input.question("Digite o comprimento em largura em cm: "))
altura = Number(input.question("Digite o comprimento em altura em cm: "))

// processamento
volume = (comprimento * largura * altura) / 1000

//saida
console.log(`Volume do aquário: ${volume.toFixed(2)} litros`)