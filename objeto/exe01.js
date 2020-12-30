//coleção dinâmica de pares chave/valor
const produto = new Object
produto.nome = 'Caldeira'
produto['marca do produto'] = 'Generica'
produto.preco = 220

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro ={
    modelo = 'A4',
    valor: 89000,
    proprietario:{
        nome: 'Raul',
        idade: 56,
        endereco:{
            lougradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junio',
        idade: 42
    },{
        nome: 'Ana',
        idade: 29
    }]
}