
'use strict';

// ── DATA ─────────────────────────────────────────
const ACCESSORIES = [
  { id: 0, emoji: '🎩', name: 'Sombrero Chapaco', cat: 'hat', place: 'Catedral Basílica', xp: 50, desc: 'El icónico sombrero negro del valle tarijeño, símbolo chapaco por excelencia.', color: '#2a0f05' },
  { id: 1, emoji: '👑', name: 'Corona de Uvas', cat: 'hat', place: 'Viñedos Kohlberg', xp: 60, desc: 'Corona tejida con los mejores racimos del Valle Central. ¡El rey del vino!', color: '#5a0e2a' },
  { id: 2, emoji: '⛑️', name: 'Casco del Explorador', cat: 'hat', place: 'Cañón del Angosto', xp: 55, desc: 'Casco de expedicionista para adentrarse en los cañones rojos del Angosto.', color: '#8B6914' },
  { id: 3, emoji: '🪖', name: 'Yelmo del Héroe', cat: 'hat', place: 'San Lorenzo', xp: 65, desc: 'El yelmo de Esteban Arze, héroe de la Batalla de la Tablada de 1817.', color: '#3a3a2a' },
  { id: 4, emoji: '🌿', name: 'Collar de Ceibo', cat: 'neck', place: 'Parque Chapaco', xp: 40, desc: 'Flores del árbol nacional de Bolivia, tejidas en un collar natural.', color: '#3d5a2e' },
  { id: 5, emoji: '📿', name: 'Collar de Barro', cat: 'neck', place: 'Casa Dorada', xp: 45, desc: 'Artesanía tarijeña de cerámica. Cada pieza lleva 5 siglos de historia.', color: '#c8a97e' },
  { id: 6, emoji: '⛪', name: 'Medalla de San Roque', cat: 'neck', place: 'San Lorenzo', xp: 65, desc: 'Medalla del patrono de los caminantes. Protege a los exploradores del valle.', color: '#c4882f' },
  { id: 7, emoji: '🦴', name: 'Collar de Fósil', cat: 'neck', place: 'Museo Paleontológico', xp: 80, desc: 'Réplica de un hueso de mastodonte. Única joya de 11,000 años de antigüedad.', color: '#8ab4c2' },
  { id: 8, emoji: '🍇', name: 'Mochila Viñera', cat: 'bg', place: 'Viñedos Kohlberg', xp: 60, desc: 'Mochila de vendimia cargada con los mejores racimos del Valle Central.', color: '#7a1e3c' },
  { id: 9, emoji: '🌅', name: 'Capa del Portillo', cat: 'bg', place: 'Mirador El Portillo', xp: 70, desc: 'Capa color amanecer, tejida con los colores que pinta el sol sobre el valle.', color: '#c4882f' },
  { id: 10, emoji: '🦋', name: 'Alas Mariposa', cat: 'bg', place: 'Cañón del Angosto', xp: 55, desc: 'Réplica de las 200 especies de mariposas del Angosto. ¡CrocoRex puede volar!', color: '#7a9e6b' },
  { id: 11, emoji: '🏹', name: 'Carcaj del Explorador', cat: 'bg', place: 'Mirador El Portillo', xp: 70, desc: 'Carcaj lleno de flechas para explorar los cuatro puntos del horizonte tarijeño.', color: '#4a2c1a' },
  { id: 12, emoji: '🏺', name: 'Urna de Barro', cat: 'weapon', place: 'Casa Dorada', xp: 45, desc: 'Vasija de cerámica tarijeña del siglo XVII. Arte que CrocoRex porta con orgullo.', color: '#c8a97e' },
  { id: 13, emoji: '⚔️', name: 'Espada de la Tablada', cat: 'weapon', place: 'San Lorenzo', xp: 65, desc: 'Réplica de la espada usada en la Batalla de la Tablada. ¡Honor chapaco!', color: '#888888' },
  { id: 14, emoji: '🎸', name: 'Charango Tarijeño', cat: 'weapon', place: 'Parque Chapaco', xp: 40, desc: 'El charango chapaco, instrumento de los valles. CrocoRex toca folclore boliviano.', color: '#8B4513' },
  { id: 15, emoji: '🌋', name: 'Bastón del Cañón', cat: 'weapon', place: 'Cañón del Angosto', xp: 55, desc: 'Bastón de madera de cedro del Angosto. Compañero inseparable del caminante.', color: '#3d2010' },
  { id: 16, emoji: '🍾', name: 'Copa Kuhlmann', cat: 'weapon', place: 'Bodegas Kuhlmann', xp: 90, desc: 'La copa de cristal de las Bodegas Kuhlmann, ícono del vino centenario tarijeño.', color: '#5a0e2a' },
];

const MISSIONS = [
  { id: 16, name: 'Siglo de Vino Centenario', place: 'Bodegas Kuhlmann · Valle Central', desc: 'Las Bodegas Kuhlmann, fundadas a principios del siglo XX, son un hito de la historia vitivinícola tarijeña. Sus barricas de roble envejecen los mejores vinos de Bolivia a 1900m de altitud.', accessory: 16, emoji: '🍾' },
  { id: 0, name: 'La Catedral y sus Secretos', place: 'Catedral Basílica de Tarija', desc: 'Construida entre 1611 y 1691, la Catedral Basílica es el corazón espiritual de Tarija. Sus paredes guardan 400 años de historia colonial y mestiza.', accessory: 0, emoji: '⛪' },
  { id: 1, name: 'Ruta del Vino Chapaco', place: 'Viñedos Kohlberg · Valle Central', desc: 'Los valles de Tarija, a 1900m de altitud, tienen el clima perfecto para las uvas. La familia Kohlberg lleva 3 generaciones produciendo los mejores vinos de Bolivia.', accessory: 1, emoji: '🍇' },
  { id: 2, name: 'Verde Profundo del Parque', place: 'Parque Metropolitano Chapaco', desc: 'Pulmón verde de la ciudad, hogar de flora endémica de los yungas tarijeños. Un oasis donde naturaleza y ciudad conviven.', accessory: 4, emoji: '🌿' },
  { id: 3, name: 'Arte y Barro Milenario', place: 'Casa Dorada · Centro Histórico', desc: 'La Casa Dorada, joya del art nouveau tarijeño, alberga el Museo de Arte y Artesanías. Aquí convergen 5 siglos de expresión artística.', accessory: 5, emoji: '🏺' },
  { id: 4, name: 'El Angosto Mágico', place: 'Cañón del Angosto · 12km', desc: 'Un cañón de roca roja tallado por el río Guadalquivir. Sus paredes de 80 metros forman un corredor natural de biodiversidad única en Bolivia.', accessory: 2, emoji: '🦋' },
  { id: 5, name: 'Tierra de Héroes', place: 'San Lorenzo · Valle de Concepción', desc: 'A 17km de Tarija, San Lorenzo fue escenario de la Batalla de la Tablada en 1817. Un pueblo que respira historia en cada piedra.', accessory: 3, emoji: '🌄' },
  { id: 6, name: 'El Portillo del Amanecer', place: 'Mirador El Portillo · Norte', desc: 'Al norte de la ciudad, este mirador ofrece la panorámica más espectacular de los valles tarijeños al atardecer.', accessory: 9, emoji: '🌅' },
  { id: 7, name: 'Tesoros de la Megafauna', place: 'Museo Paleontológico de Tarija', desc: 'Hace 11,000 años, mastodontes y toxodontes habitaban estos valles. El museo alberga la colección de fósiles más importante de Sudamérica.', accessory: 7, emoji: '🦴' },
  { id: 8, name: 'Mochila de Vendimia', place: 'Bodega Aranjuez · Valle Central', desc: 'La Bodega Aranjuez, fundada en 1960, produce el singani tarijeño. Tradición vitivinícola de los valles que conquistó Bolivia.', accessory: 8, emoji: '🍇' },
  { id: 9, name: 'Alas del Cañón', place: 'Reserva Biológica Cordillera', desc: 'La reserva alberga más de 200 especies de mariposas endémicas. Sus colores inspiraron generaciones de artesanos tarijeños.', accessory: 10, emoji: '🦋' },
  { id: 10, name: 'Carcaj del Horizonte', place: 'Cerro Alarache · Mirador', desc: 'Desde los 2400m del Cerro Alarache se ven los cuatro valles de Tarija. Los exploradores llevan aquí su brújula desde tiempos coloniales.', accessory: 11, emoji: '🏹' },
  { id: 11, name: 'Espada de la Tablada', place: 'Museo de la Batalla · San Lorenzo', desc: 'El Museo conmemora el 15 de abril de 1817, cuando las guerrillas chapacas derrotaron al ejército realista. Historia viva del valle.', accessory: 13, emoji: '⚔️' },
  { id: 12, name: 'Charango de los Valles', place: 'Casa de la Cultura · Tarija', desc: 'La Casa de la Cultura preserva el folclore chapaco: cuecas, bailecitos y erke. El charango es el alma musical del valle.', accessory: 14, emoji: '🎸' },
  { id: 13, name: 'Medalla del Caminante', place: 'Santuario de la Virgen', desc: 'El Santuario en las afueras de Tarija es meta de peregrinos del altiplano y los valles. San Roque protege a todos los viajeros.', accessory: 6, emoji: '⛪' },
  { id: 14, name: 'Bastón del Río Bermejo', place: 'Río Bermejo · Sur de Tarija', desc: 'El Bermejo, frontera natural con Argentina, tiene riberas de cedro y arrayán. Sus caminatas son las más míticas de la región.', accessory: 15, emoji: '🌊' },
  { id: 15, name: 'El Casco del Gran Explorador', place: 'Plaza Luis de Fuentes · Centro', desc: 'La plaza fundacional de Tarija, 1574. Luis de Fuentes y Vargas plantó aquí la primera piedra de la ciudad de los valles.', accessory: 2, emoji: '⛑️' },
];

const MAP_PLACES = [
  { id: 'cat', name: 'Catedral Basílica', lat: -21.5309, lng: -64.7297, emoji: '⛪', missionId: 0, desc: 'Corazón espiritual de Tarija. Construida entre 1611-1691. 400 años de historia colonial.' },
  { id: 'vin', name: 'Viñedos Kohlberg', lat: -21.5150, lng: -64.7530, emoji: '🍇', missionId: 1, desc: 'Los mejores vinos de Bolivia. Valle Central a 1900m de altitud. 3 generaciones de tradición.' },
  { id: 'par', name: 'Parque Metropolitano Chapaco', lat: -21.5260, lng: -64.7180, emoji: '🌿', missionId: 2, desc: 'Pulmón verde de la ciudad. Flora y fauna endémica de los yungas tarijeños.' },
  { id: 'cas', name: 'Casa Dorada', lat: -21.5332, lng: -64.7312, emoji: '🏺', missionId: 3, desc: 'Joya del art nouveau tarijeño. Museo de Arte y Artesanías. 5 siglos de expresión artística.' },
  { id: 'ang', name: 'Cañón del Angosto', lat: -21.5060, lng: -64.7800, emoji: '🦋', missionId: 4, desc: 'Cañón de roca roja de 80 metros tallado por el río Guadalquivir. 200 especies de mariposas.' },
  { id: 'sal', name: 'San Lorenzo', lat: -21.4320, lng: -64.7850, emoji: '⚔️', missionId: 5, desc: 'Escenario de la Batalla de la Tablada (1817). Tierra del héroe Esteban Arze.' },
  { id: 'por', name: 'Mirador El Portillo', lat: -21.4980, lng: -64.7100, emoji: '🌅', missionId: 6, desc: 'Panorámica espectacular de los valles tarijeños al atardecer.' },
  { id: 'mus', name: 'Museo Paleontológico', lat: -21.5290, lng: -64.7340, emoji: '🦴', missionId: 7, desc: 'Colección de fósiles más importante de Sudamérica. 11,000 años de historia.' },
  { id: 'bod', name: 'Bodega Aranjuez', lat: -21.5020, lng: -64.7620, emoji: '🍷', missionId: 8, desc: 'Fundada en 1960. Produce el singani tarijeño. Tradición vitivinícola de Bolivia.' },
  { id: 'cer', name: 'Reserva Biológica Cordillera', lat: -21.5580, lng: -64.8200, emoji: '🦋', missionId: 9, desc: '200 especies de mariposas endémicas. Sus colores inspiraron generaciones de artesanos.' },
  { id: 'ala', name: 'Cerro Alarache', lat: -21.4850, lng: -64.7050, emoji: '🏹', missionId: 10, desc: 'Vista de los cuatro valles desde 2400m. Ruta de los exploradores coloniales.' },
  { id: 'tab', name: 'Museo Batalla Tablada', lat: -21.4350, lng: -64.7870, emoji: '⚔️', missionId: 11, desc: 'Conmemora el 15 de abril de 1817. Historia viva de la independencia chapaca.' },
  { id: 'cul', name: 'Casa de la Cultura', lat: -21.5315, lng: -64.7320, emoji: '🎸', missionId: 12, desc: 'Preserva el folclore chapaco: cuecas, bailecitos y erke. Alma musical del valle.' },
  { id: 'san', name: 'Santuario de la Virgen', lat: -21.5200, lng: -64.7500, emoji: '⛪', missionId: 13, desc: 'Meta de peregrinos del altiplano y los valles.' },
  { id: 'ber', name: 'Río Bermejo', lat: -21.7800, lng: -64.6500, emoji: '🌊', missionId: 14, desc: 'Frontera natural con Argentina. Riberas de cedro y arrayán.' },
  { id: 'pla', name: 'Plaza Luis de Fuentes', lat: -21.5318, lng: -64.7290, emoji: '🏛️', missionId: 15, desc: 'Plaza fundacional de Tarija, 1574. Primera piedra de la ciudad de los valles.' },
  { id: 'kuh', name: 'Bodegas Kuhlmann', lat: -21.5100, lng: -64.7480, emoji: '🍾', missionId: 16, desc: 'Bodega centenaria de Tarija. Los mejores vinos bolivianos envejecidos en barricas de roble francés.' },
];

const PLACE_REWARDS = [
  { name: 'Bodegas Kuhlmann', type: '🍷 Vino & Degustación', pct: 20 },
  { name: 'Restaurante El Viñedo', type: '🍽️ Comida', pct: 10 },
  { name: 'Bodega Kohlberg Store', type: '🍷 Vino & Souvenirs', pct: 15 },
  { name: 'Artesanías Chapacas', type: '🎁 Mercancía Oficial', pct: 10 },
  { name: 'Parrilla Los Álamos', type: '🍽️ Comida', pct: 5 },
  { name: 'Tienda Turismo Tarija', type: '🎁 Mercancía Oficial', pct: 10 },
  { name: 'Café del Valle', type: '☕ Café & Snacks', pct: 5 },
  { name: 'Restaurante Casa Chapaca', type: '🍽️ Comida', pct: 10 },
  { name: 'Heladería El Portillo', type: '🍦 Postres', pct: 15 },
];

