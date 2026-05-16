import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Toast({ message, type = 'default', onClose }) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-[80px] left-1/2 -translate-x-1/2 z-[9999] bg-[#140f08]/90 backdrop-blur-md border border-gold/40 text-cream px-4 py-2.5 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.8)] flex items-center gap-2 whitespace-nowrap pointer-events-auto"
        >
          {type === 'success' && <span className="text-sage">✅</span>}
          {type === 'error' && <span className="text-wine">❌</span>}
          <span className="font-medium text-[0.8rem]">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
