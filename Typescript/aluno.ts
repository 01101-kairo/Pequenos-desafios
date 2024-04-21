class Aluno {
  id:number
  nome: string
  certificado: number

  constructor(id: number, nome: string, certificado: number) {
    this.id = id
    this.nome = nome
    this.certificado = certificado
  }

  novoCertificado(): number{
    return this.certificado + 1
  }
}

const Aluno1 = new Aluno(1, 'Zezão', 0)
Aluno1.novoCertificado()
console.log(Aluno1)
