export interface DaInterface {
    nomeTabela: String

    inserir(object: any): boolean
    atualizar(object: any): boolean
    remover(id: number): any 
    selecionar(id: number): any
    selicionarTodos(): [any]
    
}