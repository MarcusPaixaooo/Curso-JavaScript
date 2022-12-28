/* Primitivos (imutáveis) - string,number, boolean, undefined, null, (bigint, symbol). */
//Strins são indexadas (string letra) -- (Array - elementos)

/* let a = "A";
let b = a;

console.log (a, b)

a = 'outra coisa';
console.log(a, b) */

//Referência (mutável) - array, object, function

//Pimitivos são valores copiados.
//Referência são passados por referência. (Um valor aponta para o outro e se tornam mutáveis)


let a = [1, 2, 3];
let b = a
let c = b;


a.push(4)
console.log(a, b)

b.pop()
console.log(a,b)

a.push('Marcus')
console.log(c)
console.log(a, b, c)
