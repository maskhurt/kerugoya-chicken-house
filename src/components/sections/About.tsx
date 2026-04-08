import { motion } from "framer-motion";
import { MapPin, Info } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/80971035-27b9-4777-bdc0-c66b92000051/restaurant-interior-ff6ddb4a-1775661909563.webp"
                alt="Chickenkings House Kerugoya Interior"
                className="w-full aspect-video object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-red-600 -z-0 rounded-2xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 border-4 border-black/5 -z-0 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="flex items-center gap-2 text-red-600 font-bold mb-4">
              <div className="w-8 h-[2px] bg-red-600" />
              <span className="uppercase tracking-widest text-sm">Our Story</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
              CHICKENKINGS HOUSE <span className="text-red-600">KERUGOYA</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Located in the heart of Flames E-zone, we are a casual, family-friendly restaurant 
              serving the most delicious chicken meals in Kerugoya. Whether you're looking for 
              a quick lunch, a satisfying dinner, or a tasty snack, we've got you covered with 
              fresh ingredients and secret recipes.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 p-3 rounded-xl text-red-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Location</h4>
                  <p className="text-gray-500">F7WH+X2W, Kerugoya, Kenya • Flames E-zone</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-black/5 p-3 rounded-xl text-black">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-black text-lg">Vibe</h4>
                  <p className="text-gray-500">Casual, Cozy, Family-oriented</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;