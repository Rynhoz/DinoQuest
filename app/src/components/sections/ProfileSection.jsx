import { useGameState } from '../../contexts/GameContext';
import { useAuth } from '../../contexts/AuthContext';
import { motion } from 'framer-motion';
import { AccGrid } from '../accessories/AccGrid';
import { EquippedPreview } from '../accessories/EquippedPreview';
import { DINO_PROFILES } from '../../data/dinoProfiles';

export function ProfileSection() {
  const { gameState, updateGameState } = useGameState();
  const { user, logoutDemo } = useAuth();

  const profile = DINO_PROFILES[gameState.activeProfile];
  const level = Math.floor(gameState.xp / 100) + 1;
  const progress = gameState.xp % 100;

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col flex-1 pb-10"
    >
      {/* Header Profile */}
      <div className="px-4 py-6 bg-gradient-to-br from-white/5 to-transparent border-b border-white/5">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-vine to-wine flex items-center justify-center text-2xl border-2 border-gold/30 shadow-[0_0_20px_rgba(201,152,42,0.15)] relative">
            <span className="text-white font-bold">{user?.name?.[0]?.toUpperCase()}</span>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gold text-bg text-[0.6rem] font-bold rounded-full flex items-center justify-center border-2 border-bg">
              {level}
            </div>
          </div>
          <div className="flex-1">
            <h1 className="font-cinzel text-xl font-bold text-cream leading-tight">
              {user?.name || 'Explorador'}
            </h1>
            <p className="text-[0.75rem] text-gold/70 uppercase tracking-[0.1em] mb-1">
              {profile?.name}
            </p>
            <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden mt-1">
              <div 
                className="h-full bg-gradient-to-r from-vine to-gold" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-[0.6rem] text-cream/40 mt-1 text-right">
              {gameState.xp} / {(level) * 100} XP
            </p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="flex gap-2">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl mb-1">📍</span>
            <span className="text-[1.1rem] font-bold text-cream">{gameState.completedMissions.length}</span>
            <span className="text-[0.6rem] text-cream/50 uppercase tracking-[0.05em]">Lugares</span>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl mb-1">🎒</span>
            <span className="text-[1.1rem] font-bold text-cream">{gameState.unlockedAcc.length}</span>
            <span className="text-[0.6rem] text-cream/50 uppercase tracking-[0.05em]">Accesorios</span>
          </div>
          <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col items-center">
            <span className="text-xl mb-1">🎫</span>
            <span className="text-[1.1rem] font-bold text-cream">{gameState.discounts.length}</span>
            <span className="text-[0.6rem] text-cream/50 uppercase tracking-[0.05em]">Cupones</span>
          </div>
        </div>
      </div>

      {/* Accessories Management */}
      <EquippedPreview />
      <AccGrid />

      {/* Select Profile */}
      <div className="px-4 py-4 border-t border-gold/10 mt-4">
        <h2 className="font-cinzel text-lg font-bold text-cream mb-3 flex items-center gap-2">
          <span className="text-xl">🗺️</span> Ruta de Exploración
        </h2>
        <div className="flex flex-col gap-2">
          {Object.entries(DINO_PROFILES).map(([key, p]) => (
            <button
              key={key}
              onClick={() => updateGameState({ activeProfile: key })}
              className={`flex items-start gap-3 p-3 rounded-xl border text-left transition-all ${
                gameState.activeProfile === key 
                  ? 'bg-gradient-to-br from-gold/10 to-wine/5 border-gold/40 shadow-[0_4px_15px_rgba(201,152,42,0.1)]' 
                  : 'bg-white/5 border-white/10 hover:border-gold/20 hover:bg-white/10'
              }`}
            >
              <span className="text-3xl">{p.badge_icon}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-cinzel font-bold text-[0.95rem] text-cream">{p.name}</span>
                  {gameState.activeProfile === key && (
                    <span className="bg-gold/20 text-gold-light text-[0.6rem] font-bold px-2 py-0.5 rounded-md uppercase">Activa</span>
                  )}
                </div>
                <p className="text-[0.7rem] text-cream/60 leading-snug">{p.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Settings / Logout */}
      <div className="px-4 mt-6">
        <button 
          onClick={logoutDemo}
          className="w-full py-3 rounded-xl border border-wine/40 text-wine/80 font-bold text-[0.8rem] transition-colors hover:bg-wine/10 hover:text-wine"
        >
          Cerrar Sesión
        </button>
      </div>

    </motion.section>
  );
}
