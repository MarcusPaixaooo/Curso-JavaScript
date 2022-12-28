function meuEscopo() { /* Crio meu próprio escopo 
para não atrapalhar o da página */

/* Puxando os elementos html pela class */
    const form = document.querySelector('.form'); 
const resultado = document.querySelector('.resultado')
const pessoas = [];


/* Criar uma function para receber os inputs e gerar os comandos necessários */
function recebeEventoForm(evento) {
    evento.preventDefault(); //Previni o que aconteceria por padrão (enviar o formulário e resetar a página)

    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')
    
    pessoas.push({ /* Push para adicionar os  */
        nome: nome.value,
        sobrenome: sobrenome.value, 
        peso: peso.value,
        altura: altura.value,

    });
console.log(pessoas)

    resultado.innerHTML += `<p> Nome: ${nome.value} Sorbrenome: ${sobrenome.value} ${peso.value}, ${altura.value} </p>`;
    
       
        
}
    form.addEventListener('submit', recebeEventoForm); /*Adiciona o evento*/
}
meuEscopo()














/* form.onsubmit = function (evento){
      evento.preventDefault(); /*  Previni  o que que deveria 
      acontecer por padrão dentro do site */
/* alert('Cadastro conclúido!');
 console.log('Foi enviado')
}; */
