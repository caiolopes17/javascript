/**
 * Estudo das funções simples
 * @author Caio Lopes
 */

hello() 
// função literal
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello))

// funções atribuidas
// funções atribuida precisam ser criadas no início do código (antes da chamada da função)
const hello2 = function() {
    console.log("Hello2 function")
}
hello2()
console.log(typeof(hello2))

// Arrow function (forma simplificada de criar uma função atribuida)
const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))

// Arrow function mais simplificada (neste caso só é possivel executar uma linha de código)
const hello4 = _ => console.log("Hello4 function")
hello4()
console.log(typeof(hello4))