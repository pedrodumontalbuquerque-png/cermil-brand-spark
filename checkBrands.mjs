import fs from 'fs';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owqmuxisxjugakqccsuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const DATA_FILE = 'c:\\Users\\Gustavo\\stock control\\heicconversor\\dados api estoque.txt';

async function listBrands() {
  const rawData = fs.readFileSync(DATA_FILE, 'utf-8');
  const apiData = JSON.parse(rawData);
  const veiculosApi = apiData[0]?.data?.data || [];
  
  const brands = new Set();
  const models = new Set();
  
  veiculosApi.forEach(v => {
    if (v.marca && v.marca.marca) brands.add(v.marca.marca);
    if (v.veiculoDescricao) models.add(v.veiculoDescricao);
  });
  
  console.log("=== MARCAS NA API ===");
  console.log(Array.from(brands).sort().join(', '));
  
  console.log("\n=== BUSCA AVANÇADA (EV / VOLTZ / VOTLZ) NAS DESCRIÇÕES ===");
  const suspected = Array.from(models).filter(m => 
    m.toLowerCase().includes('voltz') || 
    m.toLowerCase().includes('votlz') || 
    m.toLowerCase().includes('evs') || 
    m.toLowerCase().includes('ev1')
  );
  if (suspected.length > 0) {
    console.log("Encontrados:", suspected);
  } else {
    console.log("Nenhum modelo suspeito de ser Voltz encontrado na API.");
  }
  
  const { data: dbData } = await supabase.from('estoque').select('Marca, Veículo');
  const dbBrands = new Set();
  dbData?.forEach(v => dbBrands.add(v.Marca));
  
  console.log("\n=== MARCAS NO SUPABASE ===");
  console.log(Array.from(dbBrands).sort().join(', '));
}

listBrands();
