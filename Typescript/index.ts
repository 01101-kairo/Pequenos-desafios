const nome:string = 'kairo'
const nume:number = 21

console.log(`${nome} tem ${nume} anos`)

// arrys
const pares:number[] = [2, 4, 6, 8, 10, 12]

// tuples
const aluno:[string, number, boolean] = ['kairo', 21, false]

// objetos
const user: {nome:string, email:string, senha:number} = {
  nome: 'kairo', email: 'kairomilhomem@gmail.com', senha: 112347
}

// type alias
type usuario = {nome:string, email:string, senha:number}
const kairo: usuario = {nome:'kairo', email:'kairomilhomem@gmail.com', senha:112347}

// interface
interface zezinho {nome:string, email:string, senha:number}
const zezao: zezinho = {nome:'kairo', email:'kairomilhomem@gmail.com', senha:112347}

// any
let x: any
x = 'kairo'
x = 5
x = false

// Union type
let y: string | number
y = 'kairo'
y = 5

// unknown
let z: unknown
x = 'kairo'
x = 5
x = false

// enum
enum tamanho {p='pequeno', r='medio',g='grande'}

const camiseta = {nome:'camisa branca', tamanho: tamanho.g}

//função
function nam(nam:string):string {
  return `O nome é ${nam}`
}
nam('kairo')

//função vazia
function namnam(nam:string):void {
  console.log( `O nome é ${nam}`)
}
namnam('kairo')

//função Generis
function mostrarDados <T> (arry:T[]) {
  arry.forEach(element => {
    console.log(element)
  });
}

const A = [1,1,2,3,5,8]
mostrarDados(A)

const B = ['k','i','r','o']
mostrarDados(B)

//função Narrowing
function Validador(cpf:number|string) {
  if (typeof(cpf) === 'number') {
    console.log('o dado precisa ser tratado!')
  }else{console.log('o dado está ok')}
}
const cpfA = '789.453.123-45'
Validador(cpfA)
const cpfB = 78945312345
Validador(cpfB)
