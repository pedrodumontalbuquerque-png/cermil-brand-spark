import { Link } from "react-router-dom";
import { useState, useMemo } from "react";
import { ArrowLeft, ArrowUpRight, Truck, ShoppingBag, MessageCircle, CheckCircle2, Star, Globe, Package, MapPin, Phone, Mail } from "lucide-react";
import { WHATSAPP_NUMBER } from "@/components/WhatsAppButton";
import logo from "@/assets/logo-cermil.png";

import { Product, prontaEntregaProducts, sobConsultaProducts, allProducts } from "@/data/products";

import pkg10 from "@/assets/pkg-10kg.jpg";
import pkg25 from "@/assets/pkg-25kg.jpg";
import pkg100 from "@/assets/pkg-100kg.jpg";
import pkg500 from "@/assets/pkg-500kg.jpg";
import pkg1000 from "@/assets/pkg-1000kg.jpg";

type FilterType = "all" | "pronta-entrega" | "sob-consulta";

const weights = [
  { label: "10 kg",    img: pkg10,   nota: "Saco reforçado · varejo e hobbistas",           disponibilidade: "Vendas locais e online" },
  { label: "25 kg",   img: pkg25,   nota: "Saco de ráfia · gardens e paisagistas",           disponibilidade: "Vendas locais e online" },
  { label: "100 kg",  img: pkg100,  nota: "Saco industrial · construtoras e atacado",        disponibilidade: "Vendas locais e online" },
  { label: "500 kg",  img: pkg500,  nota: "Big bag intermediário · revenda estruturada",     disponibilidade: "Entregas locais (região direta)" },
  { label: "1.000 kg",img: pkg1000, nota: "Big bag FIBC · indústria e contratos",            disponibilidade: "Entregas locais (região direta)" },
];


// ─── Product Card ───────────────────────────────────────────────────────────

const ProductCard = ({ product }: { product: Product }) => {
  const isPE = product.type === "pronta-entrega";

  return (
    <article className="group flex flex-col border border-border bg-card overflow-hidden hover:shadow-[0_12px_40px_-12px_hsl(30_20%_20%/0.18)] transition-shadow duration-300">
      {/* Image */}
      <Link to={`/produtos/${product.id}`} className="relative aspect-square overflow-hidden bg-bone block">
        <img
          src={product.img}
          alt={product.name}
          loading="lazy"
          width={800}
          height={800}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
        />
        {/* Type badge */}
        <span className={`absolute top-3 left-3 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 font-medium ${
          isPE
            ? "bg-foreground text-background"
            : "bg-accent text-accent-foreground"
        }`}>
          {isPE ? "Pronta entrega" : "Sob consulta"}
        </span>
        {product.badge && (
          <span className="absolute top-3 right-3 text-[9px] uppercase tracking-[0.3em] px-2.5 py-1 bg-accent text-accent-foreground font-medium">
            {product.badge}
          </span>
        )}
        {!isPE && (
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent pointer-events-none" />
        )}
      </Link>

      {/* Content */}
      <div className="p-5 lg:p-6 flex flex-col flex-1 gap-4">
        <div>
          <Link to={`/produtos/${product.id}`}>
            <h3 className="font-display text-xl lg:text-2xl text-foreground leading-tight hover:text-accent transition-colors">{product.name}</h3>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">{product.desc}</p>
        </div>

        {/* Info for pronta entrega */}
        {isPE && (
          <div className="flex items-start gap-2 p-3 bg-muted/50 border border-border mt-2">
            <Package className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Consulte as opções de peso e quantidade no descritivo do produto.
            </p>
          </div>
        )}

        {/* Sob consulta info */}
        {!isPE && (
          <div className="flex items-start gap-2 p-3 bg-muted/50 border border-border mt-2">
            <Star className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
            <p className="text-[11px] text-muted-foreground leading-relaxed">
              Ornamental · exclusivo · produzido sob medida. Entre em contato para consultar disponibilidade e especificações.
            </p>
          </div>
        )}

        {/* CTA button — styled like "Add to cart" */}
        <div className="mt-auto pt-1 flex flex-col gap-3">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              isPE
                ? `Olá! Tenho interesse no produto *${product.name}*. Podem me informar disponibilidade e condições?`
                : `Olá! Tenho interesse no produto *${product.name}* e gostaria de consultar disponibilidade e especificações.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 w-full py-3.5 text-xs uppercase tracking-[0.25em] font-medium transition-all ${
              isPE
                ? "bg-foreground text-background hover:bg-accent hover:text-accent-foreground"
                : "bg-accent text-accent-foreground hover:bg-foreground hover:text-background"
            }`}
          >
            {isPE ? (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                Solicitar Orçamento
              </>
            ) : (
              <>
                <MessageCircle className="w-3.5 h-3.5" />
                Consultar Disponibilidade
              </>
            )}
          </a>
        </div>
      </div>
    </article>
  );
};

