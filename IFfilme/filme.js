const idade = parseInt(prompt("qual sua idade, para ver o filme?"))

console.log(idade)

if (idade < 16) {
  confirm(`voce tem ${idade} anos, seus pais deixam voce ver o filme?`)?
    alert("esta com sorte,voce vai poder ver o filme"):
    location.reload(
      alert("não voce não pode ver o filme, saia daqui!\n\nou volte mentindo sua idade, no minimo tenha uns 16 anos da proxima vez")
    )
}

else if(!Number.isNaN(idade)){
  alert(`${idade} anos, sim voce tem idade suficiente, pode ver o filme agora`)
} else {
  alert("voce nao sabe escrever sua idade, aperte ok para tentar novamente")
  location.reload()
}
