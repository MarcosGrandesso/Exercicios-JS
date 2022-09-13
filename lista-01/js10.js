const texto = 'abacate'
letrastr= []
codigos= []
string_final = []
codigo_descript = []
var txt_finally = []

//transforma a string em lista
for (letra of texto) { 
    letrastr.push(letra)
}
//transforma os elementos da lista em codigo
for (letra of letrastr) {
    let code = letra.charCodeAt();
    codigos.push(code)
}
console.log(`'a cripografia em numeros ASCI é: ${codigos}`)

//transforma o codigo em letras somando um exemplo codigo da letra a == 1 nesse for o é somado um a esse numero e o A vira um B, criptografrando a string
for (numereco of codigos) { 
    var text = String.fromCharCode(numereco + 1);
    string_final.push(text)
}
    console.log('')
    console.log(`"A string criptografada == ${string_final.join('')}"`)

//percorre o abacate encript e transforma ele em codigo e descriptografa
for (cript of string_final ) {
    codigo_cript = cript.charCodeAt() -1
    codigo_descript.push(codigo_cript)
}

//percorre o abacate ao contrario e transforma ele em codigo e descriptografa
for (str_des of codigo_descript) {
    txt_finally.push(String.fromCharCode(str_des));
}
console.log(`"A string descriptografada == ${txt_finally.join('')}"`)



// let textoEncript = ''


// for (letra of texto){
//     textoEncript += String.fromCharCode(letra.charCodeAt() + 1) 
// }

// console.log(textoEncript)















// a criptografia consiste na ordem das teclas no teclado por exemplo eu digitei R o valor de R == $ pq no teclado R esta em cima de $ e $ esta em cima do 4

/*
 * ENTRADA          SAÍDA
 * abacate          bcbduf
 * zebra            @fcsb
 * Zebra            $fcsb
 * 
 * 
 * 
 * DICAS:
 * É uma variante do exercício js06
 * Pesquise a tabela ASCII, ai vamos ver que a = 97, que A = 65
 * (cada caracter no teclado tem uma representação numérica)
 * Pesquise os métodos de String fromCharCode que converte a para 97
 * e charCodeAt que faz 97 voltar para a
 * Assim, no podemos usar um método bem simples de criptografia que seria mudar
 * o código ASCII de forma a incrementar 1, ou seja, mudar de a para b, b para c 
 * e assim por diante!
 * quando for z ou Z mudar para @ e $ respectivamente ao invés de {
 */

// // Entrada
// var entrada = 'J'

// // implemente aqui o condicional para retornar o boolean (true/false) com base na entrada
// var resultado = false

// console.log(resultado)