/**
 * Sistema de votos (obrigatoriedade)
 * @author "Caio Lopes"
*/

const input = require ('readline-sync')

// importação de biblioteca(pacote)

//variaveis
let idade;

console.clear()
console.log("Verificar obrigatoriedade de votar")

// entrada de dados
idade = Number(input.question("Digite a sua idade:"))

// processamento e saída
if (idade < 16) {
    console.log("Proibido Votar")
} else if (idade > 17 && idade < 71) {
    console.log("Obrigatorio Votar")
} else {
    console.log("Voto facultativo")
    }
