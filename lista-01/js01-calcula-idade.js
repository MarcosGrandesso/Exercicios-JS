/**
 * ctrl + alt + n rodar node
 * Faça um programa que dado o ano de nascimento, mostre a idade!
 * 
 * Tarefa:
 * - pesquise como pegar o ano atual em JS
 * - altere a expressão da var idade para usar o ano atual
 * - use node para rodar este script js
 *   $ node lista-01/js01-calcula-idade.js
 *   👉 Quem nasceu em 2002, sua idade é 20
 *  - altere a variável para outros anos e verifique a resposta está correta
 */
var data = new Date()
let ano = data.getFullYear()

var anoNascimento = 2004

// Tem que pegar o ano atual usando JS e subtrair a var acima
var idade = ano - anoNascimento

var resultado = '👉 Quem nasceu em ' + anoNascimento + ', sua idade é ' + idade

console.log(resultado)
