/**
 * Desenvolvimento de uma calculadora
 * @author Caio Lopes
 */

const input = require('readline-sync')
let a, b, opcao
exports.a = a
exports.b = b
exports.opcao = opcao
console.clear()
console.log("Calculadora")
a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))
console.log("")
console.log("1. Somar")
console.log("2. Subtrair")
console.log("3. Multiplicar")
console.log("4. Dividir")
console.log("5. Calcular a %")
console.log("")

opcao = Number(input.question("Digit a opcao desejada: "))

switch (opcao) {
    case 1:
        somar(a, b);
        break
    case 2:
        subtrair(a, b);
        break
    case 3:
        multiplicar(a, b);
        break
    case 4:
        dividir(a, b);
        break
    case 5:
        porcentagem(a, b);
        break
    default:
        console.log("Opção inválida");
        break
}

        opcao = input.question("Deseja jogar novamente (s/n)? ")
 while (opcao === "s")

    // Funcões com parâmetros e retorno (não atribuidas) podem ser criadas em qualquer lugar
function somar(a, b) {
        return console.log(`A soma de ${a} + ${b} = ${a + b}`)
}
function subtrair(a, b) {
    return console.log(`A subtração de ${a} - ${b} = ${a - b}`)
}
function multiplicar(a, b) {
    return console.log(`A multiplicação de ${a} * ${b} = ${a * b}`)
}
function dividir(a, b) {
    return console.log(`A divisão de ${a} / ${b} = ${a / b}`)
}
function porcentagem(a, b) {
    return console.log(`${b} % de ${a} = ${(b * a / 100).toFixed(2)}`)
}