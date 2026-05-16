import { useGameState } from '../../contexts/GameContext';
import { GlassNavbar } from '../layout/GlassNavbar';
import { BottomNav } from '../layout/BottomNav';
import { HeroSection } from '../sections/HeroSection';
import { ExploreSection } from '../sections/ExploreSection';
import { MapSection } from '../sections/MapSection';
import { MissionsSection } from '../sections/MissionsSection';
import { ProfileSection } from '../sections/ProfileSection';

export function MainApp() {
  const { currentSection } = useGameState();

  return (
    <div className="flex flex-col min-h-screen bg-bg relative isolate pb-[80px]">
      <GlassNavbar />
      
      <main className="flex-1 w-full flex flex-col pt-[76px]">
        {currentSection === 'hero' && <HeroSection />}
        {currentSection === 'explore' && <ExploreSection />}
        {currentSection === 'map' && <MapSection />}
        {currentSection === 'places' && <MissionsSection />}
        {currentSection === 'about' && <ProfileSection />}
      </main>

      <BottomNav />
    </div>
  );
}
