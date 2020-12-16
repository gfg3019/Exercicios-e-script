//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 3, 5, 8, 1)
imprimirSoma()

//Função com retorno
function soma(a, b = 0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())
