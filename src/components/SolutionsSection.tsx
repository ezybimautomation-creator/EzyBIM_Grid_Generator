import { motion } from "motion/react";
import { Layers, Workflow, BarChart2, Shield } from "lucide-react";

const solutions = [
  {
    icon: Layers,
    title: "BIM Consulting",
    description: "Expert audit and strategy for your firm's BIM standards and digital transformation."
  },
  {
    icon: Workflow,
    title: "Custom Automation",
    description: "Bespoke C# and Revit API solutions tailored to your unique architectural workflows."
  },
  {
    icon: BarChart2,
    title: "Data Management",
    description: "Structured BIM data solutions for large-scale projects and facility management."
  },
  {
    icon: Shield,
    title: "BIM Management",
    description: "On-demand BIM leadership to ensure project delivery meets all technical requirements."
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="text-[10px] font-label font-black tracking-widest uppercase text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-slate-foundation tracking-tighter mb-6">
            Beyond the <span className="text-primary">Plugin.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed">
            We provide end-to-end technical consulting and development services for the modern AEC sector.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-surface-container-low border border-slate-foundation/5 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-headline font-bold text-slate-foundation mb-4 tracking-tight">{solution.title}</h3>
              <p className="text-sm text-on-surface-variant font-light leading-relaxed">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
