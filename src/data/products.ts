import seixoBranco from "@/assets/ecom-seixo-branco.png";
import seixoRajado from "@/assets/ecom-seixo-rajado.png";
import seixoNatural from "@/assets/ecom-seixo-natural.png";
import ametistas from "@/assets/ecom-ametistas.png";
import bigRocks from "@/assets/ecom-big-rocks.png";
import outrasPedras1 from "@/assets/outras-pedras-1.png";
import outrasPedras3 from "@/assets/outras-pedras-3.png";
import gallery3 from "@/assets/gallery-3.jpg";

import seixoBrancoSack from "@/assets/seixo-branco-sack.jpg";
import seixoBrancoWood from "@/assets/seixo-branco-wood.jpg";
import seixoBrancoGarden from "@/assets/seixo-branco-garden.jpg";

import seixoRajadoSack from "@/assets/seixo-rajado-sack.jpg";
import seixoRajadoWood from "@/assets/seixo-rajado-wood.jpg";
import seixoRajadoGarden from "@/assets/seixo-rajado-garden.jpg";

import seixoNaturalSack from "@/assets/seixo-natural-saco.jpg";
import seixoNaturalWood from "@/assets/seixo-natural-madeira.jpg";
import seixoNaturalGarden from "@/assets/seixo-natural-quintal.jpg";

import ametista1 from "@/assets/ametista-1.jpg";
import ametista2 from "@/assets/ametista-2.jpg";

const granulometrias = ["Fino: ~5 mm", "M\u00e9dio: ~50 mm", "Grande: ~100 mm"];
const sizes = [{"name": "Fino: aproximadamente 5 mm", "desc": "Formato bem fino, pr\u00f3ximo a um gr\u00e3o de milho, ideal para pisos drenantes, \u00e1reas de circula\u00e7\u00e3o externa e aplica\u00e7\u00f5es em que a drenagem e o conforto ao pisar s\u00e3o fundamentais."}, {"name": "M\u00e9dio: faixa em torno de 50 mm", "desc": "Indicado para jardins, paisagismo geral, composi\u00e7\u00f5es decorativas em canteiros, bordas de caminhos e \u00e1reas de destaque."}, {"name": "Grande: faixa em torno de 100 mm", "desc": "Indicado para pontos focais de paisagismo, contornos de espelhos d'\u00e1gua, delimita\u00e7\u00e3o de \u00e1reas e composi\u00e7\u00f5es em que a pedra tenha presen\u00e7a visual mais marcante."}];

export type SizeDetail = {
  name: string;
  desc: string;
};

export type SEOData = {
  title: string;
  metaDescription: string;
  h1: string;
  subheadline: string;
  mainText: string[];
  h2Applications: string;
  applicationsIntro?: string;
  applications: string[];
  h2Characteristics: string;
  characteristicsIntro?: string;
  characteristics: string[];
  h2Supply: string;
  supplyText: string;
  closingText: string;
};

export type ProntaEntregaProduct = {
  id: string;
  name: string;
  img: string;
  type: "pronta-entrega";
  desc: string;
  granulometrias: string[];
  badge: string | null;
  gallery?: string[];
  sizes?: SizeDetail[];
  weightsText?: string;
  pricing?: Record<string, Record<string, string>>;
  seo?: SEOData;
};

export type SobConsultaProduct = {
  id: string;
  name: string;
  img: string;
  type: "sob-consulta";
  desc: string;
  badge: string | null;
  gallery?: string[];
  sizes?: SizeDetail[];
  weightsText?: string;
  seo?: SEOData;
};

export type Product = ProntaEntregaProduct | SobConsultaProduct;

