import { ConcessionariaInterface } from './ConcessionariaInterface';
import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao implements DaoInterface {
    
    nomeTabela: String = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: Pessoa): boolean {
        console.log('logica de update')
        return true
    }
    remover(id: number): Pessoa {
        console.log('logica de delete')
        return new Pessoa('','')
    }
    selecionar(id: number): Pessoa { 
        console.log('logica de select')
        return new Pessoa('','')
    }
    selicionarTodos(): [any] {
        console.log('logica de getAll')
        return [ new Pessoa('','')]
    }

}