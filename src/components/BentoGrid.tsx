import { motion } from "motion/react";
import { Bolt, Target, Settings2, ShieldCheck, Zap } from "lucide-react";

export const features = [
  {
    icon: Bolt,
    title: "Unmatched Speed",
    description: "Batch process thousands of Revit elements in seconds. Optimized for high-performance data manipulation.",
    className: "md:col-span-2 bg-slate-foundation text-white",
    id: "01"
  },
  {
    icon: Target,
    title: "Surgical Accuracy",
    description: "Eliminate human error with parametric validation rules.",
    className: "bg-primary text-white",
    id: "02"
  },
  {
    icon: Settings2,
    title: "Deep Customization",
    description: "Your workflow is unique. Our tools adapt to your specific BIM standards automatically.",
    className: "bg-surface-container-high text-slate-foundation",
    id: "03"
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Ready",
    description: "Built to handle massive models and distributed teams with zero friction.",
    className: "md:col-span-2 bg-surface-container-low text-slate-foundation border border-slate-foundation/5",
    id: "04"
  }
];

export default function BentoGrid() {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden">
      <div className="absolute inset-0 bim-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="text-[10px] font-label font-black tracking-widest uppercase text-primary">Core Advantages</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold tracking-tighter text-slate-foundation">
            Engineering <span className="text-primary">Efficiency</span>
          </h2>
          <p className="text-on-surface-variant mt-4 max-w-lg text-lg font-light leading-relaxed">Advanced toolsets engineered for the next generation of AEC professionals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`p-10 rounded-3xl relative overflow-hidden group shadow-lg ${feature.className}`}
            >
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border transition-colors ${feature.title === 'Unmatched Speed' ? 'bg-white/10 border-white/20' : 'bg-primary/10 border-primary/20'}`}>
                    <feature.icon className={`w-7 h-7 ${feature.title === 'Unmatched Speed' ? 'text-white' : 'text-primary'}`} />
                  </div>
                  <h3 className="text-2xl font-headline font-bold mb-4 tracking-tight">{feature.title}</h3>
                  <p className={`text-sm leading-relaxed ${feature.title === 'Unmatched Speed' ? 'text-slate-300' : 'text-on-surface-variant'}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
              <div className="absolute bottom-0 right-0 p-8 transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-0 group-hover:translate-y-0 opacity-10 group-hover:opacity-20">
                <span className="text-[120px] font-black leading-none select-none">{feature.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
