"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConcessionariaDao_1 = require("./ConcessionariaDao");
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao_1 = require("./PessoaDao");
var Pessoa_2 = __importDefault(require("./Pessoa"));
var dao = new ConcessionariaDao_1.ConcessionariaDao;
var concessionaria = new Pessoa_1.default('', []);
dao.inserir(concessionaria);
var dao2 = new PessoaDao_1.PessoaDao();
var pessoa = new Pessoa_2.default('', '');
dao2.atualizar(pessoa);
