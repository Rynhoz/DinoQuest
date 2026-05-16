import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const GameContext = createContext();

// Mock initial state for demo or local dev before supabase DB is fully hooked up
const DEFAULT_STATE = {
  unlockedAcc: [],
  equipped: { hat: null, neck: null, bg: null, weapon: null },
  xp: 0,
  completedMissions: [],
  discounts: [],
  activeProfile: 'mammoth',
  firstHatGiven: false,
};

export function GameProvider({ children }) {
  const { user, isDemo } = useAuth();
  const [gameState, setGameState] = useState(DEFAULT_STATE);
  const [currentSection, setCurrentSection] = useState('hero');

  // Load from local storage for Demo mode
  useEffect(() => {
    if (isDemo && user) {
      const saved = localStorage.getItem(`urion_state_${user.id}`);
      if (saved) {
        setGameState(JSON.parse(saved));
      } else {
        setGameState(DEFAULT_STATE);
      }
    }
  }, [user, isDemo]);

  // Save to local storage for Demo mode
  useEffect(() => {
    if (isDemo && user) {
      localStorage.setItem(`urion_state_${user.id}`, JSON.stringify(gameState));
    }
  }, [gameState, user, isDemo]);

  const updateGameState = (updates) => {
    setGameState(prev => ({ ...prev, ...updates }));
  };

  const equipAccessory = (cat, id) => {
    setGameState(prev => ({
      ...prev,
      equipped: { ...prev.equipped, [cat]: id }
    }));
  };

  const unlockAccessory = (id) => {
    if (!gameState.unlockedAcc.includes(id)) {
      setGameState(prev => ({ ...prev, unlockedAcc: [...prev.unlockedAcc, id] }));
    }
  };

  const completeMission = (id, xpReward) => {
    if (!gameState.completedMissions.includes(id)) {
      setGameState(prev => ({
        ...prev,
        completedMissions: [...prev.completedMissions, id],
        xp: prev.xp + xpReward
      }));
    }
  };

  const addDiscount = (discount) => {
    setGameState(prev => ({
      ...prev,
      discounts: [discount, ...prev.discounts]
    }));
  };

  return (
    <GameContext.Provider value={{
      gameState,
      updateGameState,
      currentSection,
      setCurrentSection,
      equipAccessory,
      unlockAccessory,
      completeMission,
      addDiscount
    }}>
      {children}
    </GameContext.Provider>
  );
}

export const useGameState = () => useContext(GameContext);
