import { motion, AnimatePresence } from 'framer-motion';

export function Confetti({ trigger = 0 }) {
  if (!trigger) return null;

  const colors = ['#7a9e6b', '#c4882f', '#7a1e3c', '#f2ead8', '#8ab4c2', '#c8a97e'];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {Array.from({ length: 40 }).map((_, i) => {
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const left = `${Math.random() * 100}vw`;
        const delay = Math.random() * 0.5;
        const dur = 1.5 + Math.random() * 2;
        const rot = Math.random() * 360;

        return (
          <motion.div
            key={`${trigger}-${i}`}
            initial={{ top: -20, opacity: 1, rotate: rot }}
            animate={{ top: '100vh', opacity: 0, rotate: rot + 720 }}
            transition={{ duration: dur, delay, ease: 'easeIn' }}
            className="absolute w-3 h-3 rounded-sm"
            style={{ left, backgroundColor: bg }}
          />
        );
      })}
    </div>
  );
}
