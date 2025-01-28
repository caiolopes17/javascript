/**
 * Data automática no rodapé
 * @author murilo dos santos
 */

function obterData() {
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }
    return  `${data.toLocaleDateString('pt-BR', options)} - ${data.toLocaleDateString('pt-BR')}` 
}


// a linha abaixo insere na tag <p> identificada como dataAtual o retorno da função
document.getElementById('dataAtual'),innerHtml = obterData()
