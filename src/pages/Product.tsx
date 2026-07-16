import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, MapPin, Phone, Mail, Globe, Truck, ShoppingBag, ArrowUpRight } from "lucide-react";
import { allProducts } from "@/data/products";
import { useState, useEffect } from "react";
import logo from "@/assets/logo-cermil.png";
import { WHATSAPP_NUMBER } from "@/components/WhatsAppButton";

const ProductPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.gallery?.[0] || product?.img);

  useEffect(() => {
    if (product?.seo) {
      document.title = product.seo.title;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", product.seo.metaDescription);
      } else {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = product.seo.metaDescription;
        document.head.appendChild(meta);
      }
    } else if (product) {
      document.title = `${product.name} | CERMIL Stone`;
    }
  }, [product]);

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
                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] px-3 py-1.5 font-medium bg-foreground text-background">
                  {product.line === "decorativa" ? "Linha Decorativa" : product.line === "ornamental" ? "Linha Ornamental" : "Linha Industrial"}
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
              <h1 className="font-display font-bold text-4xl lg:text-5xl leading-tight mb-6">
                {product.seo?.h1 || product.name}
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {product.desc}
                {product.seo?.subheadline && product.seo.subheadline !== product.desc && (
                  <> {product.seo.subheadline}</>
                )}
              </p>

              {product.seo?.mainText && (
                <div className="space-y-4 mb-10 text-sm text-foreground/80 leading-relaxed">
                  {product.seo.mainText.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              {product.seo?.h2Applications && (
                <div className="mb-10">
                  <h2 className="font-display text-xl text-foreground mb-4">{product.seo.h2Applications}</h2>
                  {product.seo.applicationsIntro && <p className="text-sm text-muted-foreground mb-4">{product.seo.applicationsIntro}</p>}
                  <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                    {product.seo.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.seo?.h2Characteristics && (
                <div className="mb-10">
                  <h2 className="font-display text-xl text-foreground mb-4">{product.seo.h2Characteristics}</h2>
                  {product.seo.characteristicsIntro && <p className="text-sm text-muted-foreground mb-4">{product.seo.characteristicsIntro}</p>}
                  <ul className="list-disc list-inside space-y-2 text-sm text-foreground/80">
                    {product.seo.characteristics.map((char, i) => (
                      <li key={i}>{char}</li>
                    ))}
                  </ul>
                </div>
              )}

              {product.seo?.h2Supply && (
                <div className="mb-10">
                  <h2 className="font-display text-xl text-foreground mb-4">{product.seo.h2Supply}</h2>
                  <p className="text-sm text-foreground/80 mb-4">{product.seo.supplyText}</p>
                  <p className="text-sm text-muted-foreground italic border-l-2 border-accent pl-4">{product.seo.closingText}</p>
                </div>
              )}

            </div>
          </div>


          {/* CTA Final para todos os produtos */}
          {!product.pricing && (
            <div className="mt-20 pt-16 border-t border-border">
              <div className="flex flex-col items-center gap-6 text-center py-12">
                <h2 className="font-display text-2xl text-foreground">Interessado neste produto?</h2>
                <p className="text-muted-foreground max-w-md">Entre em contato para saber mais sobre disponibilidade, especificações técnicas e solicitar um orçamento.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Olá! Tenho interesse no produto *${product.name}* e gostaria de solicitar um orçamento.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-10 py-4 text-xs uppercase tracking-[0.3em] font-medium bg-foreground text-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar Orçamento
                </a>
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
              <div className="flex flex-col">
                <span>Vila Salgado dos Moreiras, SN</span>
                <span>Cágado, São Gonçalo do Amarante - CE, 62670-000</span>
                <span>Região Metropolitana de Fortaleza</span>
              </div>
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
