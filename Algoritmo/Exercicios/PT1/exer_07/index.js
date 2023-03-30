/*Crie uma aplicação que receba um número inteiro e imprimir seu antecessor e seu
sucessor.
 SAÍDA:
 O número digitado foi ..., seu antecessor é ... e seu sucessor é ...*/

let num = prompt("Digite um número:");

num = parseInt(num);


console.log(`O número digitado foi ${num}, seu antecessor é ${num-1} e seu sucessor é o ${num+1}`);