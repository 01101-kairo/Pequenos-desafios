let lampada = document.querySelector('img')

// alternativa ao lampada.getAttribute('src')
// lampada.src.indexOf('quebrado')

const interruptor = () =>{
  if(lampada.getAttribute('src') === 'img/quebrado.svg'){
    // break
  }else if(lampada.getAttribute('src') === 'img/ligado.svg'){
    lampada.setAttribute('src','img/desligado.svg')
  }else{
    lampada.setAttribute('src','img/ligado.svg')
  }
}

const quebrar = () =>{
  lampada.setAttribute('src','img/quebrado.svg')
}
