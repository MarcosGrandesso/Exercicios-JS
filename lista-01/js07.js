// entradas =  entra Y,y,yes,S,sim 

entrada = 'X'
e = entrada.toUpperCase()

let verdadeiros = ['Y', 'YES', '1', 'SIM', 'S', '👍']

let resultado = verdadeiros.includes(e)
console.log(resultado)