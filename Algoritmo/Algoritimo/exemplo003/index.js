let nome = prompt('Digite seu nome: ');
let idade = prompt('Digite sua idade');

console.log(nome);
console.log(typeof nome); //Retorna o tipo de dado
console.log('-------------------------------------')
console.log(idade);
console.log(typeof idade);

// Concatenação
console.log('o nome digitado foi ' + nome + ' e a idade digitada foi ' + idade + '.');

console.log('o nome digitado foi ',nome, ' e a idade digitada foi ',idade, '.');

console.log(`o nome digitado foi ${nome} e a idade digitada foi ${idade} .`);