/**
 * Estruturas de dados
 * Array
 */

//                [0]       [1]      [2]      [3]      [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "João", "Viviane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)
// o comando abaixo identifica o número de elemnetos de um vetor
console.log(alunosEM1.length)
// o comando abaixo exibe o índice do array associado ao elemento
console.table(alunosEM1)
console.log(alunosEM1[2])
// o comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")
console.table(alunosEM1)
// para alterarum elemento do vetor, é necessário usar o índice 
alunosEM1[3] = "Joãozinho"
console.table(alunosEM1)
// o comando abaixo remove o último elemento do vetor
alunosEM1.pop()
console.table(alunosEM1)
// removendo um elemento especifico sem alterar o índice, neste caso é necessário fornecer o índice do elemento a ser excluido (Por ex: Remover o nome Pedro)
delete alunosEM1[1]
console.log(alunosEM1)