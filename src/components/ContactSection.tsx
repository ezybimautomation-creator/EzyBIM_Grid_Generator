import { motion } from "motion/react";
import { Mail, MessageSquare, Phone, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-32 px-8 bg-surface-container-low relative overflow-hidden" id="contact">
      <div className="absolute inset-0 bim-grid opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="text-[10px] font-label font-black tracking-widest uppercase text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-slate-foundation tracking-tighter mb-8">
              Let's build your <br/><span className="text-primary">custom toolset.</span>
            </h2>
            <p className="text-lg text-on-surface-variant font-light leading-relaxed mb-12 max-w-lg">
              Whether you need a simple script or a full-scale enterprise BIM automation system, our engineers are ready to help.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">Email Us</div>
                  <div className="text-lg font-bold text-slate-foundation">hello@ezybim.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <Phone className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">Call Us</div>
                  <div className="text-lg font-bold text-slate-foundation">+1 (555) 000-BIM</div>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <MessageSquare className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">Live Chat</div>
                  <div className="text-lg font-bold text-slate-foundation">Available Mon-Fri</div>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-foundation/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">Work Email</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="john@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Software Concern</label>
                <select className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors">
                  <option>Revit Automation</option>
                  <option>BIM Data Management</option>
                  <option>Custom Plugin Development</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tell us about your custom tool requirement</label>
                <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" placeholder="Describe the functionality you need, which Revit version you use, and any specific workflows you want to automate..."></textarea>
              </div>
              <button className="w-full cta-gradient text-white py-4 rounded-xl font-headline font-extrabold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 group">
                Submit Request <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
