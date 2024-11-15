/**
 * Desenvolvimento de uma calculadora
 * @autor Caio Lopes
 */

const input = require('readline-sync');

let a, b, opcao, repetir;

do {
  console.clear();
  console.log("Calculadora");

  a = Number(input.question("Digite o primeiro numero: "));
  b = Number(input.question("Digite o segundo numero: "));

  console.log("");
  console.log("1. Somar");
  console.log("2. Subtrair");
  console.log("3. Multiplicar");
  console.log("4. Dividir");
  console.log("5. Calcular a %");
  console.log("");

  opcao = Number(input.question("Digite a opcao desejada: "));

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
      dividir(a, b)
      break
    case 5:
      porcentagem(a, b)
      break
    default:
      console.log("Opção inválida")
      break
      {
      }
      opcao = input.question("Deseja calcular novamente (s/n)? ");
  } while (opcao === "s");

  // Funções de operações da calculadora
  function somar(a, b) {
    console.log(`A soma de ${a} + ${b} = ${a + b}`);
  }

  function subtrair(a, b) {
    console.log(`A subtração de ${a} - ${b} = ${a - b}`);
  }

  function multiplicar(a, b) {
    console.log(`A multiplicação de ${a} * ${b} = ${a * b}`);
  }

  function dividir(a, b) {
    if (b !== 0) {
      console.log(`A divisão de ${a} / ${b} = ${a / b}`);
    } else {
      console.log("Erro: Divisão por zero não é permitida.");
    }

    function porcentagem(a, b) {
      console.log(`${b}% de ${a} = ${(b * a / 100).toFixed(2)}`);
    }
  } } while(repetir === 's')