// Explore places data (extended catalogue)
const EXPLORE_PLACES = [
  { id: 16, emoji: '🍾', name: 'Bodegas Kuhlmann', cat: 'vinedo', shortDesc: 'Bodega centenaria tarijeña. Vinos y singanis envejecidos en barricas de roble francés a 1900m.', missionId: 16 },
  { id: 0, emoji: '🍇', name: 'Viñedos Kohlberg', cat: 'vinedo', shortDesc: 'Valle Central a 1900m de altitud. 3 generaciones de tradición vinatera.', missionId: 1 },
  { id: 1, emoji: '🍷', name: 'Bodega Aranjuez', cat: 'vinedo', shortDesc: 'Singani tarijeño desde 1960. Tradición vitivinícola que conquistó Bolivia.', missionId: 8 },
  { id: 2, emoji: '🦋', name: 'Cañón del Angosto', cat: 'paisaje', shortDesc: 'Cañón de roca roja de 80m tallado por el río Guadalquivir.', missionId: 4 },
  { id: 3, emoji: '🌅', name: 'Mirador El Portillo', cat: 'paisaje', shortDesc: 'La panorámica más espectacular de los valles tarijeños al atardecer.', missionId: 6 },
  { id: 4, emoji: '🌿', name: 'Parque Chapaco', cat: 'paisaje', shortDesc: 'Pulmón verde de Tarija. Flora y fauna endémica de los yungas bolivianos.', missionId: 2 },
  { id: 5, emoji: '🏹', name: 'Cerro Alarache', cat: 'paisaje', shortDesc: 'Vista de los cuatro valles desde 2400 metros de altitud.', missionId: 10 },
  { id: 6, emoji: '⛪', name: 'Catedral Basílica', cat: 'cultural', shortDesc: 'Corazón espiritual de Tarija. 400 años de historia colonial y mestiza.', missionId: 0 },
  { id: 7, emoji: '🏺', name: 'Casa Dorada', cat: 'cultural', shortDesc: 'Joya del art nouveau tarijeño. 5 siglos de expresión artística.', missionId: 3 },
  { id: 8, emoji: '🎸', name: 'Casa de la Cultura', cat: 'cultural', shortDesc: 'Folklore chapaco: cuecas, bailecitos y erke. El alma musical del valle.', missionId: 12 },
  { id: 9, emoji: '⚔️', name: 'San Lorenzo', cat: 'cultural', shortDesc: 'Escenario de la Batalla de la Tablada (1817). Pueblo de héroes chapacas.', missionId: 5 },
  { id: 10, emoji: '🦴', name: 'Museo Paleontológico', cat: 'turistico', shortDesc: 'Mayor colección de fósiles de megafauna en Sudamérica.', missionId: 7 },
  { id: 11, emoji: '🏛️', name: 'Plaza Luis de Fuentes', cat: 'turistico', shortDesc: 'Plaza fundacional de Tarija, 1574. Primera piedra de la ciudad.', missionId: 15 },
  { id: 12, emoji: '⛪', name: 'Santuario de la Virgen', cat: 'turistico', shortDesc: 'Meta de peregrinos del altiplano y los valles tarijeños.', missionId: 13 },
  { id: 13, emoji: '🌊', name: 'Río Bermejo', cat: 'turistico', shortDesc: 'Frontera natural con Argentina. Riberas de cedro y caminatas míticas.', missionId: 14 },
];

// ── STATE ─────────────────────────────────────────
let state = {
  userName: 'Explorador',
  isDemo: true,
  unlockedAcc: [],
  equipped: { hat: null, neck: null, bg: null, weapon: null },
  xp: 0,
  completedMissions: [],
  discounts: [],
  firstHatGiven: false,
  activeProfile: null,
};
Object.defineProperty(state, 'equippedAcc', { get() { return Object.values(this.equipped).filter(v => v !== null); } });

let currentMissionId = 0;
let pendingUnlockId = null;
let cameraStream = null;

// ── PERSISTENCE ───────────────────────────────────
function loadState() {
  try {
    const raw = localStorage.getItem('urion_state');
    if (raw) {
      const s = JSON.parse(raw);
      state.userName = s.userName || 'Explorador';
      state.isDemo = s.isDemo !== undefined ? s.isDemo : true;
      state.unlockedAcc = s.unlockedAcc || [];
      state.xp = s.xp || 0;
      state.completedMissions = s.completedMissions || [];
      state.discounts = s.discounts || [];
      state.firstHatGiven = s.firstHatGiven || false;
      state.activeProfile = s.activeProfile || null;
      if (s.equipped) {
        state.equipped = { hat: null, neck: null, bg: null, weapon: null, ...s.equipped };
      } else if (s.equippedAcc) {
        s.equippedAcc.forEach(id => {
          const a = ACCESSORIES.find(x => x.id === id);
          if (a && !state.equipped[a.cat]) state.equipped[a.cat] = id;
        });
      }
    }
  } catch (e) { }
}

function saveState() {
  try {
    localStorage.setItem('urion_state', JSON.stringify({
      userName: state.userName, isDemo: state.isDemo,
      unlockedAcc: state.unlockedAcc, equipped: state.equipped,
      xp: state.xp, completedMissions: state.completedMissions,
      discounts: state.discounts,
      firstHatGiven: state.firstHatGiven,
      activeProfile: state.activeProfile,
    }));
  } catch (e) { }
}

// ── LOGIN ─────────────────────────────────────────
function doLogin() {
  const name = document.getElementById('login-name').value.trim();
  if (!name) { showToast('⚠️ Ingresa tu nombre'); return; }
  state.userName = name;
  state.isDemo = false;
  saveState();
  enterApp();
}

function doDemo() {
  state.userName = 'Turista Demo';
  state.isDemo = true;
  saveState();
  enterApp();
}

function exitDemoMode() {
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-login').classList.add('active');
  document.getElementById('login-name').value = state.userName !== 'Turista Demo' ? state.userName : '';
  showToast('📝 Crea tu cuenta para guardar el progreso');
}

function enterApp() {
  document.getElementById('screen-login').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  // Always start on Inicio
  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
  const heroSec = document.getElementById('sec-hero');
  if (heroSec) heroSec.classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const navHero = document.getElementById('nav-hero');
  if (navHero) navHero.classList.add('active');
  currentSection = 'hero';
  document.querySelector('.bottom-nav')?.style.setProperty('--active-tab', 0);
  const fb = document.getElementById('hero-float-bar');
  if (fb) { fb.classList.remove('hidden'); fb.classList.add('visible'); }
  initApp();
}

// ── INIT ──────────────────────────────────────────
function initApp() {
  loadState();
  renderAccGrid();
  renderMissions();
  renderExploreGrid('all');
  updateProfileUI();
  initDino2D();
  updateEquippedPreview();
  updateNextMissionHint();
  initScrollReveal();
  initDinoProfiles();
  updateNavProfileBadge();
  document.getElementById('avatar-initial').textContent = (state.userName[0] || '?').toUpperCase();
  document.querySelector('.bottom-nav')?.style.setProperty('--active-tab', 0);
  initHeroCarousel();
  // First time gift
  if (!state.firstHatGiven) {
    state.firstHatGiven = true;
    const hats = ACCESSORIES.filter(a => a.cat === 'hat');
    const gift = hats[Math.floor(Math.random() * hats.length)];
    if (!state.unlockedAcc.includes(gift.id)) {
      state.unlockedAcc.push(gift.id);
      state.equipped.hat = gift.id;
      saveState();
      renderAccGrid();
      updateEquippedPreview();
      update2DDinoAccessories();
      setTimeout(() => {
        spawnConfetti();
        showToast(`🎁 ¡Bienvenido! CrocoRex recibió: ${gift.emoji} ${gift.name}`);
      }, 1000);
    }
  }
}

// ── SECTION ROUTING ───────────────────────────────
let mapInitialized = false;
let currentSection = 'hero';

function switchSection(sec) {
  if (currentSection === sec) return;

  document.querySelectorAll('.app-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.nav-section-btn').forEach(b => b.classList.remove('active'));

  const secEl = document.getElementById('sec-' + sec);
  if (secEl) { secEl.classList.add('active'); secEl.scrollTop = 0; }

  const navTab = document.getElementById('nav-' + sec);
  if (navTab) navTab.classList.add('active');

  // Slide pill to active tab (order: hero=0, explore=1, map=2, places=3, about=4)
  const tabOrder = { hero: 0, explore: 1, map: 2, places: 3, about: 4 };
  const tabIdx = tabOrder[sec] ?? 0;
  document.querySelector('.bottom-nav')?.style.setProperty('--active-tab', tabIdx);

  currentSection = sec;

  // Show/hide hero float bar
  const fb = document.getElementById('hero-float-bar');
  if (fb) {
    if (sec === 'hero') { fb.classList.remove('hidden'); fb.classList.add('visible'); }
    else { fb.classList.remove('visible'); fb.classList.add('hidden'); }
  }

  if (sec === 'map') {
    if (!mapInitialized) { mapInitialized = true; setTimeout(() => initTarijaMap(), 80); }
    else if (tarijaMap) { setTimeout(() => { tarijaMap.invalidateSize(); refreshMapMarkers(); }, 80); }
  }
  if (sec === 'about') updateProfileUI();
  setTimeout(initScrollReveal, 50);
}

// ── SCROLL REVEAL ─────────────────────────────────
function initScrollReveal() {
  const elements = document.querySelectorAll('.scroll-reveal:not(.visible)');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
}

// ── ACC GRID ──────────────────────────────────────
let activeAccCat = 'all';

function renderAccGrid() {
  const grid = document.getElementById('acc-grid');
  const filtered = activeAccCat === 'all' ? ACCESSORIES : ACCESSORIES.filter(a => a.cat === activeAccCat);
  const frag = document.createDocumentFragment();

  filtered.forEach(acc => {
    const unlocked = state.unlockedAcc.includes(acc.id);
    const equipped = state.equipped[acc.cat] === acc.id;
    const div = document.createElement('div');
    div.className = 'acc-slot' + (unlocked ? (equipped ? ' equipped' : ' unlocked') : ' locked');
    const catIcon = { hat: '🎩', neck: '📿', bg: '🖼️', weapon: '⚔️' }[acc.cat];
    div.innerHTML = `
      <div class="acc-cat-tag">${catIcon}</div>
      <span class="acc-emoji">${acc.emoji}</span>
      <span class="acc-label">${acc.name.split(' ').slice(0, 2).join(' ')}</span>
      ${equipped ? '<div class="equipped-badge">✓</div>' : ''}
      ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
    `;
    div.onclick = () => unlocked ? toggleEquip(acc.id) : showToast(`🔒 Visita ${acc.place}`);
    frag.appendChild(div);
  });

  grid.innerHTML = '';
  grid.appendChild(frag);

  document.querySelectorAll('.acc-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === activeAccCat);
  });
}

function toggleEquip(id) {
  const acc = ACCESSORIES.find(a => a.id === id);
  if (!acc) return;
  if (state.equipped[acc.cat] === id) {
    state.equipped[acc.cat] = null;
    showToast(`${acc.emoji} Desequipado`);
  } else {
    state.equipped[acc.cat] = id;
    const catNames = { hat: 'Sombrero', neck: 'Collar', back: 'Espalda', weapon: 'Arma' };
    showToast(`✨ ${acc.emoji} ${acc.name} equipado!`);
  }
  saveState();
  renderAccGrid();
  updateEquippedPreview();
  update2DDinoAccessories();
}

function updateEquippedPreview() {
  const container = document.getElementById('equipped-preview');
  const slots = [
    { key: 'hat', icon: '🎩', label: 'Sombrero' },
    { key: 'neck', icon: '📿', label: 'Collar' },
    { key: 'bg', icon: '🖼️', label: 'Fondo' },
    { key: 'weapon', icon: '⚔️', label: 'Arma' },
  ];
  container.innerHTML = slots.map(slot => {
    const id = state.equipped[slot.key];
    const acc = id !== null ? ACCESSORIES.find(a => a.id === id) : null;
    return `<div class="equip-slot-badge ${acc ? 'filled' : ''}" onclick="switchSection('hero');activeAccCat='${slot.key}';renderAccGrid();" title="${slot.label}">
      <span class="esb-icon">${acc ? acc.emoji : slot.icon}</span>
      <span class="esb-label">${acc ? acc.name.split(' ')[0] : slot.label}</span>
      ${acc ? '' : '<span class="esb-empty">vacío</span>'}
    </div>`;
  }).join('');
}

// ── MISSIONS ──────────────────────────────────────
function renderMissions() {
  const list = document.getElementById('missions-list');
  const frag = document.createDocumentFragment();
  MISSIONS.forEach((m, i) => {
    const done = state.completedMissions.includes(m.id);
    const div = document.createElement('div');
    div.className = 'mission-card scroll-reveal stagger-' + Math.min((i % 6) + 1, 6) + (done ? ' completed' : (i === 0 ? ' active-mission' : ''));
    div.innerHTML = `
      <div class="mission-place">${m.emoji} ${m.place}</div>
      <div class="mission-name">${m.name}</div>
      <div class="mission-desc">${m.desc}</div>
      <div class="mission-reward">🎁 ${ACCESSORIES.find(a => a.id === m.accessory)?.emoji || '🎁'} ${ACCESSORIES.find(a => a.id === m.accessory)?.name || ''} · +${ACCESSORIES.find(a => a.id === m.accessory)?.xp || 0} XP</div>
      ${done
        ? `<div class="badge-completed">✅ Completada · +${ACCESSORIES.find(a => a.id === m.accessory)?.xp || 0} XP ganados</div>`
        : `<div class="mission-actions">
             <button class="btn-scan-mission" onclick="navigateToPlaceOnMap(${m.id})">🗺️ Ver en el Mapa</button>
             <button class="btn-share" onclick="shareMission(${m.id})">📤</button>
           </div>`}
    `;
    frag.appendChild(div);
  });
  list.innerHTML = '';
  list.appendChild(frag);
  initScrollReveal();
}

function navigateToPlaceOnMap(missionId) {
  const place = MAP_PLACES.find(p => p.missionId === missionId);
  switchSection('map');
  if (place) {
    setTimeout(() => {
      if (tarijaMap) {
        tarijaMap.setView([place.lat, place.lng], 15, { animate: true });
        const marker = mapMarkers[place.id];
        if (marker) setTimeout(() => marker.openPopup(), 500);
      }
    }, 250);
  }
}

