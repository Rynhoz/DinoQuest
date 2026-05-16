import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function QRModal({ isOpen, onClose }) {
  const [tab, setTab] = useState('main');

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[340px] bg-gradient-to-br from-[#160f05] to-[#120c04] border border-gold/30 rounded-2xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
          >
            {/* Header */}
            <div className="flex bg-black/20 border-b border-gold/10">
              <button 
                onClick={() => setTab('main')}
                className={`flex-1 py-3 text-[0.75rem] font-bold uppercase tracking-wider transition-colors ${tab === 'main' ? 'text-gold-light border-b-2 border-gold' : 'text-cream/40'}`}
              >
                📱 Mi App
              </button>
              <button 
                onClick={() => setTab('donate')}
                className={`flex-1 py-3 text-[0.75rem] font-bold uppercase tracking-wider transition-colors ${tab === 'donate' ? 'text-gold-light border-b-2 border-gold' : 'text-cream/40'}`}
              >
                💛 Apoyo
              </button>
            </div>

            <button 
              onClick={onClose}
              className="absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-cream/50"
            >
              ✕
            </button>

            {/* Content */}
            <div className="p-6 text-center">
              {tab === 'main' ? (
                <>
                  <h3 className="font-cinzel text-lg font-bold text-cream mb-2">DynoQuest</h3>
                  <p className="text-[0.75rem] text-cream/60 mb-5">Escanea para abrir la app en otro dispositivo.</p>
                  <div className="bg-white p-3 rounded-xl mx-auto w-fit mb-4">
                    <img src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=https://dynoquest.com" alt="QR App" className="w-[160px] h-[160px]" />
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-cinzel text-lg font-bold text-cream mb-2">Apoya el Proyecto</h3>
                  <p className="text-[0.75rem] text-cream/60 mb-5">Tu aporte ayuda a preservar la cultura tarijeña.</p>
                  <div className="bg-white p-3 rounded-xl mx-auto w-fit mb-4">
                    <img src="https://res.cloudinary.com/ds4qnoypm/image/upload/v1772975187/SmartSelect_20260308_090455_nfyt6l.png" alt="QR Donación" className="w-[160px] h-[160px] object-cover" />
                  </div>
                  <button className="bg-gold/20 text-gold-light border border-gold/40 px-6 py-2 rounded-lg text-[0.8rem] font-bold">
                    Descargar QR
                  </button>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
