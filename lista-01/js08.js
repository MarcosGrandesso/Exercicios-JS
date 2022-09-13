var letra = 'A'
let entrada = letra.toLowerCase()
let resultado = ['a', 'e', 'i', 'o', 'u']
let vogal = resultado.includes(entrada)


if (vogal) {
    console.log('Vogal')
}
else {
    console.log('Consoante')
}