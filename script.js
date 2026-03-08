// ── DATA ─────────────────────────────────────
// Categories: hat=sombrero, neck=collar/cuello, back=espalda, hands=manos/armas
const ACCESSORIES = [
    // ── SOMBREROS (slot: hat) ──
    { id: 0, emoji: '🎩', name: 'Sombrero Chapaco', cat: 'hat', place: 'Catedral Basílica', xp: 50, desc: 'El icónico sombrero negro del valle tarijeño, símbolo chapaco por excelencia.', color: '#2a0f05' },
    { id: 1, emoji: '👑', name: 'Corona de Uvas', cat: 'hat', place: 'Viñedos Kohlberg', xp: 60, desc: 'Corona tejida con los mejores racimos del Valle Central. ¡El rey del vino!', color: '#5a0e2a' },
    { id: 2, emoji: '⛑️', name: 'Casco del Explorador', cat: 'hat', place: 'Cañón del Angosto', xp: 55, desc: 'Casco de expedicionista para adentrarse en los cañones rojos del Angosto.', color: '#8B6914' },
    { id: 3, emoji: '🪖', name: 'Yelmo del Héroe', cat: 'hat', place: 'San Lorenzo', xp: 65, desc: 'El yelmo de Esteban Arze, héroe de la Batalla de la Tablada de 1817.', color: '#3a3a2a' },
    // ── COLLARES / CUELLO (slot: neck) ──
    { id: 4, emoji: '🌿', name: 'Collar de Ceibo', cat: 'neck', place: 'Parque Chapaco', xp: 40, desc: 'Flores del árbol nacional de Bolivia, tejidas en un collar natural.', color: '#3d5a2e' },
    { id: 5, emoji: '📿', name: 'Collar de Barro', cat: 'neck', place: 'Casa Dorada', xp: 45, desc: 'Artesanía tarijeña de cerámica. Cada pieza lleva 5 siglos de historia.', color: '#c8a97e' },
    { id: 6, emoji: '⛪', name: 'Medalla de San Roque', cat: 'neck', place: 'San Lorenzo', xp: 65, desc: 'Medalla del patrono de los caminantes. Protege a los exploradores del valle.', color: '#c4882f' },
    { id: 7, emoji: '🦴', name: 'Collar de Fósil', cat: 'neck', place: 'Museo Paleontológico', xp: 80, desc: 'Réplica de un hueso de mastodonte. Única joya de 11,000 años de antigüedad.', color: '#8ab4c2' },
    // ── ESPALDA / ALAS (slot: back) ──
    { id: 8, emoji: '🍇', name: 'Mochila Viñera', cat: 'back', place: 'Viñedos Kohlberg', xp: 60, desc: 'Mochila de vendimia cargada con los mejores racimos del Valle Central.', color: '#7a1e3c' },
    { id: 9, emoji: '🌅', name: 'Capa del Portillo', cat: 'back', place: 'Mirador El Portillo', xp: 70, desc: 'Capa color amanecer, tejida con los colores que pinta el sol sobre el valle.', color: '#c4882f' },
    { id: 10, emoji: '🦋', name: 'Alas Mariposa', cat: 'back', place: 'Cañón del Angosto', xp: 55, desc: 'Réplica de las 200 especies de mariposas del Angosto. ¡Rex puede volar!', color: '#7a9e6b' },
    { id: 11, emoji: '🏹', name: 'Carcaj del Explorador', cat: 'back', place: 'Mirador El Portillo', xp: 70, desc: 'Carcaj lleno de flechas para explorar los cuatro puntos del horizonte tarijeño.', color: '#4a2c1a' },
    // ── ARMAS / MANOS (slot: weapon) ──
    { id: 12, emoji: '🏺', name: 'Urna de Barro', cat: 'weapon', place: 'Casa Dorada', xp: 45, desc: 'Vasija de cerámica tarijeña del siglo XVII. Arte que Rex porta con orgullo.', color: '#c8a97e' },
    { id: 13, emoji: '⚔️', name: 'Espada de la Tablada', cat: 'weapon', place: 'San Lorenzo', xp: 65, desc: 'Réplica de la espada usada en la Batalla de la Tablada. ¡Honor chapaco!', color: '#888888' },
    { id: 14, emoji: '🎸', name: 'Charango Tarijeño', cat: 'weapon', place: 'Parque Chapaco', xp: 40, desc: 'El charango chapaco, instrumento de los valles. Rex toca folclore boliviano.', color: '#8B4513' },
    { id: 15, emoji: '🌋', name: 'Bastón del Cañón', cat: 'weapon', place: 'Cañón del Angosto', xp: 55, desc: 'Bastón de madera de cedro del Angosto. Compañero inseparable del caminante.', color: '#3d2010' },
];

const MISSIONS = [
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
    { id: 14, name: 'Bastón del Río Bermejo', place: 'Río Bermejo · Sur de Tarija', desc: 'El Bermejo, frontera natural con Argentina, tiene riberas de cedro y arrayán. Sus caminatas son las más míticas de la región.', accessory: 15, emoji: '🌋' },
    { id: 15, name: 'El Casco del Gran Explorador', place: 'Plaza Luis de Fuentes · Centro', desc: 'La plaza fundacional de Tarija, 1574. Luis de Fuentes y Vargas plantó aquí la primera piedra de la ciudad de los valles.', accessory: 2, emoji: '⛑️' },
];

// ── STATE ─────────────────────────────────────
let state = {
    userName: 'Explorador',
    isDemo: true,
    unlockedAcc: [],
    equipped: { hat: null, neck: null, back: null, weapon: null },
    xp: 0,
    completedMissions: [],
    discounts: [], // { code, place, type, pct, ts, used }
};
Object.defineProperty(state, 'equippedAcc', { get() { return Object.values(this.equipped).filter(v => v !== null); } });

let currentMissionId = 0;
let pendingUnlockId = null;
let cameraStream = null;

function loadState() {
    const raw = localStorage.getItem('urion_state');
    if (raw) {
        try {
            const saved = JSON.parse(raw);
            state.userName = saved.userName || 'Explorador';
            state.isDemo = saved.isDemo !== undefined ? saved.isDemo : true;
            state.unlockedAcc = saved.unlockedAcc || [];
            state.xp = saved.xp || 0;
            state.completedMissions = saved.completedMissions || [];
            state.discounts = saved.discounts || [];
            if (saved.equipped) {
                state.equipped = { hat: null, neck: null, back: null, weapon: null, ...saved.equipped };
            } else if (saved.equippedAcc) {
                saved.equippedAcc.forEach(id => {
                    const a = ACCESSORIES.find(x => x.id === id);
                    if (a && !state.equipped[a.cat]) state.equipped[a.cat] = id;
                });
            }
        } catch (e) { }
    }
}

function saveState() {
    localStorage.setItem('urion_state', JSON.stringify({
        userName: state.userName, isDemo: state.isDemo,
        unlockedAcc: state.unlockedAcc, equipped: state.equipped,
        xp: state.xp, completedMissions: state.completedMissions,
        discounts: state.discounts
    }));
}

// ── LOGIN ─────────────────────────────────────
function doLogin() {
    const name = document.getElementById('login-name').value.trim();
    const email = document.getElementById('login-email').value.trim();
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
    // Show login screen to create real account, keep progress
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-login').classList.add('active');
    // Pre-fill hint
    document.getElementById('login-name').value = state.userName !== 'Turista Demo' ? state.userName : '';
    showToast('📝 Crea tu cuenta para guardar el progreso');
}

function enterApp() {
    document.getElementById('screen-login').classList.remove('active');
    document.getElementById('screen-app').classList.add('active');
    initApp();
}

// ── APP INIT ──────────────────────────────────
function initApp() {
    loadState();
    renderAccGrid();
    renderMissions();
    updateProfileUI();
    initDino3D();
    updateEquippedPreview();
    updateNextMissionHint();

    document.getElementById('avatar-initial').textContent =
        (state.userName[0] || '?').toUpperCase();
}

// ── TABS ──────────────────────────────────────
let mapInitialized = false;

function switchTab(tab) {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

    document.getElementById('tab-' + tab).classList.add('active');
    document.getElementById('nav-' + tab).classList.add('active');

    if (tab === 'profile') updateProfileUI();
    if (tab === 'map' && !mapInitialized) {
        mapInitialized = true;
        setTimeout(() => initTarijaMap(), 120);
    } else if (tab === 'map' && tarijaMap) {
        setTimeout(() => tarijaMap.invalidateSize(), 80);
        refreshMapMarkers();
    }
}

let activeAccCat = 'all';

function renderAccGrid() {
    const grid = document.getElementById('acc-grid');
    const filtered = activeAccCat === 'all' ? ACCESSORIES : ACCESSORIES.filter(a => a.cat === activeAccCat);
    grid.innerHTML = '';
    filtered.forEach(acc => {
        const unlocked = state.unlockedAcc.includes(acc.id);
        const equipped = state.equipped[acc.cat] === acc.id;
        const div = document.createElement('div');
        div.className = 'acc-slot' + (unlocked ? (equipped ? ' equipped' : ' unlocked') : ' locked');
        const catIcon = { hat: '🎩', neck: '📿', back: '🎒', weapon: '⚔️' }[acc.cat];
        div.innerHTML = `
      <div class="acc-cat-tag">${catIcon}</div>
      <span class="acc-emoji">${acc.emoji}</span>
      <span class="acc-label">${acc.name.split(' ').slice(0, 2).join(' ')}</span>
      ${equipped ? '<div class="equipped-badge">✓</div>' : ''}
      ${!unlocked ? '<div class="lock-icon">🔒</div>' : ''}
    `;
        div.onclick = () => unlocked ? toggleEquip(acc.id) : showToast(`🔒 Visita ${acc.place} para desbloquear`);
        grid.appendChild(div);
    });
    // update cat filter buttons
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
        const prev = state.equipped[acc.cat];
        state.equipped[acc.cat] = id;
        const catNames = { hat: 'Sombrero', neck: 'Collar', back: 'Espalda', weapon: 'Arma' };
        showToast(`✨ ¡${acc.emoji} ${acc.name} equipado en slot ${catNames[acc.cat]}!`);
    }
    saveState();
    renderAccGrid();
    updateEquippedPreview();
    updateDino3DAccessories();
}

