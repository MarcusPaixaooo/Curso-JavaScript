/* function criaPessoa (nome, sobrenome, idade){
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

    const pessoa1 = criaPessoa ('Marcus', 'Vinicius', 27)
    const pessoa2 = criaPessoa ('Rafaella', 'Oliveira', 26)
    const pessoa3 = criaPessoa ('Paulo', 'Siqueira', 27)
    
    console.log(pessoa1.sobrenome) */

    //Usando a função como um método dentro do Array

    const pessoal = {
        nome: 'Luiz',
        sobrenome: 'Miranda',
        idade: 25,

        fala(){
            console.log(`${this.nome} ${this.sobrenome} está dizendo oi. Ele tem ${this.idade}`) /* Usando 
            this para poder específicar o que se deseja imprimir */
        },

        incrementaIdade(){ //incrementando a idade
this.idade++;
        }
    }
//Pedindo o retorno das funções para poder imprimir.
    pessoal.fala();
    pessoal.incrementaIdade();
 

    const usuario  = {
nome: 'Marcus',
sobrenome: 'Paixão',
idade: 25,

dadosDoUsuario(){
    console.log (`${this.nome} ${this.sobrenome} tem ${this.idade}`)
}
    };

    usuario.dadosDoUsuario();


    function gerarUsuario (nome, sobrenome, idade){
        return {nome, sobrenome, idade}
    }
    const usuarioGerado1 = gerarUsuario('Marcus', 'Vinicius', 27);
    const usuarioGerado2 = gerarUsuario('Marcus', 'Vinicius', 27);
    const usuarioGerado3 = gerarUsuario('Marcus', 'Vinicius', 27);
 console.log(usuarioGerado1.nome, 
    usuarioGerado2.sobrenome,
     usuarioGerado3.idade)