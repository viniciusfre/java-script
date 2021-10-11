
function abrir(){
     var numero = Number(window.prompt('Digite um número inteiro qualquer'))
     var antecessor = numero-1
     var sucessor = Number(numero+1)
     window.alert(`Antes de ${numero}, temos o número ${antecessor}.\n Depois de ${numero}, temos o número ${sucessor}`)
}