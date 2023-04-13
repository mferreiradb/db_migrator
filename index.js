const fs = require('fs');
const xlsx = require('xlsx');
const db = require('mysql2');
const path = require('path');

const arquivoExcel = path.resolve(__dirname, 'test.xlsx')

const buffer = fs.readFileSync(arquivoExcel)

const workbook = xlsx.read(buffer)

const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//const worksheet = workbook.Sheets['test']

const data = xlsx.utils.sheet_to_json(worksheet)
//console.log(data);

const connection = db.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'erp_lion'
});


for (const row of data) {
    const { DATA_EMISSAO, DATA_VENCIMENTO, DATA_PAGAMENTO, IDPESSOA, NRO_PARCELA, VALOR_JUROS, VALOR_MULTA, VALOR_DESCONTO, VALOR_TOTAL, VALOR_CONTA, HISTORICO, IDSTATUS, VALOR_PAGO, NUM_DOC } = row

    const data_emissao_formatada = new Date(DATA_EMISSAO)
    const data_vencimento_formatada = new Date(DATA_VENCIMENTO)
    const data_pagamento_formatada = new Date(DATA_PAGAMENTO)

    const DATA_EMISSAO_FORMATADA = data_emissao_formatada.toISOString().slice(0, 10)
    const DATA_VENCIMENTO_FORMATADA = data_vencimento_formatada.toISOString().slice(0, 10)
    const DATA_PAGAMENTO_FORMATADA = data_pagamento_formatada.toISOString().slice(0, 10)

    console.log({ DATA_EMISSAO_FORMATADA, DATA_VENCIMENTO_FORMATADA, DATA_PAGAMENTO_FORMATADA });


    const sql = 'insert into contas_receber (DATA_EMISSAO, DATA_VENCIMENTO, DATA_PAGAMENTO, IDPESSOA, NRO_PARCELA, VALOR_JUROS, VALOR_MULTA, VALOR_DESCONTO, VALOR_TOTAL, VALOR_CONTA, HISTORICO, IDSTATUS, VALOR_PAGO, NUM_DOC) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

    connection.execute(sql, [DATA_EMISSAO_FORMATADA, DATA_VENCIMENTO_FORMATADA, DATA_PAGAMENTO_FORMATADA, IDPESSOA, NRO_PARCELA, VALOR_JUROS, VALOR_MULTA, VALOR_DESCONTO, VALOR_TOTAL, VALOR_CONTA, HISTORICO, IDSTATUS, VALOR_PAGO, NUM_DOC]);
}

console.log('Migrate sucess')

connection.end()

//console.log(data);