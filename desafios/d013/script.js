function entrar(){
    var nome = window.prompt('Qual é o nome do aluno')
    var primeiranota = Number(prompt(`Primeira nota de ${nome}`))
    var segundanota = Number(prompt(`Segunda nota de ${nome}`))
    var media = (primeiranota+segundanota)/2
    var div = window.document.getElementById('div')
    div.innerHTML = ''
    if(media>6){
        div.innerHTML += `<h1> Analizando a situação de ${nome}</h1>`
        div.innerHTML += `<p>Com as notas ${primeiranota} e ${segundanota}, a <strong>média é ${media}</strong></p>`
        div.innerHTML += `<p>Com média acima de 6,0, o aluno está <span id='a'>APROVADO</span></p>`

    }else if(media<3){
        div.innerHTML += `<h1> Analizando a situação de ${nome}</h1>`
        div.innerHTML += `<p>Com as notas ${primeiranota} e ${segundanota}, a <strong>média é ${media}</strong></p>`
        div.innerHTML += `<p>Com média abaixo de 3,0, o aluno está <span id='r'>REPROVADO</span></p>`


    }else{
        div.innerHTML += `<h1> Analizando a situação de ${nome}</h1>`
        div.innerHTML += `<p>Com as notas ${primeiranota} e ${segundanota}, a <strong>média é ${media}</strong></p>`
        div.innerHTML += `<p>Com média entre 3,0 e 6,0, o aluno está em <span id='rec'>RECUPERAÇÃO</span></p>`


        
    }
    
    
}