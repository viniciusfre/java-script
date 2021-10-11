 var cotaçao = Number(window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))
 function perguntar(){
     var carteira = Number(window.prompt('Quantos R$ você tem na carteira'))
     var texto = window.document.getElementById('texto')
     var quantidade = Number(carteira/cotaçao)
     var q = quantidade.toFixed(2)
     texto.innerHTML = `Você consegue comprar ${q} dólares com ${carteira} reais`
     
 }
 
 