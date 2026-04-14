import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSEO } from "./hooks/useSEO";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BentoGrid from "./components/BentoGrid";
import ProcessSection from "./components/ProcessSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ProductPage from "./components/ProductPage";
import ProductSection from "./components/ProductSection";
import SolutionsSection from "./components/SolutionsSection";
import ContactSection from "./components/ContactSection";
import ProductDetailPage from "./components/ProductDetailPage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  useSEO({
    title: "EzyBIM — BIM Automation Specialist",
    description: "Custom-engineered Revit tools to eliminate repetitive tasks and bring surgical accuracy to your architectural modeling workflow."
  });

  return (
    <>
      <Hero />
      <ProductSection showAllLink={true} />
      <BentoGrid />
      <ProcessSection />
      <SolutionsSection />
      <CTASection />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
