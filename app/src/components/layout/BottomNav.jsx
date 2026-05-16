import { useGameState } from '../../contexts/GameContext';
import { motion } from 'framer-motion';

const TABS = [
  { id: 'hero', icon: '🏠', label: 'Inicio' },
  { id: 'explore', icon: '🌄', label: 'Descubrir' },
  { id: 'map', icon: '🗺️', label: 'Mapa' },
  { id: 'places', icon: '📍', label: 'Misiones' },
  { id: 'about', icon: '👤', label: 'Perfil' },
];

export function BottomNav() {
  const { currentSection, setCurrentSection } = useGameState();

  const activeIndex = TABS.findIndex(t => t.id === currentSection) || 0;

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[398px] h-[62px] bg-[#0d0a06]/90 backdrop-blur-[24px] border border-gold/20 rounded-xl flex items-center z-[8000] px-1.5 shadow-[0_4px_28px_rgba(0,0,0,0.55),0_0_0_1px_rgba(255,255,255,0.04)] isolate">
      
      {/* Sliding Indicator */}
      <div 
        className="absolute top-1.5 bottom-1.5 w-[calc(20%-6px)] bg-gradient-to-br from-gold/20 to-wine/15 border border-gold/30 rounded-lg transition-all duration-300 ease-out z-0 pointer-events-none"
        style={{ left: `calc(${activeIndex * 20}% + 3px)` }}
      />

      {TABS.map((tab) => {
        const isActive = currentSection === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setCurrentSection(tab.id)}
            className={`flex-1 flex flex-col items-center justify-center gap-1 bg-transparent border-none py-2 rounded-lg transition-colors z-10 uppercase tracking-[0.05em] font-medium text-[0.6rem] ${isActive ? 'text-gold-light' : 'text-cream/30 hover:text-cream/60'}`}
          >
            <span className="text-lg leading-none">{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
}
