
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Pill } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
            <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                {/* Brand Info */}
                <div>
                    <div className="flex items-center gap-2 mb-4 text-white">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <Pill size={20} />
                        </div>
                        <span className="text-xl font-bold">
                            Darman<span className="text-primary">Medical</span>
                        </span>
                    </div>
                    <p className="text-slate-400 mb-6 leading-relaxed">
                        Your trusted partner in health and wellness. We provide high-quality medicines and healthcare products with doorstep delivery.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                            <a
                                key={index}
                                href="#"
                                className="bg-slate-800 p-2 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
                    <ul className="space-y-3">
                        {['Home', 'About Us', 'Products', 'Categories', 'Contact'].map((item) => (
                            <li key={item}>
                                <Link
                                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                                    className="hover:text-primary transition-colors duration-200 flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 hover:opacity-100 transition-opacity"></span>
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Categories */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Categories</h3>
                    <ul className="space-y-3">
                        {['Prescription Medicine', 'Wellness & Vitamins', 'Personal Care', 'Baby Care', 'First Aid'].map((item) => (
                            <li key={item}>
                                <Link
                                    to="/products"
                                    className="hover:text-primary transition-colors duration-200"
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin className="text-primary shrink-0 mt-1" size={20} />
                            <span>123 Health Street, Medical District, City, Country 12345</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone className="text-primary shrink-0" size={20} />
                            <span>+1 (234) 567-8900</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail className="text-primary shrink-0" size={20} />
                            <span>support@darmanmedical.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container-custom pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
                <p>&copy; {new Date().getFullYear()} Darman Medical Store. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