function openARFromMission(missionId) {
  currentMissionId = missionId;
  openAR();
}

function shareMission(missionId) {
  const m = MISSIONS[missionId];
  const text = `🦕 ¡Estoy explorando ${m.place} con DynoQuest - Tarija Discovery! ${m.emoji} ${m.name}\n\n#Tarija #Bolivia #DynoQuest`;
  if (navigator.share) {
    navigator.share({ title: 'DynoQuest – Tarija Discovery', text, url: window.location.href }).catch(() => copyToClipboard(text));
  } else {
    copyToClipboard(text);
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('📋 Texto copiado'));
  } else {
    showToast('📤 ¡Comparte tu aventura!');
  }
}

function updateNextMissionHint() {
  const next = MISSIONS.find(m => !state.completedMissions.includes(m.id));
  const hint = document.getElementById('next-mission-hint');
  if (!hint) return;
  if (next) {
    hint.textContent = `Visita ${next.place} para desbloquear ${ACCESSORIES[next.accessory].emoji} ${ACCESSORIES[next.accessory].name}`;
  } else {
    hint.textContent = '🎉 ¡Has completado todas las misiones! ¡Eres un experto explorador tarijeño!';
  }
}

// ── EXPLORE GRID ──────────────────────────────────
let currentExploreCat = 'all';

function filterExplore(cat) {
  currentExploreCat = cat;
  document.querySelectorAll('.cat-filter-btn').forEach(b => b.classList.toggle('active', b.dataset.ecat === cat));
  renderExploreGrid(cat);
}

function renderExploreGrid(cat) {
  const grid = document.getElementById('explore-grid');
  const filtered = cat === 'all' ? EXPLORE_PLACES : EXPLORE_PLACES.filter(p => p.cat === cat);
  const catLabels = { vinedo: 'Viñedos', paisaje: 'Paisajes', cultural: 'Cultural', turistico: 'Turístico' };
  const frag = document.createDocumentFragment();

  filtered.forEach((place, i) => {
    const done = state.completedMissions.includes(place.missionId);
    const div = document.createElement('div');
    div.className = `explore-card ${place.cat}`;
    div.style.animationDelay = (i * 0.07) + 's';
    div.innerHTML = `
      <div class="explore-card-img">${place.emoji}</div>
      <div class="explore-card-body">
        <div class="explore-card-tag">${catLabels[place.cat] || place.cat}</div>
        <div class="explore-card-name">${place.name}</div>
        <div class="explore-card-desc">${place.shortDesc}</div>
      </div>
      <div class="explore-card-cta">
        <span>${done ? '✅ Visitado' : '🗺️ Explorar lugar'}</span>
        <div class="explore-card-cta-arrow">→</div>
      </div>
    `;
    div.onclick = () => openExploreModal(place);
    frag.appendChild(div);
  });

  grid.innerHTML = '';
  grid.appendChild(frag);
}

function openExploreModal(place) {
  const mission = MISSIONS.find(m => m.id === place.missionId);
  const acc = mission ? ACCESSORIES.find(a => a.id === mission.accessory) : null;
  const reward = PLACE_REWARDS[place.missionId % PLACE_REWARDS.length];
  const done = state.completedMissions.includes(place.missionId);
  const catLabels = { vinedo: 'Viñedos', paisaje: 'Paisajes', cultural: 'Cultural', turistico: 'Turístico' };

  document.getElementById('em-emoji').textContent = place.emoji;
  document.getElementById('em-name').textContent = place.name;
  document.getElementById('em-cat').textContent = catLabels[place.cat] || place.cat;
  document.getElementById('em-desc').textContent = mission ? mission.desc : place.shortDesc;
  document.getElementById('em-reward').innerHTML = acc
    ? `<div style="font-size:0.68rem;color:var(--sage);font-weight:600;margin-bottom:0.25rem;text-transform:uppercase;letter-spacing:0.08em">Recompensa</div>
       <div style="font-size:0.85rem;font-weight:600;color:var(--cream)">${acc.emoji} ${acc.name} · +${acc.xp} XP</div>
       <div style="font-size:0.72rem;color:rgba(232,217,188,0.45);margin-top:0.15rem">🎁 ${reward.pct}% descuento en ${reward.name}</div>`
    : '';

  const scanBtn = document.getElementById('em-scan-btn');
  if (done) {
    scanBtn.textContent = '✅ Misión completada';
    scanBtn.disabled = true;
    scanBtn.style.opacity = '0.6';
  } else {
    scanBtn.textContent = '🗺️ Ver en el Mapa';
    scanBtn.disabled = false;
    scanBtn.style.opacity = '';
    scanBtn.onclick = () => { closeExploreModal(); navigateToPlaceOnMap(place.missionId); };
  }

  const modal = document.getElementById('explore-modal');
  modal.style.display = 'flex';
  setTimeout(() => modal.style.opacity = '1', 10);
}

function closeExploreModal() {
  document.getElementById('explore-modal').style.display = 'none';
}

// Click outside explore modal
document.getElementById('explore-modal').addEventListener('click', function (e) {
  if (e.target === this) closeExploreModal();
});

// ── AR ────────────────────────────────────────────
function openAR() {
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-ar').classList.add('active');
  hideARPoint();
  startCamera();
  startGPS();
  checkFirstOpenRewardPoint();
}

function closeAR() {
  hideARPoint();
  stopCamera();
  document.getElementById('screen-ar').classList.remove('active');
  document.getElementById('screen-app').classList.add('active');
  refreshMapMarkers();
}

function stopCamera() {
  if (cameraStream) {
    cameraStream.getTracks().forEach(t => t.stop());
    cameraStream = null;
  }
  const video = document.getElementById('ar-video');
  if (video) video.srcObject = null;
}

function startCamera() {
  const permUI = document.getElementById('cam-permission-ui');
  const liveUI = document.getElementById('cam-live-ui');
  const video = document.getElementById('ar-video');
  permUI.style.display = 'flex';
  liveUI.style.display = 'none';
  document.getElementById('cam-perm-title').textContent = 'Activando cámara…';

  if (!navigator.mediaDevices?.getUserMedia) {
    showCameraError('Tu navegador no soporta acceso a cámara. Usa el modo demo.');
    return;
  }

  const constraints = [
    { video: { facingMode: { exact: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } },
    { video: { facingMode: 'environment' } },
    { video: true }
  ];

  function tryConstraint(index) {
    if (index >= constraints.length) { showCameraError('No se pudo acceder a la cámara. Usa el modo demo.'); return; }
    navigator.mediaDevices.getUserMedia(constraints[index])
      .then(stream => {
        cameraStream = stream;
        video.srcObject = stream;
        const p = video.play();
        if (p !== undefined) {
          p.then(() => { permUI.style.display = 'none'; liveUI.style.display = 'block'; showToast('📷 Cámara activa'); })
            .catch(() => { permUI.style.display = 'none'; liveUI.style.display = 'block'; video.addEventListener('click', () => video.play(), { once: true }); });
        } else {
          permUI.style.display = 'none';
          liveUI.style.display = 'block';
        }
      })
      .catch(err => {
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
          showCameraError('Permiso de cámara denegado. Actívalo en ajustes del navegador o usa el modo demo.');
        } else {
          tryConstraint(index + 1);
        }
      });
  }
  tryConstraint(0);
}

function showCameraError(msg) {
  const permUI = document.getElementById('cam-permission-ui');
  permUI.style.display = 'flex';
  document.getElementById('cam-perm-title').textContent = '⚠️ Sin cámara';
  document.getElementById('cam-perm-text').textContent = msg;
  document.getElementById('cam-perm-btn').textContent = '🔄 Reintentar';
  document.getElementById('cam-perm-btn').onclick = startCamera;
  document.getElementById('cam-live-ui').style.display = 'block';
  document.getElementById('cam-live-ui').style.zIndex = '-1';
  permUI.style.background = 'rgba(0,0,0,0.9)';
}

function simulateScan(missionId) {
  let id = missionId;
  if (id === 'random') {
    const unfinished = MISSIONS.filter(m => !state.completedMissions.includes(m.id));
    if (!unfinished.length) { showToast('🎉 ¡Completaste todas las misiones!'); return; }
    id = unfinished[Math.floor(Math.random() * unfinished.length)].id;
  }
  if (state.completedMissions.includes(id)) { showToast('✅ Ya completaste esta misión'); return; }
  pendingUnlockId = id;
  closeAR();
  setTimeout(() => showUnlockModal(id), 400);
}

// ── UNLOCK MODAL ──────────────────────────────────
function showUnlockModal(missionId) {
  const m = MISSIONS.find(x => x.id === missionId);
  if (!m) return;
  const a = ACCESSORIES.find(acc => acc.id === m.accessory);
  if (!a) return;
  const reward = PLACE_REWARDS[missionId % PLACE_REWARDS.length];
  document.getElementById('modal-emoji').textContent = a.emoji;
  document.getElementById('modal-title').textContent = a.name;
  document.getElementById('modal-place').textContent = `${m.emoji} ${m.place}`;
  document.getElementById('modal-desc').textContent = m.desc;
  document.getElementById('modal-xp').textContent = `+${a.xp} XP ⭐`;
  document.getElementById('modal-discount-teaser').textContent = `🎁 ${reward.pct}% descuento en ${reward.name}`;
  document.getElementById('unlock-modal').classList.add('active');
  spawnConfetti();
  refreshMapMarkers();
}

function equipAndDiscount() {
  const id = pendingUnlockId;
  equipItem();
  closeModal();
  if (id !== null) setTimeout(() => showDiscountModal(id, false), 350);
}

function equipItem() {
  if (pendingUnlockId === null) return;
  const m = MISSIONS.find(x => x.id === pendingUnlockId);
  if (!m) return;
  const accId = m.accessory;
  const acc = ACCESSORIES.find(a => a.id === accId);
  if (!acc) return;
  if (!state.unlockedAcc.includes(accId)) state.unlockedAcc.push(accId);
  if (!state.completedMissions.includes(pendingUnlockId)) {
    state.completedMissions.push(pendingUnlockId);
    state.xp += acc.xp;
  }
  state.equipped[acc.cat] = accId;
  saveState();
  renderAccGrid();
  renderMissions();
  updateProfileUI();
  updateEquippedPreview();
  update2DDinoAccessories();
  updateNextMissionHint();
  renderExploreGrid(currentExploreCat);
  showToast(`🎉 ${acc.emoji} ${acc.name} equipado!`);
  pendingUnlockId = null;
}

function closeModal() {
  document.getElementById('unlock-modal').classList.remove('active');
  if (pendingUnlockId !== null) {
    const m = MISSIONS.find(x => x.id === pendingUnlockId);
    if (m) {
      const acc = ACCESSORIES.find(a => a.id === m.accessory);
      if (acc) {
        if (!state.unlockedAcc.includes(acc.id)) state.unlockedAcc.push(acc.id);
        if (!state.completedMissions.includes(pendingUnlockId)) {
          state.completedMissions.push(pendingUnlockId);
          state.xp += acc.xp;
        }
      }
    }
    saveState();
    renderAccGrid();
    renderMissions();
    updateProfileUI();
    updateEquippedPreview();
    update2DDinoAccessories();
    updateNextMissionHint();
    renderExploreGrid(currentExploreCat);
    pendingUnlockId = null;
  }
}

function updateProfileRouteCard() {
  const icon = document.getElementById('profile-route-stat-icon');
  const name = document.getElementById('profile-route-stat-name');
  if (!icon || !name) return;
  if (state.activeProfile && DINO_PROFILES[state.activeProfile]) {
    const p = DINO_PROFILES[state.activeProfile];
    icon.textContent = p.badge_icon || p.icon || '🦕';
    name.textContent = p.name || 'Ruta';
  } else {
    icon.textContent = '🦕'; name.textContent = 'Sin ruta';
  }
}

// ── PROFILE UI ────────────────────────────────────
function updateProfileUI() {
  const xpCurrent = state.xp % 100;
  const level = Math.floor(state.xp / 100) + 1;
  const pct = (xpCurrent / 100 * 100).toFixed(0);
  document.getElementById('xp-display').textContent = `${state.xp} XP`;
  document.getElementById('dino-level').textContent = level;
  document.getElementById('profile-name').textContent = state.userName;
  document.getElementById('profile-mode-label').textContent = state.isDemo ? 'Modo Demo · Explorador' : 'Explorador Chapaco';
  document.getElementById('stat-visits').textContent = state.completedMissions.length;
  document.getElementById('stat-acc').textContent = state.unlockedAcc.length;
  document.getElementById('stat-xp').textContent = state.xp;
  // Level badge inside profile card
  const lvlBadge = document.getElementById('profile-level-badge');
  if (lvlBadge) lvlBadge.textContent = level;
  const xpBadge = document.getElementById('profile-xp-badge');
  if (xpBadge) xpBadge.textContent = `· ${state.xp} XP`;
  document.getElementById('xp-progress-text').textContent = `${xpCurrent} / 100 XP`;
  document.getElementById('xp-bar').style.width = pct + '%';
  const demoSec = document.getElementById('demo-exit-section');
  const realSec = document.getElementById('real-account-section');
  if (demoSec && realSec) {
    demoSec.style.display = state.isDemo ? 'block' : 'none';
    realSec.style.display = state.isDemo ? 'none' : 'block';
  }
  renderWallet();
  updateProfileRouteCard();
}

function resetGame() {
  if (confirm('¿Reiniciar todo el progreso?')) {
    state.unlockedAcc = [];
    state.equipped = { hat: null, neck: null, bg: null, weapon: null };
    state.xp = 0;
    state.completedMissions = [];
    state.discounts = [];
    state.firstHatGiven = false;
    saveState();
    renderAccGrid();
    renderMissions();
    updateProfileUI();
    updateEquippedPreview();
    update2DDinoAccessories();
    updateNextMissionHint();
    renderExploreGrid(currentExploreCat);
    showToast('🔄 Progreso reiniciado');
  }
}

// ── DISCOUNT WALLET ───────────────────────────────
let pendingDiscountData = null;

function generateDiscountCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let code = 'DYNQ-';
  for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
  return code;
}

function addDiscount(missionId, fromPoint) {
  const m = MISSIONS.find(x => x.id === missionId);
  const reward = PLACE_REWARDS[missionId % PLACE_REWARDS.length];
  const disc = {
    id: Date.now(),
    code: generateDiscountCode(),
    place: reward.name,
    type: reward.type,
    pct: reward.pct,
    location: m ? m.place : 'Tarija',
    ts: Date.now(),
    used: false,
    fromPoint: !!fromPoint,
  };
  if (!state.discounts) state.discounts = [];
  state.discounts.unshift(disc);
  saveState();
  renderWallet();
  return disc;
}

