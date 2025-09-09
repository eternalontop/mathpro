import React, { useState } from 'react';
import { Home, Calculator } from 'lucide-react';
import MateProApp from './MatePro/MateProApp';

type Screen = 'home' | 'matepro';

const Phone = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');

  const renderHomeScreen = () => (
    <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-50 to-blue-100 relative">
      {/* Status Bar */}
      <div className="absolute top-4 left-0 right-0 flex justify-between items-center px-6">
        <div className="flex items-center space-x-1">
          <div className="w-1 h-1 bg-foreground rounded-full"></div>
          <div className="w-1 h-1 bg-foreground rounded-full"></div>
          <div className="w-1 h-1 bg-foreground rounded-full"></div>
        </div>
        <div className="text-sm font-medium">12:34</div>
        <div className="flex items-center space-x-1">
          <div className="w-4 h-2 border border-foreground rounded-sm">
            <div className="w-3 h-1 bg-foreground rounded-sm"></div>
          </div>
        </div>
      </div>

      {/* Home Screen Content */}
      <div className="flex flex-col items-center justify-center space-y-8 mt-16">
        <h1 className="text-2xl font-bold text-primary-dark mb-8">Mi Teléfono</h1>
        
        {/* MatePro App Icon */}
        <div
          onClick={() => setCurrentScreen('matepro')}
          className="app-icon group cursor-pointer"
        >
          <Calculator size={32} className="group-hover:scale-110 transition-transform" />
        </div>
        <p className="text-center font-semibold text-primary-dark">MatePro</p>
        
        {/* Home Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-foreground/30 rounded-full"></div>
      </div>
    </div>
  );

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case 'home':
        return renderHomeScreen();
      case 'matepro':
        return <MateProApp onGoHome={() => setCurrentScreen('home')} />;
      default:
        return renderHomeScreen();
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="phone-frame p-4 w-80 h-[640px]">
        <div className="phone-screen w-full h-full relative">
          {/* Screen Content */}
          <div className={`w-full h-full ${currentScreen !== 'home' ? 'screen-enter' : ''}`}>
            {renderCurrentScreen()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;