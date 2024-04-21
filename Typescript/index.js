"use strict";
const nome = 'kairo';
const nume = 21;
console.log(`${nome} tem ${nume} anos`);
// arrys
const pares = [2, 4, 6, 8, 10, 12];
// tuples
const aluno = ['kairo', 21, false];
// objetos
const user = {
    nome: 'kairo', email: 'kairomilhomem@gmail.com', senha: 112347
};
const kairo = { nome: 'kairo', email: 'kairomilhomem@gmail.com', senha: 112347 };
const zezao = { nome: 'kairo', email: 'kairomilhomem@gmail.com', senha: 112347 };
// any
let x;
x = 'kairo';
x = 5;
x = false;
// Union type
let y;
y = 'kairo';
y = 5;
// unknown
let z;
x = 'kairo';
x = 5;
x = false;
// enum
var tamanho;
(function (tamanho) {
    tamanho["p"] = "pequeno";
    tamanho["r"] = "medio";
    tamanho["g"] = "grande";
})(tamanho || (tamanho = {}));
const camiseta = { nome: 'camisa branca', tamanho: tamanho.g };
//função
function nam(nam) {
    return `O nome é ${nam}`;
}
nam('kairo');
//função vazia
function namnam(nam) {
    console.log(`O nome é ${nam}`);
}
namnam('kairo');
