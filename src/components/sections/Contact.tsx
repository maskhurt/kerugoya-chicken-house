import { motion } from "framer-motion";
import { Phone, MapPin, Clock, CreditCard, Smartphone, Car, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-8">VISIT <span className="text-red-600">US</span></h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-black mb-2">
                    <Phone size={18} className="text-red-600" /> Phone
                  </h4>
                  <a href="tel:+254712042322" className="text-gray-600 hover:text-red-600 transition-colors">
                    +254 712 042322
                  </a>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-black mb-2">
                    <Clock size={18} className="text-red-600" /> Open Hours
                  </h4>
                  <p className="text-gray-600">Open daily: 8 AM - 8 PM</p>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-black mb-2">
                    <MapPin size={18} className="text-red-600" /> Location
                  </h4>
                  <p className="text-gray-600">F7WH+X2W, Kerugoya, Kenya<br />Flames E-zone</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-black mb-2">
                    <CreditCard size={18} className="text-red-600" /> Payments
                  </h4>
                  <p className="text-gray-600 text-sm">Credit, Debit cards & NFC mobile payments accepted.</p>
                  <div className="flex gap-3 mt-2 text-gray-400">
                    <CreditCard size={20} />
                    <Smartphone size={20} />
                  </div>
                </div>
                <div>
                  <h4 className="flex items-center gap-2 font-bold text-black mb-2">
                    <Car size={18} className="text-red-600" /> Parking
                  </h4>
                  <p className="text-gray-600 text-sm">Free street parking and free parking lot available.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+254712042322"
                className="bg-black text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-600 transition-all"
              >
                <Phone size={20} /> Call Now
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-0.498421,37.280145"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all"
              >
                <ExternalLink size={20} /> Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[450px] rounded-3xl overflow-hidden shadow-xl grayscale hover:grayscale-0 transition-all duration-700"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.03058913998!2d37.280145!3d-0.498421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182898c6411f185d%3A0x6b8a8b16c88f118!2sKerugoya%2C%20Kenya!5e0!3m2!1sen!2sus!4v1715000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Chickenkings House Kerugoya Map"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;