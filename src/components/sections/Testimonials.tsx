import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    role: "Local Guide",
    content: "The best chicken I've had in Kerugoya! Super crispy and the service is excellent. Highly recommend the family platter.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiku",
    role: "Customer",
    content: "Affordable prices and great portions. The spicy wings are a must-try. Clean and cozy atmosphere for family dinner.",
    rating: 5,
  },
  {
    name: "Davis Mwangi",
    role: "Regular",
    content: "Speedy delivery and the food always arrives hot. Chickenkings never disappoints. Best value for money in town.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-red-600 font-black uppercase tracking-widest text-sm">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black mt-2">WHAT OUR <span className="text-red-600">KINGS</span> SAY</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 relative"
            >
              <div className="absolute top-6 right-8 text-white/10">
                <Quote size={60} />
              </div>
              <div className="flex text-yellow-500 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-white/80 italic mb-8 relative z-10 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center text-xl font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-white/40 text-sm">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;