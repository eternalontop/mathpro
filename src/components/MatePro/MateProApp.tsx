import React, { useState } from 'react';
import { Home, Info, Play, BookOpen, HelpCircle, Target } from 'lucide-react';
import { motivationalTips } from '../../data/mateproData';
import InfoScreen from './InfoScreen';
import LearningSection from './LearningSection';

type MateProScreen = 'main' | 'info' | 'learning';

interface MateProAppProps {
  onGoHome: () => void;
}

const MateProApp: React.FC<MateProAppProps> = ({ onGoHome }) => {
  const [currentScreen, setCurrentScreen] = useState<MateProScreen>('main');
  const [currentTip, setCurrentTip] = useState(
    motivationalTips[Math.floor(Math.random() * motivationalTips.length)]
  );

  const showRandomTip = () => {
    const randomTip = motivationalTips[Math.floor(Math.random() * motivationalTips.length)];
    setCurrentTip(randomTip);
  };

  const renderMainScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <button
          onClick={onGoHome}
          className="p-2 hover:bg-primary-dark rounded-lg transition-colors"
        >
          <Home size={20} />
        </button>
        <h1 className="text-xl font-bold">MatePro</h1>
        <div className="w-9" /> {/* Spacer */}
      </div>

      {/* Motivational Tip */}
      <div className="mx-4 mt-4">
        <div className="motivation-tip">
          {currentTip}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-8 p-6">
        <div className="text-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
            <Target size={40} className="text-primary-foreground" />
          </div>
          <h2 className="text-2xl font-bold text-primary-dark mb-2">¡Bienvenido a MatePro!</h2>
          <p className="text-muted-foreground">Tu compañero perfecto para dominar las matemáticas</p>
        </div>

        {/* Main Buttons */}
        <div className="space-y-4 w-full max-w-sm">
          <button
            onClick={() => setCurrentScreen('info')}
            className="btn-matepro w-full flex items-center justify-center space-x-3"
          >
            <Info size={20} />
            <span>Información</span>
          </button>

          <button
            onClick={() => {
              setCurrentScreen('learning');
              showRandomTip();
            }}
            className="btn-matepro btn-success w-full flex items-center justify-center space-x-3"
          >
            <Play size={20} />
            <span>Empezar a Aprender</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'main':
        return renderMainScreen();
      case 'info':
        return <InfoScreen onBack={() => setCurrentScreen('main')} />;
      case 'learning':
        return (
          <LearningSection
            onBack={() => setCurrentScreen('main')}
            onShowTip={showRandomTip}
            currentTip={currentTip}
          />
        );
      default:
        return renderMainScreen();
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {renderCurrentScreen()}
    </div>
  );
};

export default MateProApp;