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
        console.log("Carro ligado.");
    }

    desligar() {
        console.log("Carro desligado.");
    }

    acelerar() {

        console.log("Carro Acelerando")
    }

    criarCarro() {
        console.log("Carro Criado")
        console.log(`ano: ${this.ano}`)
        console.log(`cor: ${this.cor}`)
    }
}

const carro = new Carro(1995, "verde")
carro.criarCarro()
carro.ligar()
carro.acelerar()
carro.desligar()

class Aviao extends Carro{
    //atributos
    constructor(ano, cor, companhia) {
        super(ano, cor) // herança
        this.companhia = companhia
    }
    

ligar() {
    console.log("Avião Ligado.");
}

desligar() {
    console.log("Avião desligado.");
}

acelerar() {

    console.log("Avião Pousando")
}

criarAviao() {
    console.log("Avião Criado")
    console.log(`ano: ${this.ano}`)
    console.log(`cor: ${this.cor}`)
    console.log(`companhia: ${this.companhia}`)
}
}

const aviao = new Aviao(2010, "Branco", "Vasp")
aviao.criarAviao()
aviao.ligar()
aviao.acelerar()
aviao.desligar()

