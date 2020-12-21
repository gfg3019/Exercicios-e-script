function criarProduto(nome, tipo, preco){
    return {
        nome,
        tipo,
        preco: 'R$ 2000'
    }
}

const produto1 = new criarProduto('Acer nitro 5', 'Notebook')
console.log(produto1)