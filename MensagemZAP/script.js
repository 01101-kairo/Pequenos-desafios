function mandazap(nome) {
  let numero = prompt("numero: ");
  let text = nome.firstElementChild.innerText;
  let zaplink = `https://api.whatsapp.com/send?phone=55${numero}&text=${text}`;

  window.open(zaplink);
}