function markDiscountUsed(discId) {
  const d = state.discounts.find(x => x.id === discId);
  if (!d || d.used) return;
  d.used = true;
  saveState();
  renderWallet();
  showToast('✅ Descuento marcado como usado');
}

function renderWallet() {
  const list = document.getElementById('discounts-wallet-list');
  const badge = document.getElementById('discount-count-badge');
  const seeAllWrap = document.getElementById('wallet-see-all-wrap');
  if (!list) return;
  const discounts = state.discounts || [];
  const active = discounts.filter(d => !d.used).length;
  if (badge) badge.textContent = active > 0 ? active + ' activos' : '';
  if (!discounts.length) {
    list.innerHTML = `<div style="text-align:center;padding:1.5rem;color:rgba(200,169,126,0.3);font-size:0.8rem">Sin descuentos todavía.<br>¡Visita un lugar turístico!</div>`;
    if (seeAllWrap) seeAllWrap.style.display = 'none';
    return;
  }
  const visible = walletExpanded ? discounts : discounts.slice(0, 3);
  if (seeAllWrap) seeAllWrap.style.display = discounts.length > 3 ? 'block' : 'none';
  list.innerHTML = visible.map(d => {
    const expires = new Date(d.ts + 48 * 3600 * 1000);
    const expStr = expires.toLocaleDateString('es-BO', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
    return `<div class="wallet-card ${d.used ? 'used' : ''}">
      ${d.used
        ? `<div class="wc-used-badge">Usado</div>`
        : `<button class="wc-use-btn" onclick="markDiscountUsed(${d.id})">Marcar usado ✓</button>`}
      <div style="display:flex;align-items:flex-end;gap:0.5rem">
        <div class="wc-pct">${d.pct}%</div>
        <div>
          <div class="wc-place">${d.place}</div>
          <div class="wc-type">${d.type} · ${d.location}</div>
        </div>
      </div>
      <div class="wc-code" onclick="copyCode('${d.code}')">${d.code} 📋</div>
      <div class="wc-expires">${d.used ? 'Canjeado' : 'Vence: ' + expStr}</div>
    </div>`;
  }).join('');
}

function copyCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code).then(() => showToast('📋 Código copiado: ' + code));
  } else {
    showToast('📋 ' + code);
  }
}

function showDiscountModal(missionId, fromPoint) {
  const disc = addDiscount(missionId, fromPoint);
  document.getElementById('disc-icon').textContent = fromPoint ? '📍' : '🎁';
  document.getElementById('disc-pct').textContent = disc.pct + '%';
  document.getElementById('disc-place').textContent = disc.place;
  document.getElementById('disc-type-label').textContent = disc.type + ' · ' + disc.location;
  document.getElementById('disc-expires').textContent = 'Válido por 48h · Toca el código para copiar';
  document.getElementById('disc-code').textContent = disc.code;
  document.getElementById('discount-modal').classList.add('active');
  spawnConfetti();
}

function closeDiscountModal() {
  document.getElementById('discount-modal').classList.remove('active');
}

function copyDiscountCode() {
  copyCode(document.getElementById('disc-code').textContent);
}

// ── GPS ───────────────────────────────────────────
let userLatLng = null;
let gpsWatchId = null;
let userLocationMarker = null;
let userLocationCircle = null;
const PROXIMITY_METERS = 300;
const DEMO_BYPASS_GPS = true;

function getDistanceMeters(lat1, lng1, lat2, lng2) {
  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function isNearPlace(place) {
  if (state.isDemo && DEMO_BYPASS_GPS) return true;
  if (!userLatLng) return false;
  return getDistanceMeters(userLatLng.lat, userLatLng.lng, place.lat, place.lng) <= PROXIMITY_METERS;
}

function startGPS() {
  if (!navigator.geolocation || gpsWatchId !== null) return;
  gpsWatchId = navigator.geolocation.watchPosition(
    pos => { userLatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude }; updateUserLocationMarker(); updateARDistanceBadge(); },
    () => { userLatLng = null; },
    { enableHighAccuracy: true, maximumAge: 10000 }
  );
}

function updateUserLocationMarker() {
  if (!tarijaMap || !userLatLng) return;
  const latlng = [userLatLng.lat, userLatLng.lng];
  if (!userLocationMarker) {
    const icon = L.divIcon({ html: `<div style="width:16px;height:16px;background:#4a90e2;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 4px rgba(74,144,226,0.25)"></div>`, className: '', iconSize: [16, 16], iconAnchor: [8, 8] });
    userLocationMarker = L.marker(latlng, { icon, zIndexOffset: 1000 }).addTo(tarijaMap);
    userLocationCircle = L.circle(latlng, { radius: PROXIMITY_METERS, color: '#4a90e2', fillColor: '#4a90e2', fillOpacity: 0.06, weight: 1.5, opacity: 0.35, dashArray: '4 6' }).addTo(tarijaMap);
  } else {
    userLocationMarker.setLatLng(latlng);
    userLocationCircle.setLatLng(latlng);
  }
  refreshMapMarkers();
}

function updateARDistanceBadge() {
  const badge = document.getElementById('gps-dist-badge');
  if (!badge || !arPointMissionId) return;
  const place = MAP_PLACES.find(p => p.missionId === arPointMissionId);
  if (!place || !userLatLng) return;
  const dist = Math.round(getDistanceMeters(userLatLng.lat, userLatLng.lng, place.lat, place.lng));
  badge.textContent = dist <= PROXIMITY_METERS ? `✅ Estás aquí · ${dist}m` : `📡 ${dist}m del lugar`;
  badge.style.borderColor = dist <= PROXIMITY_METERS ? 'rgba(74,184,90,0.5)' : 'rgba(200,169,126,0.25)';
}

// ── REWARD POINTS ─────────────────────────────────
let pendingRewardPointMission = null;
let rewardPointShown = false;
let arPointMissionId = null;

function checkFirstOpenRewardPoint() {
  if (!state.unlockedAcc?.length && !rewardPointShown) {
    rewardPointShown = true;
    const nextMission = MISSIONS.find(m => !state.completedMissions.includes(m.id));
    if (nextMission) {
      pendingRewardPointMission = nextMission.id;
      setTimeout(() => showRewardPointModal(nextMission.id), 800);
    }
  }
}

function showRewardPointModal(missionId) {
  const m = MISSIONS.find(x => x.id === missionId);
  const reward = PLACE_REWARDS[missionId % PLACE_REWARDS.length];
  document.getElementById('rp-place-name').textContent = m ? m.place : 'Tarija';
  document.getElementById('rp-place-desc').textContent = m ? m.desc : '';
  document.getElementById('rp-reward-text').textContent = `🎁 ${reward.pct}% de descuento en ${reward.name}`;
  document.getElementById('reward-point-modal').style.display = 'flex';
}

function claimRewardPoint() {
  closeRewardPointModal();
  closeAR();
  const id = pendingRewardPointMission;
  pendingRewardPointMission = null;
  if (id !== null) setTimeout(() => showDiscountModal(id, true), 400);
}

function closeRewardPointModal() {
  document.getElementById('reward-point-modal').style.display = 'none';
}

function showARPoint(missionId) {
  arPointMissionId = missionId;
  const place = MAP_PLACES.find(p => p.missionId === missionId);
  const overlay = document.getElementById('ar-point-overlay');
  const badge = document.getElementById('gps-dist-badge');
  const demoDiv = document.getElementById('ar-demo-btns-container');
  if (place) document.getElementById('ar-point-place-label').textContent = place.name;
  document.getElementById('ar-point-label').textContent = '📍 ¡Toca para reclamar!';
  overlay.classList.remove('hidden');
  if (demoDiv) demoDiv.style.display = 'none';
  if (badge) {
    badge.style.display = 'block';
    badge.textContent = userLatLng ? '📡 Calculando...' : (state.isDemo ? '✅ Modo demo' : '📡 Buscando GPS...');
  }
  updateARDistanceBadge();
}

function hideARPoint() {
  arPointMissionId = null;
  document.getElementById('ar-point-overlay').classList.add('hidden');
  const demoDiv = document.getElementById('ar-demo-btns-container');
  if (demoDiv) demoDiv.style.display = 'block';
  const badge = document.getElementById('gps-dist-badge');
  if (badge) badge.style.display = 'none';
}

function claimARPoint() {
  const place = MAP_PLACES.find(p => p.missionId === arPointMissionId);
  const near = place ? isNearPlace(place) : true;
  if (!near) {
    const dist = userLatLng && place ? Math.round(getDistanceMeters(userLatLng.lat, userLatLng.lng, place.lat, place.lng)) : null;
    showToast(`📡 Debes estar a menos de ${PROXIMITY_METERS}m${dist ? ' (estás a ' + dist + 'm)' : ''}`);
    return;
  }
  const id = arPointMissionId;
  hideARPoint();
  closeAR();
  setTimeout(() => showDiscountModal(id, true), 400);
}

// ── TARIJA MAP ────────────────────────────────────
let tarijaMap = null;
let mapMarkers = {};

