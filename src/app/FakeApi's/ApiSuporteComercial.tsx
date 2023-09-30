import ISuporteComercial from "../Models/ISuporteComercial";

const data:ISuporteComercial[] = [
{
    Segmento: "Alimentos",
    PontosFortes: [
        "01-Gestão do Estoque: *Analise da rotatividade de vendas para geração de pedido de compra automático *Formação de preço com a substituição tributária, uso TVA ou MVA *Balanço com uso coletor, clientes com várias mercadorias cadastradas *Criação de várias tabelas de preços",
        "02-Gestão de Clientes: *Cadastro rápido com integração com Site da Fazenda , necessidade da digitação apenas do CNPJ *Envio de SMS para fidelizar melhor seus clientes, aniversários, faturamento e promoções; *Definição da Tabela de Preços, Limite de Crédito e Condição de Pagamento por Cliente",
        "03-Atendimento: *Integração com os Smartphones importando os pedidos em tempo real *Digitação rápida integrando com o perfil do cliente, condição de pagamento, Limite e tabela *Montagem da Carga/Romaneio de forma rápida, possibilitando impressão das Notas Fiscais em grupo",
        "04-Conhecemos seu negócio: *Leilão, montagem de uma programação de compra onde os próprios representantes lançam seus preços de venda e o sistema gera a analise e identifica os melhores preços lançados; *Impressão de etiquetas de gondulas com código de barras e QRCODE, além de auxiliar no balanço iirão promover o marketing viral da empresa *Emissão de notas fiscais especificas como desperdicios, quebra, sobras e fora de validade; *Analise de horario de pique, geração de relatorio através do painel de bordo onde são apresentados os horarios de maior fluxo de venda durante o dia *Flex, uso do desconto por item abaixo da margem e aumento da margem em outros itens , colocando a margem por venda, garantindo mais vendas"
    ], 
    RoteiroDemo: [
        "Tão importante quanto as vendas, uma distribuidora ou atacadista deve prezar pelo controle, seja de estoque, financeiro ou até mesmo de metas. Um sistema que organize tudo isso e ainda ofereça mecanismos de apoio estratégico para aumento de produtividade é essencial. Com a Softcom a sua distribuidora ou atacado garante esses e muitos outros recursos para uma gestão completa e prática. A demonstração do sistema segue uma sequência lógica para melhor uso do tempo e coleta de informações que serão uteis para definir o escopo do software que será instalado:",
        "1 - Quantidade de computadores: Para definição de uso de Servidor (Windows Server 2016 R2), até duas maquinas e baixo fluxo de vendas, não há a necessidade de uso de servidor;",
        "2 - Já utilizava Software ? (Terceiros), a análise do banco de dados será feita com o apoio do Suporte Franquias (Fornelos) e(ou) Jesus (Parametrização), esta análise é obrigatório para saber se há a possibilidade de importação dos cadastros do sistema antigo (Dados que são importados: Clientes, mercadorias, marcas, grupos, fornecedores e estoque);",
        "3 - Demostrando o sistema: Sua demonstração deve ser rápida e pontual, focar os pontos fortes do sistema, demonstrar máximo 5 Telas, pois uma demonstração demorada, acaba se tornando chata. Lógico que haverá casos que o próprio cliente vai querer ver todas as telas, mais é raro de acontecer, então a melhor sequencia será: Estoque, vendas, fiscal, Gerenciamento de Informações e Fidelização."
],
    MaterialDeApoio: ["https://www.youtube.com/embed/PlbuzUCo_hs", "https://www.youtube.com/embed/3XicYEAp1rk", "https://softcomtecnologia.com.br/segmentos/atacadistas-e-distribuidores/"],
},
{
    Segmento: "Angiologista",
    PontosFortes: [
        "01-Pacientes: *Anamnese personalizada para a especialidade; *Impressão de Receitas, atestados e declarações; *Lançamentos das solicitações de exames; *Lançamentos de imagens com opções de marcações e observações em cada imagem.",
        "02-Atendimentos: *Agendamentos automatizados para o médico, dia e horário definidos; *Envios de e-mails e SMSs com o aviso da consulta marcada e confirmação da presença do paciente; *Formação de uma sala de espera virtual conforme é confirmada cada consulta, na ordem de chegada e com a visualização do tempo de espera; *Chamada automática do paciente direto do consultório do médico com exibição na tela da recepção.",
        "03-Conhecemos seu negócio: *Anamnese personalizada; *Tiss Eletronica; *Banco de dados das CIDs; *Orientações Médicas, Receituarios, Atestados e Declarações; *HDA.",
        "04-Rotinas Padrões:*Cadastramentos de Orientações médicas e procedimentos padrões e Medicamentos com suas descrições e posologia, para evitar redigitações de informações padrões; *Cadastramentos dos convenios e tabelas de valores por tipo de atendimentos; *Financeiro com rotinas do contas a pagar e contas a receber; *Relatórios estatisticos com graficos para melhor visualização da produtividade dos médicos, demanda de consultas e agendas."
    ],
    RoteiroDemo: [
        "1 - Não vendemos caixa registradora, vendemos gestão.",
        "2 - Não trabalhamos com softwares terceirizados, somos uma fábrica de softwares.",
        "3 - Conhecemos o negócio e temos uma carteira de 300 clientes no seu segmento.",
        "4 - Nosso software oferece rapidez nos processos, confiança nos relatórios e segurança para dados.",
        "5 - Universidade Softcom: capacitamos seus colaboradores para transformar conhecimento em resultado para sua empresa.",
        "6 - Consultoria: dispomos de uma equipe qualificada, que irá sugerir soluções direcionadas ao seu negócio."
    ],
    MaterialDeApoio: [""]
}
]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: "aplication/json"})

const url = URL.createObjectURL(blob)

export {
    url
}