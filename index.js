// Variaveis

const nome = 'Joao Jose Felipe Almeida'; // string
const idade = 47; // number
const professor = true; // boolean (true or false)
const carro = null;
const moradia = undefined;
const animais = ['cachorro', 'gato']; // array
const hobby = { primeiro: 'corrida', segundo: 'basquete' } // object

// Operadores matematicos

let valorSoma = 0;
const soma = 100 + 5; // +
const menos = 10 - 5 // -
const multiplicacao = 5 * 8 // *
const divisao = 8 / 5 // /
const resto = 8 % 5 // %
const raizQuadrada = Math.sqrt(144); // Math
const desafio = (5 + 10) * 5 / 8;
const value = '15,0';

Number('500') // 500 numero
String(soma) // soma em texto

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat

// Operadores Condicionais
const maior = 10 > 5; // true
const menor = 4 < 5; // true
const igual = 10 === '10'; // false
const maiorIgual = 10 >= 10; // true
const menorIgual = 10 <= 10; // true
const diferente = 10 !== 10; // false
const e = true && true; // true
const ou = true || false; // true

// Condicionais

// if, else, switch

if(igual) {
  // console.log('1. Verdade')
} else if(menor) {
  // console.log('2. Verdade')
} else {
  // console.log('3. N é verdade');
}

const valor = 1;
switch (valor) {
  case 1: 
    // console.log('Valor a');
  break;

  case 2: 
    // console.log('Valor b');
  break;

  case 1: 
    // console.log('Valor c');
  break;

  default: 
    // console.log('nenhum valor');
  break;
}

// Loops - Repeticoes

for( let i = 1; i < 10; i++) {
  // console.log(i);
}

// Funcoes


// if(false) {
//   nomeDaFuncao('Joao');
// } else {
//   nomeDaFuncao('Jose');
// }



// function nomeDaFuncao(valorA) {
//   console.log('minha funcao', valorA)
// }

const nomeDaFuncao = (valorA) => {
  console.log('minha funcao', valorA)
}

nomeDaFuncao('AZUL2');