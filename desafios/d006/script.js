function converter(){
    var texto = Number(window.prompt('Digite uma temperatura em C°(Celsius'))
    var paragrafo1 = window.document.getElementById('paragrafo1')
    var paragrafo2 = window.document.getElementById('paragrafo2')
    var paragrafo3 = window.document.getElementById('paragrafo3')

    paragrafo1.innerHTML = `A temperatura de ${texto}°C, corresponde a...`
    paragrafo2.innerHTML = `${texto+273.15}°K(Kelvin)`
    paragrafo3.innerHTML = `${texto*1.8+32}°F(Fahrenheit)`
    
    
    


}