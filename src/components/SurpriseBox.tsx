import { useState } from 'react';
import './SurpriseBox.css';

interface SurpriseBoxProps {
  onOpen: () => void;
}

const SurpriseBox = ({ onOpen }: SurpriseBoxProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <div className={`surprise-container ${isOpening ? 'opening' : ''}`}>
      <div className="floating-hearts">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="heart" style={{ animationDelay: `${i * 0.5}s` }}>
            ❤️
          </div>
        ))}
      </div>
      
      <div className={`gift-box ${isOpening ? 'open' : ''}`} onClick={handleClick}>
        <div className="box-lid">🎁</div>
        <div className="box-body">💝</div>
      </div>
      
      <p className="surprise-text">I made something just for you...</p>
      <p className="tap-hint">✨ Tap to open ✨</p>
    </div>
  );
};

export default SurpriseBox;
