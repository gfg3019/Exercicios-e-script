const imprimirResultado = (nota) => {
    if (nota >= 7) {
        console.log('Aprovado')
    }else{
        console.log('Reprovado')
    }
}

imprimirResultado(7)
imprimirResultado(8.5)
imprimirResultado(5)