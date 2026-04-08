import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-2xl font-bold flex items-center gap-2 mb-6">
              <span className="bg-red-600 p-1.5 rounded-lg text-white">CK</span>
              <span className="tracking-tight uppercase">Chickenkings</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              The king of fried chicken in Kerugoya. Quality, flavor, and fast service are our core values.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-red-600 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-white/60 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-red-500 transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-white/60 hover:text-red-500 transition-colors">Our Menu</a></li>
              <li><a href="#services" className="text-white/60 hover:text-red-500 transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-red-600 mt-1" />
                <span className="text-white/60">+254 712 042322</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-red-600 mt-1" />
                <span className="text-white/60">info@chickenkings.co.ke</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-red-600 mt-1" />
                <span className="text-white/60">Flames E-zone, Kerugoya, Kenya</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 uppercase tracking-wider">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-white/60">
                <span>Monday - Sunday</span>
                <span>8:00 AM - 8:00 PM</span>
              </li>
              <li className="pt-4 border-t border-white/10 mt-4">
                <p className="text-xs text-white/40">Delivery hours may vary based on location and kitchen volume.</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm">
            © {year} Chickenkings House Kerugoya. All Rights Reserved.
          </p>
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;