let mes = document.getElementById('mes')
let btn = document.getElementById('btn')
let div = document.getElementById('conteudo')

function escreveMes(){
    let numberMes = mes.value
    if(numberMes  == '1'){
       console.log('Mês de Janeiro');
       div.innerHTML = `<h2 class="verde"> Mês de Janeiro</h2>`
} else if (numberMes == "2") {
    console.log ('Mês de Fevereiro');
    div.innerHTML = `<h2 class="verde"> Mês de Fevereiro</h2>`
} else if (numberMes == 3){
    console.log ('Mês de Março');
    div.innerHTML = `<h2 class="verde"> Mês de Março</h2>`
} else if (numberMes == 4){
    console.log ('Mês de Abril');
    div.innerHTML = `<h2 class="verde"> Mês de Abril</h2>`
} else if (numberMes == 5){
    console.log ('Mês de Maio');
    div.innerHTML = `<h2 class="verde"> Mês de Maio</h2>`
} else if (numberMes == 6){
    console.log ('Mês de Junho');
    div.innerHTML = `<h2 class="verde"> Mês de Junho</h2>`
} else if (numberMes == 7){
    console.log ('Mês de Julho');
    div.innerHTML = `<h2 class="verde"> Mês de Julho</h2>`
} else if (numberMes == 8){
    console.log ('Mês de Agosto');
    div.innerHTML = `<h2 class="verde"> Mês de Agosto</h2>`
} else if (numberMes == 9){
    console.log ('Mês de Setembro');
    div.innerHTML = `<h2 class="verde"> Mês de Setembro</h2>`
} else if (numberMes == 10){
    console.log ('Mês de Outubro');
    div.innerHTML = `<h2 class="verde"> Mês de Outubro</h2>`
} else if (numberMes == 11){
    console.log ('Mês de Novembro');
    div.innerHTML = `<h2 class="verde"> Mês de Novembro</h2>`
} else if (numberMes == 12){
    console.log ('Mês de Dezembro');
    div.innerHTML = `<h2 class="verde"> Mês de Dezembro</h2>`

} else {
    console.log ('Mês não encontrado')
    div.innerHTML = `<h2 class="vermelho"> Mês não encontrado</h2>`}
}
  btn.addEventListener('click', escreveMes)