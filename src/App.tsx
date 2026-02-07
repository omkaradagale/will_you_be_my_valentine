import { useState, useRef } from 'react';
import PasswordScreen from './components/PasswordScreen';
import SurpriseBox from './components/SurpriseBox';
import JourneyTimeline from './components/JourneyTimeline';
import RoseDayGallery from './components/RoseDayGallery';
import PreWeddingGallery from './components/PreWeddingGallery';
import FinalQuestion from './components/FinalQuestion';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleUnlock = () => {
    setIsUnlocked(true);
  };

  const handleBoxOpen = () => {
    setShowContent(true);
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (!isUnlocked) {
    return <PasswordScreen onCorrectPassword={handleUnlock} />;
  }

  return (
    <div className="app">
      <MusicPlayer />
      {!showContent ? (
        <SurpriseBox onOpen={handleBoxOpen} />
      ) : (
        <>
          <div ref={timelineRef}>
            <JourneyTimeline />
          </div>
          <RoseDayGallery />
          <PreWeddingGallery />
          <FinalQuestion />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
