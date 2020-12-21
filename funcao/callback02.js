const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notaBaixas1 = []
for(let i in notas){
    if(notas[i] < 7){
        notaBaixas1.push(notas[i])
    }
}
console.log(notaBaixas1)

const notaBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notaBaixas2)