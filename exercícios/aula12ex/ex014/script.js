function carregar(){
    var imagem = window.document.getElementById('imagem')
    var texto = window.document.getElementById('texto')
    var data = new Date()
    var hora = data.getHours()
    var palavra = ''
    var texto1 = ''
    
    if(hora >= 2){
        palavra = 'são'
        texto1 = 'horas'

    }else{
        palavra = 'é'
        texto1 = 'hora'
    }
    texto.innerHTML = `Agora ${palavra} ${hora} ${texto1}`
    if(hora > 6 && hora <= 12){
        texto.innerHTML += '<br> Bom dia'
        imagem.src = 'fotomanha.jpg'
        document.body.style.background = '#e4d2a2'
        

    }else if( hora >= 13 && hora <= 18){
        texto.innerHTML += '<br> Boa tarde'
        imagem.src = 'fototarde.jpg'
        document.body.style.background = '#f3dd25'

    }else{
        texto.innerHTML += '<br> Boa noite'
        imagem.src = 'fotonoite.jpg'
        document.body.style.background = '#14203a'
    }   

}
