const fs = require('fs');
const xlsx = require('xlsx');
const db = require('mysql2');
const path = require('path');

const arquivoExcel = path.resolve(__dirname, 'test.xlsx')
//console.log(arquivoExcel);

const buffer = fs.readFileSync(arquivoExcel)
//console.log(buffer);

const workbook = xlsx.read(buffer)
//console.log(workbook);

const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//const worksheet = workbook.Sheets['test']
console.log(worksheet['A1']);

const data = xlsx.utils.sheet_to_json(worksheet)

console.log(data);