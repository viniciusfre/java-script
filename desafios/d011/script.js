function verificar(){
    var ano = Number(prompt('Qual é o ano que você quer verificar'))
    var div = window.document.getElementById("div")
    div.innerHTML = `<h2>Analisando o ano de ${ano}</h2>`
    if(ano % 4 == 0){
        div.innerHTML += `<p> O ano de ${ano} <span id="verde">É BISSEXTO</span> &#x2705`

    }else{
        div.innerHTML += `<p> O ano de ${ano} <span>NÃO É BISSEXTO</span> &#x274C`
    }
    
    

}