const Tabuada = () =>{
  let numero = Number(document.querySelector('input#number-start').value)
  let vezes  = Number(document.querySelector('input#number-end').value)
  let soma   =  document.getElementById('soma')

  soma.innerHTML=''
  if (numero === 0 || vezes === 0){
    soma.innerHTML += `coloca um valor ai meu nobre, qualquer numero vezes zero é zero`
  }else{
    for (let index = 0; index <= vezes; index++) {
      const somar = numero * index
      soma.innerHTML += `${numero} x ${index} = ${somar} <br>`
    }
  }
}