function initTarijaMap() {
  if (tarijaMap) return;
  tarijaMap = L.map('tarija-map', {
    center: [-21.535, -64.730],
    zoom: 13,
    zoomControl: true,
    attributionControl: false,
    zoomAnimation: true,
    markerZoomAnimation: true,
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', { maxZoom: 19, subdomains: 'abcd' }).addTo(tarijaMap);
  startGPS();
  refreshMapMarkers();
}

function getMarkerClass(placeId) {
  const place = MAP_PLACES.find(p => p.id === placeId);
  if (!place) return 'available';
  if (state.completedMissions.includes(place.missionId)) return 'completed';
  if (!state.unlockedAcc?.length) {
    const next = MISSIONS.find(m => !state.completedMissions.includes(m.id));
    if (next && next.id === place.missionId) return 'reward';
  }
  return 'available';
}

const PLACE_FUN_FACTS = {
  'cat': '¡La Catedral de Tarija tardó 80 años en construirse (1611-1691)! Sus campanas se fundieron con bronce traído en mulas desde Potosí.',
  'vin': 'Los viñedos tarijeños están a 1900m de altitud, los más altos del mundo. Esto da a sus vinos una acidez y aroma únicos en Sudamérica.',
  'par': 'El Parque Chapaco alberga más de 400 especies de plantas. Su nombre honra al apodo cariñoso de los tarijeños: "chapaco".',
  'cas': 'La Casa Dorada tiene azulejos importados de Valencia, España. Su dueño original, Moisés Navajas, tardó 12 años en construirla.',
  'ang': 'El Cañón del Angosto es tan estrecho que en algunas partes solo caben dos personas caminando de frente. Sus paredes miden hasta 80 metros.',
  'sal': 'En San Lorenzo nació Esteban Arze, el héroe chapaco que derrotó al ejército realista el 15 de abril de 1817 con apenas guerrilleros locales.',
  'por': 'Desde El Portillo se pueden ver al mismo tiempo 3 valles diferentes: el Central, el de Concepción y el de Tolomosa.',
  'mus': 'El Museo Paleontológico de Tarija tiene el esqueleto de un mastodonte casi completo. Hace 11.000 años, estos gigantes convivían con humanos en estos valles.',
  'bod': 'La Bodega Aranjuez produce el Singani, la bebida nacional de Bolivia, destilada de uvas moscatel a más de 1600m de altitud.',
  'cer': 'La Reserva Biológica Cordillera tiene más de 200 especies de mariposas, muchas endémicas. Es uno de los hotspots de biodiversidad más importantes de Bolivia.',
  'ala': 'El Cerro Alarache era un punto de vigilancia prehispánico. Los pueblos originarios encendían fogatas en su cima para comunicarse entre valles.',
  'tab': 'La Batalla de la Tablada duró solo 4 horas, pero fue decisiva para la independencia del Río de la Plata. Las mujeres chapacas también participaron activamente.',
  'cul': 'El erke es un instrumento típico de Tarija que puede medir hasta 3 metros de largo. Su sonido grave resuena por todos los valles en las festividades chapacas.',
  'san': 'El Santuario de la Virgen recibe peregrinos que caminan hasta 300km desde el altiplano boliviano. La imagen de la Virgen tiene más de 400 años de antigüedad.',
  'ber': 'El río Bermejo nace en los Andes bolivianos y desemboca en el río Paraná en Argentina. Sus aguas color bermejo (rojizo) le dan nombre.',
  'pla': 'La Plaza Luis de Fuentes tiene exactamente la misma forma que tenía en 1574. Es una de las pocas plazas fundacionales de Bolivia que conserva su trazado original.',
  'kuh': 'Las Bodegas Kuhlmann son las únicas de Bolivia con más de 100 años de historia ininterrumpida. Sus barricas de roble francés envejecen el vino lentamente a 1900m de altitud.',
};

function refreshMapMarkers() {
  if (!tarijaMap) return;
  // Remember which popup was open so we can reopen it after refresh
  let openPopupPlaceId = null;
  Object.entries(mapMarkers).forEach(([id, m]) => {
    if (m.isPopupOpen && m.isPopupOpen()) openPopupPlaceId = id;
    m.remove();
  });
  mapMarkers = {};
  MAP_PLACES.forEach(place => {
    const markerClass = getMarkerClass(place.id);
    const isDone = state.completedMissions.includes(place.missionId);
    const icon = L.divIcon({ html: `<div class="pgo-marker ${markerClass}" style="position:relative;"><div class="pgo-marker-ring"></div><div class="pgo-marker-inner">${place.emoji}</div><div class="pgo-marker-shadow"></div></div>`, className: '', iconSize: [52, 64], iconAnchor: [26, 62], popupAnchor: [0, -64] });
    const marker = L.marker([place.lat, place.lng], { icon }).addTo(tarijaMap);
    const mission = MISSIONS.find(m => m.id === place.missionId);
    const acc = mission ? ACCESSORIES.find(a => a.id === mission.accessory) : null;
    const reward = PLACE_REWARDS[place.missionId % PLACE_REWARDS.length];
    const funFact = PLACE_FUN_FACTS[place.id] || '';
    let actionBtn;
    if (isDone) {
      actionBtn = `<button class="map-popup-btn" onclick="showDiscountModal(${place.missionId},false);closeMapPopup()">🎁 Ver descuento</button>`;
    } else {
      actionBtn = `<button class="map-popup-btn reward-btn" onclick="claimPlaceReward(${place.missionId})">🎯 ¡Reclamar recompensa!</button>`;
    }
    const popupContent = `<div class="map-popup-name">${place.emoji} ${place.name}</div>
      <div class="map-popup-desc">${place.desc}</div>
      ${funFact ? `<div style="background:rgba(201,152,42,0.07);border-left:2px solid rgba(201,152,42,0.4);border-radius:0 0.5rem 0.5rem 0;padding:0.45rem 0.6rem;margin:0.45rem 0;font-size:0.7rem;color:rgba(232,217,188,0.65);line-height:1.45">💡 ${funFact}</div>` : ''}
      ${isDone ? `<div style="color:#7a9e6b;font-size:0.73rem;font-weight:600;margin-bottom:0.35rem">✅ Visitado · ${acc ? acc.emoji + ' ' + acc.name : ''}</div>`
        : `<div style="font-size:0.7rem;color:rgba(200,169,126,0.45);margin-bottom:0.35rem">🎒 ${acc ? acc.emoji + ' ' + acc.name : '—'} · 🎁 ${reward.pct}% dto.</div>`}
      ${actionBtn}`;
    marker.bindPopup(popupContent, { maxWidth: 260, autoClose: false, closeOnClick: false, keepInView: true });
    marker.on('click', function () {
      tarijaMap.eachLayer(l => { if (l.getPopup && l.getPopup() && l !== marker) l.closePopup(); });
    });
    mapMarkers[place.id] = marker;
    // Reopen popup if it was open before the refresh
    if (openPopupPlaceId !== null && String(place.id) === String(openPopupPlaceId)) {
      setTimeout(() => marker.openPopup(), 60);
    }
  });
  // Close popup when clicking the map background
  tarijaMap.off('click');
  tarijaMap.on('click', function (e) {
    if (!e.originalEvent.target.closest('.pgo-marker')) {
      tarijaMap.closePopup();
    }
  });
}

function claimPlaceReward(missionId) {
  closeMapPopup();
  if (state.completedMissions.includes(missionId)) { showToast('✅ Ya completaste esta misión'); return; }
  pendingUnlockId = missionId;
  setTimeout(() => showUnlockModal(missionId), 200);
}

function openARPoint(missionId) {
  closeMapPopup();
  currentMissionId = missionId;
  document.getElementById('screen-app').classList.remove('active');
  document.getElementById('screen-ar').classList.add('active');
  startCamera();
  setTimeout(() => showARPoint(missionId), 600);
}

function closeMapPopup() {
  tarijaMap && tarijaMap.closePopup();
}

// ── 2D DINO ───────────────────────────────────────
let dino2DAnimFrame = null;

function initDino2D() {
  update2DDinoAccessories();
  animateDino2D();
}

function animateDino2D() {
  const svg = document.getElementById('dino-2d-svg');
  if (!svg) return;
  let t = 0;
  function frame() {
    t += 0.025;
    const floatY = Math.sin(t * 0.85) * 5;
    const tiltX = Math.sin(t * 0.32) * 2;
    svg.style.transform = `translateY(${floatY}px) rotate(${tiltX}deg)`;
    // Blink
    const blink = document.getElementById('dino-eye-blink');
    if (blink) {
      const blinkCycle = t % (4.2 * 0.85);
      const sc = blinkCycle > 3.4 ? Math.max(0.05, 1 - (blinkCycle - 3.4) / 0.15) : 1;
      blink.setAttribute('ry', 7 * sc);
      blink.setAttribute('rx', 7);
    }
    dino2DAnimFrame = requestAnimationFrame(frame);
  }
  frame();
}

function update2DDinoAccessories() {
  // Hat accessories
  const hatId = state.equipped.hat;
  const hatLayer = document.getElementById('acc-hat-layer');
  if (hatLayer) {
    hatLayer.innerHTML = '';
    hatLayer.setAttribute('display', 'none');
    if (hatId !== null) {
      const acc = ACCESSORIES.find(a => a.id === hatId);
      if (acc) {
        const hatSVG = get2DHatSVG(acc);
        hatLayer.innerHTML = hatSVG;
        hatLayer.setAttribute('display', 'block');
      }
    }
  }
  // Neck accessories
  const neckId = state.equipped.neck;
  const neckLayer = document.getElementById('acc-neck-layer');
  if (neckLayer) {
    neckLayer.innerHTML = '';
    neckLayer.setAttribute('display', 'none');
    if (neckId !== null) {
      const acc = ACCESSORIES.find(a => a.id === neckId);
      if (acc) {
        neckLayer.innerHTML = get2DNeckSVG(acc);
        neckLayer.setAttribute('display', 'block');
      }
    }
  }
  // Bg/Fondo (background behind dino)
  const backId = state.equipped.bg;
  const backLayer = document.getElementById('acc-bg-layer');
  if (backLayer) {
    backLayer.innerHTML = '';
    backLayer.setAttribute('display', 'none');
    if (backId !== null) {
      const acc = ACCESSORIES.find(a => a.id === backId);
      if (acc) {
        backLayer.innerHTML = get2DBgSVG(acc);
        backLayer.setAttribute('display', 'block');
      }
    }
  }
  // Weapon
  const weaponId = state.equipped.weapon;
  const weaponLayer = document.getElementById('acc-weapon-layer');
  if (weaponLayer) {
    weaponLayer.innerHTML = '';
    weaponLayer.setAttribute('display', 'none');
    if (weaponId !== null) {
      const acc = ACCESSORIES.find(a => a.id === weaponId);
      if (acc) {
        weaponLayer.innerHTML = get2DWeaponSVG(acc);
        weaponLayer.setAttribute('display', 'block');
      }
    }
  }
}

function get2DHatSVG(acc) {
  const colors = { 0: '#2a1005', 1: '#5a0e28', 2: '#8B6914', 3: '#3a3a2a', 16: '#5a0e28' };
  const c = colors[acc.id] || '#3a1a05';
  const emojis = { 0: '🎩', 1: '👑', 2: '⛑️', 3: '🪖' };
  return `<rect x="90" y="22" width="50" height="8" rx="3" fill="${c}"/>
    <rect x="96" y="10" width="38" height="16" rx="5" fill="${c}"/>
    <text x="115" y="22" font-size="13" text-anchor="middle">${emojis[acc.id] || acc.emoji}</text>`;
}

function get2DNeckSVG(acc) {
  const emojis = { 4: '🌿', 5: '📿', 6: '⛪', 7: '🦴' };
  const c = acc.color || '#c8a97e';
  return `<circle cx="108" cy="106" r="10" fill="none" stroke="${c}" stroke-width="3" opacity="0.8"/>
    <text x="108" y="100" font-size="12" text-anchor="middle">${emojis[acc.id] || acc.emoji}</text>`;
}

function get2DBgSVG(acc) {
  // Each bg acc renders a scenic background circle/shape behind the dino
  const bgDefs = {
    8: `<circle cx="100" cy="120" r="105" fill="url(#bg-gradient-vineyard)" opacity="0.55"/>
         <defs><radialGradient id="bg-gradient-vineyard" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#5a0e28" stop-opacity="0.8"/><stop offset="100%" stop-color="#1a0508" stop-opacity="0.2"/></radialGradient></defs>
         <text x="30" y="210" font-size="22" opacity="0.6">🍇</text><text x="160" y="195" font-size="18" opacity="0.5">🍷</text>`,
    9: `<circle cx="100" cy="120" r="105" fill="url(#bg-gradient-portillo)" opacity="0.55"/>
         <defs><radialGradient id="bg-gradient-portillo" cx="50%" cy="30%" r="70%"><stop offset="0%" stop-color="#c47020" stop-opacity="0.7"/><stop offset="100%" stop-color="#0d0a06" stop-opacity="0.1"/></radialGradient></defs>
         <text x="22" y="200" font-size="20" opacity="0.55">🌄</text><text x="155" y="205" font-size="18" opacity="0.5">🌅</text>`,
    10: `<circle cx="100" cy="120" r="105" fill="url(#bg-gradient-angosto)" opacity="0.55"/>
         <defs><radialGradient id="bg-gradient-angosto" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#1a4a18" stop-opacity="0.8"/><stop offset="100%" stop-color="#0d0a06" stop-opacity="0.15"/></radialGradient></defs>
         <text x="25" y="205" font-size="20" opacity="0.55">🦋</text><text x="150" y="200" font-size="18" opacity="0.5">🌿</text>`,
    11: `<circle cx="100" cy="120" r="105" fill="url(#bg-gradient-cerro)" opacity="0.55"/>
         <defs><radialGradient id="bg-gradient-cerro" cx="50%" cy="40%" r="60%"><stop offset="0%" stop-color="#2a1a08" stop-opacity="0.75"/><stop offset="100%" stop-color="#0d0a06" stop-opacity="0.1"/></radialGradient></defs>
         <text x="22" y="202" font-size="20" opacity="0.55">🏹</text><text x="152" y="205" font-size="18" opacity="0.5">⛰️</text>`,
  };
  return bgDefs[acc.id] || `<circle cx="100" cy="120" r="105" fill="rgba(74,175,186,0.12)" opacity="0.5"/>
    <text x="100" y="215" font-size="24" text-anchor="middle" opacity="0.4">${acc.emoji}</text>`;
}

function get2DWeaponSVG(acc) {
  const emojis = { 12: '🏺', 13: '⚔️', 14: '🎸', 15: '🌋', 16: '🍾' };
  return `<text x="55" y="178" font-size="18" text-anchor="middle">${emojis[acc.id] || acc.emoji}</text>`;
}

function decorateDinoRandom() {
  const unlocked = ACCESSORIES.filter(a => state.unlockedAcc.includes(a.id));
  if (!unlocked.length) { showToast('🔒 Visita lugares para desbloquear accesorios'); return; }
  // Pick one random from each category
  const cats = ['hat', 'neck', 'bg', 'weapon'];
  let changed = 0;
  cats.forEach(cat => {
    const pool = unlocked.filter(a => a.cat === cat);
    if (pool.length) {
      const pick = pool[Math.floor(Math.random() * pool.length)];
      state.equipped[cat] = pick.id;
      changed++;
    }
  });
  if (changed) {
    saveState();
    renderAccGrid();
    updateEquippedPreview();
    update2DDinoAccessories();
    spawnConfetti();
    showToast('🎲 ¡Rex luce un nuevo look aleatorio!');
  } else {
    showToast('🔒 Desbloquea accesorios visitando lugares');
  }
}

// ── DINO PROFILES ──────────────────────────────────
const DINO_PROFILES = {
  mammoth: {
    name: 'Ruta del Mamut',
    badge: 'Tranquilo',
    badge_icon: '🦣',
    desc: 'El mamut lanar que habitó los valles de Tarija hace 11.000 años era un ser pacífico y gregario. Su ruta sigue el centro histórico conectando lugares emblemáticos y cercanos entre sí.',
    route: '📍 Plaza Fuentes → Catedral → Casa Dorada → Museo Paleontológico → Casa de la Cultura',
    missionIds: [15, 0, 3, 7, 12],
  },
  toxodon: {
    name: 'Ruta del Toxodonte',
    badge: 'Aventurero',
    badge_icon: '🦏',
    desc: 'El toxodonte era un mamífero robusto y resistente, similar al rinoceronte, que recorría los ecosistemas más variados de Bolivia. Su ruta explora los paisajes naturales más extremos de Tarija.',
    route: '🏞️ Cañón del Angosto → Reserva Biológica → Cerro Alarache → Parque Chapaco → Río Bermejo',
    missionIds: [4, 9, 10, 2, 14],
  },
  macrauchenia: {
    name: 'Ruta Macrauquenia',
    badge: 'Cultural',
    badge_icon: '🦒',
    desc: 'La macrauquenia era un animal único en Sudamérica, sin igual en el mundo, capaz de adaptarse a múltiples entornos. Su ruta recorre los sitios históricos y culturales más singulares de Tarija.',
    route: '⚔️ San Lorenzo → Batalla Tablada → Santuario Virgen → Plaza Fuentes → Casa Dorada',
    missionIds: [5, 11, 13, 15, 3],
  },
  megaterio: {
    name: 'Ruta del Megaterio',
    badge: 'Viñatero',
    badge_icon: '🦥',
    desc: 'El megaterio era el gigante perezoso que vivió en los bosques bolivianos. Con paso lento pero seguro, su ruta visita las bodegas y viñedos del Valle Central tarijeño.',
    route: '🍾 Bodegas Kuhlmann → Viñedos Kohlberg → Bodega Aranjuez → Mirador El Portillo',
    missionIds: [16, 1, 8, 6],
  },
};

function initDinoProfiles() {
  // Default to mammoth if no profile has been chosen
  if (!state.activeProfile) {
    state.activeProfile = 'mammoth';
    saveState();
  }
  const card = document.getElementById('profile-' + state.activeProfile);
  if (card) card.classList.add('active');
  showProfileDesc(state.activeProfile);
  updateNavProfileBadge();
  updateProfileRouteCard();
}

function selectDinoProfile(profileKey) {
  // Clicking the already-active profile deselects (allow no route)
  if (state.activeProfile === profileKey) {
    state.activeProfile = null;
    saveState();
    document.querySelectorAll('.dino-profile-card').forEach(c => c.classList.remove('active'));
    const box = document.getElementById('dino-profile-desc-box');
    if (box) { box.querySelector('#dp-selected-label').textContent = 'Sin perfil seleccionado'; box.querySelector('#dp-selected-desc').textContent = 'Elige un perfil de ruta para personalizar tu experiencia en Tarija.'; box.querySelector('#dp-route-label').textContent = ''; }
    updateNavProfileBadge();
    updateProfileRouteCard();
    showToast('Perfil de ruta deseleccionado', 'route');
    return;
  }
  state.activeProfile = profileKey;
  saveState();
  document.querySelectorAll('.dino-profile-card').forEach(c => c.classList.remove('active'));
  const card = document.getElementById('profile-' + profileKey);
  if (card) card.classList.add('active');
  showProfileDesc(profileKey);
  updateNavProfileBadge();
  updateProfileRouteCard();
  showToast(`🦕 Perfil ${DINO_PROFILES[profileKey].name} activado`, 'route');
}

function showProfileDesc(profileKey) {
  const p = DINO_PROFILES[profileKey];
  if (!p) return;
  const lbl = document.getElementById('dp-selected-label');
  const desc = document.getElementById('dp-selected-desc');
  const route = document.getElementById('dp-route-label');
  const box = document.getElementById('dino-profile-desc-box');
  if (lbl) lbl.textContent = (p.badge_icon || '') + ' ' + p.name + ' · ' + p.badge;
  if (desc) desc.textContent = p.desc;
  if (route) route.textContent = p.route;
  if (box) box.style.display = 'block';
}

// ── 3D DINO ───────────────────────────────────────
let dinoScene, dinoCamera, dinoRenderer, dinoGroup;
let hatMesh, crownMesh, collarMesh;
let animFrame;
let headGroup, leftArm, rightArm, leftLeg, rightLeg, tailGroup;
let blushLeft, blushRight, eyeStarL, eyeStarR;
let accMeshes = {};

function initDino3D() {
  const canvas = document.getElementById('dino-canvas');
  const w = canvas.parentElement.clientWidth;
  const h = canvas.parentElement.clientHeight;

  dinoScene = new THREE.Scene();
  dinoCamera = new THREE.PerspectiveCamera(38, w / h, 0.1, 100);
  dinoCamera.position.set(0, 1.6, 7.5);
  dinoCamera.lookAt(0, 1.1, 0);

  dinoRenderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  dinoRenderer.setSize(w, h);
  dinoRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  dinoRenderer.shadowMap.enabled = true;
  dinoRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

  // Enhanced lighting
  const ambient = new THREE.AmbientLight(0x1a2a3a, 0.6);
  dinoScene.add(ambient);

  const keyLight = new THREE.DirectionalLight(0xc8dff0, 1.1);
  keyLight.position.set(-3, 7, 4);
  keyLight.castShadow = true;
  dinoScene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x7a6040, 0.3);
  fillLight.position.set(4, 1, 2);
  dinoScene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x203040, 0.45);
  rimLight.position.set(0, -1, -5);
  dinoScene.add(rimLight);

  const underLight = new THREE.PointLight(0x0a4a4a, 0.55, 6);
  underLight.position.set(0, -0.5, 1.5);
  dinoScene.add(underLight);

  // Warm front fill
  const frontLight = new THREE.PointLight(0x4a3020, 0.4, 8);
  frontLight.position.set(0, 2, 5);
  dinoScene.add(frontLight);

  accMeshes = {};
  dinoGroup = new THREE.Group();
  dinoScene.add(dinoGroup);

  buildDino();
  buildAccessoryObjects();
  update2DDinoAccessories();

  // Responsive canvas
  const ro = new ResizeObserver(() => {
    const w2 = canvas.parentElement.clientWidth;
    const h2 = canvas.parentElement.clientHeight;
    dinoCamera.aspect = w2 / h2;
    dinoCamera.updateProjectionMatrix();
    dinoRenderer.setSize(w2, h2);
  });
  ro.observe(canvas.parentElement);

  animateDino();
}

