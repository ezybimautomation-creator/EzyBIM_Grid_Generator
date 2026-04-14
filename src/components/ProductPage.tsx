import { motion } from "motion/react";
import { Cpu, Layers, Database, Globe, ArrowRight } from "lucide-react";
import ProductSection from "./ProductSection";

export default function ProductPage() {
  return (
    <div className="bg-surface min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-8 relative overflow-hidden mb-24">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full"></div>
        <ProductSection 
          title="Full Product Catalog" 
          subtitle="Explore our complete suite of Revit automation tools designed to eliminate technical debt and bring surgical accuracy to architectural modeling teams worldwide."
          showAllLink={true}
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-8 pb-32">
        <section className="bg-slate-foundation rounded-[3rem] p-16 md:p-24 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bim-grid opacity-10"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="text-[10px] font-label font-black tracking-widest uppercase text-white/80">Custom Solutions</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tighter mb-8 leading-tight">
                Need a Custom <br/><span className="text-primary text-glow">Plugin?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
                We specialize in developing bespoke Revit plugins and automated data pipelines tailored to your specific project requirements and firm standards.
              </p>
              <a 
                href={`${import.meta.env.BASE_URL}#contact`}
                className="bg-white text-slate-foundation px-10 py-5 rounded-full font-headline font-black text-xs uppercase tracking-widest flex items-center gap-3 hover:scale-105 transition-transform duration-300"
              >
                Request Development <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-colors">
                <Cpu className="w-8 h-8 text-primary mb-6" />
                <h4 className="font-headline font-bold text-white text-lg mb-3 tracking-tight">API Integration</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Deep Revit API hooks for maximum performance and stability.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-colors">
                <Layers className="w-8 h-8 text-primary mb-6" />
                <h4 className="font-headline font-bold text-white text-lg mb-3 tracking-tight">Scalable Architecture</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Built to handle massive enterprise models effortlessly.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-colors">
                <Database className="w-8 h-8 text-primary mb-6" />
                <h4 className="font-headline font-bold text-white text-lg mb-3 tracking-tight">Data Integrity</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Robust validation to ensure zero data loss during sync.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-[2rem] border border-white/5 hover:border-primary/20 transition-colors">
                <Globe className="w-8 h-8 text-primary mb-6" />
                <h4 className="font-headline font-bold text-white text-lg mb-3 tracking-tight">Cloud Sync</h4>
                <p className="text-sm text-slate-400 leading-relaxed">Multi-location teamwork support via cloud infrastructure.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
