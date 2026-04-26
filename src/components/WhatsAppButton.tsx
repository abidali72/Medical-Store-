import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
    // Replace with your actual WhatsApp number (format: country code + number without + or spaces)
    const phoneNumber = '1234567890'; // Example: 923001234567 for Pakistan
    const message = 'Hello! I would like to inquire about your medical products.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 group"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 1
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            {/* Main WhatsApp Button */}
            <div className="relative">
                {/* Pulsing ring animation */}
                <motion.div
                    className="absolute inset-0 bg-green-500 rounded-full"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.7, 0, 0.7],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Button */}
                <div className="relative bg-gradient-to-br from-green-400 to-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/50 transition-shadow duration-300">
                    <MessageCircle size={32} fill="currentColor" />
                </div>

                {/* Tooltip */}
                <motion.div
                    className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white px-4 py-2 rounded-lg whitespace-nowrap shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    initial={{ x: 10, opacity: 0 }}
                    whileHover={{ x: 0, opacity: 1 }}
                >
                    <span className="text-sm font-medium">Chat with us on WhatsApp</span>
                    {/* Arrow */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-slate-900 border-b-8 border-b-transparent"></div>
                    </div>
                </motion.div>
            </div>

            {/* Notification badge (optional - can show unread count) */}
            <motion.div
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
            >
                1
            </motion.div>
        </motion.a>
    );
};

export default WhatsAppButton;
