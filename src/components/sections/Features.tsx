import { motion } from "framer-motion";
import { Check, Info, Trash2, Accessibility, Layout } from "lucide-react";

const highlights = {
  "Good For": ["Lunch", "Dinner", "Solo dining", "Groups", "Tourists"],
  "Amenities": ["Toilet", "Wheelchair-accessible toilet"],
  "Atmosphere": ["Casual", "Family-friendly", "Modern Decor"],
};

const Features = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {Object.entries(highlights).map(([category, items], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-sm border border-black/5"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center">
                  {idx === 0 ? <Layout size={20} /> : idx === 1 ? <Accessibility size={20} /> : <Info size={20} />}
                </div>
                <h3 className="text-2xl font-black text-black">{category}</h3>
              </div>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600 font-medium">
                    <Check size={18} className="text-red-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;