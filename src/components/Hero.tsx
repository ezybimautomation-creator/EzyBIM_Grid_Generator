import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Activity, ShieldCheck, Zap } from "lucide-react";
import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-8 py-24 bim-grid">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10"></div>
        <img 
          alt="BIM Architecture" 
          className="w-full h-full object-cover opacity-20" 
          src={heroImg}
        />
      </div>
      
      <div className="container mx-auto relative z-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 rounded-full border border-primary/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-label font-bold tracking-widest uppercase text-primary">BIM Automation Specialist</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold tracking-tighter text-slate-foundation leading-[0.9]">
            Automate Your <br/>
            <span className="text-primary">Revit Workflow</span><br/>
            with Precision
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl font-light leading-relaxed">
            Scalable BIM solutions engineered to eliminate technical debt and bring surgical accuracy to architectural modeling teams.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <motion.a 
              href={`${import.meta.env.BASE_URL}#contact`}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cta-gradient text-white px-10 py-5 rounded-default font-headline font-bold text-lg shadow-2xl shadow-primary/30"
            >
              Request Custom Solution
            </motion.a>
            <Link to="/products" className="bg-white text-slate-foundation px-10 py-5 rounded-default font-headline font-bold text-lg border border-slate-foundation/10 hover:bg-slate-50 transition-colors">
              Our Products
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative z-10 p-10 glass-panel border border-white/40 rounded-3xl shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <div className="space-y-1">
                <h3 className="font-headline font-bold text-slate-foundation text-xl">Active Automation</h3>
                <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold">Project: SkyTower Phase 2</p>
              </div>
              <Activity className="text-primary w-8 h-8" />
            </div>
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-on-surface-variant">
                  <span>Task Completion</span>
                  <span>94%</span>
                </div>
                <div className="h-3 bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "94%" }}
                    transition={{ duration: 2, delay: 0.8, ease: "circOut" }}
                    className="h-full bg-primary shadow-sm"
                  ></motion.div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60">
                  <Zap className="w-5 h-5 text-primary mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-black">Efficiency Gain</span>
                  <div className="text-3xl font-headline font-black text-slate-foundation">+310%</div>
                </div>
                <div className="bg-white/50 p-5 rounded-2xl border border-white/60">
                  <ShieldCheck className="w-5 h-5 text-primary mb-2" />
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant font-black">Error Reduction</span>
                  <div className="text-3xl font-headline font-black text-slate-foundation">99.2%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/20 blur-[120px] rounded-full"></div>
          <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-teal-500/10 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
