import seixoBranco from "@/assets/ecom-seixo-branco.png";
import seixoRajado from "@/assets/ecom-seixo-rajado.png";
import seixoNatural from "@/assets/ecom-seixo-natural.png";
import ametistas from "@/assets/ecom-ametistas.png";
import bigRocks from "@/assets/ecom-big-rocks.png";
import outrasPedras1 from "@/assets/outras-pedras-1.png";
import outrasPedras3 from "@/assets/outras-pedras-3.png";
import gallery3 from "@/assets/gallery-3.jpg";

import seixoBrancoCover from "@/assets/seixo-branco-cover.webp";
import seixoBrancoJpeg from "@/assets/seixo-branco-foto.jpeg";

import seixoRajadoCover from "@/assets/seixo-rajado-cover.webp";
import seixoRajadoJpeg from "@/assets/seixo-rajado-foto.jpeg";

import seixoBrancoGarden from "@/assets/seixo-branco-garden.jpg";

import seixoRajadoGarden from "@/assets/seixo-rajado-garden.jpg";

import seixoNaturalSack from "@/assets/seixo-natural-saco.jpg";
import seixoNaturalWood from "@/assets/seixo-natural-madeira.jpg";

import ametista1 from "@/assets/ametista-1.jpg";
import ametista2 from "@/assets/ametista-2.jpg";
import quartzoIndustrial1 from "@/assets/quartzo-industrial-novo-1.png";
import quartzoIndustrial2 from "@/assets/quartzo-industrial-novo-2.jpg";

import construcaoCivilPlaceholder from "@/assets/operation.jpg";

const granulometrias = ["Fino: ~5 mm", "Médio: ~50 mm", "Grande: ~100 mm"];
const sizes = [{"name": "Fino: aproximadamente 5 mm", "desc": "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais."}, {"name": "Médio: faixa em torno de 50 mm", "desc": "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque."}, {"name": "Grande: faixa em torno de 100 mm", "desc": "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante."}];

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

export type LineType = "decorativa" | "ornamental" | "industrial" | "construcao-civil";

export type Product = {
  id: string;
  name: string;
  img: string;
  line: LineType;
  desc: string;
  granulometrias?: string[];
  badge: string | null;
  gallery?: string[];
  sizes?: SizeDetail[];
  weightsText?: string;
  pricing?: Record<string, Record<string, string>>;
  seo?: SEOData;
};

