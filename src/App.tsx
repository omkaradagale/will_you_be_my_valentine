import { useState, useRef } from 'react';
import SurpriseBox from './components/SurpriseBox';
import JourneyTimeline from './components/JourneyTimeline';
import RoseDayGallery from './components/RoseDayGallery';
import PreWeddingGallery from './components/PreWeddingGallery';
import FinalQuestion from './components/FinalQuestion';
import MusicPlayer from './components/MusicPlayer';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showContent, setShowContent] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const handleBoxOpen = () => {
    setShowContent(true);
    setTimeout(() => {
      timelineRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

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
