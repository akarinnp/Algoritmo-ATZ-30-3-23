/*10- Crie uma aplicação que receba um número e imprima sua raiz quadrada. 
 
SAÍDA: 
A raiz quadrada de no número .... é ... */

let num = prompt('Digite um número:');
num = parseFloat(num);

 document.write(`A raiz quadrada do número ${num} é  ${Math.sqrt (num).toFixed(1)}<br>`);