import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { ArrowRight, Star, ShieldCheck, Truck, Clock, Send, Heart } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Home = () => {
    const [cartItems, setCartItems] = useState<number[]>([]);
    const [wishlistItems, setWishlistItems] = useState<number[]>([]);

    const addToCart = (itemId: number) => {
        setCartItems([...cartItems, itemId]);
        alert(`Product ${itemId} added to cart!`);
    };

    const toggleWishlist = (itemId: number) => {
        if (wishlistItems.includes(itemId)) {
            setWishlistItems(wishlistItems.filter(id => id !== itemId));
        } else {
            setWishlistItems([...wishlistItems, itemId]);
        }
    };

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 to-white">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-100/30 rounded-bl-[100px] -z-10" />

                <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-primary font-medium text-sm mb-6">
                            #1 Trusted Online Pharmacy
                        </span>
                        <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                            Your Health, <br />
                            <span className="text-primary">Our Priority</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 max-w-lg">
                            Get your medicines delivered to your doorstep. We provide 100% authentic medicines with 24/7 customer support.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products" className="btn-primary flex items-center gap-2">
                                Shop Now <ArrowRight size={20} />
                            </Link>
                            <button
                                className="btn-secondary"
                                onClick={() => alert('Upload prescription feature coming soon! For now, please contact us via WhatsApp.')}
                            >
                                Upload Prescription
                            </button>
                        </div>

                        <div className="mt-12 flex gap-8">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600">
                                    <ShieldCheck size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">100%</p>
                                    <p className="text-sm text-slate-500">Authentic</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                                    <Truck size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">Fast</p>
                                    <p className="text-sm text-slate-500">Delivery</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-800">24/7</p>
                                    <p className="text-sm text-slate-500">Support</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative z-10 animate-float">
                            <img
                                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Medical Products"
                                className="rounded-3xl shadow-2xl w-full max-w-md mx-auto"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute top-10 -right-4 w-24 h-24 bg-yellow-400 rounded-full blur-3xl opacity-20" />
                        <div className="absolute -bottom-10 -left-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20" />
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Shop by Category</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto">Find exactly what you need from our wide range of medical categories.</p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                    >
                        {['Medicines', 'Baby Care', 'Vitamins', 'Personal Care', 'Devices', 'Ayurveda'].map((cat, idx) => (
                            <Link
                                key={idx}
                                to="/categories"
                            >
                                <motion.div
                                    variants={fadeInUp}
                                    className="bg-slate-50 p-6 rounded-2xl text-center hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer group"
                                >
                                    <div className="w-16 h-16 mx-auto bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300 text-primary">
                                        <Star size={24} />
                                    </div>
                                    <h3 className="font-semibold text-slate-800">{cat}</h3>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Featured Medicines */}
            <section className="py-20 bg-slate-50">
                <div className="container-custom">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Products</h2>
                            <p className="text-slate-500">Top selling medicines and healthcare products.</p>
                        </div>
                        <Link to="/products" className="text-primary font-semibold hover:text-primary-dark flex items-center gap-1">
                            View All <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 group">
                                <div className="relative bg-slate-100 rounded-xl h-48 mb-4 overflow-hidden">
                                    <img
                                        src={`https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80`}
                                        alt="Product"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <button
                                        onClick={() => toggleWishlist(item)}
                                        className={`absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition-colors ${wishlistItems.includes(item) ? 'text-red-500' : 'text-slate-400 hover:text-red-500'
                                            }`}
                                    >
                                        <Heart size={18} fill={wishlistItems.includes(item) ? 'currentColor' : 'none'} />
                                    </button>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                                    <Star size={14} fill="currentColor" />
                                    <span className="text-slate-400">(4.8)</span>
                                </div>
                                <h3 className="font-bold text-slate-800 text-lg mb-1">Healthcare Product {item}</h3>
                                <p className="text-slate-500 text-sm mb-4">Tablet • 500mg</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-primary">$12.99</span>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary transition-colors"
                                    >
                                        Add
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Offers Section */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="bg-primary rounded-3xl p-8 md:p-16 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="text-white">
                                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">Special Offer</span>
                                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get 25% Off on Your First Order</h2>
                                <p className="text-blue-100 text-lg mb-8">Download our app or sign up on the website to get exclusive discounts on all medicines.</p>
                                <button
                                    onClick={() => alert('Offer activated! Check your email for the discount code.')}
                                    className="bg-white text-primary font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-50 transition-colors"
                                >
                                    Grab Offer Now
                                </button>
                            </div>
                            <div className="hidden md:block relative">
                                <img
                                    src="https://images.unsplash.com/photo-1576091160550-217358c7db81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Offer"
                                    className="rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-slate-50" id="contact">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                            <p className="text-slate-600 mb-8 text-lg">Have questions about our medicines or services? Send us a message and we'll get back to you shortly.</p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-100 p-3 rounded-xl text-primary">
                                        <Truck size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Visit Us</h3>
                                        <p className="text-slate-500">123 Health Street, Medical District, City</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-green-100 p-3 rounded-xl text-green-600">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-lg">Working Hours</h3>
                                        <p className="text-slate-500">Mon - Sat: 9:00 AM - 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-3xl shadow-lg">
                            <form
                                className="space-y-6"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    alert('Message sent successfully! We will get back to you soon.');
                                }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                                        <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="How can we help?" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                    <textarea required rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all" placeholder="Your message here..."></textarea>
                                </div>
                                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                                    Send Message <Send size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
