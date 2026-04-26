import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingCart, Heart, Search, Pill } from 'lucide-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Products', path: '/products' },
        { name: 'Categories', path: '/categories' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="bg-primary p-2 rounded-lg text-white group-hover:rotate-12 transition-transform duration-300">
                        <Pill size={24} />
                    </div>
                    <span className={`text-2xl font-bold ${isScrolled ? 'text-slate-800' : 'text-slate-800'}`}>
                        Darman<span className="text-primary">Medical</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className="relative font-medium text-slate-600 hover:text-primary transition-colors"
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 top-full h-0.5 w-full bg-primary mt-1"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Icons */}
                <div className="hidden md:flex items-center gap-4">
                    <button className="p-2 text-slate-600 hover:text-primary transition-colors hover:bg-slate-100 rounded-full">
                        <Search size={20} />
                    </button>
                    <button className="p-2 text-slate-600 hover:text-primary transition-colors hover:bg-slate-100 rounded-full">
                        <Heart size={20} />
                    </button>
                    <button className="relative p-2 text-slate-600 hover:text-primary transition-colors hover:bg-slate-100 rounded-full">
                        <ShoppingCart size={20} />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                            2
                        </span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
                    >
                        <div className="container-custom py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`text-lg font-medium ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-4 mt-4 pt-4 border-t border-slate-100">
                                <button className="flex items-center gap-2 text-slate-600">
                                    <Search size={20} /> Search
                                </button>
                                <button className="flex items-center gap-2 text-slate-600">
                                    <Heart size={20} /> Wishlist
                                </button>
                                <button className="flex items-center gap-2 text-slate-600">
                                    <ShoppingCart size={20} /> Cart (2)
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