function buildDino() {
  const skyBlue = new THREE.MeshPhongMaterial({ color: 0x4aafba, shininess: 18, specular: 0x336677 });
  const yellow = new THREE.MeshPhongMaterial({ color: 0xd4c458, shininess: 10, specular: 0x887744 });
  const redCrest = new THREE.MeshPhongMaterial({ color: 0xaa1a1a, shininess: 20, specular: 0x661111 });
  const black = new THREE.MeshPhongMaterial({ color: 0x0a0a0a, shininess: 10 });
  const orange = new THREE.MeshPhongMaterial({ color: 0xbb3a10, shininess: 40, specular: 0x884422 });
  const white = new THREE.MeshPhongMaterial({ color: 0xddd8c8, shininess: 50 });

  // Body
  const bodyGeo = new THREE.SphereGeometry(1.0, 28, 22); bodyGeo.scale(1.0, 1.08, 0.88);
  const body = new THREE.Mesh(bodyGeo, skyBlue); body.position.set(0, 1.0, 0); dinoGroup.add(body);

  // Belly
  const bellyGeo = new THREE.SphereGeometry(0.82, 22, 18); bellyGeo.scale(0.92, 1.05, 0.42);
  const belly = new THREE.Mesh(bellyGeo, yellow); belly.position.set(0, 1.0, 0.72); dinoGroup.add(belly);

  // Belly markings
  const dropGeo = new THREE.SphereGeometry(0.14, 12, 10); dropGeo.scale(0.7, 1.2, 0.35);
  dinoGroup.add(Object.assign(new THREE.Mesh(dropGeo, skyBlue), { position: new THREE.Vector3(0, 1.42, 0.82) }));

  const triGeo = new THREE.CylinderGeometry(0, 0.22, 0.22, 3, 1);
  const tri = new THREE.Mesh(triGeo, skyBlue); tri.position.set(0, 0.58, 0.82); tri.rotation.y = Math.PI / 6; dinoGroup.add(tri);

  [-0.28, 0.28].forEach(x => {
    const oGeo = new THREE.SphereGeometry(0.13, 10, 8); oGeo.scale(1, 0.7, 0.35);
    dinoGroup.add(Object.assign(new THREE.Mesh(oGeo, skyBlue), { position: new THREE.Vector3(x, 0.75, 0.82) }));
  });

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.42, 0.55, 0.38, 14);
  const neck = new THREE.Mesh(neckGeo, skyBlue); neck.position.set(0, 1.95, 0.12); neck.rotation.x = -0.15; dinoGroup.add(neck);

  // Head
  headGroup = new THREE.Group(); headGroup.position.set(0, 2.44, 0.18); dinoGroup.add(headGroup);
  const skullGeo = new THREE.SphereGeometry(0.72, 26, 20); skullGeo.scale(1.08, 0.95, 1.0);
  headGroup.add(new THREE.Mesh(skullGeo, skyBlue));

  // Crest
  [
    { x: 0, y: 0.7, z: -0.08, rx: -0.12, rz: 0, rBase: 0.14, h: 0.58 },
    { x: -0.28, y: 0.56, z: -0.04, rx: -0.05, rz: 0.38, rBase: 0.10, h: 0.44 },
    { x: 0.28, y: 0.56, z: -0.04, rx: -0.05, rz: -0.38, rBase: 0.10, h: 0.44 },
  ].forEach(c => {
    const cGeo = new THREE.ConeGeometry(c.rBase, c.h, 5);
    const cm = new THREE.Mesh(cGeo, redCrest);
    cm.position.set(c.x, c.y, c.z); cm.rotation.x = c.rx; cm.rotation.z = c.rz;
    headGroup.add(cm);
  });

  // Jaw
  const jawGeo = new THREE.SphereGeometry(0.62, 22, 16); jawGeo.scale(1.1, 0.65, 0.95);
  const jaw = new THREE.Mesh(jawGeo, yellow); jaw.position.set(0, -0.18, 0.28); headGroup.add(jaw);

  // Snout
  const snoutGeo = new THREE.SphereGeometry(0.38, 16, 12); snoutGeo.scale(1.05, 0.7, 1.1);
  headGroup.add(Object.assign(new THREE.Mesh(snoutGeo, yellow), { position: new THREE.Vector3(0, -0.08, 0.52) }));

  // Nostrils
  [-0.12, 0.12].forEach(x => {
    const nGeo = new THREE.SphereGeometry(0.055, 8, 6);
    headGroup.add(Object.assign(new THREE.Mesh(nGeo, black), { position: new THREE.Vector3(x, -0.04, 0.88) }));
  });

  // Fangs
  [[0, 1], [1, -1]].forEach(([dx, dir]) => {
    const fGeo = new THREE.ConeGeometry(0.055, 0.22, 5);
    const f = new THREE.Mesh(fGeo, white);
    f.position.set(dx === 0 ? -0.14 : 0.14, -0.18, 0.42); f.rotation.x = dir * 0.15;
    headGroup.add(f);
  });

  // Eyes
  const eyePositions = [-0.28, 0.28];
  eyePositions.forEach((x, i) => {
    const eyeGeo = new THREE.SphereGeometry(0.13, 14, 12);
    headGroup.add(Object.assign(new THREE.Mesh(eyeGeo, black), { position: new THREE.Vector3(x, 0.15, 0.62) }));
    const pupilGeo = new THREE.SphereGeometry(0.06, 10, 8);
    const pupilMat = new THREE.MeshPhongMaterial({ color: 0x000000 });
    headGroup.add(Object.assign(new THREE.Mesh(pupilGeo, pupilMat), { position: new THREE.Vector3(x, 0.15, 0.73) }));
    const starGeo = new THREE.SphereGeometry(0.035, 8, 6);
    const starMat = new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xffffff, emissiveIntensity: 0.5 });
    const star = new THREE.Mesh(starGeo, starMat);
    star.position.set(x + 0.03, 0.19, 0.76);
    headGroup.add(star);
    if (i === 0) eyeStarL = star;
    else eyeStarR = star;
    const ringGeo = new THREE.TorusGeometry(0.14, 0.025, 8, 16);
    headGroup.add(Object.assign(new THREE.Mesh(ringGeo, new THREE.MeshPhongMaterial({ color: 0x222222, shininess: 5 })), {
      position: new THREE.Vector3(x, 0.15, 0.61),
      rotation: new THREE.Euler(Math.PI / 2, 0, 0)
    }));
  });

  // Arms
  const armGeo = new THREE.SphereGeometry(0.28, 14, 12); armGeo.scale(0.85, 1.1, 0.75);
  leftArm = new THREE.Mesh(armGeo.clone(), skyBlue); leftArm.position.set(-1.02, 0.95, 0.2); leftArm.rotation.z = 0.45; dinoGroup.add(leftArm);
  rightArm = new THREE.Mesh(armGeo.clone(), skyBlue); rightArm.position.set(1.02, 0.95, 0.2); rightArm.rotation.z = -0.45; dinoGroup.add(rightArm);

  // Claws
  [-1, 1].forEach(dir => {
    [-0.08, 0.08].forEach(dx => {
      const clawGeo = new THREE.ConeGeometry(0.04, 0.14, 4);
      const claw = new THREE.Mesh(clawGeo, black);
      claw.position.set(dir * (1.04 + dx), 0.64, 0.24); claw.rotation.z = dir * 0.3;
      dinoGroup.add(claw);
    });
  });

  // Legs
  const legGeo = new THREE.SphereGeometry(0.34, 14, 12); legGeo.scale(0.82, 1.15, 0.82);
  leftLeg = new THREE.Mesh(legGeo.clone(), skyBlue); leftLeg.position.set(-0.42, 0.06, 0.1); dinoGroup.add(leftLeg);
  rightLeg = new THREE.Mesh(legGeo.clone(), skyBlue); rightLeg.position.set(0.42, 0.06, 0.1); dinoGroup.add(rightLeg);

  // Feet
  [-0.42, 0.42].forEach(x => {
    const footGeo = new THREE.SphereGeometry(0.3, 14, 10); footGeo.scale(1.05, 0.65, 1.2);
    const foot = new THREE.Mesh(footGeo, skyBlue); foot.position.set(x, -0.3, 0.1); dinoGroup.add(foot);
    [-0.1, 0, 0.1].forEach(dx => {
      const cGeo = new THREE.ConeGeometry(0.045, 0.16, 4);
      const c = new THREE.Mesh(cGeo, black); c.position.set(x + dx, -0.35, 0.32); c.rotation.x = -0.4;
      dinoGroup.add(c);
    });
  });

  // Tail
  tailGroup = new THREE.Group(); tailGroup.position.set(0, 0.7, -0.8); dinoGroup.add(tailGroup);
  [
    { x: 0, y: -0.1, z: 0, sx: 0.55, sy: 0.55, sz: 0.55 },
    { x: 0.2, y: -0.25, z: -0.4, sx: 0.45, sy: 0.45, sz: 0.45 },
    { x: 0.35, y: -0.35, z: -0.78, sx: 0.35, sy: 0.35, sz: 0.35 },
  ].forEach(seg => {
    const sGeo = new THREE.SphereGeometry(0.48, 12, 10); sGeo.scale(seg.sx, seg.sy, seg.sz);
    tailGroup.add(Object.assign(new THREE.Mesh(sGeo, skyBlue), { position: new THREE.Vector3(seg.x, seg.y, seg.z) }));
  });

  // Back spines
  [
    { y: 1.9, z: -0.62, h: 0.28 }, { y: 1.75, z: -0.72, h: 0.32 }, { y: 1.52, z: -0.8, h: 0.28 }
  ].forEach(s => {
    const spineGeo = new THREE.ConeGeometry(0.06, s.h, 5);
    const spine = new THREE.Mesh(spineGeo, redCrest);
    spine.position.set(0, s.y, s.z); spine.rotation.x = -0.5; dinoGroup.add(spine);
  });

  dinoGroup.position.y = -0.72;
}

