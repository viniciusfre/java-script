var horas = new Date()
var valor = horas.getHours()
valor = 7
if(valor <7){
    console.log('Boa madrugada')

}
else if(valor < 12){
    console.log('Bom dia')


}else if(valor <= 18){
    console.log('Boa tarde')

}else{
    console.log('Boa noite')
}