export const decorativaProducts: Product[] = [
  {
    id: "seixo-branco-decorativo",
    name: "Seixo Branco",
    img: seixoBrancoJpeg,
    line: "decorativa",
    desc: "Quartzo de alta alvura, indicado para composições de maior contraste e projetos que valorizam iluminação e limpeza visual.",
    granulometrias,
    badge: "Mais vendido",
    gallery: [seixoBrancoJpeg, seixoBrancoCover, seixoBrancoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440", "A Granel": "Sob consulta" },
      "Médio: ~50 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580", "A Granel": "Sob consulta" },
      "Fino: ~5 mm": { "10 kg": "R$ 24", "25 kg": "R$ 56", "100 kg": "R$ 199", "500 kg": "R$ 910", "1.000 kg": "R$ 1.730", "A Granel": "Sob consulta" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg\n\nALÉM DE FORNECIMENTO A GRANEL (SEM EMBALAGEM) para revenda e distribuição em larga escala.",
    seo: {"title": "Seixo Branco Decorativo para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo branco decorativo para jardins, vasos, canteiros e paisagismo. Material natural selecionado pela CERMIL Stone, com fornecimento para todo o Brasil.", "h1": "Seixo Branco", "subheadline": "Pedra natural selecionada para projetos de paisagismo, decoração e áreas externas, com visual claro, acabamento limpo e composição versátil.", "mainText": ["O Seixo Branco Decorativo da CERMIL Stone é uma pedra natural selecionada para projetos que pedem contraste, luminosidade e acabamento visual mais limpo. Muito utilizado em jardins, vasos, canteiros e composições paisagísticas, esse material se destaca pela aparência clara e pela facilidade de combinação com vegetação, madeira, concreto, cerâmica e outros elementos naturais.", "Em projetos residenciais, comerciais e institucionais, o seixo branco para jardim funciona tanto como elemento de destaque quanto como base visual para composições externas. Sua presença ajuda a valorizar o desenho do paisagismo, cria sensação de organização e reforça uma estética natural com toque contemporâneo. Por isso, é uma escolha frequente para quem busca uma pedra decorativa versátil, resistente e de forte apelo visual.", "Na CERMIL Stone, o seixo branco integra a linha decorativa de materiais naturais, desenvolvida para atender aplicações em paisagismo, decoração e arquitetura. Com fornecimento para diferentes volumes e atendimento para todo o Brasil, o material pode ser aplicado em propostas que vão de pequenos detalhes ornamentais até composições maiores em áreas externas."], "h2Applications": "Aplicações do Seixo Branco em jardins e paisagismo", "applicationsIntro": "O seixo branco decorativo é indicado para diferentes usos em áreas externas e composições decorativas, especialmente quando o projeto busca leveza visual, contraste e acabamento natural.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "Caminhos decorativos", "Faixas de acabamento", "Áreas externas residenciais e comerciais", "Composições paisagísticas com destaque mineral"], "h2Characteristics": "Características do Seixo Branco CERMIL Stone", "characteristicsIntro": "Selecionado para uso decorativo, o seixo branco apresenta boa presença visual e se adapta a diferentes linguagens de projeto, do paisagismo contemporâneo a composições mais naturais.", "characteristics": ["Pedra natural selecionada", "Coloração clara e visual sofisticado", "Boa durabilidade para uso externo", "Fácil composição com outros materiais", "Aplicação versátil em paisagismo e decoração"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Branco faz parte da linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, aplicações e fornecimento do seixo branco decorativo para seu projeto."}
  },
  {
    id: "seixo-rajado-decorativo",
    name: "Seixo Rajado",
    img: seixoRajadoJpeg,
    line: "decorativa",
    desc: "Seixo com variações naturais em tons terrosos e avermelhados, ideal para jardins rústicos e orgânicos.",
    granulometrias,
    badge: null,
    gallery: [seixoRajadoJpeg, seixoRajadoCover, seixoRajadoGarden],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320", "A Granel": "Sob consulta" },
      "Médio: ~50 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 167", "500 kg": "R$ 760", "1.000 kg": "R$ 1.450", "A Granel": "Sob consulta" },
      "Fino: ~5 mm": { "10 kg": "R$ 22", "25 kg": "R$ 51", "100 kg": "R$ 182", "500 kg": "R$ 830", "1.000 kg": "R$ 1.580", "A Granel": "Sob consulta" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg\n\nALÉM DE FORNECIMENTO A GRANEL (SEM EMBALAGEM) para revenda e distribuição em larga escala.",
    seo: {"title": "Seixo Rajado Decorativo para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo rajado decorativo para jardins, vasos e paisagismo. Pedra natural com visual marcante e fornecimento para todo o Brasil.", "h1": "Seixo Rajado", "subheadline": "Pedra natural com variação visual marcante, indicada para projetos de paisagismo e decoração que buscam contraste, textura e personalidade.", "mainText": ["O Seixo Rajado Decorativo da CERMIL Stone é uma pedra natural selecionada para composições que pedem mais identidade visual e presença estética. Seu aspecto rajado cria contraste, movimento e riqueza de textura, tornando o material uma escolha interessante para projetos que procuram fugir de soluções uniformes e trazer mais personalidade ao ambiente.", "Em jardins, canteiros, vasos e áreas externas, o seixo rajado para paisagismo funciona como um elemento de destaque capaz de enriquecer a composição sem perder naturalidade. Sua leitura visual é ao mesmo tempo orgânica e expressiva, o que favorece aplicações em projetos residenciais, comerciais e institucionais. É um material que conversa bem com vegetação, madeira, concreto e outros elementos minerais.", "Na linha decorativa da CERMIL Stone, o Seixo Rajado atende diferentes propostas de paisagismo, decoração e arquitetura, com fornecimento para projetos de diferentes portes. Seu uso valoriza áreas de destaque, composições ornamentais e superfícies externas com mais contraste e profundidade visual."], "h2Applications": "Aplicações do Seixo Rajado em jardins e áreas externas", "applicationsIntro": "O seixo rajado decorativo é indicado para composições paisagísticas e ambientes externos que buscam mais textura, contraste e leitura natural do material.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "Áreas de destaque no paisagismo", "Caminhos e faixas decorativas", "Áreas externas residenciais e comerciais", "Composições ornamentais com vegetação"], "h2Characteristics": "Características do Seixo Rajado CERMIL Stone", "characteristicsIntro": "Selecionado para uso decorativo, o material se destaca pela aparência natural rajada e pela versatilidade em projetos com proposta mais marcante.", "characteristics": ["Pedra natural selecionada", "Visual rajado e diferenciado", "Boa presença estética em áreas externas", "Fácil composição com outros elementos naturais", "Aplicação versátil em paisagismo e decoração"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Rajado faz parte da linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, aplicações e fornecimento do seixo rajado decorativo para seu projeto."}
  },
  {
    id: "seixo-natural-mix",
    name: "Seixo Natural (Mix)",
    img: seixoNaturalWood,
    line: "decorativa",
    desc: "Blend natural das cores da jazida. Visual orgânico e autêntico, com variação equilibrada de tons.",
    granulometrias,
    badge: null,
    gallery: [seixoNaturalWood, seixoNaturalSack],
    pricing: {
      "Grande: ~100 mm": { "10 kg": "R$ 17", "25 kg": "R$ 39", "100 kg": "R$ 138", "500 kg": "R$ 630", "1.000 kg": "R$ 1.200", "A Granel": "Sob consulta" },
      "Médio: ~50 mm": { "10 kg": "R$ 19", "25 kg": "R$ 43", "100 kg": "R$ 152", "500 kg": "R$ 695", "1.000 kg": "R$ 1.320", "A Granel": "Sob consulta" },
      "Fino: ~5 mm": { "10 kg": "R$ 20", "25 kg": "R$ 47", "100 kg": "R$ 166", "500 kg": "R$ 755", "1.000 kg": "R$ 1.440", "A Granel": "Sob consulta" }
    },
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com cinco quantidades padrão para pronta entrega:\n\n10 kg\n\n25 kg\n\n100 kg\n\n500 kg\n\n1.000 kg\n\nALÉM DE FORNECIMENTO A GRANEL (SEM EMBALAGEM) para revenda e distribuição em larga escala.",
    seo: {"title": "Seixo Natural Mix para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Seixo natural mix para jardins, vasos e paisagismo. Pedra decorativa natural com aparência orgânica e fornecimento para todo o Brasil.", "h1": "Seixo Natural (Mix)", "subheadline": "Pedra natural decorativa com variação de tons e aparência orgânica, ideal para projetos que valorizam naturalidade, textura e integração com o ambiente.", "mainText": ["O Seixo Natural (Mix) da CERMIL Stone é um material natural selecionado para projetos que buscam autenticidade visual e composição mais orgânica. Sua variação de tons e formas contribui para ambientes com linguagem natural, criando superfícies mais leves, espontâneas e bem integradas à vegetação e aos demais elementos do paisagismo.", "Muito utilizado em jardins, canteiros, vasos e áreas externas, o seixo natural para paisagismo funciona como um acabamento versátil para diferentes estilos de projeto. Ele pode ser empregado tanto em composições mais rústicas quanto em propostas contemporâneas que valorizam materiais minerais e texturas naturais. Essa flexibilidade faz do produto uma escolha eficiente para aplicações decorativas com forte identidade visual.", "Na linha decorativa da CERMIL Stone, o Seixo Natural (Mix) atende demandas de paisagismo, decoração e arquitetura com fornecimento para diferentes escalas de projeto. Seu uso contribui para composições naturais e bem resolvidas, tanto em pequenos detalhes quanto em áreas maiores de cobertura e acabamento."], "h2Applications": "Aplicações do Seixo Natural em paisagismo", "applicationsIntro": "O seixo natural mix é indicado para usos decorativos em áreas externas e composições paisagísticas que pedem textura, naturalidade e adaptação visual ao ambiente.", "applications": ["Jardins e canteiros", "Vasos decorativos", "Forração de solo", "Áreas externas residenciais e comerciais", "Composições com vegetação e madeira", "Projetos de paisagismo naturalista"], "h2Characteristics": "Características do Seixo Natural (Mix)", "characteristicsIntro": "Seu aspecto orgânico e sua variação natural tornam o material especialmente interessante para projetos que valorizam autenticidade e leitura mineral mais espontânea.", "characteristics": ["Pedra natural decorativa", "Variação natural de tons", "Visual orgânico e versátil", "Boa adaptação a composições externas", "Aplicação ampla em paisagismo e decoração"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Seixo Natural (Mix) integra a linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre aplicações, disponibilidade e fornecimento do seixo natural mix para seu projeto."}
  },
  {
    id: "pedra-dolomita-decorativa",
    name: "Pedra Dolomita",
    img: outrasPedras1,
    line: "decorativa",
    desc: "Material natural de coloração clara, muito utilizado em projetos de paisagismo e decoração.",
    granulometrias,
    badge: null,
    gallery: [outrasPedras1],
    sizes: sizes,
    weightsText: "A CERMIL Stone trabalha com quantidades variadas para atender a sua necessidade.",
    seo: {"title": "Pedra Dolomita Decorativa para Jardim e Paisagismo | CERMIL Stone", "metaDescription": "Pedra dolomita decorativa para jardins, vasos e paisagismo. Material natural de coloração clara com fornecimento para todo o Brasil.", "h1": "Pedra Dolomita", "subheadline": "Material natural de coloração clara, muito utilizado em projetos de paisagismo e decoração por sua estética limpa, versatilidade e boa composição visual.", "mainText": ["A Pedra Dolomita Decorativa da CERMIL Stone é uma solução natural indicada para projetos que buscam leveza visual, clareza estética e acabamento organizado. Seu visual limpo favorece composições paisagísticas elegantes e atemporais, sendo muito utilizado em jardins, vasos, canteiros e diferentes propostas de decoração para áreas externas.", "A dolomita para jardim se destaca pela facilidade de composição com vegetação, madeira, concreto, cerâmica e outros materiais naturais. Em projetos residenciais, comerciais e institucionais, ela pode ser utilizada tanto como acabamento principal quanto como detalhe de contraste, contribuindo para uma leitura visual mais clara e bem definida do espaço.", "Na linha decorativa da CERMIL Stone, a Pedra Dolomita atende aplicações em paisagismo, decoração e arquitetura com fornecimento para diferentes volumes e demandas. Seu uso valoriza desde pequenos elementos ornamentais até áreas mais amplas de cobertura e acabamento externo."], "h2Applications": "Aplicações da Pedra Dolomita em paisagismo", "applicationsIntro": "A pedra dolomita decorativa é indicada para usos externos e composições paisagísticas que pedem visual claro, acabamento natural e versatilidade de aplicação.", "applications": ["Jardins e canteiros", "Vasos e floreiras", "Faixas decorativas", "Áreas externas residenciais e comerciais", "Composições paisagísticas com vegetação", "Acabamentos decorativos em ambientes externos"], "h2Characteristics": "Características da Pedra Dolomita CERMIL Stone", "characteristicsIntro": "Com coloração clara e boa presença visual, a dolomita decorativa é um material bastante utilizado em projetos que valorizam organização, leveza e permanência estética.", "characteristics": ["Material natural decorativo", "Coloração clara e acabamento limpo", "Boa adaptação a projetos externos", "Fácil composição com outros materiais", "Aplicação ampla em paisagismo e decoração"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Pedra Dolomita integra a linha decorativa da CERMIL Stone. A disponibilidade pode variar conforme granulometria, volume e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, aplicações e fornecimento da pedra dolomita decorativa para seu projeto."}
  }
];

export const ornamentalProducts: Product[] = [
  {
    id: "ametista-ornamental",
    name: "Ametista",
    img: ametistas,
    line: "ornamental",
    desc: "Pedra natural de presença marcante e alto valor estético, indicada para composições ornamentais e projetos especiais.",
    badge: "Exclusivo",
    gallery: [ametistas, ametista1, ametista2],
    seo: {"title": "Ametista para Decoração e Projetos Especiais | CERMIL Stone", "metaDescription": "Ametista ornamental para decoração, arquitetura e projetos especiais. Pedra natural de forte apelo visual com fornecimento para todo o Brasil.", "h1": "Ametista", "subheadline": "Pedra natural de presença marcante e alto valor estético, indicada para composições ornamentais, decoração e projetos especiais com forte identidade visual.", "mainText": ["A Ametista Ornamental da CERMIL Stone é um material natural selecionado para projetos que buscam exclusividade, presença visual e valor decorativo. Reconhecida por sua identidade mineral marcante, a ametista se destaca como uma pedra ornamental capaz de transformar composições e reforçar a singularidade estética dos ambientes.", "Em decoração, arquitetura e projetos especiais, a ametista pode ser utilizada como elemento de destaque, agregando profundidade visual, sofisticação natural e personalidade ao espaço. Seu uso atende propostas que valorizam materiais autênticos e composições de forte apelo estético, tanto em ambientes internos quanto em contextos ornamentais específicos.", "Na linha ornamental da CERMIL Stone, a Ametista atende demandas decorativas e compositivas com fornecimento conforme a natureza de cada projeto. É uma pedra voltada para aplicações em que o valor visual do material é parte central da proposta."], "h2Applications": "Aplicações da Ametista Ornamental", "applicationsIntro": "A ametista ornamental é indicada para composições decorativas e projetos especiais em que a pedra natural assume protagonismo visual e valor estético.", "applications": ["Ambientes decorativos", "Projetos especiais", "Composições ornamentais", "Espaços internos de destaque", "Elementos naturais de forte apelo visual", "Propostas com identidade estética marcante"], "h2Characteristics": "Características da Ametista CERMIL Stone", "characteristicsIntro": "Selecionada para usos ornamentais, a ametista reúne autenticidade, presença visual e apelo estético elevado.", "characteristics": ["Pedra natural ornamental", "Forte identidade mineral", "Alto valor estético", "Presença visual marcante", "Aplicação em decoração e projetos especiais"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Ametista integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre aplicações, disponibilidade e fornecimento de ametista ornamental para seu projeto."}
  },
  {
    id: "quartzo-leitoso-ornamental",
    name: "Quartzo Leitoso",
    img: bigRocks,
    line: "ornamental",
    desc: "Quartzo natural de aparência clara e presença mineral marcante, indicado para composições ornamentais e decoração.",
    badge: null,
    gallery: [bigRocks],
    seo: {"title": "Quartzo Leitoso para Decoração e Arquitetura | CERMIL Stone", "metaDescription": "Quartzo leitoso ornamental para decoração, arquitetura e composições naturais. Material selecionado pela CERMIL Stone com fornecimento para todo o Brasil.", "h1": "Quartzo Leitoso", "subheadline": "Quartzo natural de aparência clara e presença mineral marcante, indicado para composições ornamentais, decoração e projetos que valorizam autenticidade natural.", "mainText": ["O Quartzo Leitoso Ornamental da CERMIL Stone é um material natural selecionado para projetos que valorizam presença mineral, autenticidade e sofisticação natural. Sua aparência clara e sua textura característica tornam o quartzo leitoso uma escolha diferenciada para composições decorativas em ambientes internos e externos.", "Em projetos de arquitetura, decoração e composição ornamental, o quartzo leitoso funciona como um elemento de destaque capaz de transmitir solidez, naturalidade e valor estético. Sua leitura visual se encaixa bem tanto em propostas mais contemporâneas quanto em composições com linguagem mais orgânica, sempre reforçando a identidade mineral do ambiente.", "Na linha ornamental da CERMIL Stone, o Quartzo Leitoso atende aplicações em decoração, arquitetura e projetos especiais, com fornecimento conforme o perfil e a escala de cada demanda. É um material indicado para quem busca um produto natural com forte presença visual e valor ornamental."], "h2Applications": "Aplicações do Quartzo Leitoso Ornamental", "applicationsIntro": "O quartzo leitoso pode ser utilizado em diferentes propostas decorativas e ornamentais, especialmente em projetos que pedem destaque visual e acabamento natural.", "applications": ["Ambientes decorativos", "Projetos de arquitetura", "Composições ornamentais", "Áreas internas e externas", "Espaços de destaque mineral", "Projetos especiais com pedra natural"], "h2Characteristics": "Características do Quartzo Leitoso CERMIL Stone", "characteristicsIntro": "Selecionado para aplicações ornamentais, o quartzo leitoso reúne presença visual, autenticidade e versatilidade de composição.", "characteristics": ["Quartzo natural ornamental", "Aparência clara e marcante", "Estética mineral sofisticada", "Boa presença em ambientes internos e externos", "Aplicação versátil em decoração e arquitetura"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Leitoso integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre aplicações, disponibilidade e fornecimento do quartzo leitoso ornamental para seu projeto."}
  },
  {
    id: "quartzo-rose-ornamental",
    name: "Quartzo Rose",
    img: outrasPedras3,
    line: "ornamental",
    desc: "Quartzo natural de tonalidade suave e valor estético marcante, indicado para projetos que buscam delicadeza.",
    badge: null,
    gallery: [outrasPedras3],
    seo: {"title": "Quartzo Rose para Decoração e Projetos Especiais | CERMIL Stone", "metaDescription": "Quartzo rose ornamental para decoração e projetos especiais. Material natural de tonalidade suave com fornecimento para todo o Brasil.", "h1": "Quartzo Rose", "subheadline": "Quartzo natural de tonalidade suave e valor estético marcante, indicado para composições ornamentais e projetos que buscam delicadeza, originalidade e presença mineral.", "mainText": ["O Quartzo Rose Ornamental da CERMIL Stone é um material natural selecionado para composições que valorizam suavidade visual, originalidade e apelo decorativo. Sua tonalidade característica confere ao ambiente uma presença mineral diferenciada, tornando o produto uma escolha interessante para projetos que buscam um elemento natural com identidade própria.", "Em aplicações decorativas e ornamentais, o quartzo rose se destaca pela capacidade de enriquecer ambientes com uma leitura estética delicada, mas ao mesmo tempo marcante. Ele pode ser inserido em projetos de interiores, áreas de destaque e composições especiais, contribuindo para espaços com mais personalidade e sofisticação natural.", "Na linha ornamental da CERMIL Stone, o Quartzo Rose atende projetos decorativos, arquitetônicos e composições especiais com fornecimento conforme o perfil de cada demanda. É um material pensado para usos em que a pedra natural também cumpre função estética e simbólica dentro do ambiente."], "h2Applications": "Aplicações do Quartzo Rose Ornamental", "applicationsIntro": "O quartzo rose é indicado para propostas ornamentais e decorativas em que a pedra natural assume papel de destaque visual e composição estética.", "applications": ["Decoração de interiores", "Ambientes de destaque", "Projetos especiais", "Composições ornamentais", "Espaços com proposta estética natural", "Aplicações decorativas com identidade visual"], "h2Characteristics": "Características do Quartzo Rose CERMIL Stone", "characteristicsIntro": "Sua coloração característica e sua presença visual tornam o material uma escolha diferenciada para projetos de valor ornamental.", "characteristics": ["Quartzo natural ornamental", "Tonalidade suave e distinta", "Boa presença estética", "Material para composições especiais", "Aplicação em decoração e arquitetura"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Rose integra a linha ornamental da CERMIL Stone. A disponibilidade pode variar conforme volume, formato e demanda do projeto.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre aplicações, disponibilidade e fornecimento do quartzo rose ornamental para seu projeto."}
  },
];

export const industrialProducts: Product[] = [
  {
    id: "quartzo-industrial",
    name: "Quartzo Industrial",
    img: quartzoIndustrial1,
    line: "industrial",
    desc: "Quartzo industrial para aplicações técnicas e fornecimento em escala, alinhado a demandas técnicas. Fornecemos para a maior companhia siderúrgica do mundo, presente em mais de 60 países.",
    badge: null,
    gallery: [quartzoIndustrial1, quartzoIndustrial2],
    seo: {"title": "Quartzo Industrial para Fornecimento em Escala | CERMIL Stone", "metaDescription": "Quartzo industrial para aplicações técnicas e fornecimento em escala. Produção CERMIL com atendimento para demandas industriais em todo o Brasil.", "h1": "Quartzo Industrial", "subheadline": "Material natural voltado a aplicações industriais, com foco em fornecimento em escala, regularidade de entrega e adequação à demanda técnica de cada projeto.", "mainText": ["O Quartzo Industrial da CERMIL Stone é destinado a aplicações técnicas que exigem regularidade de fornecimento, escala produtiva e alinhamento com diferentes perfis de demanda. Integrado à base operacional da CERMIL, o material atende projetos industriais que buscam segurança de abastecimento, consistência e capacidade de atendimento em volume.", "Nossos produtos industriais já abastecem a maior companhia siderúrgica do mundo, presente em mais de 60 países. Com capacidade de fornecimento a granel and estruturado, atendemos desde pequenas operações até demandas de larga escala. Seu uso está associado a aplicações industriais diversas, em contextos nos quais o quartzo exerce função técnica dentro do processo produtivo.", "Na linha industrial da CERMIL Stone, o Quartzo Industrial reforça a conexão entre origem mineral, capacidade operacional e fornecimento em escala. É um material voltado para operações que exigem disponibilidade, suporte comercial e atendimento alinhado a demandas técnicas."], "h2Applications": "Aplicações do Quartzo Industrial", "applicationsIntro": "O quartzo industrial é indicado para aplicações técnicas e fornecimento em escala, conforme a necessidade operacional de cada segmento.", "applications": ["Processos industriais diversos", "Demandas técnicas em escala", "Fornecimento para operações produtivas", "Aplicações com necessidade de regularidade de abastecimento", "Projetos com atendimento industrial dedicado", "Demandas conforme especificação comercial e operacional"], "h2Characteristics": "Características do Quartzo Industrial CERMIL Stone", "characteristicsIntro": "Com foco em fornecimento industrial, o material se destaca pela integração com a operação produtiva da CERMIL e pela capacidade de atendimento conforme demanda.", "characteristics": ["Quartzo natural para uso industrial", "Fornecimento em escala", "Fornecimento a granel (sem embalagem)", "Atendimento conforme demanda", "Base produtiva integrada à operação CERMIL", "Aplicação técnica em diferentes segmentos"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Quartzo Industrial integra a linha industrial da CERMIL Stone. O fornecimento pode variar conforme especificação, volume e perfil da demanda.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre fornecimento, disponibilidade e atendimento do quartzo industrial para sua operação."}
  }
];

export const construcaoCivilProducts: Product[] = [
  {
    id: "areia-construcao-civil",
    name: "Areia",
    img: construcaoCivilPlaceholder,
    line: "construcao-civil",
    desc: "Areia para construção civil, com fornecimento regional voltado ao abastecimento de obras e aplicações técnicas.",
    badge: null,
    gallery: [construcaoCivilPlaceholder],
    seo: {"title": "Areia para Construção Civil | CERMIL Stone", "metaDescription": "Areia para obra e construção civil, com fornecimento em São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza. Origem mineral CERMIL Stone.", "h1": "Areia", "subheadline": "Material mineral destinado ao abastecimento de obras, com fornecimento regional e suporte comercial orientado à demanda de cada projeto.", "mainText": ["A Areia da CERMIL Stone integra a Linha Construção Civil, criada para atender ao abastecimento de obras e à demanda por materiais minerais aplicados à construção. Com origem ligada à base mineral da CERMIL, o fornecimento é pensado para atender desde pequenas obras até demandas de maior volume.", "O atendimento está estruturado para a região de São Gonçalo do Amarante, Pecém e a região metropolitana de Fortaleza, com foco em agilidade de entrega e regularidade de abastecimento para construtoras, empreiteiras e obras em andamento.", "Na CERMIL Stone, a Areia reforça a conexão entre origem mineral, capacidade de fornecimento e aplicação prática em diferentes contextos de obra, unindo a experiência da linha decorativa à nova frente de construção civil."], "h2Applications": "Aplicações da Areia na construção civil", "applicationsIntro": "A areia é indicada para diferentes etapas e aplicações técnicas dentro de uma obra.", "applications": ["Preparo de argamassa e concreto", "Reboco e acabamento", "Assentamento de pisos e alvenaria", "Obras residenciais e comerciais", "Fornecimento para construtoras e empreiteiras", "Abastecimento regular de canteiro de obra"], "h2Characteristics": "Características da Areia CERMIL Stone", "characteristicsIntro": "Selecionada para uso em construção civil, a areia é fornecida com foco em regularidade e adequação à demanda técnica da obra.", "characteristics": ["Material mineral de origem certificada", "Fornecimento regional", "Disponibilidade para pequenos e grandes volumes", "Atendimento orientado à demanda da obra", "Suporte comercial dedicado"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Areia integra a Linha Construção Civil da CERMIL Stone, com fornecimento para São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza. A disponibilidade pode variar conforme volume e demanda da obra.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, volumes e fornecimento de areia para sua obra."}
  },
  {
    id: "arisco-construcao-civil",
    name: "Arisco",
    img: construcaoCivilPlaceholder,
    line: "construcao-civil",
    desc: "Arisco para construção civil, indicado para aterro, nivelamento e aplicações técnicas em obras.",
    badge: null,
    gallery: [construcaoCivilPlaceholder],
    seo: {"title": "Arisco para Construção Civil | CERMIL Stone", "metaDescription": "Arisco para construção civil, aterro e nivelamento de terreno. Fornecimento em São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza.", "h1": "Arisco", "subheadline": "Material mineral utilizado em aterro, nivelamento e preparo de terreno, com fornecimento regional e suporte comercial orientado à demanda da obra.", "mainText": ["O Arisco da CERMIL Stone faz parte da Linha Construção Civil, desenvolvida para atender demandas de abastecimento técnico em obras. É um material amplamente utilizado em etapas de aterro, nivelamento e preparo de terreno, tanto em obras residenciais quanto em empreendimentos de maior porte.", "Com origem ligada à base mineral da CERMIL, o arisco é fornecido com foco em regularidade e agilidade de entrega para São Gonçalo do Amarante, Pecém e a região metropolitana de Fortaleza, atendendo construtoras, empreiteiras e obras em diferentes fases de execução.", "Na CERMIL Stone, o Arisco reforça a atuação da marca em construção civil, unindo disponibilidade, aplicação técnica e suporte comercial dedicado a cada demanda."], "h2Applications": "Aplicações do Arisco na construção civil", "applicationsIntro": "O arisco é indicado para diferentes etapas de preparo e adequação de terreno em obras.", "applications": ["Aterro de terrenos", "Nivelamento de área", "Preparo de base para construção", "Obras residenciais e comerciais", "Fornecimento para construtoras e empreiteiras", "Abastecimento regular de canteiro de obra"], "h2Characteristics": "Características do Arisco CERMIL Stone", "characteristicsIntro": "Fornecido para uso técnico em obras, o arisco atende demandas de aterro e nivelamento com regularidade de abastecimento.", "characteristics": ["Material mineral de origem certificada", "Fornecimento regional", "Disponibilidade para pequenos e grandes volumes", "Atendimento orientado à demanda da obra", "Suporte comercial dedicado"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "O Arisco integra a Linha Construção Civil da CERMIL Stone, com fornecimento para São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza. A disponibilidade pode variar conforme volume e demanda da obra.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, volumes e fornecimento de arisco para sua obra."}
  },
  {
    id: "brita-construcao-civil",
    name: "Brita",
    img: construcaoCivilPlaceholder,
    line: "construcao-civil",
    desc: "Brita para construção civil, indicada para concreto, fundações e aplicações técnicas em obras.",
    badge: null,
    gallery: [construcaoCivilPlaceholder],
    seo: {"title": "Brita para Construção Civil | CERMIL Stone", "metaDescription": "Brita para obra, concreto e fundações. Fornecimento de brita em São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza com a CERMIL Stone.", "h1": "Brita", "subheadline": "Agregado mineral indicado para concreto, fundações e aplicações técnicas em obras, com fornecimento regional e suporte comercial orientado à demanda do projeto.", "mainText": ["A Brita da CERMIL Stone integra a Linha Construção Civil, voltada ao fornecimento de agregados minerais para obras. É um material essencial em etapas como preparo de concreto, fundações e drenagem, sendo aplicado tanto em obras residenciais quanto em empreendimentos de maior escala.", "Com base na estrutura mineral da CERMIL, a brita é fornecida com foco em regularidade e agilidade de entrega para São Gonçalo do Amarante, Pecém e a região metropolitana de Fortaleza, atendendo construtoras, empreiteiras e obras em execução.", "Na CERMIL Stone, a Brita amplia a atuação da marca para a construção civil, conectando origem mineral, capacidade de fornecimento e aplicação técnica em diferentes contextos de obra."], "h2Applications": "Aplicações da Brita na construção civil", "applicationsIntro": "A brita é indicada para diferentes aplicações técnicas dentro de uma obra.", "applications": ["Preparo de concreto", "Fundações e estruturas", "Drenagem de terrenos", "Obras residenciais e comerciais", "Fornecimento para construtoras e empreiteiras", "Abastecimento regular de canteiro de obra"], "h2Characteristics": "Características da Brita CERMIL Stone", "characteristicsIntro": "Fornecida para uso técnico em obras, a brita atende demandas de concreto e fundação com regularidade de abastecimento.", "characteristics": ["Material mineral de origem certificada", "Fornecimento regional", "Disponibilidade para pequenos e grandes volumes", "Atendimento orientado à demanda da obra", "Suporte comercial dedicado"], "h2Supply": "Fornecimento e disponibilidade", "supplyText": "A Brita integra a Linha Construção Civil da CERMIL Stone, com fornecimento para São Gonçalo do Amarante, Pecém e região metropolitana de Fortaleza. A disponibilidade pode variar conforme volume e demanda da obra.", "closingText": "Consulte a equipe CERMIL Stone para informações sobre disponibilidade, volumes e fornecimento de brita para sua obra."}
  }
];

export const allProducts: Product[] = [...decorativaProducts, ...ornamentalProducts, ...industrialProducts, ...construcaoCivilProducts];
