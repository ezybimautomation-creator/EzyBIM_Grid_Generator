import { motion } from "motion/react";
import { ChevronRight, CheckCircle2 } from "lucide-react";
import { products } from "../constants/products";
import { Link } from "react-router-dom";

interface ProductSectionProps {
  title?: string;
  subtitle?: string;
  showAllLink?: boolean;
}

export default function ProductSection({ 
  title = "Precision BIM Tools", 
  subtitle = "Explore our suite of Revit automation tools designed to streamline your BIM workflow.",
  showAllLink = false 
}: ProductSectionProps) {
  return (
    <section className="py-32 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] font-label font-black tracking-widest uppercase text-on-surface-variant">Our Catalog</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter text-slate-foundation mb-6">
              {title}
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
          {showAllLink && (
            <Link 
              to="/products" 
              className="group flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
            >
              View Full Suite <ChevronRight className="w-4 h-4" />
            </Link>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-surface-container-low border border-slate-foundation/5 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 flex flex-col"
            >
              <div className="h-56 relative overflow-hidden bg-slate-50 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent flex items-end p-6 pointer-events-none">
                  <div className="p-3 bg-white/40 backdrop-blur-md rounded-xl border border-white/30 shadow-sm">
                    <product.icon className="w-6 h-6 text-slate-foundation" />
                  </div>
                </div>
                {product.isFree && (
                  <div className="absolute top-4 right-4 bg-primary text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
                    FREE
                  </div>
                )}
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-headline font-bold text-slate-foundation mb-1">{product.name}</h3>
                <p className="text-xs font-medium text-primary uppercase tracking-wider mb-4 opacity-80">{product.tagline}</p>
                <p className="text-sm text-on-surface-variant mb-8 flex-grow leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-4 mb-8">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-xs text-on-surface-variant font-medium">
                      <CheckCircle2 className="w-4 h-4 text-primary/60" />
                      {feature}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-8 border-t border-slate-foundation/5 mt-auto">
                  <span className="text-2xl font-headline font-black text-slate-foundation">{product.price}</span>
                  <Link 
                    to={`/products/${product.id}`}
                    className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    Details <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
