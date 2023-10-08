import DownloadsData from "../Models/IDownloads";

const data:DownloadsData[] = [{
    id: 1,
    Downloads: 5,
    nome: "SetupSoftcomDll",
    Local: "\\goku\matrizes$\SetupSoftcomDLLs\SetupSoftcomDLLs.zip",
    tamanho: 42015482,
    versão: "3.1.0"
}, {
    id: 2,
    Downloads: 10,
    nome: "PDV - SoftshopCaixa",
    Local: "\\goku\matrizes$\PDV(Softshop_Caixa)\PDV_SoftshopCaixa.rar",
    tamanho: 72470750,
    versão: "8.22.1.0"
},{
    id: 3,
    Downloads: 256,
    nome: "EmissorNFE",
    Local: "\\goku\matrizes$\Emissores\NFe\SetupNFe.rar",
    tamanho: 28210247,
    versão: "9.7.6.0"
},{
    id: 4,
    Downloads: 20710,
    nome: "Setup Softshop Completo",
    Local: "https://softcomarquivospublicos.blob.core.windows.net/publico/Instaladores_Softcom/SetupSoftshop.zip",
    tamanho: 0,
    versão: "3.5.0"
},{
    id: 5,
    Downloads: 5,
    nome: "BackupCloud",
    Local: "\\goku\matrizes$\SoftcomBackup\SoftcomBackup.rar",
    tamanho: 5215194,
    versão: "1.6.0.0"
},{
    id: 6,
    Downloads: 16,
    nome: "SQL Server 2014 64 Bits - Express",
    Local: "\\goku\executaveis$\SQL Server 2014\SetupSQLServer2014_v1.0_64bits.exe",
    tamanho: 0,
    versão: "2014 SP3"
},{
    id: 8,
    Downloads: 123,
    nome: "Elgin i9 e i7 Drivers",
    Local: "\\goku\executaveis$\CD PACOTE\ImpressoraNaoFiscal\Elgin\Elgin-I9-NaoFiscal.rar",
    tamanho: 0,
    versão: ""
},{
    id: 9,
    Downloads: 35,
    nome: "QRCode DLL",
    Local: "\\goku\matrizes$\SOFTSHOP\DAV\LIB\QRCodeSetup.rar",
    tamanho: 0,
    versão: "1.2.1"
},
{
    id: 10,
    Downloads: 46,
    nome: "Ammyy Admin",
    Local: "\\goku\executaveis$\AMMYY\Remoto_Ammy.exe",
    tamanho: 0,
    versão: "3.50"
},
{
    id: 11,
    Downloads: 9513,
    nome: "Driver PinPad Gertec",
    Local: "\\goku\matrizes$\TEF\DRIVERS PINPAD\Driver GERTEC.rar",
    tamanho: 5078486,
    versão: "0"
},
{
    id: 12,
    Downloads: 9866,
    nome: "SPED .Net",
    Local: "\\goku\matrizes$\SPED .Net\SPED_.Net.rar",
    tamanho: 5365412,
    versão: "7.18.0.0"
},
{
    id: 13,
    Downloads: 7934,
    nome: "Assistente",
    Local: "\\goku\ftp$\rubens.teixeira\Assistente.exe",
    tamanho: 19456,
    versão: "1.2.1"
}
]

const JsonData = JSON.stringify(data)

const blob = new Blob([JsonData], {type: 'aplication/json'})

const url = URL.createObjectURL(blob)

export {
    url
}