class jogador {
  constructor(nome, posicao, numGol){
    this.nome = nome
    this.posicao = posicao
    this.numGol = numGol
  }
  golsMarcados(){
    console.log(`O ${this.nome} já marcou ${this.numGol} gols em sua carreira`)
  }
}

const Neymar = new jogador('Neymar', 'Atacante', 400)
Neymar.golsMarcados()

const Pele = new jogador('Pele', 'Atacante', 1000)
Pele.golsMarcados()
