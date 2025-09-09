import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, X, RefreshCw } from 'lucide-react';
import { markAsCompleted, isCompleted, type Quiz } from '../../data/mateproData';

interface QuizViewerProps {
  quiz: Quiz;
  onBack: () => void;
  onComplete: () => void;
}

const QuizViewer: React.FC<QuizViewerProps> = ({ quiz, onBack, onComplete }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [answered, setAnswered] = useState(false);
  const completed = isCompleted('quizzes', quiz.id);

  const handleOptionSelect = (optionIndex: number) => {
    if (answered) return;
    
    setSelectedOption(optionIndex);
    setShowResult(true);
    setAnswered(true);

    if (optionIndex === quiz.correctOption) {
      markAsCompleted('quizzes', quiz.id);
    }
  };

  const resetQuiz = () => {
    setSelectedOption(null);
    setShowResult(false);
    setAnswered(false);
  };

  const isCorrectAnswer = selectedOption === quiz.correctOption;

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
          <h1 className="text-lg font-bold">Quiz</h1>
        </div>
        {completed && (
          <CheckCircle size={20} className="text-success-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Question */}
          <div className="matepro-card">
            <h2 className="text-lg font-bold text-primary-dark mb-4">Pregunta</h2>
            <p className="text-foreground text-lg leading-relaxed">{quiz.question}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            <h3 className="font-bold text-primary-dark">Selecciona tu respuesta:</h3>
            {quiz.options.map((option, index) => {
              let buttonClass = 'quiz-option';
              
              if (showResult) {
                if (index === quiz.correctOption) {
                  buttonClass += ' correct';
                } else if (index === selectedOption && index !== quiz.correctOption) {
                  buttonClass += ' incorrect';
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={answered}
                  className={buttonClass}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full border-2 border-current flex items-center justify-center font-bold">
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="flex-1">{option}</span>
                    {showResult && index === quiz.correctOption && (
                      <CheckCircle size={20} className="text-success" />
                    )}
                    {showResult && index === selectedOption && index !== quiz.correctOption && (
                      <X size={20} className="text-error" />
                    )}
                  </div>
                </button>
              );
            })}
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
                    {isCorrectAnswer ? '¡Correcto!' : 'Incorrecto'}
                  </h3>
                  <p className="text-foreground mb-2">{quiz.feedback}</p>
                  <p className="text-muted-foreground text-sm">{quiz.explanation}</p>
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
                  onClick={resetQuiz}
                  className="btn-matepro flex-1"
                >
                  <RefreshCw size={16} className="mr-2" />
                  Intentar de Nuevo
                </button>
              )}
            </div>
          )}

          {/* Motivational Message */}
          {!answered && (
            <div className="matepro-card bg-primary/10 border-primary/20">
              <h3 className="font-bold text-primary-dark mb-2">💪 ¡Tú Puedes!</h3>
              <p className="text-muted-foreground text-sm">
                Tómate tu tiempo para pensar. No hay prisa. Lo importante es aprender.
              </p>
            </div>
          )}

          {completed && (
            <div className="p-4 bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">¡Quiz Completado!</h3>
              <p className="text-sm opacity-90">Respuesta correcta. ¡Sigue practicando!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizViewer;