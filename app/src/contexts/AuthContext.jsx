import { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../config/supabase';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  // For Demo Mode (saved in localStorage for now if not fully using supabase yet, or mocked)
  const [demoUser, setDemoUser] = useState(() => {
    const saved = localStorage.getItem('urion_demo_user');
    return saved ? JSON.parse(saved) : null;
  });

  const loginDemo = (name) => {
    const dUser = { id: 'demo-' + Date.now(), name, isDemo: true };
    setDemoUser(dUser);
    localStorage.setItem('urion_demo_user', JSON.stringify(dUser));
  };

  const logoutDemo = () => {
    setDemoUser(null);
    localStorage.removeItem('urion_demo_user');
  };

  const activeUser = user || demoUser;

  return (
    <AuthContext.Provider value={{
      user: activeUser,
      isDemo: !!demoUser,
      loading,
      loginDemo,
      logoutDemo
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
