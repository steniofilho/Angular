import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/* .... Criar carrros ...*/
let carroA = new Carro ('Jimny',3)
let carroB = new Carro ('Veloster',3)
let carroC = new Carro ('Cerato',4)

/* ..montar lista de carros da concessonaria ....*/

let listaDeCarros: Carro[] = [carroA, carroB, carroC]

let concessionaria = new Concessionaria('Av Paulista', listaDeCarros)

/* ...exibir a lista de carros ...*/
//console.log(concessionaria.mostrarListaDeCarros())

/* ...comprar  o carroA.acelerar.apply.*/

let cliente = new Pessoa('Jõao','Jimny')
//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarros().map((carro: Carro) => {

    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        //compra carro
        cliente.comprarCarro(carro)
    }
})
console.log(cliente.dizerCarroQueTem())