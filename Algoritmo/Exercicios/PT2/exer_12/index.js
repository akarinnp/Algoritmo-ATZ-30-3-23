let num = prompt("Digite um número:");

num = parseInt(num);


document.write(`O número digitado foi  ${num.toFixed(0)}<br>`);
document.write(`Sua raiz quadrada é  ${Math.sqrt (num).toFixed(0)}<br>`); //Raiz quadrada
document.write(`Sua raiz cúbica é  ${Math.cbrt (num).toFixed(0)}<br> `); //Raiz Cubica


console.log(`O número digitado foi  ${num.toFixed(0)}`);
console.log(`Sua raiz quadrada é  ${Math.sqrt (num).toFixed(0)}`); 
console.log(`Sua raiz cúbica é  ${Math.cbrt (num).toFixed(0)} `); 