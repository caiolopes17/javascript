/**
 * Cálculo do consumo de combustivel
 * @author Caio Lopes
 */

const input = require ('readline-sync')

// variáveis
let distancia, litros, consumo

console.clear()
console.log("Cálculo do consumo de combustível")

// entrada
distancia = Number(input.question("Distancia percorrida: "))
litros = Number(input.question("Quantidade de litros de combustivel: "))

// processamento
consumo = distancia / litros

// saida
console.log(`Consumo do veiculo: ${consumo.toFixed(1)} km/l`)