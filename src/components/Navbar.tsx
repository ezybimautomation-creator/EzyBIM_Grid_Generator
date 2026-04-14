import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(251, 252, 254, 0)", "rgba(251, 252, 254, 0.9)"]
  );
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(20px)"]
  );

  // Close menu on navigation
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <motion.nav 
        style={{ backgroundColor, backdropFilter: backdropBlur }}
        className="sticky top-0 w-full z-50 flex justify-between items-center px-6 md:px-12 py-5 max-w-full mx-auto transition-colors duration-300"
      >
        <Link to="/" className="flex items-center group relative z-[60]">
          <img 
            src={`${import.meta.env.BASE_URL}logo-full.png`} 
            alt="EzyBIM Logo" 
            className="h-10 md:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <Link className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" to="/">Home</Link>
          <Link className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" to="/products">Products</Link>
          <a className="font-headline tracking-tighter font-bold text-xs uppercase text-slate-foundation hover:text-primary transition-colors duration-200" href="#about">About</a>
          <motion.a 
            href={`${import.meta.env.BASE_URL}#contact`}
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-slate-foundation text-white px-8 py-3 rounded-full font-headline font-bold text-xs uppercase tracking-widest shadow-lg shadow-slate-900/10"
          >
            Contact Us
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[60] p-2 md:hidden text-slate-foundation hover:text-primary transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-md z-[55] md:hidden"
            />
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-surface shadow-2xl z-[58] p-10 flex flex-col pt-32 md:hidden"
            >
              <nav className="flex flex-col gap-8">
                <Link onClick={closeMenu} className="text-3xl font-headline font-extrabold text-slate-foundation tracking-tighter" to="/">Home</Link>
                <Link onClick={closeMenu} className="text-3xl font-headline font-extrabold text-slate-foundation tracking-tighter" to="/products">Products</Link>
                <a onClick={closeMenu} className="text-3xl font-headline font-extrabold text-slate-foundation tracking-tighter" href="#about">About</a>
                <div className="h-px bg-slate-100 my-4" />
                <motion.a 
                  onClick={closeMenu}
                  href={`${import.meta.env.BASE_URL}#contact`}
                  className="bg-primary text-white text-center py-5 rounded-2xl font-headline font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/20"
                >
                  Contact Us
                </motion.a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
