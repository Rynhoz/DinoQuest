import { useGameState } from '../../contexts/GameContext';
import { ACCESSORIES } from '../../data/accessories';

export function EquippedPreview() {
  const { gameState } = useGameState();
  
  const slots = [
    { key: 'hat', icon: '🎩', label: 'Sombrero' },
    { key: 'neck', icon: '📿', label: 'Collar' },
    { key: 'bg', icon: '🖼️', label: 'Fondo' },
    { key: 'weapon', icon: '⚔️', label: 'Arma' },
  ];

  return (
    <div className="flex justify-center gap-2 px-4 mt-2">
      {slots.map(slot => {
        const id = gameState.equipped[slot.key];
        const acc = id !== null ? ACCESSORIES.find(a => a.id === id) : null;
        
        return (
          <div 
            key={slot.key}
            className={`flex flex-col items-center justify-center w-[70px] h-[75px] rounded-2xl border transition-all ${
              acc 
                ? 'bg-gradient-to-br from-white/10 to-white/5 border-gold/30 shadow-[0_2px_10px_rgba(201,152,42,0.1)]' 
                : 'bg-black/30 border-white/5 border-dashed'
            }`}
          >
            <span className="text-2xl mb-1 drop-shadow-md">
              {acc ? acc.emoji : slot.icon}
            </span>
            <span className="text-[0.6rem] font-medium text-cream/70 text-center leading-tight">
              {acc ? acc.name.split(' ')[0] : slot.label}
            </span>
            {!acc && <span className="text-[0.55rem] text-cream/30 mt-0.5">vacío</span>}
          </div>
        );
      })}
    </div>
  );
}
