import { useGameState } from '../../contexts/GameContext';
import { ACCESSORIES } from '../../data/accessories';
import { motion } from 'framer-motion';

export function DinoCanvas({ animate = true, tapCount = 0 }) {
  const { gameState } = useGameState();
  const { hat, neck, bg, weapon } = gameState.equipped;

  const getAcc = (id) => ACCESSORIES.find(a => a.id === id);
  const hatAcc = hat !== null ? getAcc(hat) : null;
  const neckAcc = neck !== null ? getAcc(neck) : null;
  const bgAcc = bg !== null ? getAcc(bg) : null;
  const weaponAcc = weapon !== null ? getAcc(weapon) : null;

  return (
    <motion.div 
      animate={{ 
        y: animate ? [0, -5, 0] : 0, 
        rotate: animate ? [0, 2, -2, 0] : 0,
        scale: tapCount > 0 ? [1, 1.12, 1] : 1
      }}
      transition={{ 
        y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        rotate: { repeat: Infinity, duration: 6, ease: "easeInOut" },
        scale: { duration: 0.3 }
      }}
      className="relative w-[200px] h-[240px] mx-auto overflow-visible cursor-pointer"
    >
      <svg viewBox="0 0 200 240" width="100%" height="100%" style={{ overflow: 'visible' }}>
        {/* Shadow */}
        <ellipse cx="100" cy="228" rx="55" ry="8" fill="rgba(74,184,196,0.18)" />
        
        {/* Background layer */}
        {bgAcc && <BgLayer acc={bgAcc} />}

        {/* Tail */}
        <ellipse cx="60" cy="175" rx="28" ry="14" fill="#4aafba" transform="rotate(-20 60 175)" />
        <ellipse cx="42" cy="185" rx="18" ry="10" fill="#4aafba" transform="rotate(-30 42 185)" />
        
        {/* Body */}
        <ellipse cx="108" cy="158" rx="62" ry="58" fill="#4aafba" />
        {/* Belly */}
        <ellipse cx="115" cy="162" rx="42" ry="44" fill="#d4c458" opacity="0.85" />
        
        {/* Back spines */}
        <polygon points="108,96 103,80 113,96" fill="#aa1a1a" />
        <polygon points="122,92 118,74 128,92" fill="#aa1a1a" />
        <polygon points="136,97 133,80 142,97" fill="#aa1a1a" />
        
        {/* Left arm */}
        <ellipse cx="68" cy="168" rx="14" ry="22" fill="#3a9ca8" transform="rotate(20 68 168)" />
        <ellipse cx="62" cy="185" rx="10" ry="8" fill="#3a9ca8" />
        
        {/* Right arm */}
        <ellipse cx="152" cy="165" rx="14" ry="22" fill="#3a9ca8" transform="rotate(-20 152 165)" />
        <ellipse cx="158" cy="182" rx="10" ry="8" fill="#3a9ca8" />
        
        {/* Left leg */}
        <ellipse cx="84" cy="210" rx="16" ry="20" fill="#3a9ca8" />
        <ellipse cx="80" cy="226" rx="18" ry="8" fill="#3a9ca8" />
        
        {/* Right leg */}
        <ellipse cx="130" cy="210" rx="16" ry="20" fill="#3a9ca8" />
        <ellipse cx="134" cy="226" rx="18" ry="8" fill="#3a9ca8" />
        
        {/* Neck */}
        <ellipse cx="120" cy="105" rx="28" ry="26" fill="#4aafba" />
        
        {/* Head */}
        <ellipse cx="126" cy="74" rx="40" ry="34" fill="#4aafba" />
        
        {/* Snout */}
        <ellipse cx="160" cy="82" rx="20" ry="14" fill="#4aafba" />
        
        {/* Eyes */}
        <circle cx="136" cy="64" r="11" fill="white" />
        <circle cx="138" cy="64" r="7" fill="#1a4a5a" />
        <circle cx="140" cy="62" r="3" fill="white" />
        {/* Blink highlight */}
        <motion.ellipse 
          cx="138" cy="64" 
          animate={{ ry: animate ? [7, 7, 0.5, 7, 7] : 7 }}
          transition={{ repeat: Infinity, duration: 4, times: [0, 0.9, 0.95, 0.96, 1] }}
          fill="#1a4a5a" 
        />
        
        {/* Nostril */}
        <circle cx="167" cy="78" r="3" fill="#3a9ca8" />
        
        {/* Smile */}
        <path d="M148,88 Q158,96 166,89" stroke="#2a8090" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        
        {/* Blush */}
        <ellipse cx="118" cy="78" rx="8" ry="5" fill="#ff8888" opacity="0.35" />
        
        {/* Head crest */}
        <polygon points="108,46 104,32 114,46" fill="#aa1a1a" />
        <polygon points="120,42 117,26 127,42" fill="#aa1a1a" />
        <polygon points="132,46 130,32 140,46" fill="#cc2222" />

        {/* Neck Layer */}
        {neckAcc && <NeckLayer acc={neckAcc} />}

        {/* Hat Layer */}
        {hatAcc && <HatLayer acc={hatAcc} />}

        {/* Weapon Layer */}
        {weaponAcc && <WeaponLayer acc={weaponAcc} />}
      </svg>
    </motion.div>
  );
}

// Subcomponents for layers
function HatLayer({ acc }) {
  const c = acc.color || '#3a1a05';
  return (
    <g>
      <rect x="90" y="22" width="50" height="8" rx="3" fill={c}/>
      <rect x="96" y="10" width="38" height="16" rx="5" fill={c}/>
      <text x="115" y="22" fontSize="13" textAnchor="middle">{acc.emoji}</text>
    </g>
  );
}

function NeckLayer({ acc }) {
  const c = acc.color || '#c8a97e';
  return (
    <g>
      <circle cx="108" cy="106" r="10" fill="none" stroke={c} strokeWidth="3" opacity="0.8"/>
      <text x="108" y="100" fontSize="12" textAnchor="middle">{acc.emoji}</text>
    </g>
  );
}

function BgLayer({ acc }) {
  return (
    <g>
      <circle cx="100" cy="120" r="105" fill="rgba(74,175,186,0.12)" opacity="0.5"/>
      <text x="100" y="215" fontSize="24" textAnchor="middle" opacity="0.4">{acc.emoji}</text>
    </g>
  );
}

function WeaponLayer({ acc }) {
  return (
    <g>
      <text x="55" y="178" fontSize="18" textAnchor="middle">{acc.emoji}</text>
    </g>
  );
}
