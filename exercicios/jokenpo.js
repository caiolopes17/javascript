/**
 * Jokenpo
 * @author Caio Lopes
 */

// biblioteca
const input = require('readline-sync')

// variáveis
let jogador, computador

console.clear()
console.log("_______Jokenpo________")
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")

// Lógica do jogador
jogador = Number(input.question("Digite a opção desejada: "))
console.log("")
switch (jogador) {
    case 1:
        console.log("Jogador escolheu Pedra")
        break
    case 2:
        console.log("Jogador escolheu: Papel")
        break
    default:
    case 3:
        console.log("Tesoura")
        break
}

// Lógica do computador
computador = Math.floor(Math.random() * 3 + 1)
switch (computador) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:
        console.log("Computador escolheu: Papel")
        break
    case 3:
        console.log("Opção Tesoura")
        break
}

//Lógica para determinar o vencedor ou declarar empate
if (jogador === computador) {
    console.log("Empate")
} else if (jogador ===1 && computador === 1 || jogador === 3 && computador === 2) {
    console.log("Jogador VENCEU")
} else {
    console.log("Computador VENCEU")
}