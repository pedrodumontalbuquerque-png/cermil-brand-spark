import fs from 'fs';
const DATA_FILE = 'c:\\Users\\Gustavo\\stock control\\heicconversor\\dados api estoque.txt';
const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
const apiData = JSON.parse(rawData);
const veiculosApi = apiData[0]?.data?.data || [];
console.log("API_ROW:", JSON.stringify(veiculosApi[0], null, 2));
