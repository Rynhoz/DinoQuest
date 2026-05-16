import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPLORE_PLACES } from '../../data/explorePlaces';
import { MISSIONS } from '../../data/missions';
import { ACCESSORIES } from '../../data/accessories';

export function ExploreSection() {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todo' },
    { id: 'vinedo', label: '🍇 Viñedos' },
    { id: 'paisaje', label: '🌄 Naturaleza' },
    { id: 'cultural', label: '🏺 Cultura' },
    { id: 'turistico', label: '📸 Turismo' }
  ];

  const filtered = filter === 'all' 
    ? EXPLORE_PLACES 
    : EXPLORE_PLACES.filter(p => p.cat === filter);

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col flex-1 pb-4"
    >
      <div className="px-4 py-4 sticky top-[76px] z-20 bg-bg/95 backdrop-blur-md">
        <h2 className="font-cinzel text-xl font-bold text-cream mb-2 flex items-center gap-2">
          🌄 Descubrir Tarija
        </h2>
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map(c => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`shrink-0 px-3 py-1.5 rounded-full text-[0.75rem] font-medium transition-colors border ${
                filter === c.id 
                  ? 'bg-gold/15 border-gold/40 text-gold-light' 
                  : 'bg-white/5 border-white/10 text-cream/50 hover:bg-white/10'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
        <AnimatePresence>
          {filtered.map((place, i) => {
            const m = MISSIONS.find(m => m.id === place.missionId);
            const acc = m ? ACCESSORIES.find(a => a.id === m.accessory) : null;
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={place.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex gap-3 hover:border-gold/20 transition-colors"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center text-3xl">
                  {place.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-cinzel font-bold text-cream text-[1rem] leading-tight mb-1">{place.name}</h3>
                  <p className="text-[0.7rem] text-cream/50 leading-snug mb-2 line-clamp-2">{place.shortDesc}</p>
                  
                  {acc && (
                    <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 rounded-md px-2 py-0.5 mt-auto">
                      <span className="text-[0.65rem]">🎁</span>
                      <span className="text-[0.65rem] font-medium text-gold-light">{acc.emoji} {acc.name.split(' ')[0]}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
