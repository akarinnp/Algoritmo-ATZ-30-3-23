/*Crie uma aplicação que receba 5 números e exiba a soma com a seguinte frase:
“Os números digitados foram ..., ..., ..., ... e sua soma é ... .*/

let num01 = prompt("Primeiro número:");
let num02 = prompt("Agora o segundo:");
let num03 = prompt("Terceiro:");
let num04 = prompt("Quarto:");
let num05 = prompt("Quinto:");

num01 = parseInt(num01);
num02 = parseInt(num02);
num03 = parseInt(num03);
num04 = parseInt(num04);
num05 = parseInt(num05);


console.log(`Os números digitados foram: ${num01}, ${num02}, ${num03}, ${num04} e ${num05}`);
console.log(`A soma deles é: ${num01 + num02 + num03 + num04 + num05 }`);