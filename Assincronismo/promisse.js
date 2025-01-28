/**
 * Assincronismo
 * Promisse
 * @author Caio Lopes
 */

const input = require('readline-sync')

let login,senha

//estrutura de dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "administrador",
        senha: "password"
    },
    prof: {
        usuario: "Caio Lopes",
    senha: "123456"
    }
}

// Autentificação de usuário
console.clear()
console.log("------------------------")
console.log("       USUÁRIO")
console.log("------------------------")
login = input.question("login: ")
login = input.question("senha: ")
console.log("------------------------")