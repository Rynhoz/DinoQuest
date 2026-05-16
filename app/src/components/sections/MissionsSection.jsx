import { motion } from 'framer-motion';
import { MISSIONS } from '../../data/missions';
import { ACCESSORIES } from '../../data/accessories';
import { useGameState } from '../../contexts/GameContext';

export function MissionsSection() {
  const { gameState } = useGameState();

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col flex-1 px-4 py-4"
    >
      <div className="mb-4">
        <h2 className="font-cinzel text-xl font-bold text-cream mb-1 flex items-center gap-2">
          🗺️ Misiones · Tarija
        </h2>
        <p className="text-[0.8rem] text-cream/50">
          Visita lugares para ganar accesorios y descubrir la historia de los valles.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {MISSIONS.map((m, i) => {
          const isDone = gameState.completedMissions.includes(m.id);
          const isActive = i === 0 && !isDone; // Mock logic for "active"
          return (
            <MissionCard 
              key={m.id} 
              mission={m} 
              index={i} 
              completed={isDone} 
              active={isActive} 
            />
          );
        })}
      </div>
    </motion.section>
  );
}

function MissionCard({ mission, index, completed, active }) {
  const { setCurrentSection } = useGameState();
  const acc = ACCESSORIES.find(a => a.id === mission.accessory);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      whileHover={{ y: -2 }}
      className={`relative overflow-hidden rounded-2xl p-4 transition-all duration-300 ${
        completed 
          ? 'bg-sage/5 border border-sage/20 opacity-80' 
          : active
            ? 'bg-gradient-to-br from-gold/10 to-wine/5 border border-gold/30 shadow-[0_4px_20px_rgba(201,152,42,0.15)]'
            : 'bg-white/5 border border-white/10 hover:border-gold/20'
      }`}
    >
      {active && (
        <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-vine via-gold to-wine" />
      )}

      <div className="text-[0.68rem] font-bold text-gold/80 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
        <span>{mission.emoji}</span> {mission.place}
      </div>
      
      <h3 className="font-cinzel font-bold text-cream text-[1.1rem] leading-tight mb-2">
        {mission.name}
      </h3>
      
      <p className="text-[0.78rem] text-cream/60 leading-[1.45] mb-3">
        {mission.desc}
      </p>
      
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-2.5 py-1 border border-white/10">
          <span className="text-[0.75rem]">🎁</span>
          <span className="text-[0.75rem] font-medium text-cream">{acc?.emoji} {acc?.name}</span>
          <span className="text-[0.75rem] text-sage font-bold">· +{acc?.xp} XP</span>
        </div>
      </div>

      {completed ? (
        <div className="flex items-center gap-2 text-[0.75rem] text-sage font-bold bg-sage/10 px-3 py-1.5 rounded-lg w-fit">
          <span>✅</span> Completada · XP reclamados
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setCurrentSection('map')}
            className="bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-[0.8rem] font-semibold text-cream hover:bg-white/20 transition-colors flex items-center gap-2"
          >
            <span>🗺️</span> Ver en el Mapa
          </button>
          <button className="bg-white/5 border border-white/10 rounded-xl p-2 text-cream/60 hover:text-cream hover:bg-white/10 transition-colors">
            📤
          </button>
        </div>
      )}
    </motion.div>
  );
}
