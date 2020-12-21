/**
 * 19) O cardápio de uma lanchonete é o seguinte:
Código Descrição do Produto Preço
100 Cachorro Quente R$ 3,00
200 Hambúrguer Simples R$ 4,00
300 Cheeseburguer R$ 5,50
400 Bauru R$ 7,50
500 Refrigerante R$ 3,50
600 Suco R$ 2,80
Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente.

 */

function comandaPedido(codigoPedido, qtdPedido){
    let pedido = 0
    switch(codigoPedido){
        case 100:
            pedido = calcPreco(qtdPedido, 3.00)
            return `Codigo do pedido ${codigoPedido}, tipo = Cachorro Quente
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        case 200:
            //pedido = qtdPedido * 4.00
            pedido = calcPreco(qtdPedido, 4.00)
            return `Codigo do pedido ${codigoPedido}, tipo = Hambúrguer Simples
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        case 300:
            pedido = calcPreco(qtdPedido, 5.50)
            return `Codigo do pedido ${codigoPedido}, tipo = Cheeseburguer
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        case 400:
            pedido = calcPreco(qtdPedido, 7.50)
            return `Codigo do pedido ${codigoPedido}, tipo =  Bauru
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        case 500:
            pedido = calcPreco(qtdPedido, 3.50)
            return `Codigo do pedido ${codigoPedido}, tipo = Refrigerante
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        case 600:
            pedido = calcPreco(qtdPedido, 2.80)
            return `Codigo do pedido ${codigoPedido}, tipo = Suco
            , quantidade = ${qtdPedido}, valor R$${formatacao(pedido)}`
        default:
            return 'Produto invalido'
    }
}

function calcPreco(quatidade, preco){
    return quatidade * preco
}

function formatacao(valor){
    return valor.toFixed(2).toString().replace(".", ",")
}

console.log(comandaPedido(200, 1))
console.log(comandaPedido(300, 3))
console.log(comandaPedido(400, 1))
console.log(comandaPedido(500, 2))
console.log(comandaPedido(600, 3))
console.log(comandaPedido(100, 4))