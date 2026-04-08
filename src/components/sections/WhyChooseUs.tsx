import { motion } from "framer-motion";
import { Zap, Tag, ShieldCheck } from "lucide-react";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <Zap size={40} />,
      title: "Fast Service",
      desc: "We value your time. Our kitchen is optimized for speed without compromising quality.",
    },
    {
      icon: <Tag size={40} />,
      title: "Affordable Prices",
      desc: "Get premium quality chicken meals at prices that don't break the bank.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Quality Food",
      desc: "We use only the freshest locally-sourced chicken and ingredients.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-12 uppercase leading-tight">
              Why Choose <br />
              <span className="text-red-600">Chickenkings?</span>
            </h2>
            <div className="space-y-10">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="text-red-600">{p.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-black mb-2">{p.title}</h4>
                    <p className="text-gray-500 leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/why-choose-us-quality-496e6009-1775661910235.webp"
                alt="Quality Food Preparation"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-black/80 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <p className="text-white font-medium text-lg italic">
                  "Our promise is simple: the freshest chicken, cooked to perfection, every single time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;