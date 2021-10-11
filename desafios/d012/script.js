function solicitar(){
    var anterior = Number(prompt('Qual era o preço anterior do produto'))
    var atual = Number(prompt('Qual é o preço atual do produto'))
    var div = window.document.getElementById('div')
    var porcentagem = ((atual*100)/anterior)-100
    var porcentagem2 = 100-((atual*100)/anterior)
    if(anterior==''||atual==''){
        alert('Digite um valor válido')

    }else{
        if(anterior < atual){
            div.innerHTML = `<h1> Analisando os valores informados</h1>`
            div.innerHTML += `<p> O produto custava R$${anterior} e agora custa R$${atual}.</p>`
            div.innerHTML += `<p>Hoje o produto está mais caro.</p>`
            div.innerHTML += `<p>O preço subiu R$${atual-anterior} em relação ao preço anterior.</p>`
            div.innerHTML += `<p>Uma variação de ${porcentagem}% pra cima</p>`
    
        }else{
            div.innerHTML = `<h1> Analisando os valores informados</h1>`
            div.innerHTML += `<p> O produto custava R$${anterior} e agora custa R$${atual}.</p>`
            div.innerHTML += `<p>Hoje o produto está mais barato.</p>
            `
            div.innerHTML += `<p>O preço caiu R$${anterior-atual} em relação ao preço anterior. </p>`
            div.innerHTML += `<p>Uma variação de ${porcentagem2}% para baixo.</p>`
    
        }
    }
   
    /*div.innerHTML += `O preço subiu ${anterior-atual} em relação ao preço anterior.`
    div.innerHTML += `Uma variação de ${a} pra cima`
    */

}