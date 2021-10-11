function Perguntar(){
    var nome = prompt("Qual é o nome do funcionário?")
    var salario = Number(prompt(`Qual é o salário de ${nome}`))
    var porcentagem = Number(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    var p = window.document.getElementById('texto')
    var h1 = window.document.getElementById('h1')
    var texto1 = window.document.getElementById('texto1')
    var texto2 = window.document.getElementById('texto2')
    var texto3 = window.document.getElementById('texto3')
    var aumento = Number(salario*(porcentagem/100))
    var novosalario = Number(salario+aumento)
    p.innerHTML = ''
    h1.innerHTML = `${nome} recebeu um aumento salarial!`
    texto1.innerHTML = `O salário atual era R$ ${salario}.`
    texto2.innerHTML = `Com um aumento de ${porcentagem}%, o salário vai aumentar R$ ${aumento} no próximo mês.`
    texto3.innerHTML = `E a partir daí, ${nome} vai passar a ganhar R$ ${novosalario}.`




}