export const prontaEntregaProducts: ProntaEntregaProduct[] = [
  {
    id: "seixo-branco-decorativo",
    name: "Seixo Branco",
    img: seixoBrancoWood,
    type: "pronta-entrega",
    desc: "Quartzo de alta alvura, indicado para composi\u00e7\u00f5es de maior contraste e projetos que valorizam ilumina\u00e7\u00e3o e limpeza visual.",
    granulometrias,
    badge: "Mais vendido",
    gallery: [seixoBrancoWood, seixoBrancoSack, seixoBrancoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" },
      "M\u00e9dio: ~50 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" },
      "Fino: ~5 mm": { "10 kg": "R$ 24", "25 kg": "R$ 56", "100 kg": "R$ 199", "500 kg": "R$ 910", "1.000 kg": "R$ 1.730" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padr\u00e3o para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
    seo: {"title": "Seixo Branco Decorativo para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo branco decorativo para jardins, vasos, canteiros e paisagismo. Material natural selecionado pela CERMIL Stone, com fornecimento para todo o Brasil.", "h1": "Seixo Branco Decorativo", "subheadline": "Pedra natural selecionada para projetos de paisagismo, decora\u00e7\u00e3o e \u00e1reas externas, com visual claro, acabamento limpo e composi\u00e7\u00e3o vers\u00e1til.", "mainText": ["O Seixo Branco Decorativo da CERMIL Stone \u00e9 uma pedra natural selecionada para projetos que pedem contraste, luminosidade e acabamento visual mais limpo. Muito utilizado em jardins, vasos, canteiros e composi\u00e7\u00f5es paisag\u00edsticas, esse material se destaca pela apar\u00eancia clara e pela facilidade de combina\u00e7\u00e3o com vegeta\u00e7\u00e3o, madeira, concreto, cer\u00e2mica e outros elementos naturais.", "Em projetos residenciais, comerciais e institucionais, o seixo branco para jardim funciona tanto como elemento de destaque quanto como base visual para composi\u00e7\u00f5es externas. Sua presen\u00e7a ajuda a valorizar o desenho do paisagismo, cria sensa\u00e7\u00e3o de organiza\u00e7\u00e3o e refor\u00e7a uma est\u00e9tica natural com toque contempor\u00e2neo. Por isso, \u00e9 uma escolha frequente para quem busca uma pedra decorativa vers\u00e1til, resistente e de forte apelo visual.", "Na CERMIL Stone, o seixo branco integra a linha decorativa de materiais naturais, desenvolvida para atender aplica\u00e7\u00f5es em paisagismo, decora\u00e7\u00e3o e arquitetura. Com fornecimento para diferentes volumes e atendimento para todo o Brasil, o material pode ser aplicado em propostas que v\u00e3o de pequenos detalhes ornamentais at\u00e9 composi\u00e7\u00f5es maiores em \u00e1reas externas."], "h2Applications": "Aplica\u00e7\u00f5es do Seixo Branco em jardins e paisagismo", "applicationsIntro": "O seixo branco decorativo \u00e9 indicado para diferentes usos em \u00e1reas externas e ambientes decorativos, especialmente quando o projeto busca leveza visual, contraste e acabamento natural.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "Caminhos decorativos", "Faixas de acabamento", "\u00c1reas externas residenciais e comerciais", "Composi\u00e7\u00f5es paisag\u00edsticas com destaque mineral"], "h2Characteristics": "Caracter\u00edsticas do Seixo Branco CERMIL Stone", "characteristicsIntro": "Selecionado para uso decorativo, o seixo branco apresenta boa presen\u00e7a visual e se adapta a diferentes linguagens de projeto, do paisagismo contempor\u00e2neo a composi\u00e7\u00f5es mais naturais.", "characteristics": ["Pedra natural selecionada", "Colora\u00e7\u00e3o clara e visual sofisticado", "Boa durabilidade para uso externo", "F\u00e1cil composi\u00e7\u00e3o com outros materiais", "Aplica\u00e7\u00e3o vers\u00e1til em paisagismo e decora\u00e7\u00e3o"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Branco faz parte da linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre disponibilidade, aplica\u00e7\u00f5es e fornecimento do seixo branco decorativo para seu projeto."}
  },
  {
    id: "seixo-rajado-decorativo",
    name: "Seixo Rajado",
    img: seixoRajadoWood,
    type: "pronta-entrega",
    desc: "Seixo com varia\u00e7\u00f5es naturais em tons terrosos e avermelhados, ideal para jardins r\u00fasticos e org\u00e2nicos.",
    granulometrias,
    badge: null,
    gallery: [seixoRajadoWood, seixoRajadoSack, seixoRajadoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "M\u00e9dio: ~50 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 167", "500 kg": "R$ 760", "1.000 kg": "R$ 1.450" },
      "Fino: ~5 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padr\u00e3o para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
    seo: {"title": "Seixo Rajado Decorativo para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo rajado decorativo para jardins, vasos e paisagismo. Pedra natural com visual marcante e fornecimento para todo o Brasil.", "h1": "Seixo Rajado Decorativo", "subheadline": "Pedra natural com varia\u00e7\u00e3o visual marcante, indicada para projetos de paisagismo e decora\u00e7\u00e3o que buscam contraste, textura e personalidade.", "mainText": ["O Seixo Rajado Decorativo da CERMIL Stone \u00e9 uma pedra natural selecionada para composi\u00e7\u00f5es que pedem mais identidade visual e presen\u00e7a est\u00e9tica. Seu aspecto rajado cria contraste, movimento e riqueza de textura, tornando o material uma escolha interessante para projetos que procuram fugir de solu\u00e7\u00f5es uniformes e trazer mais personalidade ao ambiente.", "Em jardins, canteiros, vasos e \u00e1reas externas, o seixo rajado para paisagismo funciona como um elemento de destaque capaz de enriquecer a composi\u00e7\u00e3o sem perder naturalidade. Sua leitura visual \u00e9 ao mesmo tempo org\u00e2nica e expressiva, o que favorece aplica\u00e7\u00f5es em projetos residenciais, comerciais e institucionais. \u00c9 um material que conversa bem com vegeta\u00e7\u00e3o, madeira, concreto e outros elementos minerais.", "Na linha decorativa da CERMIL Stone, o Seixo Rajado atende diferentes propostas de paisagismo, decora\u00e7\u00e3o e arquitetura, com fornecimento para projetos de diferentes portes. Seu uso valoriza \u00e1reas de destaque, composi\u00e7\u00f5es ornamentais e superf\u00edcies externas com mais contraste e profundidade visual."], "h2Applications": "Aplica\u00e7\u00f5es do Seixo Rajado em jardins e \u00e1reas externas", "applicationsIntro": "O seixo rajado decorativo \u00e9 indicado para composi\u00e7\u00f5es paisag\u00edsticas e ambientes externos que buscam mais textura, contraste e leitura natural do material.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "\u00c1reas de destaque no paisagismo", "Caminhos e faixas decorativas", "\u00c1reas externas residenciais e comerciais", "Composi\u00e7\u00f5es ornamentais com vegeta\u00e7\u00e3o"], "h2Characteristics": "Caracter\u00edsticas do Seixo Rajado CERMIL Stone", "characteristicsIntro": "Selecionado para uso decorativo, o material se destaca pela apar\u00eancia natural rajada e pela versatilidade em projetos com proposta mais marcante.", "characteristics": ["Pedra natural selecionada", "Visual rajado e diferenciado", "Boa presen\u00e7a est\u00e9tica em \u00e1reas externas", "F\u00e1cil composi\u00e7\u00e3o com outros elementos naturais", "Aplica\u00e7\u00e3o vers\u00e1til em paisagismo e decora\u00e7\u00e3o"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Rajado faz parte da linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre disponibilidade, aplica\u00e7\u00f5es e fornecimento do seixo rajado decorativo para seu projeto."}
  },
  {
    id: "seixo-natural-mix",
    name: "Seixo Mix Blend",
    img: seixoNaturalWood,
    type: "pronta-entrega",
    desc: "Blend natural das cores da jazida. Visual org\u00e2nico e aut\u00eantico, com varia\u00e7\u00e3o equilibrada de tons.",
    granulometrias,
    badge: null,
    gallery: [seixoNaturalWood, seixoNaturalSack, seixoNaturalGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 17", "25 kg": "R$ 39", "100 kg": "R$ 138", "500 kg": "R$ 630", "1.000 kg": "R$ 1.200" },
      "M\u00e9dio: ~50 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320" },
      "Fino: ~5 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padr\u00e3o para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg",
    seo: {"title": "Seixo Natural Mix para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo natural mix para jardins, vasos e paisagismo. Pedra decorativa natural com apar\u00eancia org\u00e2nica e fornecimento para todo o Brasil.", "h1": "Seixo Natural (Mix)", "subheadline": "Pedra natural decorativa com varia\u00e7\u00e3o de tons e apar\u00eancia org\u00e2nica, ideal para projetos que valorizam naturalidade, textura e integra\u00e7\u00e3o com o ambiente.", "mainText": ["O Seixo Natural (Mix) da CERMIL Stone \u00e9 um material natural selecionado para projetos que buscam autenticidade visual e composi\u00e7\u00e3o mais org\u00e2nica. Sua varia\u00e7\u00e3o de tons e formas contribui para ambientes com linguagem natural, criando superf\u00edcies mais leves, espont\u00e2neas e bem integradas \u00e0 vegeta\u00e7\u00e3o e aos demais elementos do paisagismo.", "Muito utilizado em jardins, canteiros, vasos e \u00e1reas externas, o seixo natural para paisagismo funciona como um acabamento vers\u00e1til para diferentes estilos de projeto. Ele pode ser empregado tanto em composi\u00e7\u00f5es mais r\u00fasticas quanto em propostas contempor\u00e2neas que valorizam materiais minerais e texturas naturais. Essa flexibilidade faz do produto uma escolha eficiente para aplica\u00e7\u00f5es decorativas com forte identidade visual.", "Na linha decorativa da CERMIL Stone, o Seixo Natural (Mix) atende demandas de paisagismo, decora\u00e7\u00e3o e arquitetura com fornecimento para diferentes escalas de projeto. Seu uso contribui para composi\u00e7\u00f5es naturais e bem resolvidas, tanto em pequenos detalhes quanto em \u00e1reas maiores de cobertura e acabamento."], "h2Applications": "Aplica\u00e7\u00f5es do Seixo Natural em paisagismo", "applicationsIntro": "O seixo natural mix \u00e9 indicado para usos decorativos em \u00e1reas externas e composi\u00e7\u00f5es paisag\u00edsticas que pedem textura, naturalidade e adapta\u00e7\u00e3o visual ao ambiente.", "applications": ["Jardins e canteiros", "Vasos decorativos", "Forra\u00e7\u00e3o de solo", "\u00c1reas externas residenciais e comerciais", "Composi\u00e7\u00f5es com vegeta\u00e7\u00e3o e madeira", "Projetos de paisagismo naturalista"], "h2Characteristics": "Caracter\u00edsticas do Seixo Natural (Mix)", "characteristicsIntro": "Seu aspecto org\u00e2nico e sua varia\u00e7\u00e3o natural tornam o material especialmente interessante para projetos que valorizam autenticidade e leitura mineral mais espont\u00e2nea.", "characteristics": ["Pedra natural decorativa", "Varia\u00e7\u00e3o natural de tons", "Visual org\u00e2nico e vers\u00e1til", "Boa adapta\u00e7\u00e3o a composi\u00e7\u00f5es externas", "Aplica\u00e7\u00e3o ampla em paisagismo e decora\u00e7\u00e3o"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Natural (Mix) integra a linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre aplica\u00e7\u00f5es, disponibilidade e fornecimento do seixo natural mix para seu projeto."}
  },
  {
    id: "pedra-dolomita-decorativa",
    name: "Pedra Dolomita",
    img: outrasPedras1,
    type: "pronta-entrega",
    desc: "Material natural de colora\u00e7\u00e3o clara, muito utilizado em projetos de paisagismo e decora\u00e7\u00e3o.",
    granulometrias,
    badge: null,
    gallery: [outrasPedras1],
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com quantidades variadas para atender a sua necessidade.",
    seo: {"title": "Pedra Dolomita Decorativa para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Pedra dolomita decorativa para jardins, vasos e paisagismo. Material natural de colora\u00e7\u00e3o clara com fornecimento para todo o Brasil.", "h1": "Pedra Dolomita Decorativa", "subheadline": "Material natural de colora\u00e7\u00e3o clara, muito utilizado em projetos de paisagismo e decora\u00e7\u00e3o por sua est\u00e9tica limpa, versatilidade e boa composi\u00e7\u00e3o visual.", "mainText": ["A Pedra Dolomita Decorativa da CERMIL Stone \u00e9 uma solu\u00e7\u00e3o natural indicada para projetos que buscam leveza visual, clareza est\u00e9tica e acabamento organizado. Seu visual limpo favorece composi\u00e7\u00f5es paisag\u00edsticas elegantes e atemporais, sendo muito utilizado em jardins, vasos, canteiros e diferentes propostas de decora\u00e7\u00e3o para \u00e1reas externas.", "A dolomita para jardim se destaca pela facilidade de composi\u00e7\u00e3o com vegeta\u00e7\u00e3o, madeira, concreto, cer\u00e2mica e outros materiais naturais. Em projetos residenciais, comerciais e institucionais, ela pode ser utilizada tanto como acabamento principal quanto como detalhe de contraste, contribuindo para uma leitura visual mais clara e bem definida do espa\u00e7o.", "Na linha decorativa da CERMIL Stone, a Pedra Dolomita atende aplica\u00e7\u00f5es em paisagismo, decora\u00e7\u00e3o e arquitetura com fornecimento para diferentes volumes e demandas. Seu uso valoriza desde pequenos elementos ornamentais at\u00e9 \u00e1reas mais amplas de cobertura e acabamento externo."], "h2Applications": "Aplica\u00e7\u00f5es da Pedra Dolomita em paisagismo", "applicationsIntro": "A pedra dolomita decorativa \u00e9 indicada para usos externos e composi\u00e7\u00f5es paisag\u00edsticas que pedem visual claro, acabamento natural e versatilidade de aplica\u00e7\u00e3o.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "Faixas decorativas", "\u00c1reas externas residenciais e comerciais", "Composi\u00e7\u00f5es paisag\u00edsticas com vegeta\u00e7\u00e3o", "Acabamentos decorativos em ambientes externos"], "h2Characteristics": "Caracter\u00edsticas da Pedra Dolomita CERMIL Stone", "characteristicsIntro": "Com colora\u00e7\u00e3o clara e boa presen\u00e7a visual, a dolomita decorativa \u00e9 um material bastante utilizado em projetos que valorizam organiza\u00e7\u00e3o, leveza e perman\u00eancia est\u00e9tica.", "characteristics": ["Material natural decorativo", "Colora\u00e7\u00e3o clara e acabamento limpo", "Boa adapta\u00e7\u00e3o a projetos externos", "F\u00e1cil composi\u00e7\u00e3o com outros materiais", "Aplica\u00e7\u00e3o ampla em paisagismo e decora\u00e7\u00e3o"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Pedra Dolomita integra a linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre disponibilidade, aplica\u00e7\u00f5es e fornecimento da pedra dolomita decorativa para seu projeto."}
  }
];

export const sobConsultaProducts: SobConsultaProduct[] = [
  {
    id: "ametista-ornamental",
    name: "Ametista Ornamental",
    img: ametistas,
    type: "sob-consulta",
    desc: "Pedra natural de presen\u00e7a marcante e alto valor est\u00e9tico, indicada para composi\u00e7\u00f5es ornamentais e projetos especiais.",
    badge: "Exclusivo",
    gallery: [ametistas, ametista1, ametista2],
    seo: {"title": "Ametista Ornamental para Decora\u00e7\u00e3o e Projetos Especiais | CERMIL Stone", "metaDescription": "Ametista ornamental para decora\u00e7\u00e3o, arquitetura e projetos especiais. Pedra natural de forte apelo visual com fornecimento para todo o Brasil.", "h1": "Ametista Ornamental", "subheadline": "Pedra natural de presen\u00e7a marcante e alto valor est\u00e9tico, indicada para composi\u00e7\u00f5es ornamentais, decora\u00e7\u00e3o e projetos especiais com forte identidade visual.", "mainText": ["A Ametista Ornamental da CERMIL Stone \u00e9 um material natural selecionado para projetos que buscam exclusividade, presen\u00e7a visual e valor decorativo. Reconhecida por sua identidade mineral marcante, a ametista se destaca como uma pedra ornamental capaz de transformar composi\u00e7\u00f5es e refor\u00e7ar a singularidade est\u00e9tica dos ambientes.", "Em decora\u00e7\u00e3o, arquitetura e projetos especiais, a ametista pode ser utilizada como elemento de destaque, agregando profundidade visual, sofistica\u00e7\u00e3o natural e personalidade ao espa\u00e7o. Seu uso atende propostas que valorizam materiais aut\u00eanticos e composi\u00e7\u00f5es de forte apelo est\u00e9tico, tanto em ambientes internos quanto em contextos ornamentais espec\u00edficos.", "Na linha ornamental da CERMIL Stone, a Ametista atende demandas decorativas e compositivas com fornecimento conforme a natureza de cada projeto. \u00c9 uma pedra voltada para aplica\u00e7\u00f5es em que o valor visual do material \u00e9 parte central da proposta."], "h2Applications": "Aplica\u00e7\u00f5es da Ametista Ornamental", "applicationsIntro": "A ametista ornamental \u00e9 indicada para composi\u00e7\u00f5es decorativas e projetos especiais em que a pedra natural assume protagonismo visual e valor est\u00e9tico.", "applications": ["Ambientes decorativos", "Projetos especiais", "Composi\u00e7\u00f5es ornamentais", "Espa\u00e7os internos de destaque", "Elementos naturais de forte apelo visual", "Propostas com identidade est\u00e9tica marcante"], "h2Characteristics": "Caracter\u00edsticas da Ametista CERMIL Stone", "characteristicsIntro": "Selecionada para usos ornamentais, a ametista re\u00fane autenticidade, presen\u00e7a visual e apelo est\u00e9tico elevado.", "characteristics": ["Pedra natural ornamental", "Forte identidade mineral", "Alto valor est\u00e9tico", "Presen\u00e7a visual marcante", "Aplica\u00e7\u00e3o em decora\u00e7\u00e3o e projetos especiais"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Ametista integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre aplica\u00e7\u00f5es, disponibilidade e fornecimento de ametista ornamental para seu projeto."}
  },
  {
    id: "quartzo-leitoso-ornamental",
    name: "Quartzo Leitoso Ornamental",
    img: bigRocks,
    type: "sob-consulta",
    desc: "Quartzo natural de apar\u00eancia clara e presen\u00e7a mineral marcante, indicado para composi\u00e7\u00f5es ornamentais e decora\u00e7\u00e3o.",
    badge: null,
    gallery: [bigRocks],
    seo: {"title": "Quartzo Leitoso Ornamental para Decora\u00e7\u00e3o e Arquitetura | CERMIL Stone", "metaDescription": "Quartzo leitoso ornamental para decora\u00e7\u00e3o, arquitetura e composi\u00e7\u00f5es naturais. Material selecionado pela CERMIL Stone com fornecimento para todo o Brasil.", "h1": "Quartzo Leitoso Ornamental", "subheadline": "Quartzo natural de apar\u00eancia clara e presen\u00e7a mineral marcante, indicado para composi\u00e7\u00f5es ornamentais, decora\u00e7\u00e3o e projetos que valorizam autenticidade natural.", "mainText": ["O Quartzo Leitoso Ornamental da CERMIL Stone \u00e9 um material natural selecionado para projetos que valorizam presen\u00e7a mineral, autenticidade e sofistica\u00e7\u00e3o natural. Sua apar\u00eancia clara e sua textura caracter\u00edstica tornam o quartzo leitoso uma escolha diferenciada para composi\u00e7\u00f5es decorativas em ambientes internos e externos.", "Em projetos de arquitetura, decora\u00e7\u00e3o e composi\u00e7\u00e3o ornamental, o quartzo leitoso funciona como um elemento de destaque capaz de transmitir solidez, naturalidade e valor est\u00e9tico. Sua leitura visual se encaixa bem tanto em propostas mais contempor\u00e2neas quanto em composi\u00e7\u00f5es com linguagem mais org\u00e2nica, sempre refor\u00e7ando a identidade mineral do ambiente.", "Na linha ornamental da CERMIL Stone, o Quartzo Leitoso atende aplica\u00e7\u00f5es em decora\u00e7\u00e3o, arquitetura e projetos especiais, com fornecimento conforme o perfil e a escala de cada demanda. \u00c9 um material indicado para quem busca um produto natural com forte presen\u00e7a visual e valor ornamental."], "h2Applications": "Aplica\u00e7\u00f5es do Quartzo Leitoso Ornamental", "applicationsIntro": "O quartzo leitoso pode ser utilizado em diferentes propostas decorativas e ornamentais, especialmente em projetos que pedem destaque visual e acabamento natural.", "applications": ["Ambientes decorativos", "Projetos de arquitetura", "Composi\u00e7\u00f5es ornamentais", "\u00c1reas internas e externas", "Espa\u00e7os de destaque mineral", "Projetos especiais com pedra natural"], "h2Characteristics": "Caracter\u00edsticas do Quartzo Leitoso CERMIL Stone", "characteristicsIntro": "Selecionado para aplica\u00e7\u00f5es ornamentais, o quartzo leitoso re\u00fane presen\u00e7a visual, autenticidade e versatilidade de composi\u00e7\u00e3o.", "characteristics": ["Quartzo natural ornamental", "Apar\u00eancia clara e marcante", "Est\u00e9tica mineral sofisticada", "Boa presen\u00e7a em ambientes internos e externos", "Aplica\u00e7\u00e3o vers\u00e1til em decora\u00e7\u00e3o e arquitetura"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Leitoso integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre aplica\u00e7\u00f5es, disponibilidade e fornecimento do quartzo leitoso ornamental para seu projeto."}
  },
  {
    id: "quartzo-rose-ornamental",
    name: "Quartzo Rose Ornamental",
    img: outrasPedras3,
    type: "sob-consulta",
    desc: "Quartzo natural de tonalidade suave e valor est\u00e9tico marcante, indicado para projetos que buscam delicadeza.",
    badge: null,
    gallery: [outrasPedras3],
    seo: {"title": "Quartzo Rose Ornamental para Decora\u00e7\u00e3o e Projetos Especiais | CERMIL Stone", "metaDescription": "Quartzo rose ornamental para decora\u00e7\u00e3o e projetos especiais. Material natural de tonalidade suave com fornecimento para todo o Brasil.", "h1": "Quartzo Rose Ornamental", "subheadline": "Quartzo natural de tonalidade suave e valor est\u00e9tico marcante, indicado para composi\u00e7\u00f5es ornamentais e projetos que buscam delicadeza, originalidade e presen\u00e7a mineral.", "mainText": ["O Quartzo Rose Ornamental da CERMIL Stone \u00e9 um material natural selecionado para composi\u00e7\u00f5es que valorizam suavidade visual, originalidade e apelo decorativo. Sua tonalidade caracter\u00edstica confere ao ambiente uma presen\u00e7a mineral diferenciada, tornando o produto uma escolha interessante para projetos que buscam um elemento natural com identidade pr\u00f3pria.", "Em aplica\u00e7\u00f5es decorativas e ornamentais, o quartzo rose se destaca pela capacidade de enriquecer ambientes com uma leitura est\u00e9tica delicada, mas ao mesmo tempo marcante. Ele pode ser inserido em projetos de interiores, \u00e1reas de destaque e composi\u00e7\u00f5es especiais, contribuindo para espa\u00e7os com mais personalidade e sofistica\u00e7\u00e3o natural.", "Na linha ornamental da CERMIL Stone, o Quartzo Rose atende projetos decorativos, arquitet\u00f4nicos e composi\u00e7\u00f5es especiais com fornecimento conforme o perfil de cada demanda. \u00c9 um material pensado para usos em que a pedra natural tamb\u00e9m cumpre fun\u00e7\u00e3o est\u00e9tica e simb\u00f3lica dentro do ambiente."], "h2Applications": "Aplica\u00e7\u00f5es do Quartzo Rose Ornamental", "applicationsIntro": "O quartzo rose \u00e9 indicado para propostas ornamentais e decorativas em que a pedra natural assume papel de destaque visual e composi\u00e7\u00e3o est\u00e9tica.", "applications": ["Decora\u00e7\u00e3o de interiores", "Ambientes de destaque", "Projetos especiais", "Composi\u00e7\u00f5es ornamentais", "Espa\u00e7os com proposta est\u00e9tica natural", "Aplica\u00e7\u00f5es decorativas com identidade visual"], "h2Characteristics": "Caracter\u00edsticas do Quartzo Rose CERMIL Stone", "characteristicsIntro": "Sua colora\u00e7\u00e3o caracter\u00edstica e sua presen\u00e7a visual tornam o material uma escolha diferenciada para projetos de valor ornamental.", "characteristics": ["Quartzo natural ornamental", "Tonalidade suave e distinta", "Boa presen\u00e7a est\u00e9tica", "Material para composi\u00e7\u00f5es especiais", "Aplica\u00e7\u00e3o em decora\u00e7\u00e3o e arquitetura"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Rose integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre aplica\u00e7\u00f5es, disponibilidade e fornecimento do quartzo rose ornamental para seu projeto."}
  },
  {
    id: "quartzo-industrial",
    name: "Quartzo Industrial",
    img: outrasPedras1,
    type: "sob-consulta",
    desc: "Quartzo industrial para aplica\u00e7\u00f5es t\u00e9cnicas e fornecimento em escala, alinhado a demandas t\u00e9cnicas.",
    badge: null,
    gallery: [outrasPedras1],
    seo: {"title": "Quartzo Industrial para Fornecimento em Escala | CERMIL Stone", "metaDescription": "Quartzo industrial para aplica\u00e7\u00f5es t\u00e9cnicas e fornecimento em escala. Produ\u00e7\u00e3o CERMIL com atendimento para demandas industriais em todo o Brasil.", "h1": "Quartzo Industrial", "subheadline": "Material natural voltado a aplica\u00e7\u00f5es industriais, com foco em fornecimento em escala, regularidade de entrega e adequa\u00e7\u00e3o \u00e0 demanda t\u00e9cnica de cada projeto.", "mainText": ["O Quartzo Industrial da CERMIL Stone \u00e9 destinado a aplica\u00e7\u00f5es t\u00e9cnicas que exigem regularidade de fornecimento, escala produtiva e alinhamento com diferentes perfis de demanda. Integrado \u00e0 base operacional da CERMIL, o material atende projetos industriais que buscam seguran\u00e7a de abastecimento, consist\u00eancia e capacidade de atendimento em volume.", "Seu uso est\u00e1 associado a aplica\u00e7\u00f5es industriais diversas, em contextos nos quais o quartzo exerce fun\u00e7\u00e3o t\u00e9cnica dentro do processo produtivo. A estrutura de fornecimento da CERMIL permite atender demandas com foco em continuidade, previsibilidade e adapta\u00e7\u00e3o conforme a necessidade do cliente e do segmento atendido.", "Na linha industrial da CERMIL Stone, o Quartzo Industrial refor\u00e7a a conex\u00e3o entre origem mineral, capacidade operacional e fornecimento em escala. \u00c9 um material voltado para opera\u00e7\u00f5es que exigem disponibilidade, suporte comercial e atendimento alinhado a demandas t\u00e9cnicas."], "h2Applications": "Aplica\u00e7\u00f5es do Quartzo Industrial", "applicationsIntro": "O quartzo industrial \u00e9 indicado para aplica\u00e7\u00f5es t\u00e9cnicas e fornecimento em escala, conforme a necessidade operacional de cada segmento.", "applications": ["Processos industriais diversos", "Demandas t\u00e9cnicas em escala", "Fornecimento para opera\u00e7\u00f5es produtivas", "Aplica\u00e7\u00f5es com necessidade de regularidade de abastecimento", "Projetos com atendimento industrial dedicado", "Demandas conforme especifica\u00e7\u00e3o comercial e operacional"], "h2Characteristics": "Caracter\u00edsticas do Quartzo Industrial CERMIL Stone", "characteristicsIntro": "Com foco em fornecimento industrial, o material se destaca pela integra\u00e7\u00e3o com a opera\u00e7\u00e3o produtiva da CERMIL e pela capacidade de atendimento conforme demanda.", "characteristics": ["Quartzo natural para uso industrial", "Fornecimento em escala", "Atendimento conforme demanda", "Base produtiva integrada \u00e0 opera\u00e7\u00e3o CERMIL", "Aplica\u00e7\u00e3o t\u00e9cnica em diferentes segmentos"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Industrial integra a linha industrial da CERMIL Stone. O fornecimento pode variar conforme especifica\u00e7\u00e3o, volume e perfil da demanda.", "closingText": "Consulte a equipe CERMIL Stone para informa\u00e7\u00f5es sobre fornecimento, disponibilidade e atendimento do quartzo industrial para sua opera\u00e7\u00e3o."}
  },
  {
    id: "big-rocks",
    name: "Quartzo Big Rocks",
    img: bigRocks,
    type: "sob-consulta",
    desc: "Pe\u00e7as diferenciadas de quartzo em tamanhos grandes. Forma natural ou polida/trabalhada sob especifica\u00e7\u00e3o do cliente.",
    badge: null,
  },
  {
    id: "outras-pedras",
    name: "Outras Pedras Naturais",
    img: outrasPedras1,
    type: "sob-consulta",
    desc: "Pedras com potencial decorativo singular. Ajustes t\u00e9cnicos para uso seguro: remo\u00e7\u00e3o de pontas e planeamento da base.",
    badge: null,
    gallery: [outrasPedras1, outrasPedras3],
  }
];

export const allProducts: Product[] = [...prontaEntregaProducts, ...sobConsultaProducts];
