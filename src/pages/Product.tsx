import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Package, MapPin, Phone, Mail, Globe, Truck, ShoppingBag, ArrowUpRight } from "lucide-react";
import { allProducts } from "@/data/products";
import { useState } from "react";
import logo from "@/assets/logo-cermil.png";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0] || product?.img);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Produto não encontrado</h1>
          <Link to="/ecommerce" className="text-accent underline uppercase tracking-widest text-sm">
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    );
  }

  const isPE = product.type === "pronta-entrega";
  const images = product.gallery || [product.img];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-border/60">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CERMIL" className="h-8 w-auto" />
            <span className="hidden sm:inline-block font-display text-sm tracking-[0.3em] uppercase text-stone">Stone</span>
          </Link>
          <Link
            to="/ecommerce"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao catálogo
          </Link>
        </nav>
      </header>

      <main className="pt-[120px] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Esquerda: Galeria de Imagens */}
            <div className="flex flex-col gap-6">
              <div className="aspect-square bg-bone border border-border/50 overflow-hidden relative">
                <img 
                  src={activeImage} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
                <span className={`absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 font-medium ${
                  isPE ? "bg-foreground text-background" : "bg-accent text-accent-foreground"
                }`}>
                  {isPE ? "Pronta entrega" : "Sob consulta"}
                </span>
                {product.badge && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 bg-accent text-accent-foreground font-medium">
                    {product.badge}
                  </span>
                )}
              </div>
              
              {/* Miniaturas se houver mais de uma foto */}
              {images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {images.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImage(img)}
                      className={`aspect-square border overflow-hidden transition-all ${
                        activeImage === img ? "border-foreground opacity-100" : "border-border/50 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img src={img} alt={`${product.name} - imagem ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direita: Informações do Produto */}
            <div className="flex flex-col">
              <h1 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-6">{product.name}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-10">{product.desc}</p>

              {/* Seção para produtos "sob-consulta" */}
              {product.type === "sob-consulta" && (
                <div className="mb-12">
                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-10">
                      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium border-b border-border pb-3">Tamanhos (Granulometrias)</p>
                      <div className="flex flex-col gap-6">
                        {product.sizes.map((s, i) => (
                          <div key={i} className="flex gap-4">
                            <div className="w-6 h-6 rounded bg-muted flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs font-medium text-foreground">{i + 1}</span>
                            </div>
                            <div>
                              <h4 className="font-display text-lg text-foreground">{s.name}</h4>
                              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {product.weightsText && (
                    <div className="mb-12">
                      <p className="text-xs uppercase tracking-[0.3em] text-accent mb-6 font-medium border-b border-border pb-3">Quantidades e Pesos</p>
                      <div className="bg-muted/40 p-6 border border-border">
                        <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                          {product.weightsText}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className="mt-auto pt-6">
                    <Link
                      to="/#contato"
                      className="inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-5 text-sm uppercase tracking-[0.25em] font-medium bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── SEÇÃO INFERIOR PARA PRONTA ENTREGA (FULL WIDTH) ── */}
          {product.type === "pronta-entrega" && (
            <div className="mt-20 pt-16 border-t border-border">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                {/* ── Quantidades ── */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Quantidades a pronta entrega</p>
                  
                  {/* Tabela de quantidades */}
                  <div className="space-y-0 border border-border divide-y divide-border">
                    {[
                      { kg: "10 kg",     icon: <Package className="w-4 h-4" />,  nota: "Saco reforçado · varejo e hobbistas" },
                      { kg: "25 kg",     icon: <Package className="w-4 h-4" />,  nota: "Saco de ráfia · gardens e paisagistas" },
                      { kg: "100 kg",    icon: <Package className="w-4 h-4" />,  nota: "Saco industrial · construtoras e atacado" },
                      { kg: "500 kg",    icon: <Truck className="w-4 h-4" />,    nota: "Big bag intermediário · revenda estruturada" },
                      { kg: "1.000 kg",  icon: <Truck className="w-4 h-4" />,    nota: "Big bag FIBC · indústria e contratos" },
                    ].map((q) => (
                      <div key={q.kg} className="flex items-center justify-between gap-4 px-4 py-4 bg-card hover:bg-muted/40 transition-colors">
                        <div className="flex items-center gap-3">
                          <span className="text-accent">{q.icon}</span>
                          <span className="font-display text-lg text-foreground">{q.kg}</span>
                        </div>
                        <span className="text-[11px] text-muted-foreground text-right">{q.nota}</span>
                      </div>
                    ))}
                  </div>

                  {/* Política de disponibilidade */}
                  <div className="mt-8 space-y-4">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground mb-4">Política de disponibilidade</p>

                    <div className="flex items-start gap-4 p-4 border border-border bg-card">
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-display text-base text-foreground">10 kg · 25 kg · 100 kg</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          Disponíveis para <span className="text-foreground font-medium">vendas locais e online</span>. Indicados para projetos pequenos e médios, revendas em menor escala e amostras pagas.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 border border-border bg-card">
                      <div className="mt-0.5 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Truck className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <p className="font-display text-base text-foreground">500 kg · 1.000 kg</p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                          Disponíveis para <span className="text-foreground font-medium">entregas locais</span> (região de atendimento direto da CERMIL Stone). Indicados para gardens, revendas estruturadas, obras e contratos regionais.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── Granulometrias ── */}
                <div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-8">Granulometrias a pronta entrega</p>
                  
                  <div className="space-y-4">
                    {[
                      {
                        name: "Fino",
                        range: "aproximadamente 5 mm",
                        desc: "Formato bem fino, próximo a um grão de milho, ideal para pisos drenantes, áreas de circulação externa e aplicações em que a drenagem e o conforto ao pisar são fundamentais.",
                      },
                      {
                        name: "Médio",
                        range: "faixa em torno de 50 mm",
                        desc: "Indicado para jardins, paisagismo geral, composições decorativas em canteiros, bordas de caminhos e áreas de destaque.",
                      },
                      {
                        name: "Grande",
                        range: "faixa em torno de 100 mm",
                        desc: "Indicado para pontos focais de paisagismo, contornos de espelhos d'água, delimitação de áreas e composições em que a pedra tenha presença visual mais marcante.",
                      },
                    ].map((g, i) => (
                      <div key={g.name} className="p-5 border border-border bg-card">
                        <div className="flex items-start gap-4">
                          <span className="flex-shrink-0 w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-[11px] font-medium mt-0.5">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-display text-lg text-foreground">
                              {g.name} <span className="text-muted-foreground font-normal text-sm">— {g.range}</span>
                            </p>
                            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{g.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Nota fora dos padrões */}
                  <div className="mt-6 p-5 border border-accent/30 bg-accent/5">
                    <p className="text-sm text-foreground leading-relaxed">
                      <span className="font-medium">Fora dos padrões:</span>{" "}
                      <span className="text-muted-foreground">
                        Qualquer granulometria fora desses parâmetros será ofertada na modalidade sob consulta, com produção customizada conforme a necessidade do cliente — projetos especiais, contratos industriais, especificações técnicas próprias.
                      </span>
                    </p>
                  </div>

                  {/* Tabela de Preços (Se aplicável ao produto) */}
                  {product.pricing && (
                    <div className="mt-8 pt-8 border-t border-border">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-6 font-medium">Tabela de Preços</p>
                      <div className="flex flex-col gap-6">
                        {Object.entries(product.pricing).map(([granulometria, pesos]) => (
                          <div key={granulometria} className="bg-muted/30 border border-border p-5">
                            <h5 className="font-display text-lg text-foreground mb-4 border-b border-border/50 pb-2">{granulometria.replace(/:(.*)/, ' ($1)')}</h5>
                            <ul className="grid sm:grid-cols-2 gap-x-4 gap-y-3">
                              {Object.entries(pesos).map(([peso, preco]) => (
                                <li key={peso} className="flex items-center justify-between text-sm">
                                  <span className="text-muted-foreground">{peso}</span>
                                  <span className="font-medium text-foreground">{preco}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA */}
                  <Link
                    to="/#contato"
                    className="mt-8 flex items-center justify-center gap-2 w-full py-4 text-xs uppercase tracking-[0.3em] font-medium bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    Solicitar orçamento
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border bg-foreground text-background/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CERMIL" className="h-7 w-auto brightness-0 invert opacity-80" />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-background/80">Stone</span>
            </div>
            <p className="text-[11px] italic tracking-[0.15em] text-background/40">"Sertão em pedra, mundo em projeto."</p>
            <div className="flex items-start gap-2 mt-2 text-[11px] text-background/50 leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <span>Vila Salgado dos Moreiras, SN – Cágado, São Gonçalo do Amarante – CE, 62670-000</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Contato</p>
            <a href="tel:+5585991124238" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> (85) 99112-4238
            </a>
            <a href="mailto:adm@almineracao.com" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> adm@almineracao.com
            </a>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Navegação</p>
            <Link to="/ecommerce" className="text-[11px] uppercase tracking-[0.25em] text-background/50 hover:text-accent transition-colors">
              ← Voltar ao catálogo
            </Link>
            <p className="text-[11px] uppercase tracking-[0.2em] text-background/40 mt-auto">CNPJ 20.150.507/0001-39</p>
          </div>
        </div>

        <div className="border-t border-background/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
            <p className="text-[10px] uppercase tracking-[0.25em] text-background/30">
              © {new Date().getFullYear()} CERMIL Construção e Mineração. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProductPage;