function updateEquippedPreview() {
    const container = document.getElementById('equipped-preview');
    const slotDefs = [
        { key: 'hat', icon: '🎩', label: 'Sombrero' },
        { key: 'neck', icon: '📿', label: 'Collar' },
        { key: 'back', icon: '🎒', label: 'Espalda' },
        { key: 'weapon', icon: '⚔️', label: 'Arma' },
    ];
    container.innerHTML = slotDefs.map(slot => {
        const id = state.equipped[slot.key];
        const acc = id !== null ? ACCESSORIES.find(a => a.id === id) : null;
        return `<div class="equip-slot-badge ${acc ? 'filled' : ''}" onclick="switchTab('home');activeAccCat='${slot.key}';renderAccGrid();" title="${slot.label}">
      <span class="esb-icon">${acc ? acc.emoji : slot.icon}</span>
      <span class="esb-label">${acc ? acc.name.split(' ')[0] : slot.label}</span>
      ${acc ? '' : '<span class="esb-empty">vacío</span>'}
    </div>`;
    }).join('');
}

// ── MISSIONS ──────────────────────────────────
function renderMissions() {
    const list = document.getElementById('missions-list');
    list.innerHTML = '';
    MISSIONS.forEach((m, i) => {
        const done = state.completedMissions.includes(m.id);
        const div = document.createElement('div');
        div.className = 'mission-card' + (done ? ' completed' : (i === 0 ? ' active-mission' : ''));
        div.innerHTML = `
      <div class="mission-place">${m.emoji} ${m.place}</div>
      <div class="mission-name">${m.name}</div>
      <div class="mission-desc">${m.desc}</div>
      <div class="mission-reward">🎁 Recompensa: ${ACCESSORIES[m.accessory].emoji} ${ACCESSORIES[m.accessory].name} · +${ACCESSORIES[m.accessory].xp} XP</div>
      ${done ? `<div class="badge-completed">✅ Completada · +${ACCESSORIES[m.accessory].xp} XP ganados</div>` : `
      <div class="mission-actions">
        <button class="btn-scan-mission" onclick="openARFromMission(${m.id})">
          📷 Ir a escanear
        </button>
        <button class="btn-share" onclick="shareMission(${m.id})">
          📤 Compartir
        </button>
      </div>`}
    `;
        list.appendChild(div);
    });
}

function openARFromMission(missionId) {
    currentMissionId = missionId;
    openAR();
}

function shareMission(missionId) {
    const m = MISSIONS[missionId];
    const text = `🦕 ¡Estoy explorando ${m.place} con Urion - Tarija Discovery! ${m.emoji} ${m.name}\n\n#Tarija #Bolivia #TarijDiscovery #Urion`;
    if (navigator.share) {
        navigator.share({ title: 'Urion – Tarija Discovery', text, url: window.location.href })
            .catch(() => copyToClipboard(text));
    } else {
        copyToClipboard(text);
    }
}

function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => showToast('📋 Texto copiado al portapapeles'));
    } else {
        showToast('📤 ¡Comparte tu aventura en Tarija!');
    }
}

function updateNextMissionHint() {
    const next = MISSIONS.find(m => !state.completedMissions.includes(m.id));
    const hint = document.getElementById('next-mission-hint');
    if (next && hint) {
        hint.textContent = `Visita ${next.place} para desbloquear ${ACCESSORIES[next.accessory].emoji} ${ACCESSORIES[next.accessory].name}`;
    } else if (hint) {
        hint.textContent = '🎉 ¡Has completado todas las misiones! ¡Eres un experto explorador tarijeño!';
    }
}

// ── AR ────────────────────────────────────────
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
    refreshMapMarkers(); // update proximity buttons after returning
}

function stopCamera() {
    if (cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
        cameraStream = null;
    }
    const video = document.getElementById('ar-video');
    if (video) { video.srcObject = null; }
}

function startCamera() {
    const permUI = document.getElementById('cam-permission-ui');
    const liveUI = document.getElementById('cam-live-ui');
    const video = document.getElementById('ar-video');

    // Show a brief loading state
    permUI.style.display = 'flex';
    liveUI.style.display = 'none';
    document.getElementById('cam-perm-title').textContent = 'Activando cámara…';

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        showCameraError('Tu navegador no soporta acceso a cámara. Usa el modo demo.');
        return;
    }

    // Prefer back camera, fall back to any camera
    const constraints = [
        { video: { facingMode: { exact: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } },
        { video: { facingMode: 'environment' } },
        { video: true }
    ];

    function tryConstraint(index) {
        if (index >= constraints.length) {
            showCameraError('No se pudo acceder a la cámara. Usa el modo demo abajo.');
            return;
        }
        navigator.mediaDevices.getUserMedia(constraints[index])
            .then(stream => {
                cameraStream = stream;
                video.srcObject = stream;
                video.setAttribute('playsinline', '');
                video.setAttribute('muted', '');
                // Force play with user-gesture fallback
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            permUI.style.display = 'none';
                            liveUI.style.display = 'block';
                            showToast('📷 Cámara activa — apunta al marcador');
                        })
                        .catch(() => {
                            // autoplay blocked — show tap-to-play overlay
                            permUI.style.display = 'none';
                            liveUI.style.display = 'block';
                            showToast('📷 Toca la pantalla si la cámara no inicia');
                            video.addEventListener('click', () => video.play(), { once: true });
                        });
                } else {
                    permUI.style.display = 'none';
                    liveUI.style.display = 'block';
                }
            })
            .catch(err => {
                console.warn('Camera attempt', index, err.name, err.message);
                if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
                    showCameraError('Permiso de cámara denegado.\nActiva la cámara en ajustes del navegador o usa el modo demo.');
                } else if (err.name === 'NotFoundError' || err.name === 'DevicesNotFoundError') {
                    showCameraError('No se encontró cámara en este dispositivo.');
                } else if (err.name === 'NotReadableError' || err.name === 'TrackStartError') {
                    // Camera in use by another app — try next constraint
                    tryConstraint(index + 1);
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
    // Still show demo UI underneath
    document.getElementById('cam-live-ui').style.display = 'block';
    document.getElementById('cam-live-ui').style.zIndex = '-1';
    permUI.style.background = 'rgba(0,0,0,0.88)';
}

function simulateScan(missionId) {
    let id = missionId;
    if (id === 'random') {
        const unfinished = MISSIONS.filter(m => !state.completedMissions.includes(m.id));
        if (unfinished.length === 0) {
            showToast('🎉 ¡Ya completaste todas las misiones!');
            return;
        }
        id = unfinished[Math.floor(Math.random() * unfinished.length)].id;
    }
    if (state.completedMissions.includes(id)) {
        showToast('✅ Ya completaste esta misión');
        return;
    }
    pendingUnlockId = id;
    closeAR();
    setTimeout(() => showUnlockModal(id), 400);
}

// ── UNLOCK MODAL ──────────────────────────────
function showUnlockModal(missionId) {
    const m = MISSIONS[missionId];
    const a = ACCESSORIES.find(acc => acc.id === m.accessory) || ACCESSORIES[m.accessory];
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
    const m = MISSIONS[pendingUnlockId];
    const accId = m.accessory;
    const acc = ACCESSORIES.find(a => a.id === accId);
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
    updateDino3DAccessories();
    updateNextMissionHint();
    showToast(`🎉 ¡${acc.emoji} ${acc.name} equipado en Rex!`);
    pendingUnlockId = null;
}

function closeModal() {
    document.getElementById('unlock-modal').classList.remove('active');
    if (pendingUnlockId !== null) {
        const m = MISSIONS[pendingUnlockId];
        const accId = m.accessory;
        const acc = ACCESSORIES.find(a => a.id === accId);
        if (!state.unlockedAcc.includes(accId)) state.unlockedAcc.push(accId);
        if (!state.completedMissions.includes(pendingUnlockId)) {
            state.completedMissions.push(pendingUnlockId);
            state.xp += acc.xp;
        }
        saveState();
        renderAccGrid();
        renderMissions();
        updateProfileUI();
        updateNextMissionHint();
        pendingUnlockId = null;
    }
}

// ── PROFILE ───────────────────────────────────
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
    document.getElementById('lvl-num').textContent = level;
    document.getElementById('xp-progress-text').textContent = `${xpCurrent} / 100 XP`;
    document.getElementById('xp-bar').style.width = pct + '%';

    // Show correct button section
    const demoSection = document.getElementById('demo-exit-section');
    const realSection = document.getElementById('real-account-section');
    if (demoSection && realSection) {
        demoSection.style.display = state.isDemo ? 'block' : 'none';
        realSection.style.display = state.isDemo ? 'none' : 'block';
    }

    renderWallet();
}

