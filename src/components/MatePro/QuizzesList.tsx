import React from 'react';
import { ArrowLeft, HelpCircle, CheckCircle, Trophy } from 'lucide-react';
import { quizzes, isCompleted, type Quiz } from '../../data/mateproData';

interface QuizzesListProps {
  onBack: () => void;
  onSelectQuiz: (quiz: Quiz) => void;
}

const QuizzesList: React.FC<QuizzesListProps> = ({ onBack, onSelectQuiz }) => {
  const completedCount = quizzes.filter(quiz => isCompleted('quizzes', quiz.id)).length;

  return (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <div className="flex items-center p-4 bg-primary text-primary-foreground">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-dark rounded-lg transition-colors mr-3"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Quizzes</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center mb-6 pt-2">
          <Trophy className="w-12 h-12 text-warning mx-auto mb-2" />
          <h2 className="text-lg font-bold text-primary-dark mb-2">Demuestra lo que Sabes</h2>
          <p className="text-muted-foreground text-sm">Responde correctamente y gana puntos</p>
        </div>

        {quizzes.map((quiz, index) => {
          const completed = isCompleted('quizzes', quiz.id);
          
          return (
            <div
              key={quiz.id}
              onClick={() => onSelectQuiz(quiz)}
              className={`matepro-card cursor-pointer relative ${completed ? 'progress-complete' : ''}`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    completed ? 'bg-success' : 'bg-warning'
                  }`}>
                    {completed ? (
                      <CheckCircle size={24} className="text-success-foreground" />
                    ) : (
                      <HelpCircle size={24} className="text-warning-foreground" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-primary-dark">Quiz {index + 1}</h3>
                    {completed && (
                      <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full font-medium">
                        ¡Correcto!
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-foreground text-sm">{quiz.question}</p>
                  <div className="flex items-center mt-2 space-x-2">
                    <span className="text-xs text-muted-foreground">
                      Opción múltiple • 1 pregunta
                    </span>
                    {!completed && (
                      <span className="text-xs bg-warning/20 text-warning px-2 py-0.5 rounded-full">
                        Sin resolver
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress Summary */}
        <div className="mt-8 p-4 bg-gradient-to-r from-warning/10 to-success/10 rounded-lg border border-warning/20">
          <h3 className="font-bold text-primary-dark mb-2">Estadísticas</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Quizzes completados: {completedCount}/{quizzes.length}
              </span>
              <div className="flex space-x-1">
                {quizzes.map((quiz) => (
                  <div
                    key={quiz.id}
                    className={`w-3 h-3 rounded-full ${
                      isCompleted('quizzes', quiz.id) ? 'bg-success' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {completedCount > 0 && (
              <div className="flex items-center space-x-2">
                <Trophy size={16} className="text-warning" />
                <span className="text-sm font-medium text-warning">
                  ¡{completedCount} {completedCount === 1 ? 'respuesta correcta' : 'respuestas correctas'}!
                </span>
              </div>
            )}
          </div>
        </div>

        {completedCount === quizzes.length && (
          <div className="p-4 bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg text-center">
            <Trophy className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-bold mb-1">¡Felicidades!</h3>
            <p className="text-sm opacity-90">Has completado todos los quizzes correctamente</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizzesList;