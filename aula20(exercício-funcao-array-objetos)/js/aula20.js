function meuEscopo(){
    const form = document.querySelector('.form')
const resultado = document.querySelector('.resultado')
    function addEvento (evento){
        evento.preventDefault()

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

resultado.innerHTML += `Nome: ${nome.value}, Sobrenome: ${sobrenome.value}, Peso: ${peso.value}, Altura: ${altura.value}<br/>`

    }
    form.addEventListener('submit', addEvento)
}

meuEscopo()