import { useState, useRef, useEffect } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => {
          console.log('Audio play failed:', err);
        });
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false);
    }
  };

  useEffect(() => {
    // Auto-hide prompt after 5 seconds
    const timer = setTimeout(() => {
      setShowPrompt(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/src/assets/music/Edd_Sheeran_-_Perfect_(mp3.pm).mp3" type="audio/mpeg" />
      </audio>

      {showPrompt && !isPlaying && (
        <div className="music-prompt">
          <p>🎵 Play our song? 💕</p>
        </div>
      )}

      <button 
        className={`music-player-btn ${isPlaying ? 'playing' : ''}`}
        onClick={toggleMusic}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <>
            <span className="music-icon">🎵</span>
            <span className="music-bars">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </span>
          </>
        ) : (
          <span className="music-icon">🔇</span>
        )}
      </button>

      <div className="music-info">
        <p className="song-title">Perfect</p>
        <p className="song-artist">Ed Sheeran</p>
      </div>
    </>
  );
};

export default MusicPlayer;
