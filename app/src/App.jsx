import { AuthProvider, useAuth } from './contexts/AuthContext';
import { GameProvider } from './contexts/GameContext';
import { LoginScreen } from './components/screens/LoginScreen';
import { MainApp } from './components/screens/MainApp';
import { SplashScreen } from './components/screens/SplashScreen';
import { useState, useEffect } from 'react';

function AppContent() {
  const { user } = useAuth();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide splash after 2 seconds
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return user ? <MainApp /> : <LoginScreen />;
}

function App() {
  return (
    <AuthProvider>
      <GameProvider>
        <AppContent />
      </GameProvider>
    </AuthProvider>
  );
}

export default App;
