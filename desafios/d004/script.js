function comprar(){
     var produto = window.prompt("Que produto você está comprando?")
     var preço = Number(window.prompt(`Quanto custa ${produto} que você está comprando`))
     var dinheiro = Number(window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`))
     var troco = dinheiro-preço
     if(dinheiro < preço){
         window.alert('ERRO, Dinheiro Insuficiente')

     }else{
        window.alert(`Você comprou ${produto} que custou R$ ${preço} \n Deu ${dinheiro} em dinheiro e vai receber ${troco} de troco. \n Volte Sempre!`)

     }
     
}