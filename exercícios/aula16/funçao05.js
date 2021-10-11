function fatora(n){
    if(n==1){
        return 1


    }else{
        return n* fatora(n-1)
    }

}
console.log(fatora(5))
