import fs from 'fs';

async function fetchVehicles() {
  const url = 'https://api.boomsistemas.com.br/v1/loja/49628083000157/veiculo/estoque/';
  const headers = {
    'Authorization': 'Bearer WTorgl6jp2WwuEpJrTctaSXmGIPPmZ3c',
    'X-Forwarded-Proto': 'https'
  };

  try {
    const response = await fetch(url, { method: 'GET', headers });
    if (!response.ok) {
      console.error(`Erro na requisição: ${response.status} - ${response.statusText}`);
      return;
    }
    
    const data = await response.json();
    fs.writeFileSync('nova_api_resposta.json', JSON.stringify(data, null, 2));
    console.log('Salvo em nova_api_resposta.json');
    
    // tentar achar a lista de veículos:
    let veiculos = [];
    if (Array.isArray(data)) {
      veiculos = data;
    } else if (data.data && Array.isArray(data.data)) {
      veiculos = data.data;
    } else if (data.data && data.data.data && Array.isArray(data.data.data)) {
      veiculos = data.data.data;
    } else if (data[0] && data[0].data && data[0].data.data) {
      veiculos = data[0].data.data;
    }

    console.log(`Encontrados ${veiculos.length} veículos na API.`);
    
    const voltzVehicles = veiculos.filter(v => 
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('voltz')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('votlz')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('ev01')) ||
      (v.veiculoDescricao && v.veiculoDescricao.toLowerCase().includes('ev1')) ||
      (v.marca && v.marca.marca && v.marca.marca.toLowerCase().includes('voltz'))
    );
    
    if (voltzVehicles.length > 0) {
      console.log("\n=== VEÍCULOS VOLTZ / EV01 ENCONTRADOS ===");
      voltzVehicles.forEach(v => {
        console.log(`- Modelo: ${v.veiculoDescricao} | Marca: ${v.marca?.marca} | Placa: ${v.veiculoPlaca}`);
      });
    } else {
      console.log("\nNenhum veículo Voltz ou EV01 encontrado.");
    }
    
    const nomes = veiculos.map(v => v.veiculoDescricao);
    console.log("\nLista completa:");
    console.log(nomes.join('\n'));

  } catch (error) {
    console.error('Erro:', error);
  }
}

fetchVehicles();
