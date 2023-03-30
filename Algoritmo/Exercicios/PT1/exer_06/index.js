/*– Cria uma aplicação que receba dois números e exibir as seguintes mensagens:
 O números digitados foram ... e .... .
 A soma dos números ... e ... é ... .
 A subtração dos números ... e ... é ... .
 A multiplicação dos números ... e ... é ... .
 A divisão dos números ... e ... é ... .
 A média dos números ... e ... é ... .*/

let num01 = prompt("Primeiro número:");
let num02 = prompt("Agora o segundo:");

num01 = parseInt(num01);
num02 = parseInt(num02);


console.log(`Os números digitados foram: ${num01} e ${num02}`);
console.log(`A soma deles é: ${num01} + ${num02} = ${num01 + num02}`);
console.log(`A subtração deles é: ${num01} - ${num02} = ${num01 - num02}`);
console.log(`A multiplicação é: ${num01} * ${num02} = ${num01 * num02}`);
console.log(`A divisão é: ${num01} ÷ ${num02} = ${num01 / num02}`);
console.log(`A média é: (${num01} + ${num02}) ÷ 2 = ${(num01 + num02) /2}`);