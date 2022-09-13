// numeros =[1,5,7,5,1,22,44,55,33,12]
numeros =[1,5]
soma =0

for (n of numeros) {
    soma += n
}
var media = soma / numeros.length
console.log(`'a soma é: ' ${soma}`)
console.log(`'a media é: ' ${media}`)