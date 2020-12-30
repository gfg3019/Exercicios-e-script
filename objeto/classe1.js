class Lacamento{
    constructor(nome = 'Genérico', valor =0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinaceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lacamentos = []
    }
    addLacamentos(...lancamentos){
            lancamentos.forEach(l => this.lacamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lacamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lacamento('Salario', 45000)
const contaLuz = new Lacamento('Luz', -220)

const contas = new CicloFinaceiro(6, 2020)
contas.addLacamentos(salario, contaLuz)
console.log(contas.sumario())