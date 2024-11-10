const input = require('readline-sync');
const { opcao } = require('./calculadora');

{
    opcao = input.question("Deseja somar novamente (s/n)? ");
    while (opcao === "s")
        ;
}
