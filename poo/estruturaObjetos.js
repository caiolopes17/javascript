/**
 * Estruturas de dados - objetos
 * @author Caio Lopes
 */

console.clear()

const funcionario1 = {}  //Quando abre e fecha parenteses popr ex igual esta ai significa "Objeto"
console.log(typeof (funcionario1))
// adicionar dados as estruturas
funcionario1.nome = "Caio"
funcionario1.cargo = "Aluno"
funcionario1.email = "caiolopes17@yahoo.com.br"
funcionario1.salário = 2000
funcionario1.insta = "caiolopes17"
// listar os dados da estrutura
console.log(funcionario1)
console.log(funcionario1.cargo)
// modificar os dados da estruturas
funcionario1.nome = "Caio Lopes"
console.log(funcionario1)
// exclui dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Bruce Wayne",
    cargo: "CEO ",
    email: "batman@gmail.com",
    salario: 400000
}

console.log(funcionario2)

const endereco1 = {
    logradouro: "Bat Caverna",
    cidade: "Gothan City",
    estado: "Nova Jersey"
}

console.log(endereco1)

//... spread operator (união de 2 estruturas de dados)
const funcionario3 = {
    nome: "Alfred pennywort",
    cargo: "mordomo",
    email: "alfred@gmail.com",
    salarioi: 2000,
    ...endereco1
}

const funcionario4 = {
    nome: "Dick Grayson",
    cargo: "Acrobata",
    email: "robin@gmail.com",
    salarioi: 2000,
    ...endereco1
}

console.log(funcionario4)

const funcionario5 = {
    nome: "Tony Stark",
    cargo: "Engenheiro",
    email: "ironman@gmail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Arc 01"
    },
    suiteUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
funcionario5.suiteUp() //executar a função interna da estrutura