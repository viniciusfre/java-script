function converter(){
     var metros = Number(window.prompt("Digite uma distância em metros(m)"))
     var paragrafo1 = window.document.getElementsByTagName('p')[0]
     var paragrafo2 = window.document.getElementsByTagName('p')[1]
     var paragrafo3 = window.document.getElementsByTagName('p')[2]
     var paragrafo4 = window.document.getElementsByTagName('p')[3]
     var paragrafo5 = window.document.getElementsByTagName('p')[4]
     var paragrafo6 = window.document.getElementsByTagName('p')[5]
     var paragrafo7 = window.document.getElementsByTagName('p')[6]
     paragrafo1.innerHTML = `A distância de ${metros} metros, corresponde a...`
     paragrafo2.innerHTML = `${metros/1000} quilômetros(Km)`
     paragrafo3.innerHTML = `${metros/100} hectômetros(Hm)`
     paragrafo4.innerHTML = `${metros/10} decâmetros(Dam)`
      paragrafo5.innerHTML = `${metros*10} decímetros(dm)`
      paragrafo6.innerHTML = `${metros*100} centímetros(cm)`
     paragrafo7.innerHTML = `${metros*1000} milímetros(mm)`
    
    



}