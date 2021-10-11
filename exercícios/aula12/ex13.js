var dia = new Date()
var day = dia.getDay()
day = 7
switch (day){
    case 0:
        console.log('Hojê é Domingo')
        break
    case 1:
        console.log('Hojê é Segunda')
        break
    case 2:
        console.log('Hojê é Terça')
        break
    case 3:
        console.log('Hojê é Quarta')
        break
    case 4:
        console.log('Hojê é Quinta')
        break
    case 5:
        console.log('Hojê é Sexta')
        break
    case 6:
        console.log('Hojê é Sábado')
        break
    default:
        console.log('ERROR, DIA INVALIDO')
        break
    

}