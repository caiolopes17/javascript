/**
 * Assincronismo
 * Promise
 * @author Caio Lopes
 */

const input = require('readline-sync')

let login, senha

//estruturas de dad (simular um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Caio Lopes",
        senha: "123456"
    }
}

//autenticaçao do usuario
console.clear()
console.log("-------------------------")
console.log("      USUARIO")
console.log("-------------------------")
login = input.question("login: ")
senha = input.question("senha: ")
console.log("-------------------------")
console.log("")

function logar(login, senha) {
    //uso de promise (aceso ao "banco de dados")
    return new Promise((resolv, reject) => {
        //simulaçao de delay de acesso ao banco
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                //se a senha estiver correta
                if (database[login].senha === senha) {
                    resolv("autenticaçao bem sucedida. ola, " + database[login].usuario)
                } else {
                    reject("senha incorreta, por favor, tente novamente")
                }
            } else {
                reject(" Usuario não encontrado")
            }
        }, 2000)
    })
}
//executar a funçao logar()
//no uso de promise é necessario usar o.them
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("erro de autenticaçao." + error)
    })
