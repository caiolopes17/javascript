/**
 * Uso de async - await (Sintaxe moderna do JS para lidar com assincronismo)
 * @author Caio Lopes
 */

// Biblioteca nativa do JS para trabalhar com arquivos

const fs = require('fs')

function criarArquivo() {
    let conteudo = "Caio Lopes\nExemplo de uso dos novos recursos de assincronismo no JS (async - await)"
    gravarArquivo("teste.txt", conteudo)
}

async function gravarArquivo(path, conteudo) {
    try {
      await fs.promises.writeFile(path, conteudo)
      console.log("Arquivo gravado com sucesso.")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criarArquivo()