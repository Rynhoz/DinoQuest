import { motion, AnimatePresence } from 'framer-motion';

export function DiscountModal({ isOpen, discount, onClose }) {
  if (!discount) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={onClose}
          />

          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[320px] bg-[#1a1006] border border-wine/40 rounded-[1.5rem] overflow-hidden"
          >
            {/* Top Pattern */}
            <div className="h-16 bg-gradient-to-r from-wine to-bg border-b border-wine/30 flex items-center justify-center">
              <span className="text-white/50 text-[0.65rem] tracking-[0.3em] font-cinzel">TARIJA DISCOVERY</span>
            </div>

            <div className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 -mt-12 rounded-full bg-bg border-2 border-wine flex items-center justify-center text-2xl mb-4 shadow-lg">
                🎫
              </div>

              <h2 className="font-cinzel text-xl font-bold text-cream mb-1">
                Cupón de {discount.porcentaje}%
              </h2>
              <p className="text-[0.8rem] text-gold-light font-bold mb-4">
                en {discount.comercio}
              </p>

              <div className="w-full bg-white/5 border border-white/10 rounded-xl p-4 mb-4 border-dashed relative">
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1a1006] rounded-full border-r border-white/10" />
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#1a1006] rounded-full border-l border-white/10" />
                
                <p className="text-[0.6rem] text-cream/50 uppercase tracking-widest mb-1">Código Promocional</p>
                <p className="font-cinzel text-2xl font-bold text-white tracking-[0.1em]">{discount.codigo}</p>
              </div>

              <p className="text-[0.65rem] text-cream/40 mb-6">
                Presenta este código al momento de tu compra. Válido por 48 horas.
              </p>

              <button 
                onClick={onClose}
                className="w-full bg-wine/20 border border-wine/40 rounded-xl py-3 text-[0.85rem] font-bold text-cream transition-colors hover:bg-wine/30"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
