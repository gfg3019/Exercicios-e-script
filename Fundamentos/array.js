const valores = [7.5, 8.8, 9.6, 6.5, 7.7]
console.log(valores[0], valores[3])
console.log(valores[5])

valores[5] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)