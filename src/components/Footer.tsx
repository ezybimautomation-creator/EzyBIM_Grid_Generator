import { Network, PencilRuler, Linkedin, Youtube, Mail, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-slate-foundation w-full py-24 px-8 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto items-start">
        <div className="md:col-span-1 space-y-8">
          <Link to="/" className="inline-block">
            <img 
              src={`${import.meta.env.BASE_URL}logo-full.png`} 
              alt="EzyBIM Logo" 
              className="h-10 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-slate-400 text-sm font-body leading-relaxed max-w-xs">
            Engineering the next generation of BIM automation. We build tools that bridge the gap between architectural vision and technical execution.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div>
          <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-8">Navigation</h5>
          <ul className="space-y-4">
            <li><Link className="text-slate-400 hover:text-white transition-colors text-sm font-medium" to="/products">Revit Plugins</Link></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Custom Development</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">BIM Consulting</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Case Studies</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-8">Legal</h5>
          <ul className="space-y-4">
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Terms of Service</a></li>
            <li><a className="text-slate-400 hover:text-white transition-colors text-sm font-medium" href="#">Cookie Policy</a></li>
          </ul>
        </div>

        <div className="space-y-8">
          <h5 className="font-headline text-[10px] uppercase tracking-[0.2em] text-primary font-black mb-8">Newsletter</h5>
          <p className="text-slate-400 text-xs leading-relaxed">
            Get the latest BIM automation insights delivered to your inbox.
          </p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Email address" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
            />
            <button className="absolute right-1.5 top-1.5 bg-primary text-white p-2 rounded-full hover:scale-105 transition-transform">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-24 mt-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-slate-500 text-[10px] uppercase tracking-widest font-black">
          © 2026 EzyBIM. Precision Engineering for Architecture.
        </div>
        <div className="flex gap-8">
          <div className="flex items-center gap-2 text-slate-500">
            <Network className="w-4 h-4 opacity-30" />
            <span className="text-[10px] uppercase tracking-widest font-black">Cloud Integrated</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <PencilRuler className="w-4 h-4 opacity-30" />
            <span className="text-[10px] uppercase tracking-widest font-black">API Driven</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
