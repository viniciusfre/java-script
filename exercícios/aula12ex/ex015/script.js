function verificar(){
    var nascimento = document.getElementById('txt')
    var valor = Number(nascimento.value)
    var data = new Date()
    var ano = data.getFullYear()
    var sexo = document.getElementsByName('sex')
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(valor > ano || valor == 0){
        alert('ERRO, Cheque seus dados novamente')

    }
    else if(sexo[0].checked){
        //homem           

        var idade = ano-valor
        var tela = document.getElementById('espaço')
        tela.style.textAlign = 'center'
       tela.innerHTML = `Detectamos homem de ${idade} anos`
       if(idade <=10){
           //criança
            img.setAttribute('src','criança-m.jpg')
            



        }
        else if(idade <21){
            //jovem
            img.setAttribute('src','jovem-m.jpg')

        }
        else if(idade < 50){
            //adulto
            img.setAttribute('src','adulto-m.jpg')

        }
        else{
            //idoso
            img.setAttribute('src','idoso-m.jpg')

        }   
    }    
    else if(sexo[1].checked){
        //mulher
        var idade = ano-valor
        var tela = document.getElementById('espaço')
        tela.innerHTML = `Detectamos mulher de ${idade} anos`
        if(idade <=10){
            //criança
             img.setAttribute('src','criança-f.jpg')
             
 
 
 
         }
         else if(idade <21){
             //jovem
             img.setAttribute('src','jovem-f.jpg')
 
         }
         else if(idade < 50){
             //adulto
             img.setAttribute('src','adulto-f.jpg')
 
         }
         else{
             //idoso
             img.setAttribute('src','idoso-f.jpg')
 
         }   

    
    }
    else{
        tela.innerHTML = 'erro'
    


        

    }

    tela.appendChild(img)
    
}