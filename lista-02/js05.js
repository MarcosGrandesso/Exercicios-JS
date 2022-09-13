numeros =[1, 10 , 2]
maior = -9999
segundo = 0

for (n of numeros) {
    if (n > maior) {
        maior = n
    }
}
for (n of numeros) {
    if (n > segundo && n < maior) {
        segundo = n
    }
} 
console.log(`'o maior é: ' ${maior}`)
console.log(`'o segundo maior é: ' ${segundo}`)


// numeros.sort(
//     function(a,b){
//     if (a>b){
//         return -1;
//     }
//     if (a<b){
//         return 1;
//     }
// }
// ) 

// console.log(numeros[1])