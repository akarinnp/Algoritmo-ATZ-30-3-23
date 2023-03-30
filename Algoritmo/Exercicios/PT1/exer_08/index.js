/* Crie uma aplicação para calcular a área e o perímetro de um quadrado.
 Área = lado * lado
 Perímetro = é a soma de todos os lados*/

let l = prompt("Digite o valor do lado no quadrado:");

l = parseInt(l);


console.log(`Área = ${l * l}`);
console.log(`Perímetro = ${l + l + l + l}`);