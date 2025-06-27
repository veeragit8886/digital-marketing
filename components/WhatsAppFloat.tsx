'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa'; // WhatsApp icon from react-icons

export default function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Replace with your WhatsApp number
    const message = 'Hi! I\'m interested in your digital marketing services.';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-colors duration-200 z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6" />
    </motion.button>
  );
}
