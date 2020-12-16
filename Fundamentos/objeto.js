const prod1 = {}
prod1.nome = 'Celular Ultar Mega'
prod1.preco = 4998.90
prod1['Desconto legal'] = 0.40//evitar atributos com espaços
console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 78.90,
    obj: {
        blablabla: 1,
        obj: {
            blablabla: 2
        }
    }
}
console.log(prod2)
