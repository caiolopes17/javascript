/**
 * Calculo média da gasolina e etanol
 * @author Caio Lopes
 */

const input = require('readline-sync')

let consumo, gasolina, aetanol

console.clear()
console.log("Etanol x Gasolina")

// entrada
etanol = Number(input.question("Digite o valor de etanol: "))
gasolina = Number(input.question("Digite o valor de gasolina: "))

//processamento
if (etanol < 0.7 * gasolina) {
    console.log("Abastecer com etanol")
} else {
    console.log("Abastecer com gasolina")
}