// ─── Main Page ───────────────────────────────────────────────────────────────

const Ecommerce = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filtered = useMemo(() => {
    if (activeFilter === "all") return allProducts;
    return allProducts.filter((p) => p.type === activeFilter);
  }, [activeFilter]);

  const filterOptions: { id: FilterType; label: string; count: number }[] = [
    { id: "all", label: "Todos", count: allProducts.length },
    { id: "pronta-entrega", label: "Pronta entrega", count: prontaEntregaProducts.length },
    { id: "sob-consulta", label: "Sob consulta", count: sobConsultaProducts.length },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50">

        {/* Nav principal */}
        <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between backdrop-blur-md bg-background/80 border-b border-border/60">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="CERMIL" className="h-8 w-auto" />
            <span className="hidden sm:inline-block font-display text-sm tracking-[0.3em] uppercase text-stone">Stone</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Voltar ao site
          </Link>
        </nav>
      </header>

      {/* PAGE HEADER */}
      <section className="pt-[116px] pb-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Início</Link>
            <span>/</span>
            <span className="text-foreground">Produtos</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end gap-6 justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3">Catálogo · Pronta entrega & sob consulta</p>
              <h1 className="font-display font-bold text-4xl lg:text-5xl leading-[1.05] text-balance">
                Seixo de Quartzo &amp; <em className="text-accent not-italic">Pedras Naturais</em>
              </h1>
              <p className="mt-3 text-muted-foreground max-w-xl">
                Pronta entrega de 10 kg a 1.000 kg e linha ornamental exclusiva sob consulta. Vila dos Salgado Moreira - CE.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-5 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" /> Origem certificada
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-accent" /> Entrega em todo o Brasil
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-accent" /> Capacidade para grandes volumes
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR — sticky */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-3 flex items-center justify-between gap-4">
          {/* Category tabs */}
          <div className="flex items-center gap-1">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setActiveFilter(opt.id)}
                className={`flex items-center gap-1.5 px-3.5 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors ${
                  activeFilter === opt.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {opt.label}
                <span className={`text-[9px] px-1.5 py-0.5 ${
                  activeFilter === opt.id
                    ? "bg-white/20 text-background"
                    : "bg-muted text-muted-foreground"
                }`}>
                  {opt.count}
                </span>
              </button>
            ))}
          </div>

          {/* Product count */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground hidden sm:block">
            {filtered.length} produto{filtered.length !== 1 ? "s" : ""} encontrado{filtered.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      {/* PRODUCT GRID */}
      <main className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>



      {/* FOOTER */}
      <footer className="border-t border-border bg-foreground text-background/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — marca + endereço */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src={logo} alt="CERMIL" className="h-7 w-auto brightness-0 invert opacity-80" />
              <span className="font-display text-xs tracking-[0.3em] uppercase text-background/80">Stone</span>
            </div>
            <p className="text-[11px] italic tracking-[0.15em] text-background/40">"Sertão em pedra, mundo em projeto."</p>
            <div className="flex items-start gap-2 mt-2 text-[11px] text-background/50 leading-relaxed">
              <MapPin className="w-3.5 h-3.5 text-accent mt-0.5 flex-shrink-0" />
              <div className="flex flex-col">
                <span className="font-semibold text-background/80">Região metropolitana de Fortaleza</span>
                <span>Vila Salgado dos Moreiras, SN e</span>
                <span>Cágado, São Gonçalo do Amarante - CE, 62670-000</span>
              </div>
            </div>
          </div>

          {/* Col 2 — contato */}
          <div className="flex flex-col gap-3">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Contato</p>
            <a href="tel:+5585991124238" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Phone className="w-3.5 h-3.5" /> (85) 99112-4238
            </a>
            <a href="mailto:adm@almineracao.com" className="flex items-center gap-2 text-[12px] text-background/60 hover:text-accent transition-colors">
              <Mail className="w-3.5 h-3.5" /> adm@almineracao.com
            </a>
          </div>

          {/* Col 3 — nav + legal */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-1">Navegação</p>
            <Link to="/" className="text-[11px] uppercase tracking-[0.25em] text-background/50 hover:text-accent transition-colors">
              ← Voltar ao site
            </Link>
            <p className="text-[11px] uppercase tracking-[0.2em] text-background/40 mt-auto">CNPJ 20.150.507/0001-39</p>
          </div>
        </div>

        {/* Bottom strip */}
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

export default Ecommerce;
