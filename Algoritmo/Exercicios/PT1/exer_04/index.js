/* – Crie uma aplicação que receba duas variáveis do tipo inteiro, exiba os valores
digitados e posteriormente exiba a primeira variável acrescida de uma unidade e a
segunda variável decrescida de uma unidade. */

let num01 = prompt("Primeiro número:");
let num02 = prompt("Agora o segundo:");

num01 = parseInt(num01);
num02 = parseInt(num02);


console.log(`Primeiro: ${num01 + 1}`);
console.log(`Segundo: ${num02 -1}`);