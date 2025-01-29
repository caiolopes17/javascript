/**
 * Assincronismo
 * Promise
 * @author Caio Lopes
 */

const input = require('readline-sync')

let login, senha

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
senha = input.question("senha: ")
console.log("------------------------")

function logar(login, senha) {
    //uso de promise (aceso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulaçao de delay de acesso ao banco
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                //se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("autenticação bem sucedida. Olá, " + database[login].usuario)
                } else {
                    reject("senha incorreta, por favor, tente novamente")
                }
            } else {
                reject("Usuário não encontrado")
            }
        }, 2000)
    })
}

//executar a função logar()
//no uso de promise é necessário usar o .then
logar(login, senha)
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log("erro de autenticação: " + error)
})
