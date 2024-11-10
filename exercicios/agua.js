/**
 *  Cálculo do consumo de aguá
 * @author Caio Lopes
 */

// Importar a biblioteca
const input = require('readline-sync')

// Variáveis
let consumo, peso

// Limpar a tela antes de uma nova entrada
console.clear()

// Entrada - Atribuir valores as variáveis
peso= Number(input.question("Digite o seu peso em KG: "))

// Processamento - Fórmula para cálculo do código
consumo = peso * 0.035 // (35 ml de água por cada kg)

// Saida - Resultado do processamento
console.log(`Consumo diário de agu DEVE Ser: $
{consumo.toFixed(3)} litros`) // toFixed para deixar limitado á 3 caracteres de ml

