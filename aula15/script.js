//Manipulação de números através do dom utilizando o JavaScript

const numero = Number( prompt('Digite um número'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');
const resultInteger = numero.isInteger
console.log()

//Comandos para manipular números através do DOM.
numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>A raiz do número é ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>${numero} é inteiro? ${Number.isInteger(numero)}</p>`; /*Usar a conversão em Number 
para poder exibir o valor do método isInteger*/

texto.innerHTML += `<p> É NaN? ${Number.isNaN(numero)}</p>`;
texto.innerHTML += `<p> Arredondando para baixo fica: ${Math.floor(numero)}</p>`; /*Chamando Math para habilitar o método 
floor e assim arredondar o número*/ 
texto.innerHTML += `<p> Arredondando para cima fica: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Com duas casas decimais fica: ${numero.toFixed(2)}</p>`;


