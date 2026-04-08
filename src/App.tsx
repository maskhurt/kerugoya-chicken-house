import { useState } from "react";
import Header from "./components/layout/Header";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Menu from "./components/sections/Menu";
import Services from "./components/sections/Services";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import OrderModal from "./components/OrderModal";
import { Toaster } from "./components/ui/sonner";

function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-red-600 selection:text-white">
      <Header />
      
      <main>
        <Hero onOrderClick={() => setIsOrderModalOpen(true)} />
        <Services />
        <About />
        <Menu />
        <WhyChooseUs />
        <Features />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      <OrderModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
      
      <Toaster position="top-center" expand={true} richColors />
    </div>
  );
}

export default App;