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

    const formatDate = (date) => {
        /*const isoDate = new Date(date).toISOString();
        const [year, month, day] = isoDate.substr(0, 10).split('-');
        return `${year}-${month}-${day}`;*/

        for (let i = 0; i < data.length; i++) {
            const dataExcel = data[i].dataExcel;
            const dataJS = new Date((dataExcel - (25567 + 1)) * 86400 * 1000);
            dados[i].dataJS = dataJS;
        }
    };

    const DATA_EMISSAO_FORMATADA = formatDate(DATA_EMISSAO);
    const DATA_VENCIMENTO_FORMATADA = formatDate(DATA_VENCIMENTO);
    const DATA_PAGAMENTO_FORMATADA = formatDate(DATA_PAGAMENTO);

    console.log({ DATA_EMISSAO_FORMATADA, DATA_VENCIMENTO_FORMATADA, DATA_PAGAMENTO_FORMATADA });


    /*const sql = 'insert into contas_receber (DATA_EMISSAO, DATA_VENCIMENTO, DATA_PAGAMENTO, IDPESSOA, NRO_PARCELA, VALOR_JUROS, VALOR_MULTA, VALOR_DESCONTO, VALOR_TOTAL, VALOR_CONTA, HISTORICO, IDSTATUS, VALOR_PAGO, NUM_DOC) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'

    connection.execute(sql, [DATA_EMISSAO, DATA_VENCIMENTO, DATA_PAGAMENTO, IDPESSOA, NRO_PARCELA, VALOR_JUROS, VALOR_MULTA, VALOR_DESCONTO, VALOR_TOTAL, VALOR_CONTA, HISTORICO, IDSTATUS, VALOR_PAGO, NUM_DOC]);*/
}

connection.end()

//console.log(data);

