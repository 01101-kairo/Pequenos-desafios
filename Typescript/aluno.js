"use strict";
class Aluno {
    constructor(id, nome, certificado) {
        this.id = id;
        this.nome = nome;
        this.certificado = certificado;
    }
    novoCertificado() {
        return this.certificado + 1;
    }
}
const Aluno1 = new Aluno(1, 'Zezão', 0);
Aluno1.novoCertificado();
console.log(Aluno1);
