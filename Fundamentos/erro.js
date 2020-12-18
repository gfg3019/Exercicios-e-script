function tratarErroELancar(err){
    //throw new Error('...')
    //throw 10
    //throw true
    //throw 'message'
    throw{
        name: error.name,
        msg: erro.message,
        date: new Date()
    }
}

function imprimirNomeGrintando(obj){
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (err) {
        tratarErroELancar(err)
    }finally{
        console.log('final')
    }
}
const obj = {nome: 'Roberto'}
imprimirNomeGrintando(obj)