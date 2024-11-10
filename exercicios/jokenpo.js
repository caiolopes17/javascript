/**
 * Jokenpo
 * @author Caio Lopes
 */

// Biblioteca
const input = require('readline-sync')

// Variáveis
let jogador, computador, opcao

do {
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
            console.log("Jogador escolheu Papel")
            break
        case 3:
            console.log("Jogador escolheu Tesoura")
            break
        default:
            console.log("Opção inválida. Escolha um número entre 1 e 3.")
            continue
    }

    // Lógica do computador
    computador = Math.floor(Math.random() * 3 + 1)
    switch (computador) {
        case 1:
            console.log("Computador escolheu Pedra")
            break
        case 2:
            console.log("Computador escolheu Papel")
            break
        case 3:
            console.log("Computador escolheu Tesoura")
            break
    }

    // Lógica para determinar o vencedor ou declarar empate
    if (jogador === computador) {
        console.log("Empate")
    } else if (
        (jogador === 1 && computador === 3) ||
        (jogador === 2 && computador === 1) ||
        (jogador === 3 && computador === 2)
    ) {
        console.log("Jogador VENCEU")
    } else {
        console.log("Computador VENCEU")
    }

    opcao = input.question("Deseja jogar novamente (s/n)? ")
} while (opcao === "s")