import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, X, Lightbulb, Send } from 'lucide-react';
import { markAsCompleted, isCompleted, type Problem } from '../../data/mateproData';

interface ProblemViewerProps {
  problem: Problem;
  onBack: () => void;
  onComplete: () => void;
}

const ProblemViewer: React.FC<ProblemViewerProps> = ({ problem, onBack, onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const completed = isCompleted('problems', problem.id);

  const handleSubmit = () => {
    if (!answer.trim() || submitted) return;

    setSubmitted(true);
    setShowResult(true);

    // Check if answer is correct (case insensitive and trimmed)
    const userAnswer = answer.trim().toLowerCase();
    const correctAnswer = problem.correctAnswer.toLowerCase();
    
    if (userAnswer === correctAnswer) {
      markAsCompleted('problems', problem.id);
    }
  };

  const resetProblem = () => {
    setAnswer('');
    setShowResult(false);
    setSubmitted(false);
    setShowHint(false);
  };

  const isCorrectAnswer = answer.trim().toLowerCase() === problem.correctAnswer.toLowerCase();

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-primary text-primary-foreground">
        <div className="flex items-center">
          <button
            onClick={onBack}
            className="p-2 hover:bg-primary-dark rounded-lg transition-colors mr-3"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-lg font-bold">Problema</h1>
        </div>
        {completed && (
          <CheckCircle size={20} className="text-success-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Problem Statement */}
          <div className="matepro-card">
            <h2 className="text-lg font-bold text-primary-dark mb-4">Problema a Resolver</h2>
            <p className="text-foreground text-lg leading-relaxed">{problem.question}</p>
          </div>

          {/* Hint Section */}
          <div className="matepro-card">
            <button
              onClick={() => setShowHint(!showHint)}
              className="flex items-center space-x-2 text-warning hover:text-warning/80 transition-colors mb-3"
            >
              <Lightbulb size={20} />
              <span className="font-medium">
                {showHint ? 'Ocultar Pista' : 'Ver Pista'}
              </span>
            </button>
            
            {showHint && (
              <div className="bg-warning/10 border border-warning/20 rounded-lg p-4">
                <p className="text-foreground text-sm">{problem.hint}</p>
              </div>
            )}
          </div>

          {/* Answer Input */}
          <div className="matepro-card">
            <label className="block font-bold text-primary-dark mb-3">
              Escribe tu respuesta:
            </label>
            <div className="flex space-x-3">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                disabled={submitted}
                placeholder="Ingresa tu respuesta aquí..."
                className="flex-1 px-4 py-3 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && !submitted && answer.trim()) {
                    handleSubmit();
                  }
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={!answer.trim() || submitted}
                className="btn-matepro px-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>

          {/* Result Feedback */}
          {showResult && (
            <div className={`matepro-card ${isCorrectAnswer ? 'bg-success-light' : 'bg-error-light'}`}>
              <div className="flex items-start space-x-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isCorrectAnswer ? 'bg-success' : 'bg-error'
                }`}>
                  {isCorrectAnswer ? (
                    <CheckCircle size={20} className="text-success-foreground" />
                  ) : (
                    <X size={20} className="text-error-foreground" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${isCorrectAnswer ? 'text-success' : 'text-error'}`}>
                    {isCorrectAnswer ? '¡Excelente!' : 'No es correcto'}
                  </h3>
                  <p className="text-foreground mb-2">
                    {isCorrectAnswer ? 
                      `¡Perfecto! La respuesta es ${problem.correctAnswer}` : 
                      problem.feedback
                    }
                  </p>
                  {!isCorrectAnswer && (
                    <p className="text-muted-foreground text-sm">
                      La respuesta correcta es: <strong>{problem.correctAnswer}</strong>
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          {showResult && (
            <div className="flex space-x-3">
              {isCorrectAnswer ? (
                <button
                  onClick={onComplete}
                  className="btn-success flex-1"
                >
                  <CheckCircle size={16} className="mr-2" />
                  Continuar
                </button>
              ) : (
                <button
                  onClick={resetProblem}
                  className="btn-matepro flex-1"
                >
                  Intentar de Nuevo
                </button>
              )}
            </div>
          )}

          {/* Encouraging Message */}
          {!submitted && (
            <div className="matepro-card bg-primary/10 border-primary/20">
              <h3 className="font-bold text-primary-dark mb-2">📝 Consejos</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Lee el problema cuidadosamente</li>
                <li>• Usa la pista si la necesitas</li>
                <li>• Verifica tu respuesta antes de enviarla</li>
                <li>• ¡No te preocupes si te equivocas, puedes intentar de nuevo!</li>
              </ul>
            </div>
          )}

          {completed && (
            <div className="p-4 bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">¡Problema Resuelto!</h3>
              <p className="text-sm opacity-90">¡Genial trabajo! Sigue practicando.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemViewer;