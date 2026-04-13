import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(251, 252, 254, 0)", "rgba(251, 252, 254, 0.8)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(16px)"]
  );

  return (
    <motion.nav 
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      className="sticky top-0 w-full z-50 flex justify-between items-center px-12 py-6 max-w-full mx-auto border-b border-transparent transition-colors duration-300"
    >
      <Link to="/" className="flex items-center group">
        <img 
          src="/logo-full.png" 
          alt="EzyBIM Logo" 
          className="h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
        />
      </Link>
      <div className="hidden md:flex items-center gap-10">
        <Link className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" to="/">Home</Link>
        <Link className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" to="/products">Products</Link>
        <a className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" href="#about">About</a>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05, y: -1 }}
        whileTap={{ scale: 0.95 }}
        className="bg-slate-foundation text-white px-8 py-3 rounded-full font-headline font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/10"
      >
        Contact Us
      </motion.button>
    </motion.nav>
  );
}
