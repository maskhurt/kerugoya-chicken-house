import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Chicken Meals", "Snacks / Quick Bites", "Drinks"];

const menuItems = [
  {
    id: 1,
    category: "Chicken Meals",
    title: "King Fried Chicken",
    description: "Crispy skin, juicy meat, seasoned with our signature 11-spice blend.",
    price: "Ksh 450",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/hero-chicken-fd229e0d-1775661909681.webp",
  },
  {
    id: 2,
    category: "Chicken Meals",
    title: "Spicy Wings Bucket",
    description: "8 pieces of fiery wings tossed in our home-made chili glaze.",
    price: "Ksh 600",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/menu-wings-f85bbe78-1775661908717.webp",
  },
  {
    id: 3,
    category: "Snacks / Quick Bites",
    title: "Chicken Burger & Fries",
    description: "Golden chicken patty with lettuce, mayo, and a side of fries.",
    price: "Ksh 350",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/menu-snacks-8107f37a-1775661910020.webp",
  },
  {
    id: 4,
    category: "Drinks",
    title: "Ice Cold Beverages",
    description: "Choose from our selection of sodas and fresh juices.",
    price: "Ksh 150",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/menu-drinks-4928e02b-1775661909232.webp",
  },
  {
    id: 5,
    category: "Chicken Meals",
    title: "Family Platter",
    description: "Full chicken, large fries, and 2L soda – perfect for groups.",
    price: "Ksh 1,800",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/why-choose-us-quality-496e6009-1775661910235.webp",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Chicken Meals");

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <span className="text-red-600 font-black uppercase tracking-widest text-sm mb-2">Our Menu</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">FEAST LIKE A <span className="text-red-600">KING</span></h2>
            <div className="w-20 h-1 bg-red-600 mb-8" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${
                  activeCategory === cat
                    ? "bg-red-600 text-white shadow-lg shadow-red-600/30 scale-105"
                    : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-red-600/50 transition-colors"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white font-bold px-4 py-1.5 rounded-lg shadow-xl">
                    {item.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <button className="w-full py-3 bg-white/10 hover:bg-red-600 rounded-xl font-bold transition-all">
                    Quick Add
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;