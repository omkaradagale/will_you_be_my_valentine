import { useState, useRef } from 'react';
import './FinalQuestion.css';

const FinalQuestion = () => {
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [yesButtonSize, setYesButtonSize] = useState(1);
  const [hoverCount, setHoverCount] = useState(0);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
    setAnswered(true);
    setShowConfetti(true);
  };

  const handleNoHover = () => {
    // Move the NO button to a random position
    const container = document.querySelector('.button-container');
    if (container && noButtonRef.current) {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = noButtonRef.current.getBoundingClientRect();
      
      const maxX = (containerRect.width - buttonRect.width) / 2 - 20;
      const maxY = (containerRect.height - buttonRect.height) / 2 - 20;
      
      const randomX = (Math.random() - 0.5) * maxX * 2;
      const randomY = (Math.random() - 0.5) * maxY * 2;
      
      setNoButtonPosition({ x: randomX, y: randomY });
      
      // Make YES button bigger each time NO is hovered
      const newCount = hoverCount + 1;
      setHoverCount(newCount);
      setYesButtonSize(1 + (newCount * 0.15));
    }
  };

  const messages = [
    "Are you sure? 🥺",
    "Please? 🥹",
    "Think about it... 💭",
    "Really? 😢",
    "One more chance? 🙏",
    "You're breaking my heart... 💔",
    "Just click YES! 😊"
  ];

  return (
    <div className="final-question-container">
      {showConfetti && (
        <div className="confetti-container">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                backgroundColor: ['#ff6b9d', '#ffc0cb', '#ff8fab', '#ffe4e9'][Math.floor(Math.random() * 4)]
              }}
            />
          ))}
        </div>
      )}

      {!answered ? (
        <div className="question-content">
          <div className="heart-burst">
            <span className="heart-icon">💖</span>
            <span className="heart-icon">💕</span>
            <span className="heart-icon">💗</span>
            <span className="heart-icon">💓</span>
          </div>

          <h1 className="question-title">
            From the first day to every day I hope for...
          </h1>

          <h2 className="main-question">
            Will you be my Valentine? ❤️
          </h2>

          {hoverCount > 0 && (
            <p className="hover-message">
              {messages[Math.min(hoverCount - 1, messages.length - 1)]}
            </p>
          )}

          <div className="button-container">
            <button 
              className="answer-button yes-button" 
              onClick={handleYes}
              style={{ 
                transform: `scale(${yesButtonSize})`,
                transition: 'transform 0.3s ease'
              }}
            >
              YES 💘
            </button>
            <button 
              ref={noButtonRef}
              className="answer-button no-button" 
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={{
                transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
                transition: 'transform 0.3s ease'
              }}
            >
              NO 😢
            </button>
          </div>

          <p className="game-hint">💡 Hint: There's only one right answer!</p>
        </div>
      ) : (
        <div className="confirmation-content">
          <div className="celebration-emoji">🎉💕🎊</div>
          <h1 className="confirmation-title">
            You've made me the happiest person alive!
          </h1>
          <p className="confirmation-message">
            I knew you'd say yes! Every day with you is a gift. Thank you for being mine. ❤️
          </p>
          <div className="love-emoji">💑</div>
          <p className="confirmation-subtitle">
            Happy Valentine's Day, my love! 🌹💝
          </p>
        </div>
      )}
    </div>
  );
};

export default FinalQuestion;
