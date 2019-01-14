import { ConcessionariaInterface } from './ConcessionariaInterface';
import { DaoInterface } from './DaoInterface'
import Concessionaria from './Pessoa'

export class ConcessionariaDao implements DaoInterface {
    
    nomeTabela: String = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        console.log('logica de insert')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        console.log('logica de update')
        return true
    }
    remover(id: number): Concessionaria {
        console.log('logica de delete')
        return new Concessionaria('',[])
    }
    selecionar(id: number): Concessionaria { 
        console.log('logica de select')
        return new Concessionaria('',[])
    }
    selicionarTodos(): [any] {
        console.log('logica de getAll')
        return [ new Concessionaria('',[])]
    }

}