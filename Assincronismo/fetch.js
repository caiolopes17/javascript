/**
 * Assincronismo - Uso de promises em API
 * @author Caio Lopes
 */

const input = require('readline-sync')
let cep, urlAPI

console.clear()
console.log("VIA CEP")
cep = input.question("Digite o CEP: ")
//console.log(cep)
//Consumo da API (via cep)
urlAPI = `https://viacep.com.br/ws/${cep}/json/`
console.log(urlAPI)
console.log(urlAPI)
//Uso de promise(Assincronismo) para acessar a API
//Assincronismo ele busca a informação e se for verdadeira ele volta com a informação
fetch(urlAPI)
.then((response) => {
    return response.json()

})
.then((dados) => {
    console.log(dados.logradouro)
    console.log(dados.bairro)
    console.log(dados.localidade)
    console.log(dados.estado)
    console.log(dados.uf)

})
.catch((error) => {
    console.log(error)
})

