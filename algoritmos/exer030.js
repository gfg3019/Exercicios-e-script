//30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.

function menorMaior(vetor){
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++) {
        if(maior === undefined && menor === undefined){
            maior = vetor[i]
            menor = vetor[i]
        }else{
            if(vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }

    return [maior, menor]
}


let vetor = [30, 45, 10, 8, 2, 356 ,651, 415, 20, 3, 1, 66, 23, 34, 11]

console.log(menorMaior(vetor))