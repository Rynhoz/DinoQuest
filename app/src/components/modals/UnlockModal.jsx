import { motion, AnimatePresence } from 'framer-motion';
import { Confetti } from '../ui/Confetti';

export function UnlockModal({ isOpen, accessory, onClose }) {
  if (!accessory) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />
          
          <Confetti trigger={isOpen ? 1 : 0} />

          {/* Modal Card */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 30 }}
            transition={{ type: "spring", bounce: 0.4 }}
            className="relative w-full max-w-[320px] bg-gradient-to-b from-[#2a1a0a] to-[#120c04] border border-gold/40 rounded-[2rem] p-6 flex flex-col items-center text-center shadow-[0_20px_60px_rgba(201,152,42,0.3)] overflow-hidden"
          >
            {/* Glow behind accessory */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[150px] h-[150px] bg-gold/20 rounded-full blur-[40px] pointer-events-none" />

            <h3 className="font-cinzel text-gold-light text-[0.8rem] uppercase tracking-[0.15em] font-bold mb-6">
              ¡Accesorio Desbloqueado!
            </h3>

            <motion.div 
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-white/10 to-transparent border-2 border-gold/30 flex items-center justify-center shadow-[0_0_30px_rgba(201,152,42,0.2)] mb-6"
            >
              <span className="text-6xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                {accessory.emoji}
              </span>
            </motion.div>

            <h2 className="font-cinzel text-2xl font-bold text-cream mb-2 leading-tight">
              {accessory.name}
            </h2>
            
            <p className="text-[0.8rem] text-cream/70 leading-relaxed mb-6 px-2">
              {accessory.desc}
            </p>

            <div className="w-full flex gap-3">
              <button 
                onClick={onClose}
                className="flex-1 bg-white/10 border border-white/20 rounded-xl py-3 text-[0.85rem] font-bold text-cream transition-colors hover:bg-white/20"
              >
                Guardar
              </button>
              <button 
                onClick={() => {
                  // If we had a specific equip function here, we'd call it.
                  // For now, closing is fine, they equip in Profile.
                  onClose();
                }}
                className="flex-1 bg-gradient-to-br from-gold to-vine border border-gold/40 rounded-xl py-3 text-[0.85rem] font-bold text-[#1a1005] shadow-[0_4px_15px_rgba(201,152,42,0.4)] transition-transform active:scale-95"
              >
                ¡Genial!
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