function buildAccessoryObjects() {
  // Hats (id 0-3)
  { // id:0 Chapaco hat
    const g = new THREE.Group();
    const brimGeo = new THREE.CylinderGeometry(0.7, 0.72, 0.06, 18);
    g.add(new THREE.Mesh(brimGeo, new THREE.MeshPhongMaterial({ color: 0x1a0a00, shininess: 60 })));
    const topGeo = new THREE.CylinderGeometry(0.38, 0.42, 0.62, 16);
    const top = new THREE.Mesh(topGeo, new THREE.MeshPhongMaterial({ color: 0x1a0a00, shininess: 60 }));
    top.position.y = 0.34; g.add(top);
    const bandGeo = new THREE.CylinderGeometry(0.435, 0.435, 0.1, 16);
    const band = new THREE.Mesh(bandGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 120, specular: 0xffcc66 }));
    band.position.y = 0.12; g.add(band);
    g.position.set(0, 1.42, 0.18); g.visible = false;
    headGroup.add(g); accMeshes[0] = g;
  }
  { // id:1 Grape crown
    const g = new THREE.Group();
    const ringGeo = new THREE.TorusGeometry(0.48, 0.07, 10, 24);
    g.add(new THREE.Mesh(ringGeo, new THREE.MeshPhongMaterial({ color: 0x3d1a55, shininess: 40 })));
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const gGeo = new THREE.SphereGeometry(0.11, 8, 7);
      const grape = new THREE.Mesh(gGeo, new THREE.MeshPhongMaterial({ color: 0x6a1aaa, shininess: 80, specular: 0x8855cc }));
      grape.position.set(Math.cos(a) * 0.48, 0.1 + Math.random() * 0.08, Math.sin(a) * 0.48);
      g.add(grape);
    }
    g.position.set(0, 1.38, 0.18); g.visible = false;
    headGroup.add(g); accMeshes[1] = g;
  }
  { // id:2 Explorer helmet
    const g = new THREE.Group();
    const helmGeo = new THREE.SphereGeometry(0.68, 18, 14); helmGeo.scale(1, 0.82, 1.05);
    g.add(new THREE.Mesh(helmGeo, new THREE.MeshPhongMaterial({ color: 0xd4b040, shininess: 80, specular: 0xffdd44 })));
    const brimGeo2 = new THREE.CylinderGeometry(0.74, 0.72, 0.06, 18);
    const brim = new THREE.Mesh(brimGeo2, new THREE.MeshPhongMaterial({ color: 0xb89030, shininess: 100 }));
    brim.position.y = -0.24; g.add(brim);
    g.position.set(0, 1.38, 0.18); g.visible = false;
    headGroup.add(g); accMeshes[2] = g;
  }
  { // id:3 Hero helmet
    const g = new THREE.Group();
    const helmGeo = new THREE.SphereGeometry(0.66, 16, 12); helmGeo.scale(1.05, 0.88, 1);
    g.add(new THREE.Mesh(helmGeo, new THREE.MeshPhongMaterial({ color: 0x888888, shininess: 200, specular: 0xffffff })));
    const crestGeo = new THREE.BoxGeometry(0.1, 0.42, 0.85);
    const crest = new THREE.Mesh(crestGeo, new THREE.MeshPhongMaterial({ color: 0xcc2222, shininess: 40 }));
    crest.position.y = 0.52; g.add(crest);
    g.position.set(0, 1.4, 0.18); g.visible = false;
    headGroup.add(g); accMeshes[3] = g;
  }
  // Necks (id 4-7)
  { // id:4 Ceibo collar
    const g = new THREE.Group();
    const collarGeo = new THREE.TorusGeometry(0.45, 0.05, 8, 20);
    g.add(new THREE.Mesh(collarGeo, new THREE.MeshPhongMaterial({ color: 0x3d8042, shininess: 30 })));
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const fGeo = new THREE.SphereGeometry(0.09, 8, 6);
      const f = new THREE.Mesh(fGeo, new THREE.MeshPhongMaterial({ color: 0xcc4488, shininess: 60 }));
      f.position.set(Math.cos(a) * 0.45, 0, Math.sin(a) * 0.45); g.add(f);
    }
    g.position.set(0, 1.72, 0.22); g.rotation.x = 0.2; g.visible = false;
    dinoGroup.add(g); accMeshes[4] = g;
  }
  { // id:5 Clay collar
    const g = new THREE.Group();
    const baseGeo = new THREE.TorusGeometry(0.46, 0.06, 10, 20);
    g.add(new THREE.Mesh(baseGeo, new THREE.MeshPhongMaterial({ color: 0xc8a060, shininess: 20 })));
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      const bGeo = new THREE.SphereGeometry(0.07, 7, 5);
      const b = new THREE.Mesh(bGeo, new THREE.MeshPhongMaterial({ color: 0xa87840, shininess: 15 }));
      b.position.set(Math.cos(a) * 0.46, 0, Math.sin(a) * 0.46); g.add(b);
    }
    g.position.set(0, 1.72, 0.22); g.rotation.x = 0.2; g.visible = false;
    dinoGroup.add(g); accMeshes[5] = g;
  }
  { // id:6 Medal
    const g = new THREE.Group();
    const chainGeo = new THREE.TorusGeometry(0.44, 0.03, 6, 20);
    g.add(new THREE.Mesh(chainGeo, new THREE.MeshPhongMaterial({ color: 0xc8a030, shininess: 200 })));
    const medalGeo = new THREE.CylinderGeometry(0.16, 0.16, 0.04, 16);
    const medal = new THREE.Mesh(medalGeo, new THREE.MeshPhongMaterial({ color: 0xf0c040, shininess: 300, specular: 0xffffff }));
    medal.position.y = -0.22; g.add(medal);
    g.position.set(0, 1.72, 0.22); g.rotation.x = 0.2; g.visible = false;
    dinoGroup.add(g); accMeshes[6] = g;
  }
  { // id:7 Fossil collar
    const g = new THREE.Group();
    const colGeo = new THREE.TorusGeometry(0.45, 0.055, 8, 20);
    g.add(new THREE.Mesh(colGeo, new THREE.MeshPhongMaterial({ color: 0x8ab4c2, shininess: 50 })));
    const boneGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.28, 8);
    const bone = new THREE.Mesh(boneGeo, new THREE.MeshPhongMaterial({ color: 0xd8d8c8, shininess: 40 }));
    bone.position.y = -0.2; g.add(bone);
    g.position.set(0, 1.72, 0.22); g.rotation.x = 0.2; g.visible = false;
    dinoGroup.add(g); accMeshes[7] = g;
  }
  // Backs (id 8-11)
  { // id:8 Vineyard backpack
    const g = new THREE.Group();
    const packGeo = new THREE.BoxGeometry(0.7, 0.85, 0.4); packGeo.translate(0, 0, -0.2);
    g.add(new THREE.Mesh(packGeo, new THREE.MeshPhongMaterial({ color: 0x7a1e3c, shininess: 30 })));
    for (let i = 0; i < 5; i++) {
      const gGeo = new THREE.SphereGeometry(0.1, 8, 6);
      const grape = new THREE.Mesh(gGeo, new THREE.MeshPhongMaterial({ color: 0x4a0a8a, shininess: 80 }));
      grape.position.set((i - 2) * 0.14, 0.25, -0.05); g.add(grape);
    }
    g.position.set(0, 1.1, -0.8); g.visible = false;
    dinoGroup.add(g); accMeshes[8] = g;
  }
  { // id:9 Portillo cape
    const g = new THREE.Group();
    const shapeGeo = new THREE.SphereGeometry(0.85, 14, 10); shapeGeo.scale(1, 1.3, 0.35);
    g.add(new THREE.Mesh(shapeGeo, new THREE.MeshPhongMaterial({ color: 0xc47020, shininess: 10, transparent: true, opacity: 0.88 })));
    g.position.set(0, 1.0, -0.85); g.visible = false;
    dinoGroup.add(g); accMeshes[9] = g;
  }
  { // id:10 Butterfly wings
    const g = new THREE.Group();
    [-1, 1].forEach(side => {
      const wingGeo = new THREE.SphereGeometry(0.7, 12, 8); wingGeo.scale(1, 1.5, 0.1);
      const wing = new THREE.Mesh(wingGeo, new THREE.MeshPhongMaterial({ color: side > 0 ? 0x4aaa30 : 0xcc4488, shininess: 20, transparent: true, opacity: 0.9 }));
      wing.position.set(side * 0.65, 1.25, -0.6); wing.rotation.y = side * 0.4;
      g.add(wing);
    });
    g.visible = false;
    dinoGroup.add(g); accMeshes[10] = g;
  }
  { // id:11 Quiver
    const g = new THREE.Group();
    const qGeo = new THREE.CylinderGeometry(0.12, 0.14, 0.8, 10);
    g.add(new THREE.Mesh(qGeo, new THREE.MeshPhongMaterial({ color: 0x4a2c1a, shininess: 30 })));
    for (let i = 0; i < 4; i++) {
      const aGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.7, 6);
      const arrow = new THREE.Mesh(aGeo, new THREE.MeshPhongMaterial({ color: 0x8a6030 }));
      arrow.position.set((i - 1.5) * 0.055, 0.35, 0); g.add(arrow);
    }
    g.rotation.z = 0.3; g.position.set(-0.7, 1.1, -0.65); g.visible = false;
    dinoGroup.add(g); accMeshes[11] = g;
  }
  // Weapons (id 12-15)
  { // id:12 Clay urn
    const g = new THREE.Group();
    const urnGeo = new THREE.SphereGeometry(0.32, 14, 10); urnGeo.scale(0.85, 1.1, 0.85);
    g.add(new THREE.Mesh(urnGeo, new THREE.MeshPhongMaterial({ color: 0xc8a060, shininess: 20 })));
    const neckGeo2 = new THREE.CylinderGeometry(0.1, 0.18, 0.2, 10);
    const n = new THREE.Mesh(neckGeo2, new THREE.MeshPhongMaterial({ color: 0xb08840, shininess: 15 }));
    n.position.y = 0.32; g.add(n);
    g.rotation.z = 0.2; g.position.set(-0.7, 0.9, 0.35); g.visible = false;
    dinoGroup.add(g); accMeshes[12] = g;
  }
  { // id:13 Sword
    const g = new THREE.Group();
    const bladeGeo = new THREE.BoxGeometry(0.055, 1.0, 0.018);
    g.add(new THREE.Mesh(bladeGeo, new THREE.MeshPhongMaterial({ color: 0xd8d8e8, shininess: 300, specular: 0xffffff })));
    const guardGeo2 = new THREE.BoxGeometry(0.32, 0.05, 0.04);
    const guard = new THREE.Mesh(guardGeo2, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 150, specular: 0xffdd88 }));
    guard.position.y = -0.35; g.add(guard);
    const gripGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.28, 8);
    const grip = new THREE.Mesh(gripGeo, new THREE.MeshPhongMaterial({ color: 0x2a1a0a }));
    grip.position.y = -0.55; g.add(grip);
    const pommelGeo = new THREE.SphereGeometry(0.07, 8, 7);
    const pommel = new THREE.Mesh(pommelGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 180 }));
    pommel.position.y = -0.72; g.add(pommel);
    g.rotation.z = 0.3; g.rotation.x = 0.15; g.position.set(-0.75, 1.1, 0.3); g.visible = false;
    dinoGroup.add(g); accMeshes[13] = g;
  }
  { // id:14 Charango
    const g = new THREE.Group();
    const bodyGeo2 = new THREE.SphereGeometry(0.22, 12, 10); bodyGeo2.scale(1.1, 1.4, 0.55);
    g.add(new THREE.Mesh(bodyGeo2, new THREE.MeshPhongMaterial({ color: 0x7a3a10, shininess: 80, specular: 0xff8844 })));
    const neckGeo3 = new THREE.CylinderGeometry(0.03, 0.04, 0.7, 8);
    const neck2 = new THREE.Mesh(neckGeo3, new THREE.MeshPhongMaterial({ color: 0x5a2a0a }));
    neck2.position.y = 0.7; g.add(neck2);
    for (let i = 0; i < 5; i++) {
      const sg = new THREE.CylinderGeometry(0.005, 0.005, 1.1, 4);
      const str = new THREE.Mesh(sg, new THREE.MeshPhongMaterial({ color: 0xf0e8c8, shininess: 200 }));
      str.position.x = (i - 2) * 0.025; g.add(str);
    }
    g.rotation.z = 0.4; g.rotation.x = 0.1; g.position.set(-0.72, 0.85, 0.3); g.visible = false;
    dinoGroup.add(g); accMeshes[14] = g;
  }
  { // id:15 Staff
    const g = new THREE.Group();
    const staffGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.6, 10);
    g.add(new THREE.Mesh(staffGeo, new THREE.MeshPhongMaterial({ color: 0x5a3010, shininess: 40 })));
    [0.5, 0.1, -0.3, -0.6].forEach(y => {
      const kg = new THREE.TorusGeometry(0.055, 0.018, 7, 12);
      const k = new THREE.Mesh(kg, new THREE.MeshPhongMaterial({ color: 0x3a1a05 }));
      k.position.y = y; k.rotation.x = Math.PI / 2; g.add(k);
    });
    const gemGeo = new THREE.SphereGeometry(0.1, 10, 8);
    const gem = new THREE.Mesh(gemGeo, new THREE.MeshPhongMaterial({ color: 0x44bbcc, shininess: 300, specular: 0xaaffff, emissive: 0x112233, emissiveIntensity: 0.3 }));
    gem.position.y = 0.84; g.add(gem);
    g.rotation.z = 0.25; g.position.set(-0.78, 0.95, 0.3); g.visible = false;
    dinoGroup.add(g); accMeshes[15] = g;
  }
}

function update2DDinoAccessories() {
  if (!accMeshes || !Object.keys(accMeshes).length) return;
  Object.values(accMeshes).forEach(m => { if (m) m.visible = false; });
  Object.values(state.equipped).forEach(id => {
    if (id !== null && accMeshes[id]) accMeshes[id].visible = true;
  });
  hatMesh = accMeshes[state.equipped.hat] || null;
  crownMesh = accMeshes[state.equipped.neck] || null;
  collarMesh = accMeshes[state.equipped.bg] || null;
}

function animateDino() {
  animFrame = requestAnimationFrame(animateDino);
  const t = Date.now() * 0.001;

  if (!dinoGroup) { if (dinoRenderer) dinoRenderer.render(dinoScene, dinoCamera); return; }

  dinoGroup.position.y = Math.sin(t * 0.85) * 0.08 - 0.72;
  dinoGroup.rotation.y = Math.sin(t * 0.32) * 0.15;

  if (headGroup) {
    headGroup.rotation.x = Math.sin(t * 1.0) * 0.04;
    headGroup.position.y = 2.44 + Math.sin(t * 0.85) * 0.025;
  }

  if (leftArm) leftArm.rotation.z = Math.sin(t * 1.2) * 0.1;
  if (rightArm) rightArm.rotation.z = Math.sin(t * 1.2 + 0.8) * 0.1;

  if (leftLeg) leftLeg.rotation.x = Math.sin(t * 1.5) * 0.06;
  if (rightLeg) rightLeg.rotation.x = Math.sin(t * 1.5 + Math.PI) * 0.06;

  if (tailGroup) tailGroup.rotation.y = Math.sin(t * 1.4) * 0.22;

  const blinkCycle = t % 4.2;
  const blinkScale = (blinkCycle > 4.05) ? Math.max(0.05, 1 - (blinkCycle - 4.05) / 0.08) : 1;
  if (eyeStarL) eyeStarL.scale.y = blinkScale;
  if (eyeStarR) eyeStarR.scale.y = blinkScale;

  if (crownMesh && crownMesh.visible) crownMesh.rotation.y = t * 0.6;
  if (accMeshes[10] && accMeshes[10].visible) accMeshes[10].rotation.y = Math.sin(t * 3.5) * 0.15;

  if (dinoRenderer) dinoRenderer.render(dinoScene, dinoCamera);
}

// ── DINO INTERACTIONS ─────────────────────────────
const tapMessages = ['¡Hola! 👋', '¡Soy CrocoRex! 🦕', '¡Exploremos! 🗺️', '¡Wuuu! ✨', 'Tarija, cuna de gigantes! 🦣', '¡Colecciona más! 🎒', '¡11.000 años de historia! 🌋', '¡Soy prehistórico! 🦴'];
let tapIdx = 0;

