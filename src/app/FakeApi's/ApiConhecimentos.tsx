import IConhecimentos from "../Models/IConhecimentos";

const data:IConhecimentos[] = [{
    Faq:  1,
    Prioridade: "Alta",
    Categoria: "Requisição",
    CriadoPor: "Jean",
    ValidadoPor: "Barbosa",
    Titulo: "Nota Fiscal Parada - Bird Box",
    Texto: [
         "Causa: Preenchimento fiscal, Errado Preenchimento de cadastros errados",
         "Solução: Chamar apoio da supervisão: 1. Verificar o erro, e identificar que informação está faltando ou está errada.",
         "Lembrando que toda informação fiscal, como CST, CFOP, PIS, COFINS, entre outras, é obrigação da contabilidade informar ao cliente."
    ]
        
},{
    Faq:  2,
    Prioridade: "Alta",
    Categoria: "Erro",
    CriadoPor: "Desativado",
    ValidadoPor: "Lourenço",
    Titulo: "SOFTSHOP NÃO ABRE: Ao clicar no atalho o access não inicia ou iniciar o access mas não abre o sistema.",
    Texto: 
         ["Causa: Existe outra versão do access instalada ou não está conseguindo abrir automaticamente o sistema através de um caminho de rede",
         "Solução: Colocar o caminho do access no atalho, antes do caminho do banco de dados.",
         "Exemplo: C:\Program Files (x86)\Microsoft Office\OFFICE11\MSACCESS.EXE  C:\Sistema Padrão\SOFTSHOP.mdb COMO COMPACTAR E REPARAR O BANCO DE DADOS? Solução: Causa: GERALMENTE E PRECISO QUANDO O CLIENTE NAO CONSEGUE ABRIR O SISTEMA E APARECE UMA MENSAGEM FORMATO DE BANCO DE DADOS INVALIDO, OU NAO RECONHECIDO, CAUSADO POR QUEDAS DE ENERGIA, OSCILACAO DA REDE... Solução:",
         "1- Abra o sistema em modo estrutura, vai no menu Ferramentas > Utilitários de Banco de Dados > Compactar e Reparar Banco de Dados 2 - Após Compactar o Banco, verifique se há algum registro corrompido ,se alguma tabela perdeu chave primária, se alguma tabela perdeu o indice e faça a correção 3-Verificar TABELAS, CADASTRO DE VENDAS, VENDAS EFETUADAS E BLOQUETES. Atenção: Em caso de reincidênciado chamado, deve ser escalonado o atendimento para o N2, para que seja analisado para uma solução definitiva."]
    
        
},{
    Faq: 3,
    Prioridade: "Media",
    Categoria: "Requisicao",
    CriadoPor: "Marcos",
    ValidadoPor: "Lourenço",
    Titulo: "Dúvidas de cadastros ou Treinamento remoto",
    Texto: [
        "Causa: Cliente com dúvidas",
        "Solução:",
        "1. Apresentar pra o cliente a Área do Cliente. Onde o mesmo vai poder assistir os vídeos de cadastro.",
        " 1.2 www.softcomtecnologia.com.br > Botão Área do Cliente. O cliente vai entrar com o Registro e o seu CNPJ",
        "Lembrando que ao apresentar a área do cliente você poderá abrir uma AP pra você"
    ]

},{
    Faq: 4,
    Prioridade: "Alta",
    Categoria: "Erro",
    CriadoPor: "Desativado - Matos",
    ValidadoPor: "Lourenço",
    Titulo: "TEF: Erro 30 / Erro 31 (SITEF) / Conect o Pinpad",
    Texto: [
        "Causa:",
        "1- Pin Pad foi desconectado da USB e ao reconectar perdeu as configurações",
        "2- Pin Pad conectado em HUB USB ou em porta USB de Notebook que está se desligando por causa do gerenciamento de energia 3- Driver do Pin Pad instalado incorretamente",
        "Solução:",
        "-Solução 1: Verifique se o Pin Pad foi conectado na mesma porta USB que estava antes, normalmente o Windows já reconhece dessa forma. E peça pra o cliente desconectar e conectar o pinpad da porta USB",
        "- Solução 2: Verifique se na Configuração do PDV, na aba TEF, se a Porta Pinpad está como AUTO_USB",
        "- Solução 3: Certifique-se de que o Pin Pad está conectado diretamente na porta USB do computador, não pode ser conectado em HUB USB. Caso seja um Notebook, ir no Gerenciador de dispositivos, localizar a porta USB. Com o botão direito ir em Propriedades >> Gerenciamento de Energia e desmarque a opção )",
        "-Solução 4: Caso o PINPAD seja muito antigo já orientar o cliente a solicitar a troca com a credenciadora"
]
}, {
    Faq: 5,
    Prioridade: "Baixa",
    Categoria: "Requisicao",
    CriadoPor: "Desativado - Davi",
    ValidadoPor: "Desativado - Davi",
    Titulo: "Cliente solicita que o atendimento seja adiado para outro dia",
    Texto: [
        "Causa: Indisponibilidade no momento. Cliente sem internet. Pendencia para conclusão do atendimento (impressora,certificado e etc.",
        "Solução: Abrir ocorrência para odia seguinte ou para a data solicitada pelo cliente"
    ],
 
},  {
    Faq: 6,
    Prioridade: "Media",
    Categoria: "",
    CriadoPor: "",
    ValidadoPor: "",
    Titulo: "Atendimento SPED",
    Image: [
        "http://177.43.232.3:10000/helptools2/public/upload/images/promover/Atendimento%20SPED.png"
    ]
    }
]


const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const urlConhecimentos = URL.createObjectURL(blob)

export {
    urlConhecimentos
}