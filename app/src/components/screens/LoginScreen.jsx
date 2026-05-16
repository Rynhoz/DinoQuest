import { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';

export function LoginScreen() {
  const [name, setName] = useState('');
  const { loginDemo } = useAuth();

  const handleDemoLogin = () => {
    loginDemo(name || 'Turista Demo');
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-[#0e0a05] via-[#1a1006] to-[#0d0804] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[radial-gradient(ellipse,rgba(90,128,66,0.12)_0%,transparent_70%)] animate-[float_8s_ease-in-out_infinite]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[radial-gradient(ellipse,rgba(138,26,54,0.12)_0%,transparent_70%)] animate-[float_10s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-screen px-6 py-8">
        <motion.img 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          src="https://res.cloudinary.com/ds4qnoypm/image/upload/v1772977904/file_00000000d13071f5a9a7f0b21686ed5d_rhymwv.png" 
          alt="DynoQuest" 
          className="w-[110px] h-[110px] object-contain mb-2 drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]"
        />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="text-[0.62rem] text-gold/70 tracking-[0.22em] uppercase mb-7"
        >
          Tarija Discovery · Bolivia
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[340px] bg-white/5 border border-gold/20 rounded-[1.4rem] p-6 backdrop-blur-md shadow-2xl"
        >
          <p className="text-[0.7rem] uppercase tracking-[0.15em] text-sage font-semibold mb-5 font-cinzel text-center">
            Iniciar aventura
          </p>
          
          <div className="flex flex-col gap-3">
            <input 
              className="w-full bg-white/5 border border-gold/15 rounded-xl px-4 py-3 text-cream text-sm outline-none transition-all focus:border-gold/45 focus:bg-gold/5 focus:ring-2 focus:ring-gold/10 placeholder:text-cream/30"
              type="text" 
              placeholder="Tu nombre explorador" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button 
              className="w-full bg-gradient-to-br from-vine to-gold rounded-xl py-3 text-white text-sm font-semibold transition-all hover:opacity-90 hover:-translate-y-[1px] hover:shadow-[0_6px_20px_rgba(201,152,42,0.35)] active:translate-y-0 relative overflow-hidden"
            >
              Comenzar exploración -&gt;
            </button>
            <button 
              onClick={handleDemoLogin}
              className="w-full bg-gradient-to-br from-sky/30 to-sky/20 border-2 border-sky/40 rounded-xl py-3 text-sky text-sm font-semibold transition-all hover:bg-sky/20"
            >
              Modo demo -&gt;
            </button>
          </div>
        </motion.div>

        <p className="mt-5 text-[0.67rem] text-cream/30 text-center max-w-[240px] leading-relaxed">
          Colecciona accesorios para CrocoRex visitando los lugares históricos y naturales de Tarija
        </p>
      </div>
    </div>
  );
}
