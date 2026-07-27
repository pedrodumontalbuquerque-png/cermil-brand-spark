import fs from 'fs';

async function fetchAllVehicles() {
  const baseUrl = 'https://api.boomsistemas.com.br/v1/loja/49628083000157/veiculo/estoque/';
  const headers = {
    'Authorization': 'Bearer WTorgl6jp2WwuEpJrTctaSXmGIPPmZ3c',
    'X-Forwarded-Proto': 'https'
  };

  let allVehicles = [];
  let currentPage = 1;
  let lastPage = 1;

  try {
    do {
      console.log(`Buscando página ${currentPage}...`);
      const url = `${baseUrl}?page=${currentPage}`;
      
      const response = await fetch(url, { method: 'GET', headers });
      if (!response.ok) {
        console.error(`Erro na requisição da página ${currentPage}: ${response.status}`);
        break;
      }
      
      const responseData = await response.json();
      
      // Ajuste com base no formato que o usuário mandou
      if (responseData.data && responseData.data.meta) {
        lastPage = responseData.data.meta.lastPage;
        const pageVehicles = responseData.data.data || [];
        allVehicles = allVehicles.concat(pageVehicles);
      } else {
        // Fallback caso a estrutura seja diferente do print
        const pageVehicles = responseData.data || [];
        allVehicles = allVehicles.concat(pageVehicles);
        lastPage = currentPage; // Para evitar loop infinito se não achar meta
      }
      
      currentPage++;
    } while (currentPage <= lastPage);
    
    console.log(`\nSucesso! Total de veículos buscados em todas as páginas: ${allVehicles.length}`);
    
    // Pesquisa a fundo:
    const voltzVehicles = allVehicles.filter(v => 
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('voltz')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('votlz')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('ev01')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('ev1')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('ev 01')) ||
      (v.marca && v.marca.marca && v.marca.marca.toLowerCase().includes('voltz'))
    );
    
    if (voltzVehicles.length > 0) {
      console.log("\n=== 🎯 VEÍCULOS VOLTZ / EV01 ENCONTRADOS ===");
      voltzVehicles.forEach(v => {
        console.log(`- Modelo: ${v.veiculoDescricao} | Marca: ${v.marca?.marca || 'Sem Marca'} | Placa: ${v.veiculoPlaca} | Ano: ${v.veiculoAnoFab}/${v.veiculoAnoMod} | ID: ${v.veiculoId}`);
      });
    } else {
      console.log("\nNenhum veículo Voltz ou EV01 encontrado, mesmo buscando todas as páginas.");
    }
    
    // Mostra as novas marcas e modelos
    const brands = new Set();
    allVehicles.forEach(v => {
      if (v.marca && v.marca.marca) brands.add(v.marca.marca);
    });
    console.log("\nMarcas encontradas em todo o estoque:");
    console.log(Array.from(brands).sort().join(', '));
    
    const nomes = allVehicles.map(v => v.veiculoDescricao);
    fs.writeFileSync('todos_veiculos_api.json', JSON.stringify(allVehicles, null, 2));

  } catch (error) {
    console.error('Erro na requisição paginada:', error);
  }
}

fetchAllVehicles();
