import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { MAP_PLACES } from '../../data/mapPlaces';
import { useGeolocation } from '../../hooks/useGeolocation';
import { getDistanceMeters } from '../../utils/geo';
import { useGameState } from '../../contexts/GameContext';
import { MISSIONS } from '../../data/missions';
import { ACCESSORIES } from '../../data/accessories';
import { UnlockModal } from '../modals/UnlockModal';
// Custom Marker Icon generator
const createCustomIcon = (emoji, isCompleted, isNear) => {
  const bg = isCompleted ? '#8fad72' : isNear ? '#c9982a' : '#140f08';
  const border = isCompleted ? '#4a6032' : isNear ? '#e4b84a' : '#c9982a';
  const html = `
    <div style="
      background-color: ${bg};
      border: 2px solid ${border};
      width: 32px; height: 32px;
      border-radius: 50%;
      display: flex; align-items: center; justify-center;
      box-shadow: 0 4px 10px rgba(0,0,0,0.5);
      font-size: 16px; text-align: center; line-height: 28px;
    ">
      ${emoji}
    </div>
    <div style="
      width: 0; height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 8px solid ${border};
      margin: -2px auto 0;
    "></div>
  `;
  return L.divIcon({ html, className: '', iconSize: [32, 40], iconAnchor: [16, 40], popupAnchor: [0, -38] });
};

const userIcon = L.divIcon({
  html: `<div style="width:16px;height:16px;background:#4ab8c4;border:3px solid white;border-radius:50%;box-shadow:0 0 10px rgba(74,184,196,0.8);"></div>`,
  className: '', iconSize: [16, 16], iconAnchor: [8, 8]
});

function RecenterBtn({ position }) {
  const map = useMap();
  return (
    <button 
      onClick={() => {
        if (position) map.flyTo([position.lat, position.lng], 16);
      }}
      className="absolute bottom-[20px] right-[10px] z-[400] w-12 h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-xl shadow-lg transition-transform active:scale-95"
    >
      🎯
    </button>
  );
}

export function MapSection() {
  const { position, loading } = useGeolocation();
  const { gameState, completeMission, unlockAccessory } = useGameState();
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [unlockedAcc, setUnlockedAcc] = useState(null);

  const tjaCenter = [-21.5318, -64.7290];

  return (
    <motion.section 
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="relative flex-1 w-full flex flex-col"
    >
      <div className="absolute top-4 left-4 right-4 z-[400] pointer-events-none">
        <div className="bg-bg/90 backdrop-blur-md border border-gold/20 rounded-xl p-3 shadow-lg flex items-center gap-3 pointer-events-auto">
          <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-xl shrink-0">
            📡
          </div>
          <div className="flex-1">
            <h3 className="font-cinzel font-bold text-cream text-[0.8rem]">Radar GPS</h3>
            <p className="text-[0.65rem] text-cream/60 leading-tight">
              {loading ? 'Buscando señal...' : position ? 'Señal óptima. Explora el valle.' : 'GPS desactivado'}
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 z-0 relative">
        <MapContainer 
          center={tjaCenter} 
          zoom={14} 
          zoomControl={false}
          style={{ height: '100%', width: '100%', background: '#0d0a06' }}
        >
          {/* CartoDB Dark Matter */}
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          />

          {position && (
            <Marker position={[position.lat, position.lng]} icon={userIcon} />
          )}

          {MAP_PLACES.map(place => {
            const isCompleted = gameState.completedMissions.includes(place.missionId);
            const dist = position ? getDistanceMeters(position.lat, position.lng, place.lat, place.lng) : Infinity;
            const isNear = dist <= 300;

            return (
              <Marker 
                key={place.id}
                position={[place.lat, place.lng]}
                icon={createCustomIcon(place.emoji, isCompleted, isNear)}
                eventHandlers={{ click: () => setSelectedPlace({...place, dist, isCompleted, isNear}) }}
              >
              </Marker>
            );
          })}

          <RecenterBtn position={position} />
        </MapContainer>
      </div>

      {/* Selected Place Popup / Drawer */}
      <AnimatePresence>
        {selectedPlace && (
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="absolute bottom-0 left-0 w-full z-[500] bg-[#140f08] border-t border-gold/30 rounded-t-[1.5rem] p-5 shadow-[0_-10px_40px_rgba(0,0,0,0.8)] pb-8"
          >
            <button 
              onClick={() => setSelectedPlace(null)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/5 rounded-full text-cream/50"
            >
              ✕
            </button>
            
            <div className="flex items-start gap-4 mb-4">
              <div className="text-4xl drop-shadow-md">{selectedPlace.emoji}</div>
              <div>
                <h3 className="font-cinzel text-[1.15rem] font-bold text-cream leading-tight mb-1">{selectedPlace.name}</h3>
                <p className="text-[0.75rem] text-cream/60 leading-[1.4] pr-4">{selectedPlace.desc}</p>
              </div>
            </div>

            <div className="flex justify-between items-center bg-black/30 border border-white/5 rounded-xl p-3 mb-4">
              <div className="flex flex-col">
                <span className="text-[0.65rem] uppercase tracking-wider text-cream/40 mb-1">Distancia</span>
                <span className="text-[0.9rem] font-bold text-cream">
                  {selectedPlace.dist === Infinity ? '??' : 
                    selectedPlace.dist < 1000 ? `${Math.round(selectedPlace.dist)}m` : 
                    `${(selectedPlace.dist / 1000).toFixed(1)}km`
                  }
                </span>
              </div>
              
              {!selectedPlace.isCompleted ? (
                selectedPlace.isNear ? (
                  <button 
                    onClick={() => {
                      const m = MISSIONS.find(m => m.id === selectedPlace.missionId);
                      completeMission(m.id, m.xp_recompensa || 50);
                      setSelectedPlace(prev => ({...prev, isCompleted: true}));
                      
                      const acc = ACCESSORIES.find(a => a.id === m.accessory);
                      if (acc) {
                        unlockAccessory(acc.id);
                        setUnlockedAcc(acc);
                      }
                    }}
                    className="bg-gradient-to-r from-gold to-vine text-bg px-5 py-2 rounded-lg text-[0.8rem] font-bold shadow-[0_0_15px_rgba(201,152,42,0.4)]"
                  >
                    Reclamar Premio
                  </button>
                ) : (
                  <div className="text-[0.7rem] text-wine/80 font-bold bg-wine/10 px-3 py-1.5 rounded-lg border border-wine/20">
                    Acércate a 300m
                  </div>
                )
              ) : (
                <div className="text-[0.7rem] text-sage font-bold bg-sage/10 px-3 py-1.5 rounded-lg border border-sage/20 flex items-center gap-1">
                  <span>✅</span> Completado
                </div>
              )}
            </div>

          </motion.div>
        )}
      </AnimatePresence>

      <UnlockModal 
        isOpen={!!unlockedAcc} 
        accessory={unlockedAcc} 
        onClose={() => setUnlockedAcc(null)} 
      />
    </motion.section>
  );
}
