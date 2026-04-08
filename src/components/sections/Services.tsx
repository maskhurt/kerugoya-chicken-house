import { motion } from "framer-motion";
import { Bike, ShoppingBag, Utensils, Users } from "lucide-react";

const services = [
  {
    icon: <Bike size={32} />,
    title: "Delivery",
    desc: "Fast delivery right to your doorstep in Kerugoya.",
  },
  {
    icon: <ShoppingBag size={32} />,
    title: "Takeaway",
    desc: "Order ahead and pick up your meal at your convenience.",
  },
  {
    icon: <Utensils size={32} />,
    title: "Dine-in",
    desc: "Enjoy your meal in our clean and friendly restaurant.",
  },
  {
    icon: <Users size={32} />,
    title: "Table Service",
    desc: "Friendly staff ready to serve you at your table.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-red-600/20 hover:bg-white hover:shadow-2xl transition-all group text-center"
            >
              <div className="w-16 h-16 bg-red-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
              <p className="text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;