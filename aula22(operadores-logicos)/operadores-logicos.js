/* 
Operadores lógicos
&& -> and -> E
|| -> or -> OU
! -> not -> NÃO
*/

console.log(true && true && true)
const expressaoOr = true ||  false // Da true, pois tem um true
console.log(expressaoOr)

const usuario = 'Luiz'
const senha = '12345'

const vailogar = usuario === 'Luiz' &&  senha ==='12345'
console.log(vailogar)

console.log(!false) //Dá true, pois inverte o boolean
