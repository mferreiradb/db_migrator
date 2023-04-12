const fs = require('fs');
const xlsx = require('xlsx');
const db = require('mysql2');
const path = require('path');

const arquivoExcel = path.resolve(__dirname, 'test.xlsx')

const buffer = fs.readFileSync(arquivoExcel, 'utf-8')

const workbook = xlsx.read(buffer)
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
//const worksheet = workbook.Sheets['test']

const data = xlsx.utils.sheet_to_json(worksheet)

console.log(data);