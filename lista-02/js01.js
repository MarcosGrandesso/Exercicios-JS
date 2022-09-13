numeros =[1,5,7,5,1,22,44,55,33,12]

for (n of numeros) {
    resto = n % 2
    if (resto == 0) {
        console.log(`"${n} é par"`)
    }
    else { 
        console.log(`"${n} não é par"`)
    }
}