function resetGame() {
    if (confirm('¿Reiniciar todo el progreso del demo?')) {
        state.unlockedAcc = [];
        state.equipped = { hat: null, neck: null, back: null, weapon: null };
        state.xp = 0;
        state.completedMissions = [];
        saveState();
        renderAccGrid();
        renderMissions();
        updateProfileUI();
        updateEquippedPreview();
        updateDino3DAccessories();
        updateNextMissionHint();
        showToast('🔄 Progreso reiniciado');
    }
}

// ── MAP PLACES DATA ──────────────────────────
const MAP_PLACES = [
    { id: 'cat', name: 'Catedral Basílica', lat: -21.5309, lng: -64.7297, emoji: '⛪', missionId: 0, desc: 'Corazón espiritual de Tarija. Construida entre 1611-1691. 400 años de historia colonial.' },
    { id: 'vin', name: 'Viñedos Kohlberg', lat: -21.5150, lng: -64.7530, emoji: '🍇', missionId: 1, desc: 'Los mejores vinos de Bolivia. Valle Central a 1900m de altitud. 3 generaciones de tradición.' },
    { id: 'par', name: 'Parque Metropolitano Chapaco', lat: -21.5260, lng: -64.7180, emoji: '🌿', missionId: 2, desc: 'Pulmón verde de la ciudad. Flora y fauna endémica de los yungas tarijeños.' },
    { id: 'cas', name: 'Casa Dorada', lat: -21.5332, lng: -64.7312, emoji: '🏺', missionId: 3, desc: 'Joya del art nouveau tarijeño. Museo de Arte y Artesanías. 5 siglos de expresión artística.' },
    { id: 'ang', name: 'Cañón del Angosto', lat: -21.5060, lng: -64.7800, emoji: '🦋', missionId: 4, desc: 'Cañón de roca roja de 80 metros tallado por el río Guadalquivir. 200 especies de mariposas.' },
    { id: 'sal', name: 'San Lorenzo', lat: -21.4320, lng: -64.7850, emoji: '⚔️', missionId: 5, desc: 'Escenario de la Batalla de la Tablada (1817). Tierra del héroe Esteban Arze.' },
    { id: 'por', name: 'Mirador El Portillo', lat: -21.4980, lng: -64.7100, emoji: '🌅', missionId: 6, desc: 'Panorámica espectacular de los valles tarijeños al atardecer. Punto más alto del norte de la ciudad.' },
    { id: 'mus', name: 'Museo Paleontológico', lat: -21.5290, lng: -64.7340, emoji: '🦴', missionId: 7, desc: 'Colección de fósiles de megafauna más importante de Sudamérica. 11,000 años de historia.' },
    { id: 'bod', name: 'Bodega Aranjuez', lat: -21.5020, lng: -64.7620, emoji: '🍷', missionId: 8, desc: 'Fundada en 1960. Produce el singani tarijeño. Tradición vitivinícola que conquistó Bolivia.' },
    { id: 'cer', name: 'Reserva Biológica Cordillera', lat: -21.5580, lng: -64.8200, emoji: '🦋', missionId: 9, desc: '200 especies de mariposas endémicas. Sus colores inspiraron generaciones de artesanos tarijeños.' },
    { id: 'ala', name: 'Cerro Alarache', lat: -21.4850, lng: -64.7050, emoji: '🏹', missionId: 10, desc: 'Vista de los cuatro valles desde 2400m. Ruta de los exploradores coloniales.' },
    { id: 'tab', name: 'Museo Batalla Tablada', lat: -21.4350, lng: -64.7870, emoji: '⚔️', missionId: 11, desc: 'Conmemora el 15 de abril de 1817. Historia viva de la independencia chapaca.' },
    { id: 'cul', name: 'Casa de la Cultura', lat: -21.5315, lng: -64.7320, emoji: '🎸', missionId: 12, desc: 'Preserva el folclore chapaco: cuecas, bailecitos y erke. Alma musical del valle.' },
    { id: 'san', name: 'Santuario de la Virgen', lat: -21.5200, lng: -64.7500, emoji: '⛪', missionId: 13, desc: 'Meta de peregrinos del altiplano y los valles. San Roque protege a todos los viajeros.' },
    { id: 'ber', name: 'Río Bermejo', lat: -21.7800, lng: -64.6500, emoji: '🌊', missionId: 14, desc: 'Frontera natural con Argentina. Riberas de cedro y arrayán. Las caminatas más míticas.' },
    { id: 'pla', name: 'Plaza Luis de Fuentes', lat: -21.5318, lng: -64.7290, emoji: '🏛️', missionId: 15, desc: 'Plaza fundacional de Tarija, 1574. Luis de Fuentes plantó aquí la primera piedra de la ciudad.' },
];

// Rewards available at each location (restaurants, shops, tourism)
const PLACE_REWARDS = [
    { name: 'Restaurante El Viñedo', type: '🍽️ Comida', pct: 10 },
    { name: 'Bodega Kohlberg Store', type: '🍷 Vino & Souvenirs', pct: 15 },
    { name: 'Artesanías Chapacas', type: '🎁 Mercancía Oficial', pct: 10 },
    { name: 'Parrilla Los Álamos', type: '🍽️ Comida', pct: 5 },
    { name: 'Tienda Turismo Tarija', type: '🎁 Mercancía Oficial', pct: 10 },
    { name: 'Café del Valle', type: '☕ Café & Snacks', pct: 5 },
    { name: 'Restaurante Casa Chapaca', type: '🍽️ Comida', pct: 10 },
    { name: 'Heladería El Portillo', type: '🍦 Postres', pct: 15 },
];

// ── DISCOUNT WALLET ──────────────────────────
let pendingDiscountData = null;

function generateDiscountCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'URION-';
    for (let i = 0; i < 6; i++) code += chars[Math.floor(Math.random() * chars.length)];
    return code;
}

