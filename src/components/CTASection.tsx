import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 px-8">
      <div className="max-w-7xl mx-auto bg-slate-foundation rounded-[3rem] overflow-hidden relative shadow-2xl">
        <div className="absolute inset-0 bim-grid opacity-10"></div>
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-20 pointer-events-none">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M20 100 L100 0 L100 100 Z" fill="url(#cta-grad)"></path>
            <defs>
              <linearGradient id="cta-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#33B5B5" />
                <stop offset="100%" stopColor="#008080" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        
        <div className="p-16 md:p-32 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[10px] font-label font-black tracking-widest uppercase text-white/80">Get Started Today</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter">
              Ready to reclaim your <span className="text-primary">technical hours?</span>
            </h2>
            <p className="text-slate-400 mt-8 text-xl font-light leading-relaxed">
              Book a free consultation to audit your current Revit workflow and see the true automation potential of your firm.
            </p>
          </div>
          <div className="flex-shrink-0">
            <motion.a 
              href={`${import.meta.env.BASE_URL}#contact`}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="cta-gradient text-white px-12 py-6 rounded-full font-headline font-extrabold text-xl shadow-2xl shadow-primary/20 flex items-center gap-3 group"
            >
              Free Consultation 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>
        
        {/* Decorative Orbs */}
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full"></div>
      </div>
    </section>
  );
}
