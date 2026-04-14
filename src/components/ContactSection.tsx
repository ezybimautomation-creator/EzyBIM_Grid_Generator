import { motion, AnimatePresence } from "motion/react";
import { Mail, MessageCircle, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';

export default function ContactSection() {
  const [state, handleSubmit] = useForm('mqewkqvg');

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
            
            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <Mail className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">Email Us</div>
                  <div className="text-lg font-bold text-slate-foundation">ezybimautomation@gmail.com</div>
                </div>
              </div>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/message/C3N7SR5GFTXBB1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <MessageCircle className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">WhatsApp</div>
                  <div className="text-lg font-bold text-slate-foundation">+94 78 650 6882</div>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/gimhan-umendra-320770280?utm_source=share_via&utm_content=profile&utm_medium=member_android" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-lg group-hover:bg-primary transition-colors duration-500">
                  <Linkedin className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest font-black text-on-surface-variant mb-1">LinkedIn</div>
                  <div className="text-lg font-bold text-slate-foundation">Professional Networking</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <AnimatePresence mode="wait">
              {state.succeeded ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-primary/20 flex flex-col items-center text-center justify-center h-full min-h-[500px]"
                >
                  <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mb-8">
                    <CheckCircle2 className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-3xl font-headline font-black text-slate-foundation mb-4 tracking-tight">Request Received!</h3>
                  <p className="text-on-surface-variant font-light mb-8 max-w-xs">
                    Thanks for reaching out! One of our BIM automation specialists will contact you at your work email within 24 hours.
                  </p>
                  <button 
                    onClick={() => window.location.reload()}
                    className="text-primary font-black uppercase text-xs tracking-widest hover:underline"
                  >
                    Send another request
                  </button>
                </motion.div>
              ) : (
                <motion.div 
                  key="form"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-12 rounded-[2.5rem] shadow-2xl border border-slate-foundation/5"
                >
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Full Name</label>
                        <input 
                          id="full_name"
                          name="full_name"
                          type="text" 
                          required
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="John Doe" 
                        />
                        <ValidationError prefix="Name" field="full_name" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-widest text-slate-400">Work Email</label>
                        <input 
                          id="email"
                          name="email"
                          type="email" 
                          required
                          className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                          placeholder="john@company.com" 
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Software Concern</label>
                      <select 
                        id="software_concern"
                        name="software_concern"
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                      >
                        <option>Revit Automation</option>
                        <option>BIM Data Management</option>
                        <option>Custom Plugin Development</option>
                        <option>Other</option>
                      </select>
                      <ValidationError prefix="Software Concern" field="software_concern" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400">Tell us about your custom tool requirement</label>
                      <textarea 
                        id="message"
                        name="message"
                        rows={4} 
                        required
                        className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors" 
                        placeholder="Describe the functionality you need, which Revit version you use, and any specific workflows you want to automate..."
                      ></textarea>
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-[10px] mt-1" />
                    </div>
                    <button 
                      type="submit" 
                      disabled={state.submitting}
                      className="w-full cta-gradient text-white py-4 rounded-xl font-headline font-extrabold text-sm uppercase tracking-[0.2em] flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {state.submitting ? "Sending..." : "Submit Request"}
                      {!state.submitting && <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
