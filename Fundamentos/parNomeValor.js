//par nome/valor

const saudacao = 'Opa'//Contexto léxico 1

function exec(){
    const saudacao = 'Falaaa'//Contexto léxico 2
    return saudacao
}

//Objeto são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        lougradouro: 'Rua muito legal',
        numero: 123
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)