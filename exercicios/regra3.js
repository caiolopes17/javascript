/**
 * Regra de 3
 * @author "Caio Lopes"
 */

const input = require ('readline-sync')

// variáveis
let x, y, valor

console.clear()
console.log("Regra de 3")
console.log("x% de Y = valor")

// entrada
x= Number(input.question("Digite o valor de x: "))
y= Number(input.question("Digite o valor de y: "))

// processamento
valor = (x * y) / 100

// saida
console.log(`${x}% de ${y} = ${valor.toFixed(2)}`)

