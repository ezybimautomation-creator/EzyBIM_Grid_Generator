import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { products } from "../constants/products";
import { ChevronRight, CheckCircle2, Download, ArrowLeft, Play, Layout, Activity } from "lucide-react";

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
      <section className="relative pt-32 pb-20 px-6 md:px-8 overflow-hidden">
        <div className="absolute inset-0 bim-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-xs font-black uppercase tracking-widest">Back to Solutions</span>
          </Link>

          <div className="max-w-3xl">
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
                  <motion.a 
                    href={product.downloadUrl || "#"}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-gradient text-white px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-primary/20"
                  >
                    Download Now <Download className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <motion.a 
                    href={`${import.meta.env.BASE_URL}#contact`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-gradient text-white px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest flex items-center gap-3 shadow-2xl shadow-primary/20"
                  >
                    Request a Demo <Play className="w-4 h-4" />
                  </motion.a>
                )}
                <button className="bg-white text-slate-foundation border border-slate-200 px-10 py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest hover:bg-slate-50 transition-colors">
                  Documentation
                </button>
              </div>
            </motion.div>
          </div>

          {/* Full-Width Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 relative max-w-5xl mx-auto"
          >
            <div className="absolute -inset-6 bg-primary/5 blur-3xl rounded-full opacity-40"></div>
            {product.heroImage ? (
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-200">
                <img
                  src={product.heroImage}
                  alt={`${product.name} Interface`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ) : (
              <div className="relative aspect-video rounded-[2rem] bg-slate-900 overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-200 group">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-foundation/40 backdrop-blur-sm group-hover:backdrop-blur-0 transition-all duration-700">
                  <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 fill-current ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-xs font-black uppercase tracking-widest block mb-1">Coming Soon</span>
                  <p className="text-white/70 text-sm">Official video demonstration and feature walkthrough.</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-24 md:py-32 px-6 md:px-8 bg-white">
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
                
                <div className="flex-1 w-full flex justify-center items-center relative p-8">
                  <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-50"></div>
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-xl transition-transform duration-700 hover:scale-[1.02] bg-white group max-w-[480px]">
                    <div className="absolute inset-0 bg-slate-50/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-auto object-contain mx-auto"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      )}

      {/* Technical Specifications & Expert Tip */}
      {(product.specs || product.tip) && (
        <section className="py-24 px-6 md:px-8 bg-surface relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Specs */}
              {product.specs && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-100"
                >
                  <h3 className="text-2xl font-headline font-black text-slate-foundation mb-8 flex items-center gap-3">
                    <Layout className="w-6 h-6 text-primary" /> Technical Specifications
                  </h3>
                  <ul className="space-y-6">
                    {product.specs.map((spec, idx) => (
                      <li key={idx} className="flex gap-4 items-start">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-on-surface-variant font-light leading-relaxed">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {/* Tip */}
              {product.tip && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="cta-gradient p-12 rounded-[3.5rem] shadow-2xl relative overflow-hidden group"
                >
                   <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                    <Activity className="w-32 h-32 text-white" />
                  </div>
                  <h3 className="text-2xl font-headline font-black text-white mb-6 relative z-10">Expert TIP</h3>
                  <div className="w-12 h-1 bg-white/30 mb-8 relative z-10" />
                  <p className="text-white/90 text-xl font-light leading-relaxed relative z-10 italic">
                    "{product.tip}"
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Visual Walkthrough */}
      {product.videoUrl && (
        <section className="py-24 px-8 relative overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-headline font-black text-slate-foundation tracking-tighter mb-4 italic">
                Experience the <span className="text-primary not-italic">Workflow</span>
              </h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-light leading-relaxed">
                Watch a detailed demonstration of how {product.name} revolutionizes your Revit modeling efficiency.
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl mx-auto relative group"
            >
              <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity"></div>
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-100 bg-slate-900 group">
                <iframe
                  className="w-full h-full border-0"
                  src={`https://www.youtube.com/embed/${product.videoUrl}?rel=0&modestbranding=1`}
                  title={`${product.name} Walkthrough`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
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
