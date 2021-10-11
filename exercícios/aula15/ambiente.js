let num = [6,5,2,9,7]
/*for(var pos=0;pos!=num.length;pos++){
    console.log(`Na posição ${pos} o valor é ${num[pos]}`)

}
for(let pos in num){
    console.log(`Na posição ${pos} o valor é ${num[pos]}`)
}
*/
let pos = num.indexOf(10)
    if(pos == -1){
        console.log('O valor não foi encontrado')

    }
    else{
        console.log(`O valor na posição ${pos} é ${num[pos]}`)
    }






