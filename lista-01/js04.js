let n1 = 12
let n2 = 'A'

// console.log( typeof(n1))
// console.log( typeof(n2))

let soma = 0

if ( typeof(n1) == "number" && typeof(n2) == "number") {
    soma = n1 + n2
    console.log(soma)
}
else {
    console.log('Um dos inputs não é um numero')
}