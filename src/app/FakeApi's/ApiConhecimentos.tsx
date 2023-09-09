import IConhecimentos from "../Models/IConhecimentos";

const data:IConhecimentos[] = [{
    Faq:  "3665",
    Prioridade: "Alta",
    Categoria: "Requisição",
    CriadoPor: "Jean",
    ValidadoPor: "Barbosa",
    Titulo: "Nota Fiscal Parada - Bird Box",
    Texto: {
        paragrafo1: "Causa: Preenchimento fiscal, Errado Preenchimento de cadastros errados",
        paragrafo2: "Solução: Chamar apoio da supervisão: 1. Verificar o erro, e identificar que informação está faltando ou está errada.",
        paragrafo3: "Lembrando que toda informação fiscal, como CST, CFOP, PIS, COFINS, entre outras, é obrigação da contabilidade informar ao cliente."
    }
        
},{
    Faq:  "316",
    Prioridade: "Alta",
    Categoria: "Erro",
    CriadoPor: "Desativado",
    ValidadoPor: "Lourenço",
    Titulo: "SOFTSHOP NÃO ABRE: Ao clicar no atalho o access não inicia ou iniciar o access mas não abre o sistema.",
    Texto: {
        paragrafo1: "Causa: Existe outra versão do access instalada ou não está conseguindo abrir automaticamente o sistema através de um caminho de rede",
        paragrafo2: "Solução: Colocar o caminho do access no atalho, antes do caminho do banco de dados.",
        paragrafo3: "Exemplo: C:\Program Files (x86)\Microsoft Office\OFFICE11\MSACCESS.EXE  C:\Sistema Padrão\SOFTSHOP.mdb COMO COMPACTAR E REPARAR O BANCO DE DADOS? Solução: Causa: GERALMENTE E PRECISO QUANDO O CLIENTE NAO CONSEGUE ABRIR O SISTEMA E APARECE UMA MENSAGEM FORMATO DE BANCO DE DADOS INVALIDO, OU NAO RECONHECIDO, CAUSADO POR QUEDAS DE ENERGIA, OSCILACAO DA REDE... Solução:",
        paragrafo4: "1- Abra o sistema em modo estrutura, vai no menu Ferramentas > Utilitários de Banco de Dados > Compactar e Reparar Banco de Dados 2 - Após Compactar o Banco, verifique se há algum registro corrompido ,se alguma tabela perdeu chave primária, se alguma tabela perdeu o indice e faça a correção 3-Verificar TABELAS, CADASTRO DE VENDAS, VENDAS EFETUADAS E BLOQUETES. Atenção: Em caso de reincidênciado chamado, deve ser escalonado o atendimento para o N2, para que seja analisado para uma solução definitiva."
    }
        
}]


const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const urlConhecimentos = URL.createObjectURL(blob)

export {
    urlConhecimentos
}