function Calcular(){
    var cabeça = window.document.getElementById('cabeça')
    var produto = window.prompt('Qual é o produto que você está comprando?')
    var preço = Number(window.prompt(`Qual é o preço de ${produto}`))
    var texto = window.document.getElementById('texto')
    var texto1 = window.document.getElementById('texto1')
    var texto2 = window.document.getElementById('texto2')
    var texto3 = window.document.getElementById('texto3')
    var desconto = Number(preço*(10/100))
    texto.innerHTML = ''
    cabeça.innerHTML = `Calculado desconto de 10% para ${produto}.`
    texto1.innerHTML = `O preço original era R$ ${preço}.`
    texto2.innerHTML = `Você acaba de ganhar R$ ${desconto} de desconto (-10%).`
    texto3.innerHTML = `No fim, você vai pagar R$ ${preço-desconto} no produto ${produto}.`
    
    
}
    
    
