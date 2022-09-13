
numeros =[1,5,7,5,1,22,44,55,33,12]
pares = []
impares = []
for (n of numeros) {
    resto = n % 2
    if (resto == 0) {
        pares.push(n)
    }
    else { 
        impares.push(n)
    }
}
console.log(`"${pares.length} de numeros pares"`)
console.log(`"${impares.length} de numeros impares"`)