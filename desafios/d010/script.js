function perguntar(){
    var a = Number(prompt('Qual é o valor de a?'))
    var b = Number(prompt('Qual é o valor de b?'))
    var c= Number(prompt('Qual é o valor de c?'))
    var h2 = window.document.getElementById('h2')
    var div = window.document.getElementById('div')
    div.innerHTML = ''
    h2.innerHTML = ''
    var res = (b*b) - 4 *(a*c)
    h2.innerHTML = `Resolvendo Bhaskara`
    div.innerHTML = `<p> A equação atual é <strong>${a}x² + ${b}x + ${c} = 0</strong> </p>`
    div.innerHTML += `<p> O cálculo realizado será <strong> Δ = ${b}² - 4 . ${a} . ${c} </strong> </p>`
    div.innerHTML += `<p> O valor calculado foi <strong> Δ = ${res} </strong> </p>`
    


}

