import { useState, FormEvent } from 'react';
import './PasswordScreen.css';

interface PasswordScreenProps {
  onCorrectPassword: () => void;
}

const PasswordScreen = ({ onCorrectPassword }: PasswordScreenProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const correctPassword = 'captain'; // The nickname

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (password.toLowerCase().trim() === correctPassword) {
      onCorrectPassword();
    } else {
      setError(true);
      setAttempts(attempts + 1);
      setPassword('');
      
      // Remove error styling after animation
      setTimeout(() => setError(false), 500);
    }
  };

  return (
    <div className="password-screen">
      <div className="floating-hearts-bg">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="heart-bg">💕</div>
        ))}
      </div>

      <div className="password-container">
        <div className="lock-icon">🔒</div>
        <h1 className="password-title">A Special Message Awaits</h1>
        <p className="password-subtitle">
          Enter the nickname that Omkar calls you
        </p>

        <form onSubmit={handleSubmit} className="password-form">
          <input
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your nickname..."
            className={`password-input ${error ? 'error' : ''}`}
            autoFocus
          />
          
          {error && (
            <p className="error-message">
              {attempts === 1 && "Hmm, that's not quite right... Try again! 💭"}
              {attempts === 2 && "Think about what Omkar calls you... 🤔"}
              {attempts >= 3 && "You know this one! What does he call you? 💕"}
            </p>
          )}

          <button type="submit" className="password-button">
            Unlock 💝
          </button>
        </form>

        <p className="hint-text">
          Hint: It's a special name just for you ✨
        </p>
        
        <div className="sparkles">✨ 💕 ✨</div>
      </div>
    </div>
  );
};

export default PasswordScreen;
