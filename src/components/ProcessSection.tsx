import { motion } from "motion/react";
import { Search, Cpu, GitMerge, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnosis",
    description: "We analyze your current BIM workflow to identify bottleneck tasks and automation opportunities."
  },
  {
    icon: Cpu,
    title: "Engineering",
    description: "Our engineers build custom add-ins using C# and Revit API to solve your specific challenges."
  },
  {
    icon: GitMerge,
    title: "Calibration",
    description: "Iterative testing within your local environment to ensure perfect alignment with company standards."
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Full-scale rollout with documentation and training for your BIM management team."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-high rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] font-label font-black tracking-widest uppercase text-on-surface-variant">Workflow</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-slate-foundation tracking-tighter">
              The Precision <span className="text-primary">Process</span>
            </h2>
            <p className="text-on-surface-variant mt-6 text-lg font-light leading-relaxed">
              We don't just build scripts; we engineer robust solutions that scale with your firm's ambitions.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-slate-200 mb-6 mx-12"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="mb-8 relative">
                <div className="w-16 h-16 rounded-2xl bg-surface-container-low flex items-center justify-center border border-slate-100 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-500">
                  <step.icon className="w-8 h-8 text-slate-400 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="absolute -top-4 -right-4 text-4xl font-headline font-black text-slate-100 group-hover:text-primary/5 transition-colors duration-500 select-none">
                  0{index + 1}
                </div>
              </div>
              <h4 className="text-xl font-bold font-headline text-slate-foundation mb-4 tracking-tight">{step.title}</h4>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-6 w-12 h-[1px] bg-slate-100"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
