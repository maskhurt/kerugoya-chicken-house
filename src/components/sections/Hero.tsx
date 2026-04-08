import { motion } from "framer-motion";
import { Phone, MapPin, ShoppingBag, Star } from "lucide-react";

const Hero = ({ onOrderClick }: { onOrderClick: () => void }) => {
  return (
    <section id="home" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/hero-chicken-fd229e0d-1775661909681.webp"
          alt="Best Chicken in Kerugoya"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="text-white/80 font-medium tracking-wide">5.0 (1 Review)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 uppercase"
          >
            Best Chicken in <br />
            <span className="text-red-600">Kerugoya</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/80 mb-8 font-medium italic"
          >
            “Fresh, Fast, Delicious – Dine-in, Takeaway & Delivery Available”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={onOrderClick}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-red-600/30"
            >
              <ShoppingBag size={20} /> Order Now
            </button>
            <div className="flex gap-4">
              <a
                href="tel:+254712042322"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all flex-1"
              >
                <Phone size={20} /> Call Us
              </a>
              <a
                href="https://maps.google.com/?q=Chickenkings+House+Kerugoya"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-6 py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-2 transition-all flex-1"
              >
                <MapPin size={20} /> Directions
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 flex gap-8"
          >
            {['Dine-in', 'Takeaway', 'Delivery'].map((service) => (
              <div key={service} className="flex items-center gap-2 text-white/60">
                <div className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span className="text-sm font-semibold uppercase tracking-widest">{service}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;