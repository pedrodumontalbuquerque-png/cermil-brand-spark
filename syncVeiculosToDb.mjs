import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://owqmuxisxjugakqccsuw.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im93cW11eGlzeGp1Z2FrcWNjc3V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDQ5MDcsImV4cCI6MjA4ODkyMDkwN30.NH3ixQyckcGjHf2kCjkZYe8x70onS-TxTxslGUatNAU';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const formatCurrency = (value) => {
  if (!value) return null;
  const val = parseFloat(value);
  if (isNaN(val)) return value;
  // Intl.NumberFormat adds a non-breaking space (char 160) between R$ and the number. 
  // We can just format manually to match the DB exactly se quisermos: "R$ 35.990,00"
  let str = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val);
  return `R$ ${str}`;
};

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

async function syncVeiculos() {
  const baseUrl = 'https://api.boomsistemas.com.br/v1/loja/49628083000157/veiculo/estoque/';
  const headers = {
    'Authorization': 'Bearer WTorgl6jp2WwuEpJrTctaSXmGIPPmZ3c',
    'X-Forwarded-Proto': 'https'
  };

  let veiculosApi = [];
  let currentPage = 1;
  let lastPage = 1;

  console.log("🚀 Iniciando extração dos dados da API paginada...");

  // Busca todos os veículos iterando pelas páginas da API
  try {
    do {
      console.log(`Buscando página ${currentPage}...`);
      const response = await fetch(`${baseUrl}?page=${currentPage}`, { method: 'GET', headers });
      
      if (!response.ok) {
        console.error(`Erro na requisição da página ${currentPage}: ${response.status}`);
        break;
      }
      
      const responseData = await response.json();
      
      if (responseData.data && responseData.data.meta) {
        lastPage = responseData.data.meta.lastPage;
        const pageVehicles = responseData.data.data || [];
        veiculosApi = veiculosApi.concat(pageVehicles);
      } else {
        const pageVehicles = responseData.data || [];
        veiculosApi = veiculosApi.concat(pageVehicles);
        lastPage = currentPage; 
      }
      
      currentPage++;
    } while (currentPage <= lastPage);
  } catch (err) {
    console.error("❌ Erro ao buscar os dados da API:", err);
    return;
  }

  console.log(`\n✅ Extração concluída. Total de veículos na API: ${veiculosApi.length}`);
  
  // Buscar os veículos já existentes no banco (Supabase)
  const { data: veiculosDb, error } = await supabase.from('estoque').select('id, Placa');
  if (error) {
    console.error("❌ Erro ao buscar no banco do Supabase:", error.message);
    return;
  }
  
  const placasNoDb = veiculosDb.map(v => v.Placa);
  const placaToId = {};
  veiculosDb.forEach(v => {
    placaToId[v.Placa] = v.id;
  });

  let inseridos = 0;
  let atualizados = 0;
  let erros = 0;

  console.log(`Encontrados ${veiculosDb.length} veículos no Banco Supabase.`);
  console.log(`\n⏳ Sincronizando veículos com o Supabase...`);

  for (const v of veiculosApi) {
    if (!v.veiculoPlaca) {
      console.log(`⚠️ Veículo "${v.veiculoDescricao}" ignorado pois não possui Placa.`);
      continue;
    }
    
    const record = {
      "Veículo": v.veiculoDescricao,
      "Marca": v.marca?.marca || "",
      "Ano": `${v.veiculoAnoFab || ''}/${v.veiculoAnoMod || ''}`,
      "Placa": v.veiculoPlaca,
      "Cor": v.veiculoCor || "",
      "Combustível": capitalize(v.veiculoCombustivel),
      "Km": v.veiculoKm ? v.veiculoKm.toString() : "",
      "Valor Venda": formatCurrency(v.veiculoValorVenda)
    };
    
    if (placasNoDb.includes(v.veiculoPlaca)) {
      // Atualizar
      const id = placaToId[v.veiculoPlaca];
      const { error: updError } = await supabase
        .from('estoque')
        .update(record)
        .eq('id', id);
        
      if (updError) {
        console.error(`❌ Erro ao atualizar ${v.veiculoPlaca}:`, updError.message);
        erros++;
      } else {
        atualizados++;
      }
    } else {
      // Inserir
      const { error: insError } = await supabase
        .from('estoque')
        .insert([record]);
        
      if (insError) {
        console.error(`❌ Erro ao inserir ${v.veiculoPlaca}:`, insError.message);
        erros++;
      } else {
        console.log(`➕ Inserido no banco: ${v.veiculoPlaca} (${v.veiculoDescricao})`);
        inseridos++;
      }
    }
  }
  
  console.log(`\n🎉 Sincronização concluída!`);
  console.log(`- Novos Inseridos: ${inseridos}`);
  console.log(`- Atualizados: ${atualizados}`);
  console.log(`- Erros: ${erros}`);
}

syncVeiculos();
