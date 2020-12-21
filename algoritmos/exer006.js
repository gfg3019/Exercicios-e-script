/**
 * 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.
 */

function jurosSimples(capitalInicial, taxaDejuros, tempoAplicacao){
    const juros = capitalInicial * taxaDejuros * tempoAplicacao
    const montante = capitalInicial + juros
    return `montante produzido é = ${montante}`
}

function jurosComposto(capitalInicial, taxaDejuros, tempoAplicacao){
    const montante = capitalInicial * (1 + taxaDejuros) ** tempoAplicacao
    return `montante produzido é = ${montante.toFixed(2)}`

}

console.log(jurosSimples(1200, 0.02, 10))
console.log(jurosComposto(2000, 0.03, 4))