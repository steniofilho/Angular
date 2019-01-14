"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* .... Criar carrros ...*/
var carroA = new Carro_1.default('Jimny', 3);
var carroB = new Carro_1.default('Veloster', 3);
var carroC = new Carro_1.default('Cerato', 4);
/* ..montar lista de carros da concessonaria ....*/
var listaDeCarros = [carroA, carroB, carroC];
var concessionaria = new Concessionaria_1.default('Av Paulista', listaDeCarros);
/* ...exibir a lista de carros ...*/
//console.log(concessionaria.mostrarListaDeCarros())
/* ...comprar  o carroA.acelerar.apply.*/
var cliente = new Pessoa_1.default('Jõao', 'Jimny');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        //compra carro
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
