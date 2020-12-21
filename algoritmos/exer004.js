/**04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores. */

function dividir(dividendo, divisor){
    let resultado = Math.floor(dividendo / divisor) 
    let resto = dividendo % divisor
    return `${dividendo} dividido por ${divisor} = ${resultado} e o resto é: ${resto} `
}

console.log(dividir(7, 2))