import { useState } from 'react';
import { useGameState } from '../../contexts/GameContext';
import { ACCESSORIES } from '../../data/accessories';
import { motion, AnimatePresence } from 'framer-motion';

export function AccGrid() {
  const [activeCat, setActiveCat] = useState('all');
  const { gameState, equipAccessory } = useGameState();

  const filtered = activeCat === 'all' 
    ? ACCESSORIES 
    : ACCESSORIES.filter(a => a.cat === activeCat);

  const isUnlocked = (id) => gameState.unlockedAcc.includes(id) || gameState.isDemo; // Allow all in demo
  const isEquipped = (cat, id) => gameState.equipped[cat] === id;

  const handleToggleEquip = (acc) => {
    if (!isUnlocked(acc.id)) return;
    equipAccessory(acc.cat, isEquipped(acc.cat, acc.id) ? null : acc.id);
  };

  const tabs = [
    { id: 'all', label: 'Todo' },
    { id: 'hat', label: '🎩 Sombrero' },
    { id: 'neck', label: '📿 Collar' },
    { id: 'bg', label: '🖼️ Fondo' },
    { id: 'weapon', label: '⚔️ Arma' },
  ];

  return (
    <div className="flex flex-col mt-4 px-4 pb-4 border-t border-gold/10">
      <div className="flex items-center gap-2 mb-3 mt-4">
        <span className="text-xl">🎨</span>
        <h2 className="font-cinzel text-lg font-bold text-cream">Personalizar a CrocoRex</h2>
      </div>

      {/* Filter Bar */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide snap-x">
        {tabs.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveCat(t.id)}
            className={`shrink-0 snap-start px-3 py-1.5 rounded-full text-[0.75rem] font-medium transition-colors border ${
              activeCat === t.id 
                ? 'bg-gold/15 border-gold/40 text-gold-light' 
                : 'bg-white/5 border-white/10 text-cream/50 hover:bg-white/10'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-2.5 mt-2">
        <AnimatePresence>
          {filtered.map(acc => {
            const unlocked = isUnlocked(acc.id);
            const equipped = isEquipped(acc.cat, acc.id);
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                key={acc.id}
                onClick={() => handleToggleEquip(acc)}
                className={`relative aspect-square rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all ${
                  unlocked 
                    ? equipped 
                      ? 'bg-gradient-to-br from-gold/20 to-vine/15 border-2 border-gold/40 shadow-[0_0_15px_rgba(201,152,42,0.2)]' 
                      : 'bg-white/5 border border-white/10 hover:border-gold/30 hover:bg-white/10'
                    : 'bg-black/40 border border-white/5 grayscale opacity-50'
                }`}
              >
                <div className="absolute top-1 left-1.5 text-[0.55rem] opacity-60">
                  {{ hat: '🎩', neck: '📿', bg: '🖼️', weapon: '⚔️' }[acc.cat]}
                </div>
                
                <span className="text-3xl drop-shadow-md mt-1">{acc.emoji}</span>
                <span className="text-[0.55rem] font-medium text-cream/80 text-center px-1 leading-tight mt-1 line-clamp-1">
                  {acc.name.split(' ').slice(0, 2).join(' ')}
                </span>
                
                {equipped && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-sage text-white text-[0.6rem] rounded-full flex items-center justify-center border-2 border-bg shadow-sm">
                    ✓
                  </div>
                )}
                {!unlocked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-2xl">
                    <span className="text-xl">🔒</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
