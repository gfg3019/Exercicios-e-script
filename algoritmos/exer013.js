/*
 * 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido 
 * dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. 
 * Utilize a estrutura Switch.
 */

function diaUtil(dia){
    switch(dia){
        case 1:
            console.log('Domingo, final de semana')
            break
        case 2: 
            console.log('Segunda-feira, dia util')
            break
        case 3:
            console.log('Terça-feira, dia util')
            break
        case 4:
            console.log('Quarta-feira, dia util')
            break
        case 5:
            console.log('Quinta-feira, dia util')
            break
        case 6:
            console.log('Sexta-feira, dia util')
            break
        case 7:
            console.log('Sabado, final de semana')
            break
        default:
            console.log('Dia da semana invalido')
    }
}
diaUtil(5)
diaUtil(1)
diaUtil(4)
diaUtil(2)
