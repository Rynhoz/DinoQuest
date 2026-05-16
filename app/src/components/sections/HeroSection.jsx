import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGameState } from '../../contexts/GameContext';
import { DinoCanvas } from '../dino/DinoCanvas';
import { DINO_PROFILES } from '../../data/dinoProfiles';

const HERO_IMAGES = [
  'https://res.cloudinary.com/ds4qnoypm/image/upload/v1772947362/Gemini_Generated_Image_zcdbzzzcdbzzzcdb_e2azx1.png',
  'https://res.cloudinary.com/ds4qnoypm/image/upload/v1772951156/Gemini_Generated_Image_g1jx95g1jx95g1jx_gw0ogl.png'
];

export function HeroSection() {
  const { setCurrentSection, gameState } = useGameState();
  const [currentImg, setCurrentImg] = useState(0);
  const [slide, setSlide] = useState(0);
  const [tapCount, setTapCount] = useState(0);

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setCurrentImg(prev => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    const slideInterval = setInterval(() => {
      setSlide(prev => (prev + 1) % 2);
    }, 4000);

    return () => {
      clearInterval(imgInterval);
      clearInterval(slideInterval);
    };
  }, []);

  const handleTap = () => {
    setTapCount(c => c + 1);
  };

  const level = Math.floor(gameState.xp / 100) + 1;

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="flex flex-col flex-1"
    >
      {/* Hero Banner */}
      <div className="relative overflow-hidden w-full h-[320px]">
        {HERO_IMAGES.map((src, i) => (
          <img 
            key={src} src={src} alt="Tarija"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${i === currentImg ? 'opacity-55' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0a06]/15 via-[#0d0a06]/25 to-[#0d0a06]/80 pointer-events-none z-[1]" />
        
        {/* Floating emojis */}
        <div className="absolute top-[15%] left-[8%] z-[1] animate-[float_4s_ease-in-out_infinite]">🌿</div>
        <div className="absolute top-[25%] right-[10%] z-[1] animate-[float_5s_ease-in-out_infinite_-3s]">🍇</div>
        <div className="absolute top-[10%] right-[25%] z-[1] text-[2.5rem] animate-[float_4.5s_ease-in-out_infinite_-1.5s]">🦕</div>

        <div className="absolute bottom-0 left-0 w-full p-4 z-10 flex flex-col items-start gap-1 pb-6">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-[0.68rem] text-cream font-bold tracking-[0.1em] uppercase border border-white/20 mb-1">
            🦕 Tarija · Bolivia
          </div>
          <h1 className="text-[2.3rem] font-cinzel font-bold text-cream leading-[1.15] drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            Descubre la <em className="text-gold-light font-medium italic">magia</em><br/>de Tarija
          </h1>
          <p className="text-[0.88rem] text-cream/70 leading-[1.4] max-w-[280px] drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)] mt-1">
            Explora viñedos, cañones, sitios culturales y paisajes únicos. Colecciona accesorios.
          </p>
        </div>
      </div>

      {/* 4 Action Buttons */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <button onClick={() => setCurrentSection('map')} className="flex-1 bg-gradient-to-br from-vine to-gold border-none rounded-[0.85rem] py-[0.7rem] px-2 text-white font-inter text-[0.85rem] font-bold shadow-[0_4px_12px_rgba(90,128,66,0.3)] transition-transform active:scale-95 text-center">
            🗺️ Explorar Mapa
          </button>
          <button onClick={() => setCurrentSection('explore')} className="flex-1 bg-white/5 border border-gold/20 rounded-[0.85rem] py-[0.7rem] px-2 text-cream font-inter text-[0.85rem] font-medium transition-colors hover:bg-gold/10 text-center">
            🌄 Descubrir
          </button>
        </div>
        <div className="flex gap-2">
          <button onClick={() => document.getElementById('dino-anchor')?.scrollIntoView({ behavior: 'smooth' })} className="flex-1 bg-sky/10 border border-sky/25 text-sky font-inter text-[0.78rem] font-bold py-[0.6rem] px-2 rounded-[0.75rem] transition-colors hover:bg-sky/20">
            🦕 Ver Mascota
          </button>
          <button onClick={() => setCurrentSection('about')} className="flex-1 bg-gradient-to-br from-gold/20 to-wine/10 border border-gold/40 text-gold-light font-inter text-[0.78rem] font-bold py-[0.6rem] px-2 rounded-[0.75rem] transition-colors hover:bg-gold/30">
            ✦ Elegir Ruta
          </button>
        </div>
      </div>

      {/* Rotating Stats Carousel */}
      <div className="relative overflow-hidden mb-1 px-4 h-[75px]">
        <AnimatePresence mode="wait">
          {slide === 0 ? (
            <motion.div 
              key="slide0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="flex justify-between gap-2"
            >
              {[
                { n: '17', l: 'Lugares' }, { n: '17', l: 'Accesorios' }, { n: '+30', l: 'Especies' }, { n: '1900m', l: 'Altitud' }
              ].map((s, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-center bg-white/5 border border-gold/10 rounded-xl py-[0.55rem] backdrop-blur-[4px]">
                  <div className="text-[1.2rem] font-cinzel font-bold text-cream leading-none mb-1">{s.n}</div>
                  <div className="text-[0.6rem] font-bold text-gold/60 uppercase tracking-[0.1em]">{s.l}</div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="slide1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
              className="flex items-center gap-2 bg-gradient-to-br from-sky/10 to-gold/5 border border-sky/15 rounded-[0.9rem] p-3"
            >
              <span className="text-[1.4rem] shrink-0">🦣</span>
              <div>
                <div className="text-[0.72rem] font-bold text-sky uppercase tracking-[0.08em] mb-0.5">Tarija · Cuna de Gigantes</div>
                <div className="text-[0.7rem] text-cream/55 leading-[1.4]">Más de 30 especies de megafauna prehistórica habitaron estos valles hace 11.000 años.</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Dots */}
      <div className="flex justify-center gap-1.5 pb-2">
        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${slide === 0 ? 'bg-gold' : 'bg-white/20'}`} />
        <span className={`w-1.5 h-1.5 rounded-full transition-colors ${slide === 1 ? 'bg-gold' : 'bg-white/20'}`} />
      </div>

      {/* Dino Section */}
      <div id="dino-anchor" className="px-4 py-3 text-center border-t border-gold/10 mt-2">
        <h2 className="font-cinzel text-[1.25rem] font-bold text-cream flex items-center justify-center gap-2 mb-1">
          🦕 CrocoRex te acompaña
        </h2>
        <p className="text-[0.75rem] text-sage font-medium uppercase tracking-[0.15em] mb-4">Toca para interactuar</p>
      </div>

      <div className="relative pb-6" onClick={handleTap}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-sky/5 rounded-full blur-[40px] pointer-events-none" />
        
        <DinoCanvas animate={true} tapCount={tapCount} />
        
        <div className="absolute top-4 right-4 bg-sky/10 border border-sky/25 rounded-full px-3 py-1 backdrop-blur-sm flex flex-col items-center">
          <span className="text-[0.65rem] text-sky font-bold uppercase tracking-[0.1em]">CrocoRex</span>
          <span className="text-[0.8rem] font-cinzel font-bold text-cream">Lv.{level}</span>
        </div>
        
        <div className="text-center mt-2 text-[0.65rem] text-gold/40 uppercase tracking-[0.15em] font-medium">
          ✦ Toca para interactuar
        </div>
      </div>
    </motion.section>
  );
}