function addDiscount(missionId, fromPoint) {
    const m = MISSIONS.find(x => x.id === missionId);
    const placeData = MAP_PLACES.find(p => p.missionId === missionId) || MAP_PLACES[0];
    const reward = PLACE_REWARDS[missionId % PLACE_REWARDS.length];
    const code = generateDiscountCode();
    const disc = {
        id: Date.now(),
        code,
        place: reward.name,
        type: reward.type,
        pct: reward.pct,
        location: m ? m.place : placeData.name,
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
    if (!list) return;

    const discounts = state.discounts || [];
    const active = discounts.filter(d => !d.used).length;
    if (badge) badge.textContent = active > 0 ? active + ' activos' : '';

    if (discounts.length === 0) {
        list.innerHTML = `<div style="text-align:center;padding:1.5rem;color:rgba(200,169,126,0.3);font-size:0.82rem">Sin descuentos todavía.<br>¡Escanea un lugar turístico!</div>`;
        return;
    }

    list.innerHTML = discounts.map(d => {
        const date = new Date(d.ts);
        const expires = new Date(d.ts + 48 * 3600 * 1000);
        const expStr = expires.toLocaleDateString('es-BO', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });
        return `
    <div class="wallet-card ${d.used ? 'used' : ''}">
      ${d.used
                ? `<div class="wc-used-badge">Usado</div>`
                : `<button class="wc-use-btn" onclick="markDiscountUsed(${d.id})">Marcar usado ✓</button>`}
      <div style="display:flex;align-items:flex-end;gap:0.6rem">
        <div class="wc-pct">${d.pct}%</div>
        <div>
          <div class="wc-place">${d.place}</div>
          <div class="wc-type">${d.type} · ${d.location}</div>
        </div>
      </div>
      <div class="wc-code" onclick="copyCode('${d.code}')" title="Toca para copiar">${d.code} 📋</div>
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
    document.getElementById('disc-type-label').textContent = disc.type + ' · cerca de ' + disc.location;
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

// ── GPS & PROXIMITY ──────────────────────────
let userLatLng = null;          // { lat, lng } or null
let gpsWatchId = null;
let userLocationMarker = null;
let userLocationCircle = null;
const PROXIMITY_METERS = 300;   // how close to claim (300m — demo-friendly)
const DEMO_BYPASS_GPS = true;   // in demo mode skip proximity check

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
    if (!navigator.geolocation) return;
    if (gpsWatchId !== null) return;
    gpsWatchId = navigator.geolocation.watchPosition(
        pos => {
            userLatLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
            updateUserLocationMarker();
            updateARDistanceBadge();
        },
        () => { userLatLng = null; },
        { enableHighAccuracy: true, maximumAge: 10000 }
    );
}

function updateUserLocationMarker() {
    if (!tarijaMap || !userLatLng) return;
    const latlng = [userLatLng.lat, userLatLng.lng];

    if (!userLocationMarker) {
        const icon = L.divIcon({
            html: `<div style="width:18px;height:18px;background:#4a90e2;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 4px rgba(74,144,226,0.25),0 2px 8px rgba(0,0,0,0.4)"></div>`,
            className: '', iconSize: [18, 18], iconAnchor: [9, 9]
        });
        userLocationMarker = L.marker(latlng, { icon, zIndexOffset: 1000 }).addTo(tarijaMap);
        userLocationCircle = L.circle(latlng, {
            radius: PROXIMITY_METERS,
            color: '#4a90e2', fillColor: '#4a90e2',
            fillOpacity: 0.07, weight: 1.5, opacity: 0.4,
            dashArray: '4 6'
        }).addTo(tarijaMap);
    } else {
        userLocationMarker.setLatLng(latlng);
        userLocationCircle.setLatLng(latlng);
    }

    // Refresh map popups so proximity buttons update
    refreshMapMarkers();
}

function updateARDistanceBadge() {
    const badge = document.getElementById('gps-dist-badge');
    if (!badge || !arPointMissionId) return;
    const place = MAP_PLACES.find(p => p.missionId === arPointMissionId);
    if (!place || !userLatLng) return;
    const dist = Math.round(getDistanceMeters(userLatLng.lat, userLatLng.lng, place.lat, place.lng));
    badge.textContent = dist <= PROXIMITY_METERS
        ? `✅ Estás aquí · ${dist}m`
        : `📡 ${dist}m del lugar`;
    badge.style.borderColor = dist <= PROXIMITY_METERS ? 'rgba(74,184,90,0.5)' : 'rgba(200,169,126,0.25)';
}

// ── REWARD POINT SYSTEM (Pokémon GO style) ───
let pendingRewardPointMission = null;
let rewardPointShown = false;
let arPointMissionId = null;   // mission shown as AR point in camera

function checkFirstOpenRewardPoint() {
    const hasInventory = state.unlockedAcc && state.unlockedAcc.length > 0;
    if (!hasInventory && !rewardPointShown) {
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
    const placeData = MAP_PLACES.find(p => p.missionId === missionId) || MAP_PLACES[0];
    const reward = PLACE_REWARDS[missionId % PLACE_REWARDS.length];
    document.getElementById('rp-place-name').textContent = m ? m.place : placeData.name;
    document.getElementById('rp-place-desc').textContent = m ? m.desc : placeData.desc;
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

// ── AR POINT OVERLAY (in-camera Pokémon GO point) ──
function showARPoint(missionId) {
    arPointMissionId = missionId;
    const place = MAP_PLACES.find(p => p.missionId === missionId);
    const overlay = document.getElementById('ar-point-overlay');
    const label = document.getElementById('ar-point-label');
    const placeL = document.getElementById('ar-point-place-label');
    const badge = document.getElementById('gps-dist-badge');
    const demoDiv = document.getElementById('ar-demo-btns-container');

    if (place) placeL.textContent = place.name;
    label.textContent = '📍 ¡Toca para reclamar!';
    overlay.classList.remove('hidden');

    // Hide demo buttons — point IS the action
    if (demoDiv) demoDiv.style.display = 'none';

    // Show GPS badge
    if (badge) {
        badge.style.display = 'block';
        badge.textContent = userLatLng ? '📡 Calculando...' : (state.isDemo ? '✅ Modo demo · Sin GPS' : '📡 Buscando GPS...');
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
        const dist = userLatLng && place
            ? Math.round(getDistanceMeters(userLatLng.lat, userLatLng.lng, place.lat, place.lng))
            : null;
        showToast(`📡 Debes estar a menos de ${PROXIMITY_METERS}m del lugar${dist ? ' (estás a ' + dist + 'm)' : ''}`);
        return;
    }

    const id = arPointMissionId;
    hideARPoint();
    closeAR();
    setTimeout(() => showDiscountModal(id, true), 400);
}

// ── TARIJA MAP (Leaflet) ──────────────────────
let tarijaMap = null;
let mapMarkers = {};

function initTarijaMap() {
    if (tarijaMap) return;

    tarijaMap = L.map('tarija-map', {
        center: [-21.535, -64.730],
        zoom: 13,
        zoomControl: true,
        attributionControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        maxZoom: 19, subdomains: 'abcd',
    }).addTo(tarijaMap);

    startGPS();
    refreshMapMarkers();
}

function getMarkerClass(placeId) {
    const place = MAP_PLACES.find(p => p.id === placeId);
    if (!place) return 'available';
    if (state.completedMissions.includes(place.missionId)) return 'completed';
    const hasInventory = state.unlockedAcc && state.unlockedAcc.length > 0;
    if (!hasInventory) {
        const next = MISSIONS.find(m => !state.completedMissions.includes(m.id));
        if (next && next.id === place.missionId) return 'reward';
    }
    return 'available';
}

function refreshMapMarkers() {
    if (!tarijaMap) return;
    Object.values(mapMarkers).forEach(m => m.remove());
    mapMarkers = {};

    MAP_PLACES.forEach(place => {
        const markerClass = getMarkerClass(place.id);
        const isDone = state.completedMissions.includes(place.missionId);
        const near = isNearPlace(place);

        const icon = L.divIcon({
            html: `<div class="pgo-marker ${markerClass}"><div class="pgo-marker-inner">${place.emoji}</div></div>`,
            className: '', iconSize: [52, 62], iconAnchor: [26, 62], popupAnchor: [0, -64],
        });

        const marker = L.marker([place.lat, place.lng], { icon }).addTo(tarijaMap);

        const mission = MISSIONS.find(m => m.id === place.missionId);
        const acc = mission ? ACCESSORIES.find(a => a.id === mission.accessory) : null;
        const reward = PLACE_REWARDS[place.missionId % PLACE_REWARDS.length];
        const isReward = markerClass === 'reward';

        // Proximity info for button
        const proximityHint = (!state.isDemo || !DEMO_BYPASS_GPS) && !near
            ? `<div style="font-size:0.68rem;color:rgba(200,169,126,0.45);margin-bottom:0.4rem">📡 Debes estar a menos de ${PROXIMITY_METERS}m para reclamar</div>`
            : '';

        let actionBtn;
        if (isDone) {
            actionBtn = `<button class="map-popup-btn" onclick="showDiscountModal(${place.missionId},false);closeMapPopup()">🎁 Ver descuento</button>`;
        } else if (isReward) {
            actionBtn = near
                ? `<button class="map-popup-btn reward-btn" onclick="openARPoint(${place.missionId})">📍 Abrir cámara AR →</button>`
                : `<button class="map-popup-btn" style="opacity:0.5;cursor:not-allowed" disabled>📡 Acércate al lugar</button>`;
        } else {
            actionBtn = near
                ? `<button class="map-popup-btn" onclick="openARPoint(${place.missionId})">📷 Abrir cámara AR →</button>`
                : `<button class="map-popup-btn" style="opacity:0.5;cursor:not-allowed" disabled>📡 Acércate (${PROXIMITY_METERS}m)</button>`;
        }

        const popupContent = `
      <div class="map-popup-name">${place.emoji} ${place.name}</div>
      <div class="map-popup-desc">${place.desc}</div>
      ${isDone
                ? `<div style="color:#7a9e6b;font-size:0.76rem;font-weight:600;margin-bottom:0.4rem">✅ Ya visitaste este lugar</div>`
                : `<div style="font-size:0.73rem;color:rgba(200,169,126,0.5);margin-bottom:0.4rem">🎒 ${acc ? acc.emoji + ' ' + acc.name : '—'} · 🎁 ${reward.pct}% dto.</div>`}
      ${proximityHint}${actionBtn}`;

        marker.bindPopup(popupContent, { maxWidth: 245 });
        mapMarkers[place.id] = marker;
    });
}

// Open AR screen with the Pokémon GO point for this place
function openARPoint(missionId) {
    closeMapPopup();
    currentMissionId = missionId;
    // Open AR then show the floating point
    document.getElementById('screen-app').classList.remove('active');
    document.getElementById('screen-ar').classList.add('active');
    startCamera();
    // Show AR point overlay after camera initialises
    setTimeout(() => showARPoint(missionId), 600);
}

function claimFromMap(missionId) {
    tarijaMap && tarijaMap.closePopup();
    openARPoint(missionId);
}

function closeMapPopup() {
    tarijaMap && tarijaMap.closePopup();
}

// ── 3D DINO (Three.js) ────────────────────────
let dinoScene, dinoCamera, dinoRenderer, dinoMesh, dinoGroup;
let hatMesh, crownMesh, collarMesh; // legacy compat refs
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

    // ── DARK DRAMATIC LIGHTING — no more cute soft glow ──
    // Very dim ambient — most light comes from directional sources
    const ambient = new THREE.AmbientLight(0x1a2a3a, 0.55);
    dinoScene.add(ambient);

    // Strong top-left key light — cold blue-white, casts hard shadows
    const keyLight = new THREE.DirectionalLight(0xc8dff0, 1.05);
    keyLight.position.set(-3, 7, 4);
    keyLight.castShadow = true;
    dinoScene.add(keyLight);

    // Very faint warm fill from right — just barely visible
    const fillLight = new THREE.DirectionalLight(0x7a6040, 0.28);
    fillLight.position.set(4, 1, 2);
    dinoScene.add(fillLight);

    // Dark rim from behind — creates silhouette depth
    const rimLight = new THREE.DirectionalLight(0x203040, 0.4);
    rimLight.position.set(0, -1, -5);
    dinoScene.add(rimLight);

    // Small teal underlighting for the scales/belly — eerie
    const underLight = new THREE.PointLight(0x0a4a4a, 0.5, 6);
    underLight.position.set(0, -0.5, 1.5);
    dinoScene.add(underLight);

    accMeshes = {};
    dinoGroup = new THREE.Group();
    dinoScene.add(dinoGroup);

    buildDino();
    buildAccessoryObjects();
    updateDino3DAccessories();
    animateDino();
}

// ── CROCONAW-STYLE DINO ──────────────────────
function buildDino() {
    // ═══════════════════════════════════════════════
    // EXACT CROCONAW REPLICA — based on reference image
    // Sky blue body, large yellow belly with blue marks,
    // RED head crest, small black+orange eyes, white fangs,
    // stubby rounded arms/legs, short thick tail
    // ═══════════════════════════════════════════════

    // ── EXACT PALETTE — slightly desaturated for dark dramatic look ──
    const skyBlue = new THREE.MeshPhongMaterial({ color: 0x4aafba, shininess: 18, specular: 0x336677 }); // slightly desaturated
    const dkBlue = new THREE.MeshPhongMaterial({ color: 0x2e8898, shininess: 12 });
    const yellow = new THREE.MeshPhongMaterial({ color: 0xd4c458, shininess: 10, specular: 0x887744 }); // warmer/darker yellow
    const redCrest = new THREE.MeshPhongMaterial({ color: 0xaa1a1a, shininess: 20, specular: 0x661111 }); // darker red
    const black = new THREE.MeshPhongMaterial({ color: 0x0a0a0a, shininess: 10 });
    const orange = new THREE.MeshPhongMaterial({ color: 0xbb3a10, shininess: 40, specular: 0x884422 }); // darker orange
    const white = new THREE.MeshPhongMaterial({ color: 0xddd8c8, shininess: 50 });                    // off-white fangs

    // ══ BODY — massive, round, egg-shaped torso ══
    // Croconaw's body is almost a perfect wide oval, very fat
    const bodyGeo = new THREE.SphereGeometry(1.0, 28, 22);
    bodyGeo.scale(1.0, 1.08, 0.88);
    const body = new THREE.Mesh(bodyGeo, skyBlue);
    body.position.set(0, 1.0, 0);
    dinoGroup.add(body);

    // ══ YELLOW BELLY — large ovoid covering front of torso ══
    // In the image it's a big flat teardrop shape covering almost all the front
    const bellyGeo = new THREE.SphereGeometry(0.82, 22, 18);
    bellyGeo.scale(0.92, 1.05, 0.42); // very flat — it's painted on the surface
    const belly = new THREE.Mesh(bellyGeo, yellow);
    belly.position.set(0, 1.0, 0.72);
    dinoGroup.add(belly);

    // ══ BLUE MARKINGS ON BELLY — the 3 distinctive marks in image ══
    // Teardrop/drop at top center of belly
    const dropGeo = new THREE.SphereGeometry(0.14, 12, 10);
    dropGeo.scale(0.7, 1.2, 0.35);
    const drop = new THREE.Mesh(dropGeo, skyBlue);
    drop.position.set(0, 1.42, 0.82);
    dinoGroup.add(drop);

    // Triangle mark lower belly
    const triGeo = new THREE.CylinderGeometry(0, 0.22, 0.22, 3, 1);
    const tri = new THREE.Mesh(triGeo, skyBlue);
    tri.position.set(0, 0.58, 0.82);
    tri.rotation.y = Math.PI / 6;
    dinoGroup.add(tri);

    // Two side ovals (small blue patches flanking lower belly)
    [-0.28, 0.28].forEach(x => {
        const oGeo = new THREE.SphereGeometry(0.13, 10, 8);
        oGeo.scale(1, 0.7, 0.35);
        const o = new THREE.Mesh(oGeo, skyBlue);
        o.position.set(x, 0.75, 0.82);
        dinoGroup.add(o);
    });

    // ══ NECK — short, thick, blends head into body ══
    const neckGeo = new THREE.CylinderGeometry(0.42, 0.55, 0.38, 14);
    const neck = new THREE.Mesh(neckGeo, skyBlue);
    neck.position.set(0, 1.95, 0.12);
    neck.rotation.x = -0.15;
    dinoGroup.add(neck);

    // ══ HEAD GROUP ══
    // Croconaw head: wide, slightly flattened sphere
    // The whole face is dominated by the huge yellow lower jaw
    headGroup = new THREE.Group();
    headGroup.position.set(0, 2.44, 0.18);
    dinoGroup.add(headGroup);

    // Upper skull — blue, wide and a bit flat
    const skullGeo = new THREE.SphereGeometry(0.72, 26, 20);
    skullGeo.scale(1.08, 0.95, 1.0);
    headGroup.add(new THREE.Mesh(skullGeo, skyBlue));

    // ── RED HEAD CREST — the spiky crown on top ──
    // In the image: 3 pointed triangular red spikes, middle one tallest
    const crestData = [
        { x: 0, y: 0.7, z: -0.08, rx: -0.12, rz: 0, rBase: 0.14, h: 0.58 }, // tall center
        { x: -0.28, y: 0.56, z: -0.04, rx: -0.05, rz: 0.38, rBase: 0.10, h: 0.44 }, // left
        { x: 0.28, y: 0.56, z: -0.04, rx: -0.05, rz: -0.38, rBase: 0.10, h: 0.44 }, // right
    ];
    crestData.forEach(c => {
        const cGeo = new THREE.ConeGeometry(c.rBase, c.h, 5);
        const cm = new THREE.Mesh(cGeo, redCrest);
        cm.position.set(c.x, c.y, c.z);
        cm.rotation.x = c.rx; cm.rotation.z = c.rz;
        headGroup.add(cm);
    });

    // ── LARGE YELLOW JAW — dominates the lower face ──
    // In the image the jaw is extremely wide and puffy, basically half the head
    const jawGeo = new THREE.SphereGeometry(0.68, 22, 16);
    jawGeo.scale(1.12, 0.7, 1.05);
    const jaw = new THREE.Mesh(jawGeo, yellow);
    jaw.position.set(0, -0.32, 0.38);
    headGroup.add(jaw);

    // Blue upper snout / muzzle ridge blending into skull
    const muzzleGeo = new THREE.SphereGeometry(0.5, 16, 12);
    muzzleGeo.scale(1.05, 0.5, 1.0);
    const muzzle = new THREE.Mesh(muzzleGeo, skyBlue);
    muzzle.position.set(0, -0.08, 0.5);
    headGroup.add(muzzle);

    // ── TWO WHITE FANGS — poking down from upper jaw ──
    // In the image: 2 small-ish white fangs, not huge, slightly angled outward
    [-0.18, 0.18].forEach((x, i) => {
        const fGeo = new THREE.ConeGeometry(0.055, 0.26, 7);
        const fang = new THREE.Mesh(fGeo, white);
        fang.position.set(x, -0.26, 0.72);
        fang.rotation.x = 0.2;
        fang.rotation.z = x < 0 ? 0.12 : -0.12;
        headGroup.add(fang);
    });

    // ── NOSTRILS — two small dark dots on muzzle ──
    [-0.18, 0.18].forEach(x => {
        const nGeo = new THREE.SphereGeometry(0.042, 8, 7);
        const n = new THREE.Mesh(nGeo, black);
        n.position.set(x, -0.1, 0.82);
        headGroup.add(n);
    });

    // ── EYES — Croconaw's characteristic narrow eyes ──
    // In the image: mostly black with a sliver of orange/red visible
    // Heavy black surround, positioned high on the face, slightly squinting
    // Left eye only visible in image (looking right), right eye hidden
    // We do both: black ellipse + orange inner + small white glint
    [-0.34, 0.34].forEach((x, idx) => {
        const eg = new THREE.Group();
        // Eye is high, slightly to side, facing mostly forward
        eg.position.set(x, 0.2, 0.58);
        headGroup.add(eg);

        // Big black eye socket
        const sockGeo = new THREE.SphereGeometry(0.19, 16, 14);
        sockGeo.scale(1.15, 0.82, 0.6);
        eg.add(new THREE.Mesh(sockGeo, black));

        // Orange/red iris — just a small strip showing under the heavy brow
        const irisGeo = new THREE.SphereGeometry(0.13, 14, 12);
        irisGeo.scale(1.1, 0.6, 0.55);
        const iris = new THREE.Mesh(irisGeo, orange);
        iris.position.set(0, -0.04, 0.08);
        eg.add(iris);

        // Tiny white catchlight
        const glintGeo = new THREE.SphereGeometry(0.038, 8, 7);
        const glint = new THREE.Mesh(glintGeo, white);
        glint.position.set(0.04, 0.03, 0.14);
        eg.add(glint);

        // ── HEAVY BLACK BROW — the angry/squinting brow from image ──
        // Thick flat dark strip above the eye, angled inward (furrowed)
        const browGeo = new THREE.SphereGeometry(0.21, 12, 8);
        browGeo.scale(1.1, 0.38, 0.55);
        const brow = new THREE.Mesh(browGeo, black);
        brow.position.set(0, 0.16, 0.06);
        // Angle brow: inner side down, outer side up (angry look)
        brow.rotation.z = x < 0 ? 0.4 : -0.4;
        eg.add(brow);

        if (idx === 0) eyeStarL = eg; else eyeStarR = eg;
    });

    // ══ TAIL — short, stubby, thick at base, rounds off quickly ══
    // In the image the tail barely shows, is very short and round
    tailGroup = new THREE.Group();
    const tailSegs = [
        { r: 0.38, l: 0.44, y: 0.5, z: -0.92, rx: 0.95 },
        { r: 0.26, l: 0.36, y: 0.28, z: -1.24, rx: 1.18 },
        { r: 0.16, l: 0.28, y: 0.14, z: -1.5, rx: 1.38 },
        { r: 0.09, l: 0.20, y: 0.06, z: -1.68, rx: 1.5 },
    ];
    tailSegs.forEach(s => {
        const tg = new THREE.CylinderGeometry(s.r * 0.72, s.r, s.l, 12);
        const tm = new THREE.Mesh(tg, skyBlue);
        tm.position.set(0, s.y, s.z); tm.rotation.x = s.rx;
        tailGroup.add(tm);
    });
    // Round tail tip
    const tipGeo = new THREE.SphereGeometry(0.1, 10, 8);
    const tip = new THREE.Mesh(tipGeo, dkBlue);
    tip.position.set(0, 0.02, -1.8);
    tailGroup.add(tip);
    dinoGroup.add(tailGroup);

    // ══ ARMS — very short, rounded, stubby — like in image ══
    // Croconaw's arms are like little rounded stumps hanging at sides
    leftArm = buildCrocoArm(-1.0, 1.0, 0.1, true, skyBlue, dkBlue);
    rightArm = buildCrocoArm(1.0, 1.0, 0.1, false, skyBlue, dkBlue);
    dinoGroup.add(leftArm);
    dinoGroup.add(rightArm);

    // ══ LEGS — short, wide, round feet, sitting pose ══
    leftLeg = buildCrocoLeg(-0.46, skyBlue, dkBlue);
    rightLeg = buildCrocoLeg(0.46, skyBlue, dkBlue);
    dinoGroup.add(leftLeg);
    dinoGroup.add(rightLeg);

    // Ground shadow
    const shg = new THREE.CircleGeometry(0.95, 28);
    const sh = new THREE.Mesh(shg, new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.15 }));
    sh.rotation.x = -Math.PI / 2; sh.position.set(0, -0.58, 0.05);
    dinoGroup.add(sh);

    dinoGroup.position.y = -0.72;

    // Store blush refs as null (no blush — not needed for this design)
    blushLeft = null; blushRight = null;
}

// Rounded stubby arm — matches the image's small rounded limbs
function buildCrocoArm(x, y, z, isLeft, skyBlue, dkBlue) {
    const g = new THREE.Group();
    const sign = isLeft ? -1 : 1;

    // Upper arm — round blob
    const uGeo = new THREE.SphereGeometry(0.26, 14, 12);
    uGeo.scale(0.82, 1.0, 0.78);
    g.add(new THREE.Mesh(uGeo, skyBlue));

    // Lower arm — slightly smaller round blob hanging down-forward
    const lGeo = new THREE.SphereGeometry(0.22, 12, 10);
    lGeo.scale(0.8, 0.95, 0.75);
    const lower = new THREE.Mesh(lGeo, skyBlue);
    lower.position.set(sign * 0.05, -0.28, 0.16);
    g.add(lower);

    // Hand / nub with 3 small rounded fingers
    [-0.1, 0, 0.1].forEach(fx => {
        const fg = new THREE.SphereGeometry(0.1, 10, 8);
        fg.scale(0.8, 1.2, 0.7);
        const finger = new THREE.Mesh(fg, dkBlue);
        finger.position.set(sign * 0.05 + fx * 0.5, -0.44, 0.26);
        g.add(finger);
    });

    g.position.set(x, y, z);
    return g;
}

// Short fat legs with wide rounded feet — matches image
function buildCrocoLeg(x, skyBlue, dkBlue) {
    const g = new THREE.Group();

    // Upper leg — round and wide
    const thGeo = new THREE.SphereGeometry(0.3, 14, 12);
    thGeo.scale(0.9, 1.0, 0.85);
    g.add(new THREE.Mesh(thGeo, skyBlue));

    // Lower leg
    const shGeo = new THREE.SphereGeometry(0.24, 12, 10);
    shGeo.scale(0.88, 0.85, 0.82);
    const shin = new THREE.Mesh(shGeo, skyBlue);
    shin.position.set(0, -0.36, 0.06);
    g.add(shin);

    // Wide round foot — Croconaw's feet are wide blobs with 3 toes
    const footGeo = new THREE.SphereGeometry(0.24, 14, 12);
    footGeo.scale(1.55, 0.55, 1.3);
    const foot = new THREE.Mesh(footGeo, dkBlue);
    foot.position.set(0, -0.56, 0.14);
    g.add(foot);

    // 3 rounded toes
    [-0.18, 0, 0.18].forEach(tx => {
        const tg = new THREE.SphereGeometry(0.1, 10, 8);
        tg.scale(0.85, 0.65, 1.1);
        const toe = new THREE.Mesh(tg, dkBlue);
        toe.position.set(tx, -0.57, 0.32);
        g.add(toe);
    });

    g.position.set(x, 0.22, 0.08);
    return g;
}

function buildAccessoryObjects() {
    // All accessories built here and stored in accMeshes
    // Positions calibrated to Croconaw body

    // ── HAT SLOT ──────────────────────────────

    // id:0 Sombrero Chapaco
    {
        const g = new THREE.Group();
        const brimGeo = new THREE.CylinderGeometry(0.58, 0.62, 0.07, 18);
        g.add(new THREE.Mesh(brimGeo, new THREE.MeshPhongMaterial({ color: 0x1a0800, shininess: 50 })));
        const brimOL = new THREE.Mesh(brimGeo.clone(), new THREE.MeshPhongMaterial({ color: 0x050200, side: THREE.BackSide }));
        brimOL.scale.setScalar(1.06); g.add(brimOL);
        const crownGeo = new THREE.CylinderGeometry(0.28, 0.36, 0.52, 14);
        g.add(new THREE.Mesh(crownGeo, new THREE.MeshPhongMaterial({ color: 0x0d0400, shininess: 30 })));
        const bandGeo = new THREE.CylinderGeometry(0.365, 0.365, 0.1, 14);
        g.add(new THREE.Mesh(bandGeo, new THREE.MeshPhongMaterial({ color: 0x9a1a3a, shininess: 80 })));
        g.position.set(0, 2.3 + 0.8, 0.22); g.visible = false;
        dinoGroup.add(g); accMeshes[0] = g;
    }
    // id:1 Corona de Uvas
    {
        const g = new THREE.Group();
        for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            const gg = new THREE.SphereGeometry(0.11, 10, 8);
            const gr = new THREE.Mesh(gg, new THREE.MeshPhongMaterial({ color: 0x6a0a30, shininess: 90, specular: 0xdd88aa }));
            gr.position.set(Math.cos(a) * 0.48, Math.abs(Math.sin(a * 2)) * 0.1, Math.sin(a) * 0.38);
            g.add(gr);
        }
        const rGeo = new THREE.TorusGeometry(0.46, 0.05, 8, 22);
        g.add(new THREE.Mesh(rGeo, new THREE.MeshPhongMaterial({ color: 0x2d5a20, shininess: 40 })));
        g.children[g.children.length - 1].rotation.x = Math.PI / 2;
        g.position.set(0, 2.3 + 0.8, 0.22); g.visible = false;
        dinoGroup.add(g); accMeshes[1] = g;
    }
    // id:2 Casco Explorador
    {
        const g = new THREE.Group();
        const domeGeo = new THREE.SphereGeometry(0.62, 16, 12);
        domeGeo.scale(1, 0.6, 1);
        g.add(new THREE.Mesh(domeGeo, new THREE.MeshPhongMaterial({ color: 0xc8a025, shininess: 80, specular: 0xffdd44 })));
        const brimGeo = new THREE.CylinderGeometry(0.68, 0.68, 0.06, 18);
        g.add(new THREE.Mesh(brimGeo, new THREE.MeshPhongMaterial({ color: 0xaa8820, shininess: 60 })));
        const bandGeo = new THREE.CylinderGeometry(0.62, 0.62, 0.08, 18);
        g.add(new THREE.Mesh(bandGeo, new THREE.MeshPhongMaterial({ color: 0x6b3a1a, shininess: 40 })));
        g.position.set(0, 2.3 + 0.66, 0.22); g.visible = false;
        dinoGroup.add(g); accMeshes[2] = g;
    }
    // id:3 Yelmo del Héroe
    {
        const g = new THREE.Group();
        const domeGeo = new THREE.SphereGeometry(0.65, 16, 12);
        domeGeo.scale(1, 0.7, 1);
        g.add(new THREE.Mesh(domeGeo, new THREE.MeshPhongMaterial({ color: 0x707870, shininess: 200, specular: 0xaaaaaa })));
        const crestGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.55, 8);
        crestGeo.scale(1, 1, 0.3);
        const crest = new THREE.Mesh(crestGeo, new THREE.MeshPhongMaterial({ color: 0xcc2222, shininess: 60 }));
        crest.position.set(0, 0.34, 0); crest.rotation.x = 0.2; g.add(crest);
        const vizorGeo = new THREE.SphereGeometry(0.3, 10, 8); vizorGeo.scale(1.2, 0.35, 0.5);
        g.add(new THREE.Mesh(vizorGeo, new THREE.MeshPhongMaterial({ color: 0x303830, shininess: 300, specular: 0xaaaaff, transparent: true, opacity: 0.7 })));
        g.position.set(0, 2.3 + 0.7, 0.22); g.visible = false;
        dinoGroup.add(g); accMeshes[3] = g;
    }

    // ── NECK SLOT ──────────────────────────────

    // id:4 Collar de Ceibo
    {
        const g = new THREE.Group();
        const rGeo = new THREE.TorusGeometry(0.5, 0.04, 8, 20);
        const ring = new THREE.Mesh(rGeo, new THREE.MeshPhongMaterial({ color: 0xf5d080, shininess: 120 }));
        ring.rotation.x = Math.PI / 2; g.add(ring);
        const colors = [0xdd3040, 0xff6688, 0x55aa44, 0xffaa22, 0xff4488, 0x44bb66];
        for (let i = 0; i < 10; i++) {
            const a = (i / 10) * Math.PI * 2;
            const fg = new THREE.SphereGeometry(0.11, 8, 6); fg.scale(1, 0.7, 0.8);
            const f = new THREE.Mesh(fg, new THREE.MeshPhongMaterial({ color: colors[i % 6], shininess: 60 }));
            f.position.set(Math.cos(a) * 0.52, 0, Math.sin(a) * 0.42); g.add(f);
        }
        g.position.set(0, 1.72, 0.24); g.visible = false;
        dinoGroup.add(g); accMeshes[4] = g;
    }
    // id:5 Collar de Barro
    {
        const g = new THREE.Group();
        const rGeo = new THREE.TorusGeometry(0.48, 0.06, 8, 20);
        g.add(new THREE.Mesh(rGeo, new THREE.MeshPhongMaterial({ color: 0x8a5a30, shininess: 30 })));
        g.children[0].rotation.x = Math.PI / 2;
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const bg = new THREE.SphereGeometry(0.1, 8, 6);
            const b = new THREE.Mesh(bg, new THREE.MeshPhongMaterial({ color: i % 2 === 0 ? 0xc8a060 : 0x8a5a30, shininess: 40 }));
            b.position.set(Math.cos(a) * 0.5, 0, Math.sin(a) * 0.4); g.add(b);
        }
        g.position.set(0, 1.72, 0.24); g.visible = false;
        dinoGroup.add(g); accMeshes[5] = g;
    }
    // id:6 Medalla San Roque
    {
        const g = new THREE.Group();
        const cGeo = new THREE.TorusGeometry(0.46, 0.04, 8, 20);
        g.add(new THREE.Mesh(cGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 160, specular: 0xffdd88 })));
        g.children[0].rotation.x = Math.PI / 2;
        const mGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.04, 14);
        const medal = new THREE.Mesh(mGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 200, specular: 0xffee99 }));
        medal.position.set(0, -0.05, 0.42); medal.rotation.x = Math.PI / 2; g.add(medal);
        const crossV = new THREE.BoxGeometry(0.03, 0.18, 0.02);
        const crossH = new THREE.BoxGeometry(0.12, 0.03, 0.02);
        const crossMat = new THREE.MeshPhongMaterial({ color: 0x8a1a1a, shininess: 80 });
        [crossV, crossH].forEach(cg => { const cm = new THREE.Mesh(cg, crossMat); cm.position.set(0, -0.05, 0.445); g.add(cm); });
        g.position.set(0, 1.72, 0.24); g.visible = false;
        dinoGroup.add(g); accMeshes[6] = g;
    }
    // id:7 Collar de Fósil
    {
        const g = new THREE.Group();
        const rGeo = new THREE.TorusGeometry(0.48, 0.04, 8, 20);
        g.add(new THREE.Mesh(rGeo, new THREE.MeshPhongMaterial({ color: 0x8ab4c2, shininess: 40 })));
        g.children[0].rotation.x = Math.PI / 2;
        const bGeo = new THREE.CylinderGeometry(0.06, 0.09, 0.2, 8);
        const bone = new THREE.Mesh(bGeo, new THREE.MeshPhongMaterial({ color: 0xd4c4a8, shininess: 60 }));
        bone.position.set(0, -0.06, 0.44); bone.rotation.x = Math.PI / 2; g.add(bone);
        // bone caps
        [-0.1, 0.1].forEach(y => { const cg = new THREE.SphereGeometry(0.09, 8, 6); const c = new THREE.Mesh(cg, new THREE.MeshPhongMaterial({ color: 0xd4c4a8, shininess: 50 })); c.position.set(0, y, 0.44); c.rotation.x = Math.PI / 2; g.add(c); });
        g.position.set(0, 1.72, 0.24); g.visible = false;
        dinoGroup.add(g); accMeshes[7] = g;
    }

    // ── BACK SLOT ──────────────────────────────

    // id:8 Mochila Viñera
    {
        const g = new THREE.Group();
        const bodyGeo = new THREE.SphereGeometry(0.42, 12, 10); bodyGeo.scale(0.9, 1.1, 0.75);
        g.add(new THREE.Mesh(bodyGeo, new THREE.MeshPhongMaterial({ color: 0x5a0e2a, shininess: 40 })));
        // grapes on pack
        for (let i = 0; i < 5; i++) {
            const a = (i / 5) * Math.PI * 1.2 - 0.3;
            const gg = new THREE.SphereGeometry(0.1, 8, 6);
            const gr = new THREE.Mesh(gg, new THREE.MeshPhongMaterial({ color: 0x7a1e3c, shininess: 80, specular: 0xdd88aa }));
            gr.position.set(Math.cos(a) * 0.22, 0.2 + i * 0.06, 0.18); g.add(gr);
        }
        const strapGeo = new THREE.TorusGeometry(0.18, 0.03, 6, 14, Math.PI);
        [-0.22, 0.22].forEach(x => { const s = new THREE.Mesh(strapGeo, new THREE.MeshPhongMaterial({ color: 0x3a0a18 })); s.position.set(x, 0.45, -0.15); s.rotation.z = Math.PI / 2; g.add(s); });
        g.position.set(0, 0.9, -0.88); g.visible = false;
        dinoGroup.add(g); accMeshes[8] = g;
    }
    // id:9 Capa del Portillo
    {
        const g = new THREE.Group();
        // Cape as curved wide mesh
        for (let i = 0; i < 8; i++) {
            const t = i / 7; const y = 0.5 - t * 1.2; const w = 0.3 + t * 0.55;
            const sg = new THREE.SphereGeometry(0.12, 8, 6); sg.scale(w * 4, 0.18, 1);
            const s = new THREE.Mesh(sg, new THREE.MeshPhongMaterial({
                color: new THREE.Color().setHSL(0.07 + t * 0.03, 0.9, 0.4 + t * 0.15),
                shininess: 60, transparent: true, opacity: 0.9
            }));
            s.position.set(0, y, -0.78 - t * 0.2); g.add(s);
        }
        // Collar pin
        const pinGeo = new THREE.SphereGeometry(0.1, 8, 6);
        g.add(new THREE.Mesh(pinGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 180, specular: 0xffdd88 })));
        g.children[g.children.length - 1].position.set(0, 0.5, -0.6);
        g.position.set(0, 0.9, 0); g.visible = false;
        dinoGroup.add(g); accMeshes[9] = g;
    }
    // id:10 Alas Mariposa
    {
        const g = new THREE.Group();
        const wingColors = [0x4488ff, 0x44dd88, 0xff8844, 0xcc44ff];
        [[-1, 0.3], [1, 0.3], [-1, -0.2], [1, -0.2]].forEach(([side, yOff], wi) => {
            const wGeo = new THREE.SphereGeometry(0.35, 10, 8); wGeo.scale(side * 1.8, 0.85, 0.3);
            const wing = new THREE.Mesh(wGeo, new THREE.MeshPhongMaterial({ color: wingColors[wi], transparent: true, opacity: 0.85, shininess: 120, specular: 0xffffff }));
            wing.position.set(side * 0.5, yOff + 0.2, -0.75); wing.rotation.y = side * 0.4; g.add(wing);
            // Wing pattern dots
            for (let d = 0; d < 3; d++) {
                const dg = new THREE.SphereGeometry(0.06, 6, 5);
                const dot = new THREE.Mesh(dg, new THREE.MeshPhongMaterial({ color: 0xffffff, emissive: 0xaaaaaa, emissiveIntensity: 0.5 }));
                dot.position.set(side * (0.3 + d * 0.15), yOff + 0.25 + d * 0.08, -0.76); g.add(dot);
            }
        });
        g.position.set(0, 0, 0); g.visible = false;
        dinoGroup.add(g); accMeshes[10] = g;
    }
    // id:11 Carcaj
    {
        const g = new THREE.Group();
        const qGeo = new THREE.CylinderGeometry(0.1, 0.14, 0.7, 10);
        g.add(new THREE.Mesh(qGeo, new THREE.MeshPhongMaterial({ color: 0x4a2c1a, shininess: 30 })));
        // arrows peeking out
        for (let i = 0; i < 4; i++) {
            const aGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.5, 6);
            const arrow = new THREE.Mesh(aGeo, new THREE.MeshPhongMaterial({ color: 0xa0742a, shininess: 50 }));
            const a = (i / 4) * Math.PI * 0.4 - 0.3;
            arrow.position.set(Math.sin(a) * 0.05, 0.6, Math.cos(a) * 0.05); g.add(arrow);
            const tipGeo = new THREE.ConeGeometry(0.03, 0.1, 6);
            const tip = new THREE.Mesh(tipGeo, new THREE.MeshPhongMaterial({ color: 0xc0c0a0, shininess: 120 }));
            tip.position.set(Math.sin(a) * 0.05, 0.87, Math.cos(a) * 0.05); g.add(tip);
        }
        const strap = new THREE.TorusGeometry(0.18, 0.03, 6, 16, Math.PI);
        g.add(new THREE.Mesh(strap, new THREE.MeshPhongMaterial({ color: 0x2d1a0a })));
        g.children[g.children.length - 1].position.set(-0.3, 0.2, -0.4);
        g.children[g.children.length - 1].rotation.z = Math.PI / 2;
        g.position.set(0.6, 0.9, -0.72); g.visible = false;
        dinoGroup.add(g); accMeshes[11] = g;
    }

    // ── WEAPON SLOT ─────────────────────────────

    // id:12 Urna de Barro
    {
        const g = new THREE.Group();
        const vGeo = new THREE.SphereGeometry(0.22, 12, 10); vGeo.scale(1, 1.2, 1);
        g.add(new THREE.Mesh(vGeo, new THREE.MeshPhongMaterial({ color: 0xb07040, shininess: 40 })));
        const neckGeo = new THREE.CylinderGeometry(0.08, 0.18, 0.15, 10);
        const nkm = new THREE.Mesh(neckGeo, new THREE.MeshPhongMaterial({ color: 0xb07040, shininess: 40 }));
        nkm.position.y = 0.28; g.add(nkm);
        const rimGeo = new THREE.TorusGeometry(0.1, 0.03, 7, 14);
        const rim = new THREE.Mesh(rimGeo, new THREE.MeshPhongMaterial({ color: 0x7a4820, shininess: 60 }));
        rim.position.y = 0.36; rim.rotation.x = Math.PI / 2; g.add(rim);
        g.position.set(-0.72, 0.85, 0.3); g.visible = false;
        dinoGroup.add(g); accMeshes[12] = g;
    }
    // id:13 Espada de la Tablada
    {
        const g = new THREE.Group();
        const bladeGeo = new THREE.BoxGeometry(0.055, 1.0, 0.018);
        g.add(new THREE.Mesh(bladeGeo, new THREE.MeshPhongMaterial({ color: 0xd8d8e8, shininess: 300, specular: 0xffffff })));
        const guardGeo = new THREE.BoxGeometry(0.32, 0.05, 0.04);
        g.add(new THREE.Mesh(guardGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 150, specular: 0xffdd88 })));
        g.children[1].position.y = -0.35;
        const gripGeo = new THREE.CylinderGeometry(0.04, 0.04, 0.28, 8);
        g.add(new THREE.Mesh(gripGeo, new THREE.MeshPhongMaterial({ color: 0x2a1a0a, shininess: 30 })));
        g.children[2].position.y = -0.55;
        const pommelGeo = new THREE.SphereGeometry(0.07, 8, 7);
        g.add(new THREE.Mesh(pommelGeo, new THREE.MeshPhongMaterial({ color: 0xc4882f, shininess: 180 })));
        g.children[3].position.y = -0.72;
        g.rotation.z = 0.3; g.rotation.x = 0.15;
        g.position.set(-0.75, 1.1, 0.3); g.visible = false;
        dinoGroup.add(g); accMeshes[13] = g;
    }
    // id:14 Charango
    {
        const g = new THREE.Group();
        const bodyGeo = new THREE.SphereGeometry(0.22, 12, 10); bodyGeo.scale(1.1, 1.4, 0.55);
        g.add(new THREE.Mesh(bodyGeo, new THREE.MeshPhongMaterial({ color: 0x7a3a10, shininess: 80, specular: 0xff8844 })));
        const neckGeo = new THREE.CylinderGeometry(0.03, 0.04, 0.7, 8);
        const neck = new THREE.Mesh(neckGeo, new THREE.MeshPhongMaterial({ color: 0x5a2a0a, shininess: 60 }));
        neck.position.y = 0.7; g.add(neck);
        // Strings
        for (let i = 0; i < 5; i++) {
            const sg = new THREE.CylinderGeometry(0.005, 0.005, 1.1, 4);
            const str = new THREE.Mesh(sg, new THREE.MeshPhongMaterial({ color: 0xf0e8c8, shininess: 200 }));
            str.position.x = (i - 2) * 0.025; g.add(str);
        }
        const soundholeGeo = new THREE.TorusGeometry(0.1, 0.015, 8, 16);
        const sh = new THREE.Mesh(soundholeGeo, new THREE.MeshPhongMaterial({ color: 0x3a1a05 }));
        sh.position.set(0, 0, 0.13); sh.rotation.x = Math.PI / 2; g.add(sh);
        g.rotation.z = 0.4; g.rotation.x = 0.1;
        g.position.set(-0.72, 0.85, 0.3); g.visible = false;
        dinoGroup.add(g); accMeshes[14] = g;
    }
    // id:15 Bastón del Cañón
    {
        const g = new THREE.Group();
        const staffGeo = new THREE.CylinderGeometry(0.04, 0.05, 1.6, 10);
        g.add(new THREE.Mesh(staffGeo, new THREE.MeshPhongMaterial({ color: 0x5a3010, shininess: 40 })));
        // Knots on staff
        [0.5, 0.1, -0.3, -0.6].forEach(y => {
            const kg = new THREE.TorusGeometry(0.055, 0.018, 7, 12);
            const k = new THREE.Mesh(kg, new THREE.MeshPhongMaterial({ color: 0x3a1a05, shininess: 30 }));
            k.position.y = y; k.rotation.x = Math.PI / 2; g.add(k);
        });
        // Top gem
        const gemGeo = new THREE.SphereGeometry(0.1, 10, 8);
        g.add(new THREE.Mesh(gemGeo, new THREE.MeshPhongMaterial({ color: 0x44bbcc, shininess: 300, specular: 0xaaffff, emissive: 0x112233, emissiveIntensity: 0.3 })));
        g.children[g.children.length - 1].position.y = 0.84;
        g.rotation.z = 0.25;
        g.position.set(-0.78, 0.95, 0.3); g.visible = false;
        dinoGroup.add(g); accMeshes[15] = g;
    }
}

function updateDino3DAccessories() {
    if (!accMeshes || Object.keys(accMeshes).length === 0) return;
    // Hide all
    Object.values(accMeshes).forEach(m => { if (m) m.visible = false; });
    // Show equipped ones
    Object.values(state.equipped).forEach(id => {
        if (id !== null && accMeshes[id]) accMeshes[id].visible = true;
    });
    // Legacy refs for animateDino compat
    hatMesh = accMeshes[state.equipped.hat] || null;
    crownMesh = accMeshes[state.equipped.neck] || null;
    collarMesh = accMeshes[state.equipped.back] || null;
}

function animateDino() {
    animFrame = requestAnimationFrame(animateDino);
    const t = Date.now() * 0.001;

    if (!dinoGroup) { if (dinoRenderer) dinoRenderer.render(dinoScene, dinoCamera); return; }

    // Gentle float + subtle sway
    dinoGroup.position.y = Math.sin(t * 0.85) * 0.08 - 0.72;
    dinoGroup.rotation.y = Math.sin(t * 0.32) * 0.15;

    // Head slight idle bob
    if (headGroup) {
        headGroup.rotation.x = Math.sin(t * 1.0) * 0.04;
        headGroup.position.y = 2.44 + Math.sin(t * 0.85) * 0.025;
    }

    // Arms gentle dangle
    if (leftArm) leftArm.rotation.z = Math.sin(t * 1.2) * 0.1;
    if (rightArm) rightArm.rotation.z = Math.sin(t * 1.2 + 0.8) * 0.1;

    // Legs subtle weight shift
    if (leftLeg) leftLeg.rotation.x = Math.sin(t * 1.5) * 0.06;
    if (rightLeg) rightLeg.rotation.x = Math.sin(t * 1.5 + Math.PI) * 0.06;

    // Tail gentle sway
    if (tailGroup) tailGroup.rotation.y = Math.sin(t * 1.4) * 0.22;

    // Blink every ~4s
    const blinkCycle = t % 4.2;
    const blinkScale = (blinkCycle > 4.05) ? Math.max(0.05, 1 - (blinkCycle - 4.05) / 0.08) : 1;
    if (eyeStarL) eyeStarL.scale.y = blinkScale;
    if (eyeStarR) eyeStarR.scale.y = blinkScale;

    // Accessories
    if (crownMesh && crownMesh.visible) crownMesh.rotation.y = t * 0.6;
    if (accMeshes[10] && accMeshes[10].visible) {
        accMeshes[10].rotation.y = Math.sin(t * 3.5) * 0.15;
    }

    if (dinoRenderer) dinoRenderer.render(dinoScene, dinoCamera);
}

// ── DINO TAP INTERACTION ──────────────────────
const tapMessages = ['¡Hola! 👋', '¡Soy Rex! 🦕', '¡Exploremos! 🗺️', '¡Wuuu! ✨', '¡Tarija! ❤️', '¡Colecciona más! 🎒'];
let tapIdx = 0;

function tapDino() {
    // Bounce animation on group
    if (dinoGroup) {
        const startY = dinoGroup.position.y;
        let frame = 0;
        const bounce = () => {
            frame++;
            dinoGroup.position.y = startY + Math.sin(frame * 0.3) * 0.18 * Math.exp(-frame * 0.07);
            if (frame < 40) requestAnimationFrame(bounce);
        };
        bounce();
    }
    // Sparkles burst
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
    showToast(tapMessages[tapIdx % tapMessages.length]);
    tapIdx++;
}
function spawnConfetti() {
    const colors = ['#7a9e6b', '#c4882f', '#7a1e3c', '#f2ead8', '#8ab4c2', '#c8a97e'];
    for (let i = 0; i < 40; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.cssText = `
      left:${Math.random() * 100}vw;
      background:${colors[Math.floor(Math.random() * colors.length)]};
      animation-duration:${1.5 + Math.random() * 2}s;
      animation-delay:${Math.random() * 0.5}s;
      top:-20px;
      transform:rotate(${Math.random() * 360}deg);
    `;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3500);
    }
}

// ── TOAST ─────────────────────────────────────
let toastTimer;
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// ── INIT ──────────────────────────────────────
(function () {
    loadState();
    // Auto-login if returning user
    if (localStorage.getItem('urion_state') && state.userName !== 'Explorador') {
        enterApp();
    }
})();
