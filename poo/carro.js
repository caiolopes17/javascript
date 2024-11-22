/**
 * Classe Modelo
 * Criando 
 * @author Caio Lopes
 */

console.clear()
//Criando Classe modelo

class Carro {

    constructor(ano, cor) {
        this.ano = ano;
        this.cor = cor;
    }

    ligar() {
        console.log(this.ligado = true);
        console.log("Carro ligado.");
    }

    desligar() {
        console.log(this.ligado = false);
        console.log(this.velocidade = 0);
        console.log("Carro desligado.");
    }

    acelerar() {
        console.log(this.acelerar = true)
        console.log("Acelerar")
    }
}