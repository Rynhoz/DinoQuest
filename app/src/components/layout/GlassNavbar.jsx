import { useGameState } from '../../contexts/GameContext';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';

export function GlassNavbar() {
  const { gameState, setCurrentSection } = useGameState();
  const { user } = useAuth();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[398px] h-[52px] bg-[#0d0a06]/80 backdrop-blur-[20px] border border-gold/20 rounded-full flex items-center px-4 z-[9000] shadow-[0_4px_24px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)]"
    >
      <div 
        className="font-cinzel text-[1.2rem] font-bold text-cream flex items-center gap-1.5 tracking-[0.08em] cursor-pointer"
        onClick={() => setCurrentSection('hero')}
      >
        DynoQuest <span>🦕</span>
      </div>
      
      <div className="flex-1"></div>
      
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-full px-2.5 py-1 text-[0.72rem] font-semibold text-gold-light whitespace-nowrap">
          ⭐ <span>{gameState.xp} XP</span>
        </div>
        
        <div 
          className="w-8 h-8 rounded-full bg-gradient-to-br from-vine to-wine flex items-center justify-center text-[0.85rem] font-bold text-cream cursor-pointer border-[1.5px] border-gold/30 transition-transform hover:scale-110 hover:shadow-[0_0_12px_rgba(201,152,42,0.4)]"
          onClick={() => setCurrentSection('about')}
        >
          <span>{(user?.name?.[0] || '?').toUpperCase()}</span>
        </div>
      </div>
    </motion.nav>
  );
}
