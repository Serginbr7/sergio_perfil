import { Smartphone, MapPin, ArrowLeft, Home } from 'lucide-react';
import Link from 'next/link';
import { VITTA_PROPERTIES } from '../constants/vitta';

export default function VittaPage() {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      {/* Barra de Navegação Estilo Vitta */}
      <nav className="bg-[#0071bb] p-4 text-white sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
            <ArrowLeft size={20} /> <span>Voltar</span>
          </Link>
          <div className="font-black italic text-2xl tracking-tighter">VITTA</div>
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center font-bold">S</div>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12 border-l-8 border-[#0071bb] pl-6">
          <h1 className="text-4xl md:text-5xl font-black text-[#0071bb] uppercase italic leading-none">
            Empreendimentos <br/> em Franca
          </h1>
          <p className="text-zinc-500 mt-4 font-medium italic">Consultoria Sérgio Henrique: Conforto e confiança no seu novo lar.</p>
        </header>

        {/* Grid de Apresentação dos Imóveis */}
        <div className="grid md:grid-cols-2 gap-8">
          {VITTA_PROPERTIES.map((property) => (
            <div key={property.id} className="bg-white rounded-2xl overflow-hidden shadow-xl border border-zinc-100 flex flex-col group">
              {/* Espaço da Imagem com Badge de Status */}
              <div className="relative h-64 bg-zinc-200 overflow-hidden">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-zinc-900 text-white text-[10px] font-bold px-3 py-1 rounded uppercase tracking-widest">
                    {property.status}
                  </span>
                </div>
                {/* Simulação de Imagem (Aqui você usará as fotos da sua Canon T3i) */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 group-hover:scale-105 transition-transform duration-500">
                   <Home size={48} className="text-zinc-300" />
                </div>
              </div>

              {/* Detalhes do Imóvel */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="mb-4">
                  <h2 className="text-2xl font-black text-[#0071bb] uppercase italic mb-1">{property.name}</h2>
                  <p className="text-zinc-400 text-xs font-bold uppercase flex items-center gap-1">
                    <MapPin size={12} className="text-[#0071bb]" /> {property.location}
                  </p>
                </div>
                
                <p className="text-zinc-600 text-sm leading-relaxed mb-8 flex-1">
                  {property.description}
                </p>

                {/* Botão de Contato com Mensagem Personalizada */}
                <a 
                  href={`https://wa.me/5516994633370?text=Olá Sergin! Vi o ${property.name} no seu site e quero saber as condições.`}
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full bg-[#0071bb] hover:bg-[#005a96] text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-95"
                >
                  <Smartphone size={20} /> Confira este imóvel
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-zinc-100 py-12 text-center text-zinc-400 text-xs uppercase tracking-widest">
        Sergin - Consultor Vitta Residencial Franca/SP
      </footer>
    </main>
  );
}