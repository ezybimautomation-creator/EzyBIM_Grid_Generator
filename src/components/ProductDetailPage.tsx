import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../constants/products";
import { ChevronRight, CheckCircle2, Download, ArrowLeft, Play, Layout } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-surface px-8 text-center">
        <h1 className="text-4xl font-headline font-black text-slate-foundation mb-6">Product Not Found</h1>
        <Link to="/products" className="text-primary font-bold flex items-center gap-2 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-surface min-h-screen pb-32">
      {/* Dynamic Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 bim-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Solutions</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xl flex items-center justify-center border border-slate-100">
                  <product.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-5xl font-headline font-black text-slate-foundation tracking-tighter">
                    {product.name}
                  </h1>
                  <span className={`inline-block mt-1 px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest ${product.isFree ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-500'}`}>
                    {product.isFree ? 'Free Forever' : product.price}
                  </span>
                </div>
              </div>
              
              <p className="text-2xl font-light text-slate-foundation/80 leading-relaxed mb-8">
                {product.tagline}
              </p>
              
              <p className="text-lg text-on-surface-variant leading-relaxed mb-10 font-light">
                {product.longDescription}
              </p>

              <div className="flex flex-wrap gap-4">
                {product.isFree ? (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-gradient text-white px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-primary/20"
                  >
                    Download Now <Download className="w-4 h-4" />
                  </motion.button>
                ) : (
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-gradient text-white px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-primary/20"
                  >
                    Request a Demo <Play className="w-4 h-4" />
                  </motion.button>
                )}
                <button className="bg-white text-slate-foundation border border-slate-200 px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors">
                  Documentation
                </button>
              </div>
            </motion.div>

            {/* Video Placeholder Slot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video rounded-[3rem] bg-slate-900 overflow-hidden shadow-2xl group border-[12px] border-white ring-1 ring-slate-100"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-slate-foundation/40 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-700">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                  <Play className="w-8 h-8 fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-white text-xs font-black uppercase tracking-widest block mb-1">Coming Soon</span>
                <p className="text-white/70 text-sm">Official video demonstration and feature walkthrough.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-32 px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {product.fullFeatures.map((feature, idx) => (
              <div key={idx} className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-headline font-bold text-slate-foundation tracking-tight">{feature.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      {product.showcase && product.showcase.length > 0 && (
        <section className="py-24 px-8 relative overflow-hidden">
          <div className="absolute inset-0 bim-grid opacity-5"></div>
          <div className="max-w-7xl mx-auto relative z-10 space-y-32">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-foundation tracking-tighter mb-4">
                Detailed <span className="text-primary">& Workflow</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-light">
                Experience the precision tools that define EzyBIM's standard for Revit automation.
              </p>
            </div>

            {product.showcase.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Feature 0{idx + 1}</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-headline font-black text-slate-foundation tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-lg text-on-surface-variant font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="flex-1 w-full relative">
                  <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-50"></div>
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Final Conversion */}
      <section className="px-8 mb-20">
        <div className="max-w-7xl mx-auto bg-slate-foundation rounded-[3.5rem] p-16 md:p-32 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-7xl font-headline font-black text-white tracking-tighter mb-8 italic">
              Ready to <span className="text-primary not-italic">Automate?</span>
            </h2>
            <p className="text-xl text-slate-400 mb-12 font-light leading-relaxed">
              Join thousands of BIM managers and architectural engineers who have already optimized their Revit delivery workflows with EzyBIM.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               {product.isFree ? (
                  <button className="w-full sm:w-auto cta-gradient text-white px-12 py-6 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                    Direct Download <Download className="w-5 h-5" />
                  </button>
               ) : (
                  <button className="w-full sm:w-auto cta-gradient text-white px-12 py-6 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center justify-center gap-3">
                    Subscription Plans <ChevronRight className="w-5 h-5" />
                  </button>
               )}
               <Link to="/contact" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white px-12 py-6 rounded-2xl font-headline font-black text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">
                  Contact Support
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
