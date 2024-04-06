let DOM = window.document
let x = DOM.getElementsByTagName('h1')[0]
x.style.color = 'red'
x.innerHTML += 'com a escola DNC'

let y = DOM.getElementsByName('paragrafo')[0]
y.style.backgroundColor = 'blue'
// window.alert(y.innerText)


// let z = DOM.getElementById('div-1')
let z = DOM.querySelector('div#div-1')
z.style.textAlign = 'left'

DOM.write('<p>Escrevendo um paragrafo</p>')

// Alguns dos principais métodos de seleção são:
//
// getElementById(): seleciona elemento pelo id
// getElementsByTagName(): seleciona elementos pela tag
// getElementsByClassName(): seleciona elementos pela classe CSS
// querySelector(): seleciona primeiro elemento que combinar com o seletor CSS
// querySelectorAll(): seleciona todos os elementos que combinarem com o seletor CSS
//
//
//Tipos de eventos DOM
// Existem vários tipos de eventos DOM disponíveis para uso em JavaScript. Alguns dos mais comuns incluem:
// 
// Eventos de clique: como “click”, acionados quando um elemento é clicado.
// Eventos de teclado: como “keydown” ou “keyup”, acionados quando uma tecla é pressionada ou liberada no teclado.
// Eventos de formulário: como “submit” ou “change”, acionados quando um formulário é submetido ou um campo de entrada é alterado.
// Eventos de mouse: como “mouseover” ou “mouseout”, acionados quando um mouse é movido sobre um elemento ou fora dele.