function tapDino() {
  const svg = document.getElementById('dino-2d-svg');
  if (svg) {
    svg.style.transition = 'transform 0.1s ease';
    svg.style.transform = 'scale(1.12) translateY(-8px)';
    setTimeout(() => { svg.style.transition = 'transform 0.3s ease'; svg.style.transform = ''; }, 200);
  }
  const area = document.getElementById('dino-area');
  const sparks = ['✨', '⭐', '💫', '🌟', '❤️', '💚'];
  for (let i = 0; i < 6; i++) {
    const el = document.createElement('div');
    el.className = 'dino-sparkle';
    el.textContent = sparks[Math.floor(Math.random() * sparks.length)];
    el.style.left = (30 + Math.random() * 40) + '%';
    el.style.top = (20 + Math.random() * 50) + '%';
    el.style.animationDelay = (i * 0.08) + 's';
    el.style.animationDuration = (1.4 + Math.random() * 0.8) + 's';
    area.appendChild(el);
    setTimeout(() => el.remove(), 2500);
  }
  showToast(tapMessages[tapIdx++ % tapMessages.length]);
}

function spawnConfetti() {
  const colors = ['#7a9e6b', '#c4882f', '#7a1e3c', '#f2ead8', '#8ab4c2', '#c8a97e'];
  for (let i = 0; i < 40; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-piece';
    el.style.cssText = `left:${Math.random() * 100}vw;background:${colors[Math.floor(Math.random() * colors.length)]};animation-duration:${1.5 + Math.random() * 2}s;animation-delay:${Math.random() * 0.5}s;top:-20px;transform:rotate(${Math.random() * 360}deg);`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

// ── HERO CAROUSEL ─────────────────────────────────
let carouselIdx = 0;
let carouselTimer = null;
const CAROUSEL_SLIDES = 2;

function goCarouselSlide(idx) {
  const prev = document.getElementById('carousel-slide-' + carouselIdx);
  const prevDot = document.getElementById('cdot-' + carouselIdx);
  const next = document.getElementById('carousel-slide-' + idx);
  const nextDot = document.getElementById('cdot-' + idx);
  if (prev) prev.style.display = 'none';
  if (prevDot) prevDot.classList.remove('active');
  if (next) next.style.display = 'block';
  if (nextDot) nextDot.classList.add('active');
  carouselIdx = idx;
}

function initHeroCarousel() {
  clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    goCarouselSlide((carouselIdx + 1) % CAROUSEL_SLIDES);
  }, 4000);
}

// ── NEXT MISSION POPUP ────────────────────────────
function showNextMissionToast() {
  const hint = document.getElementById('next-mission-hint');
  const hintText = hint ? hint.textContent.trim() : '';

  // Find next mission details
  const next = MISSIONS.find(m => !state.completedMissions.includes(m.id));

  // Remove any existing popup
  const existing = document.getElementById('mission-popup');
  if (existing) existing.remove();

  const popup = document.createElement('div');
  popup.id = 'mission-popup';
  popup.style.cssText = `position:fixed;top:120px;left:50%;transform:translateX(-50%) translateY(-8px);
    width:calc(100% - 2rem);max-width:360px;z-index:9000;
    background:linear-gradient(160deg,rgba(22,15,5,0.97),rgba(18,12,4,0.98));
    border:1px solid rgba(201,152,42,0.35);border-radius:1.2rem;
    padding:1.1rem 1.2rem 1rem;
    box-shadow:0 12px 40px rgba(0,0,0,0.7),0 0 0 1px rgba(255,255,255,0.03) inset;
    animation:popup-slide-in 0.28s cubic-bezier(0.34,1.3,0.64,1) forwards;
    pointer-events:auto;`;

  const acc = next ? ACCESSORIES.find(a => a.id === (MISSIONS.find(m => m.id === next.id) || {}).accessory) : null;

  popup.innerHTML = `
    <div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,var(--gold),rgba(201,152,42,0.3));border-radius:1.2rem 1.2rem 0 0;"></div>
    <button onclick="document.getElementById('mission-popup').remove()" style="position:absolute;top:0.6rem;right:0.7rem;background:none;border:none;color:rgba(232,217,188,0.35);font-size:1.1rem;cursor:pointer;line-height:1;padding:0.1rem 0.3rem;border-radius:0.4rem;transition:color 0.15s;" onmouseover="this.style.color='var(--cream)'" onmouseout="this.style.color='rgba(232,217,188,0.35)'">✕</button>
    <div style="font-size:0.65rem;color:var(--gold);font-weight:700;text-transform:uppercase;letter-spacing:0.12em;margin-bottom:0.55rem;">💡 Próxima misión</div>
    ${next ? `
      <div style="font-family:'Lora',serif;font-size:0.95rem;font-weight:700;color:var(--cream);margin-bottom:0.3rem;">${next.name || next.place}</div>
      <div style="font-size:0.78rem;color:rgba(232,217,188,0.55);line-height:1.45;margin-bottom:0.55rem;">${next.place}</div>
      ${acc ? `<div style="display:inline-flex;align-items:center;gap:0.4rem;background:rgba(201,152,42,0.1);border:1px solid rgba(201,152,42,0.2);border-radius:2rem;padding:0.25rem 0.7rem;font-size:0.75rem;color:var(--gold-light);">${acc.emoji} ${acc.name} · <span style="color:var(--sage);">+${acc.xp} XP</span></div>` : ''}
      <div style="margin-top:0.7rem;">
        <button onclick="switchSection('map');document.getElementById('mission-popup').remove();" style="background:linear-gradient(135deg,rgba(90,128,66,0.25),rgba(90,128,66,0.15));border:1px solid rgba(90,128,66,0.4);border-radius:0.65rem;padding:0.5rem 0.9rem;color:var(--sage);font-family:'Inter',sans-serif;font-size:0.78rem;font-weight:600;cursor:pointer;width:100%;transition:all 0.2s;">
          🗺️ Ver en el Mapa
        </button>
      </div>
    ` : `<div style="font-size:0.85rem;color:var(--sage);font-weight:600;">🏆 ¡Todas las misiones completadas!</div>`}`;

  document.body.appendChild(popup);

  // Auto-close after 8s
  setTimeout(() => {
    const p = document.getElementById('mission-popup');
    if (p) { p.style.animation = 'popup-slide-out 0.22s ease forwards'; setTimeout(() => p.remove(), 250); }
  }, 8000);
}

// ── QR MODAL ──────────────────────────────────────
function openQRScanner() {
  document.getElementById('qr-modal').style.display = 'flex';
  switchQRTab('main');
}
function closeQRModal() {
  document.getElementById('qr-modal').style.display = 'none';
}
function switchQRTab(tab) {
  ['main', 'donate'].forEach(t => {
    const panel = document.getElementById('qrpanel-' + t);
    const btn = document.getElementById('qrtab-' + t);
    if (!panel || !btn) return;
    const active = t === tab;
    panel.style.display = active ? 'block' : 'none';
    btn.style.color = active ? 'var(--gold-light)' : 'rgba(232,217,188,0.4)';
    btn.style.borderBottomColor = active ? 'var(--gold)' : 'transparent';
  });
}
function downloadDonateQR() {
  const src = 'https://res.cloudinary.com/ds4qnoypm/image/upload/v1772975187/SmartSelect_20260308_090455_nfyt6l.png';
  const a = document.createElement('a');
  a.href = src; a.download = 'DynoQuest-Donacion-QR.png'; a.target = '_blank';
  document.body.appendChild(a); a.click(); a.remove();
  closeQRModal();
  setTimeout(launchFireworks, 250);
}

// ── FIREWORKS ─────────────────────────────────────
function launchFireworks() {
  const emojis = ['✨', '🌟', '💫', '⭐', '🎇', '🎆', '💥', '🌠', '🎊', '🎉'];
  const colors = ['#e4b84a', '#4ab8c4', '#c9982a', '#f2ead8', '#8a1a36', '#5a8042', '#ff8888', '#88ddff', '#ffdd44', '#ff9944'];

  // Big thank-you card
  const card = document.createElement('div');
  card.style.cssText = `position:fixed;top:50%;left:50%;transform:translate(-50%,-50%) scale(0);z-index:99998;
    background:linear-gradient(160deg,rgba(18,12,4,0.97),rgba(28,18,6,0.97));
    border:2px solid rgba(201,152,42,0.65);border-radius:1.5rem;
    padding:1.8rem 2.2rem 1.6rem;text-align:center;min-width:250px;
    box-shadow:0 20px 70px rgba(0,0,0,0.85),0 0 50px rgba(201,152,42,0.22);
    animation:fw-card-in 0.4s cubic-bezier(0.34,1.56,0.64,1) forwards;
    position:fixed;`;
  card.innerHTML = `
    <button onclick="this.closest('[id]').remove()" style="position:absolute;top:0.7rem;right:0.9rem;background:none;border:none;color:rgba(232,217,188,0.4);font-size:1.2rem;cursor:pointer;line-height:1;padding:0.2rem 0.35rem;border-radius:0.4rem;transition:color 0.15s;" onmouseover="this.style.color='var(--cream)'" onmouseout="this.style.color='rgba(232,217,188,0.4)'">✕</button>
    <div style="font-size:3rem;margin-bottom:0.5rem">💛</div>
    <div style="font-family:'Cinzel',serif;font-size:1.2rem;font-weight:700;color:var(--gold-light);margin-bottom:0.35rem">¡Gracias!</div>
    <div style="font-family:'Lora',serif;font-size:0.85rem;color:rgba(232,217,188,0.65);line-height:1.5">Tu apoyo hace grande a DynoQuest<br>y a la cultura de Tarija 🦕🦣</div>`;
  document.body.appendChild(card);
  // Auto-dismiss after 7s with fade-out
  setTimeout(() => {
    if (!card.parentNode) return;
    card.style.animation = 'fw-card-out 0.4s ease forwards';
    setTimeout(() => { if (card.parentNode) card.remove(); }, 420);
  }, 7000);

  // Particle burst — 70 particles
  for (let i = 0; i < 70; i++) {
    const isEmoji = i < 20;
    const el = document.createElement('div');
    const angle = (i / 70) * 360 + Math.random() * 5;
    const dist = 60 + Math.random() * 200;
    const dx = Math.cos(angle * Math.PI / 180) * dist;
    const dy = Math.sin(angle * Math.PI / 180) * dist - 60;
    const delay = Math.random() * 0.25;
    const dur = 0.75 + Math.random() * 0.75;
    el.style.cssText = `position:fixed;left:50%;top:50%;z-index:99999;pointer-events:none;
      ${isEmoji
        ? `font-size:${1.1 + Math.random() * 1.3}rem;`
        : `width:${5 + Math.random() * 9}px;height:${5 + Math.random() * 9}px;
           background:${colors[i % colors.length]};
           border-radius:${Math.random() > 0.4 ? '50%' : '3px'};`}
      transform:translate(-50%,-50%);
      animation:fw-particle ${dur}s ease-out ${delay}s both;
      --fdx:${dx}px;--fdy:${dy}px;`;
    el.textContent = isEmoji ? emojis[i % emojis.length] : '';
    document.body.appendChild(el);
    setTimeout(() => el.remove(), (dur + delay) * 1000 + 200);
  }

  // 3 expanding rings
  for (let r = 0; r < 3; r++) {
    const ring = document.createElement('div');
    ring.style.cssText = `position:fixed;left:50%;top:50%;width:12px;height:12px;
      border:2.5px solid ${colors[r * 3]};border-radius:50%;z-index:99997;pointer-events:none;
      animation:fw-ring ${0.65 + r * 0.22}s ease-out ${r * 0.12}s both;`;
    document.body.appendChild(ring);
    setTimeout(() => ring.remove(), 1400 + r * 300);
  }
}


// ── LOGOUT ────────────────────────────────────────
function doLogout() {
  if (confirm('¿Cerrar sesión? Tu progreso quedará guardado.')) {
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-login').classList.add('active');
    document.getElementById('login-name').value = '';
    document.getElementById('login-email').value = '';
    document.getElementById('login-pass').value = '';
  }
}

// ── SCROLL TO DINO / PROFILES ─────────────────────
function scrollToDino() {
  switchSection('hero');
  setTimeout(() => {
    const el = document.getElementById('dino-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

function scrollToProfiles() {
  switchSection('hero');
  setTimeout(() => {
    const el = document.getElementById('profiles-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 120);
}

// ── NAV PROFILE BADGE ─────────────────────────────
function updateNavProfileBadge() {
  const badge = document.getElementById('nav-profile-badge');
  const icon = document.getElementById('nav-profile-icon');
  if (!badge) return;
  if (state.activeProfile && DINO_PROFILES[state.activeProfile]) {
    const p = DINO_PROFILES[state.activeProfile];
    icon.textContent = p.badge_icon || '🦕';
    badge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
  }
}

// ── WALLET EXPAND/COLLAPSE ────────────────────────
let walletExpanded = false;
function toggleWalletExpanded() {
  walletExpanded = !walletExpanded;
  const icon = document.getElementById('wallet-see-all-icon');
  const text = document.getElementById('wallet-see-all-text');
  if (icon) icon.textContent = walletExpanded ? '▴' : '▾';
  if (text) text.textContent = walletExpanded ? 'Mostrar menos' : 'Ver todos los descuentos';
  renderWallet();
}

// ── IMAGE CROSSFADE ────────────────────────────────
function startImageCrossfade(img1Id, img2Id, intervalMs) {
  let show1 = true;
  setInterval(() => {
    const i1 = document.getElementById(img1Id);
    const i2 = document.getElementById(img2Id);
    if (!i1 || !i2) return;
    show1 = !show1;
    i1.style.opacity = show1 ? '1' : '0';
    i2.style.opacity = show1 ? '0' : '1';
  }, intervalMs);
}

// ── TOAST ─────────────────────────────────────────
let toastTimer;
function showToast(msg, type) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = 'toast';
  if (type) t.classList.add('toast-' + type);
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── PAGE INIT — SPLASH → SESSION RESTORE ─────────
(function () {
  loadState();
  const splash = document.getElementById('screen-splash');

  function showLogin() {
    const login = document.getElementById('screen-login');
    if (login) login.classList.add('active');
    setTimeout(() => {
      const img = document.getElementById('login-logo-img');
      const sub = document.getElementById('login-sub-label');
      if (img) img.style.opacity = '1';
      if (sub) sub.style.opacity = '1';
    }, 80);
    startImageCrossfade('hero-img-1', 'hero-img-2', 5000);
  }

  function hideSplash(cb) {
    splash.classList.add('fade-out');
    setTimeout(() => { splash.style.display = 'none'; if (cb) cb(); }, 580);
  }

  const hasSession = localStorage.getItem('urion_state') && state.userName && state.userName !== 'Explorador';

  if (hasSession) {
    // Show splash briefly then restore last position
    setTimeout(() => hideSplash(() => {
      enterApp();
      startImageCrossfade('hero-img-1', 'hero-img-2', 5000);
    }), 1400);
  } else {
    // New user — show splash then login
    setTimeout(() => hideSplash(showLogin), 2000);
  }
})();