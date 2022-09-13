numeros =[1,5,7,5,1,22,44,55,33,12,1220]
maior = Number. MIN_SAFE_INTEGER

for (n of numeros) {
    if (n > maior) {
        maior = n
    }
}
console.log(`'o maior é: ' ${maior}`)
