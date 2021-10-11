var numero =window.document.getElementById('txtn')
var tabela = window.document.getElementById('tabela')
var div = window.document.getElementById('div')
var valores = []
var texto1 = window.document.getElementById('txt1')
var texto2 = window.document.getElementById('txt2')
var texto3= window.document.getElementById('txt3')
var texto4 = window.document.getElementById('txt4')
var texto5 = window.document.getElementById('txt5')
function adicionar(){
    texto1.innerHTML = ''
    texto2.innerHTML = ''
    texto3.innerHTML = ''
    texto4.innerHTML = ''
    texto5.innerHTML = ''
    if(numero.value.length == 0||numero.value<1||numero.value>100||valores.indexOf(Number(numero.value))!=-1){
        alert('Valor inválido ou ja encontrado na lista')


    }
     else {
        var n = Number(numero.value)
        valores.push(n)
        var option = window.document.createElement('option')
        option.innerHTML = `Valor ${n} adicionado`
        tabela.appendChild(option)
        valores.sort(function(a,b){
            return a-b;

        
        
        })
        numero.value = ''
        numero.focus()

        

        }
        
    
    
    
    
  
    
}
function finalizar(){
    var somador = 0
    var a = Number(valores.length)
    for(let c=0;c<valores.length;c++){
        somador = somador+valores[c]


    }
    if(valores.length==0){
        alert('Adicione valores antes de finalizar')

    }else{
        texto1.innerHTML = `Ao todo temos ${a} números cadastrados.`
        texto2.innerHTML = `O maior valor informado foi ${valores[a-1]}.`
        texto3.innerHTML = `O menor valor informado foi ${valores[0]}.`
        texto4.innerHTML = `Somando todos os valores, temos ${somador}.`
        texto5.innerHTML = `A média dos valores digitados é ${somador/valores.length}`
    }
    
    
    

    
    
    


}

