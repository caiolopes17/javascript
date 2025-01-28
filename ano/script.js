/**
 * Ano automático
 * @author murilo dos santos
 */

let ano = document.getElementById('copyrightYear')

// inserindo o ano na tag<span>
let anoAtual = new Date().getFullYear
ano.innerHTML = anoAtual