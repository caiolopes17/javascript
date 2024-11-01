/**
 * PDV
 * @author Caio Lopes
 */

const input = require('readline-sync')

//variaveis
let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log(" ____  ___    __ __") 
console.log("|    \\|   \\  |  T  |")
console.log("|  o  )    \\ |  |  |")
console.log("|   _/|  D  Y|  |  |")
console.log("|  |  |     |l  :  !")
console.log("|  |  |     | \\   / ")
console.log("|__j  l_____j  \\_/  ")
console.log("")

// entrada 1
total = Number(input.question("Digite o valor total da compra: ")) //100
desconto = Number(input.question("Digite o valor do desconto em %")) //10

// processamento 1
valorDesconto = total - (desconto * total) / 100  //100 - (10 * 100) : 100 

// processameno 2
totalDesconto = total - valorDesconto

// saida 1
console.log("")
console.log("-----------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: R$ ${totalDesconto.toFixed(2)}`)
console.log("")

// entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

// procesamento 3
troco = valorPago - totalDesconto

// saída 2

console.log("")
console.log(`Valor pago em dinheiro: R$ ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("----------------------------------------------")
  