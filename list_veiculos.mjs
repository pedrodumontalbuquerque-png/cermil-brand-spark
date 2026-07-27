import fs from 'fs';
const DATA_FILE = 'c:\\Users\\Gustavo\\stock control\\heicconversor\\dados api estoque.txt';
const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
const apiData = JSON.parse(rawData);
const veiculosApi = apiData[0]?.data?.data || [];
const nomes = veiculosApi.map(v => v.veiculoDescricao);
console.log("VEÍCULOS:\n" + nomes.join('\n'));
