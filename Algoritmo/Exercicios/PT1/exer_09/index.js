/*Elabore uma aplicação para calcular a área e o perímetro de um retângulo.
 Área = b x h
 Perímetro = é a soma de todos os lados*/

let b = prompt("Digite a base do retângulo:");
let h = prompt("Agora a altura do retângulo:");

b = parseInt(b);
h = parseInt(h);


console.log(`Área = ${b * h}`);
console.log(`Perímetro = ${b + b + h + h}`);