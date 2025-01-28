/**
 * Eventos de intervalo
 * @author murilo dos santos
 */

function piscar() {
  let ligada = false
  // funcão nativa do js para gerar intervalos 
  // 1000 (1000ms = 1s)
  setInterval(() => {
     if (ligada === false) {
        document.getElementById('lamp').src = "img/on.jpg"
        
     } else {
         document.getElementById('lamp').src = "img/off.jpg"
     }
     ligada = !ligada   //!NOT
  },1000)
}

