let num = prompt('Digite um número:');

num = parseFloat(num);

document.write(`Potência:  ${Math.pow (num, 2)}<br>`);
document.write(`Potência:  ${Math.pow (num, 3)}<br>`);
document.write(`Potência:  ${Math.pow (num, 4)}<br>`);

document.write(`Raiz quadrada:  ${Math.sqrt (num).toFixed(3)}<br>`); //Raiz quadrada
document.write(`Raiz cubica:  ${Math.cbrt (num).toFixed(3)}<br>`); //Raiz Cubica

const PI = 3.14;
document.write(`PI:  ${PI}<br>`);
document.write(`PI:  ${Math.PI.toFixed (2)}<br>`);


//ToFixed fixamos quantas casas decimais queremos