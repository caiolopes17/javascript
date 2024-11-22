/**
 *Fundamentos da POO
 Encapsulamento (segurança)
 @author Caio Lopes
 */

 console.clear()

 class User {
    //atributos
    constructor(login, senha) {
        this.login = login
        // Encapsulamento (O_ "underlina" enjaula a varável)
        let _senha = senha
        this.getSenha = () => _senha //Função ler senha
        this.setSenha = (novaSenha) => _senha = novaSenha //escrita
    }
    //metodo
    logar() {
        console.log("__________________________")
        console.log(`Usuário: ${this.login}`)
        console.log(`Senha: ${this.getSenha()}`)
        if (this.login === 'admin' && this.getSenha() === '123@senanc') {
            console.log("usuário autenticado")
        } else {
            console.log("Usuário e/ou senha inválido(s)")
        }

    }
 }
 /****Sistema (Criar Usuário)****/
// criando um novo objeto
// Encapsulamento ele deixa guardado e  ninguem tem acesso, só o usuáiotem acesso
const user1 = new User("admin", "1234" )
user1.logar()
user1.setSenha("123@senac")
user1.logar()