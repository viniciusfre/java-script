function gerar(){

    var texto = window.document.getElementById('txt1')
    var tabela = window.document.getElementById('tabela')
    var opçao = window.document.getElementById('opçao')
    tabela.innerHTML = ''

    if(texto.value.length == 0){
        alert('ERRO, DADOS INCOMPLETOS')

    }else{
        var n = Number(texto.value)
        var numero = 1
        for(var c = numero;c<=10;c++){
            var resultado = Number(n) * Number(numero)
            var option = window.document.createElement('option')
            tabela.appendChild(option)
            option.innerHTML = `${n} x ${numero} = ${resultado}`
            numero++
            
            


        }
        
        

    }
        
    

    
}

