
"use client";
import Image from "next/image";
import { Sparkles, ShieldCheck, Users, ChevronRight, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

function Stat({label, value}:{label:string; value:string}){
  return (
    <div className="text-center">
      <div className="text-3xl font-extrabold">{value}</div>
      <div className="text-xs uppercase tracking-wider text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function SectionTitle({kicker, title, subtitle}:{kicker?:string; title:string; subtitle?:string}){
  return (
    <div className="max-w-3xl mx-auto text-center mb-10">
      {kicker && <div className="text-sm tracking-widest uppercase text-gray-500 mb-2">{kicker}</div>}
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-600 mt-3 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

function PropertyCard(){
  return (
    <div className="card overflow-hidden group">
      <div className="aspect-[16/10] w-full bg-gray-100 flex items-center justify-center relative">
        <span className="text-gray-400 text-sm">Imagen del inmueble</span>
      </div>
      <div className="p-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold">Villa Rosa — Guayama</h4>
          <span className="badge">Disponible</span>
        </div>
        <p className="text-sm text-gray-600 line-clamp-2">3H/2B · 1,250 pc · Lote 350 m² · Rehabilitada con permisos al día.</p>
        <div className="flex items-center justify-between">
          <div className="font-bold text-lg">$—</div>
          <a className="btn btn-secondary" href="#contacto">Ver detalles <ChevronRight className="w-4 h-4" /></a>
        </div>
      </div>
    </div>
  );
}

export default function Page(){
  const openMail = (subject:string, body:string) => {
    const mail = `mailto:valentinr@realityrealtypr.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mail;
  };

  const onContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name')||'');
    const email = String(fd.get('email')||'');
    const asunto = String(fd.get('asunto')||'');
    const msg = String(fd.get('mensaje')||'');
    openMail(`[FEP] ${asunto || 'Contacto del website'}`, `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${msg}`);
  };

  const onInvestorSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('nombre')||'');
    const email = String(fd.get('email')||'');
    const phone = String(fd.get('telefono')||'');
    const muni = String(fd.get('municipio')||'');
    const goal = String(fd.get('objetivo')||'');
    openMail('[FEP] Nuevo interés de inversión', `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nMunicipio: ${muni}\n\nObjetivo:\n${goal}`);
  };

  return (
    <div className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="container py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-black text-white flex items-center justify-center font-extrabold overflow-hidden">
              <Image src="/logo.jpg" alt="FEP" width={40} height={40} className="object-cover w-10 h-10 rounded-2xl" />
            </div>
            <div>
              <div className="font-bold leading-tight">FEP Real Estate</div>
              <div className="text-xs text-gray-500 leading-tight">Firme en Propósito</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:opacity-70">Servicios</a>
            <a href="#proyectos" className="hover:opacity-70">Proyectos</a>
            <a href="#propiedades" className="hover:opacity-70">Propiedades</a>
            <a href="#inversionistas" className="hover:opacity-70">Inversionistas</a>
            <a href="#contacto" className="hover:opacity-70">Contacto</a>
          </nav>
          <div className="flex items-center gap-2">
            <a className="btn btn-primary" href="https://wa.me/17875431176" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative">
        <div className="container py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-xs">
              <Sparkles className="w-3.5 h-3.5" /> Vivimos donde muchos vacacionan 🇵🇷
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
              Rehabilitamos casas olvidadas junto a inversionistas locales
            </h1>
            <p className="text-gray-600 mt-4 text-base leading-relaxed">
              Hogares renovados para que sigan siendo de nuestra gente. Educación, transparencia y propósito real en cada proyecto.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              <a className="btn btn-primary" href="#propiedades">Ver propiedades</a>
              <a className="btn btn-secondary" href="#inversionistas">Unirme como inversionista</a>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-10">
              <Stat label="Propiedades rehabilitadas" value="—" />
              <Stat label="Comunidad de inversionistas" value="—" />
              <Stat label="Años construyendo" value="—" />
            </div>
          </div>
          <div className="relative">
            <div className="card overflow-hidden">
              <div className="aspect-[4/5] w-full relative">
                <Image src="/hero.jpg" alt="Proyecto FEP" fill className="object-cover" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white border rounded-2xl shadow p-3 hidden md:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xs">Corretaje con licencia · C-25626</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="py-16 md:py-20 border-t bg-gray-50">
        <div className="container">
          <SectionTitle kicker="Qué hacemos" title="Dos ramas, un mismo propósito"
            subtitle="FEP Real Estate Projects (inversión/rehabilitación) y FEP Realty Services (corretaje y administración)." />
          <div className="grid md:grid-cols-3 gap-5">
            <div className="card p-6"><h3 className="font-semibold mb-2">FEP Real Estate Projects</h3><p className="text-sm text-gray-600">Adquisición, diseño y rehabilitación de propiedades abandonadas. Legal, permisos y obra con equipos locales.</p></div>
            <div className="card p-6"><h3 className="font-semibold mb-2">FEP Realty Services</h3><p className="text-sm text-gray-600">Corretaje residencial y de inversión, property management y representación ética del comprador/vendedor.</p></div>
            <div className="card p-6"><h3 className="font-semibold mb-2">Educación & Contenido</h3><p className="text-sm text-gray-600">Contenido práctico sobre inversión responsable, financiamiento y procesos en Puerto Rico.</p></div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="proyectos" className="py-16 md:py-20 border-t">
        <div className="container">
          <SectionTitle kicker="Antes / Después" title="Proyectos con propósito"
            subtitle="Cada intervención busca devolverle vida a una estructura y un hogar a una familia boricua." />
          <div className="grid md:grid-cols-3 gap-5">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
        </div>
      </section>

      {/* PROPERTIES */}
      <section id="propiedades" className="py-16 md:py-20 border-t bg-gray-50">
        <div className="container">
          <SectionTitle kicker="Inventario" title="Propiedades destacadas"
            subtitle="Filtra por municipio, precio y estado de rehabilitación cuando conectemos a tu MLS/Sheet." />
          <div className="grid md:grid-cols-3 gap-5">
            <PropertyCard />
            <PropertyCard />
            <PropertyCard />
          </div>
          <div className="text-center mt-8">
            <a className="btn btn-secondary" href="#contacto">Ver todo el inventario</a>
          </div>
        </div>
      </section>

      {/* INVESTORS */}
      <section id="inversionistas" className="py-16 md:py-20 border-t">
        <div className="container max-w-4xl">
          <SectionTitle kicker="Comunidad FEP" title="¿Quieres invertir con nosotros?"
            subtitle="Trabajamos con inversionistas locales bajo estructuras claras (joint venture, deuda privada, equity). Transparencia primero." />
          <div className="card p-6">
            <form className="grid md:grid-cols-2 gap-4" onSubmit={onInvestorSubmit}>
              <input className="border rounded-xl px-3 py-2" name="nombre" placeholder="Nombre y Apellido" />
              <input className="border rounded-xl px-3 py-2" name="email" placeholder="Email" type="email" />
              <input className="border rounded-xl px-3 py-2" name="telefono" placeholder="Teléfono / WhatsApp" />
              <input className="border rounded-xl px-3 py-2" name="municipio" placeholder="Municipio" />
              <textarea className="border rounded-xl px-3 py-2 md:col-span-2" name="objetivo" placeholder="Cuéntanos tu objetivo (flujo de caja, flips, buy & hold) y rango de inversión." rows={5} />
              <div className="md:col-span-2 flex items-center justify-between">
                <div className="text-xs text-gray-500 flex items-center gap-2"><Users className="w-4 h-4" /> Nunca compartiremos tus datos.</div>
                <button type="submit" className="btn btn-primary">Enviar interés</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="py-16 md:py-20 border-t bg-gray-50">
        <div className="container max-w-4xl">
          <SectionTitle kicker="Háblanos" title="Contacto" subtitle="¿Propiedad abandonada? ¿Buscas comprar/vender? Escribe y te respondemos." />
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <div className="card p-6">
                <form className="grid gap-4" onSubmit={onContactSubmit}>
                  <input className="border rounded-xl px-3 py-2" name="name" placeholder="Nombre" />
                  <input className="border rounded-xl px-3 py-2" name="email" placeholder="Email" type="email" />
                  <input className="border rounded-xl px-3 py-2" name="asunto" placeholder="Asunto" />
                  <textarea className="border rounded-xl px-3 py-2" name="mensaje" rows={5} placeholder="Mensaje" />
                  <button type="submit" className="btn btn-primary w-fit">Enviar mensaje</button>
                </form>
              </div>
            </div>
            <div className="space-y-4">
              <div className="card p-6 space-y-3 text-sm">
                <div className="flex items-center gap-2"><Phone className="w-4 h-4" /> <span>(787) 543‑1176</span></div>
                <div className="flex items-center gap-2"><Mail className="w-4 h-4" /> <span>valentinr@realityrealtypr.com</span></div>
                <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5" /> <span>Guayama, Puerto Rico</span></div>
              </div>
              <div className="card p-6">
                <div className="text-xs text-gray-500">Licencia de Corredor:</div>
                <div className="font-semibold">C‑25626</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP */}
      <a href="https://wa.me/17875431176" target="_blank" rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:opacity-90">
        <MessageCircle className="w-5 h-5" /> <span className="font-medium">Chatea por WhatsApp</span>
      </a>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} FEP Real Estate — Firme en Propósito · <a href="https://firmeenpropositopr.com" className="underline hover:opacity-70">firmeenpropositopr.com</a>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <a className="hover:opacity-70" href="#">Instagram</a>
            <a className="hover:opacity-70" href="#">Facebook</a>
            <a className="hover:opacity-70" href="#">YouTube</a>
            <a className="hover:opacity-70" href="#">Podcast</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
