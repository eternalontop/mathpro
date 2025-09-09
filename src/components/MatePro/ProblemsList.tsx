import React from 'react';
import { ArrowLeft, Target, CheckCircle, Lightbulb } from 'lucide-react';
import { problems, isCompleted, type Problem } from '../../data/mateproData';

interface ProblemsListProps {
  onBack: () => void;
  onSelectProblem: (problem: Problem) => void;
}

const ProblemsList: React.FC<ProblemsListProps> = ({ onBack, onSelectProblem }) => {
  const completedCount = problems.filter(problem => isCompleted('problems', problem.id)).length;

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
        <h1 className="text-xl font-bold">Problemas</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center mb-6 pt-2">
          <Target className="w-12 h-12 text-error mx-auto mb-2" />
          <h2 className="text-lg font-bold text-primary-dark mb-2">Aplicación Práctica</h2>
          <p className="text-muted-foreground text-sm">Resuelve problemas del mundo real</p>
        </div>

        {problems.map((problem, index) => {
          const completed = isCompleted('problems', problem.id);
          
          return (
            <div
              key={problem.id}
              onClick={() => onSelectProblem(problem)}
              className={`matepro-card cursor-pointer relative ${completed ? 'progress-complete' : ''}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    completed ? 'bg-success' : 'bg-error'
                  }`}>
                    {completed ? (
                      <CheckCircle size={24} className="text-success-foreground" />
                    ) : (
                      <Target size={20} className="text-error-foreground" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-primary-dark">Problema {index + 1}</h3>
                    {completed && (
                      <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full font-medium">
                        ¡Resuelto!
                      </span>
                    )}
                  </div>
                  <p className="font-medium text-foreground text-sm leading-relaxed mb-3">
                    {problem.question}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Lightbulb size={14} className="text-warning" />
                      <span className="text-xs text-muted-foreground">
                        Respuesta abierta • Pista disponible
                      </span>
                    </div>
                    {!completed && (
                      <span className="text-xs bg-error/20 text-error px-2 py-0.5 rounded-full">
                        Pendiente
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress Summary */}
        <div className="mt-8 p-4 bg-gradient-to-r from-error/10 to-success/10 rounded-lg border border-error/20">
          <h3 className="font-bold text-primary-dark mb-2">Tu Rendimiento</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Problemas resueltos: {completedCount}/{problems.length}
              </span>
              <div className="flex space-x-1">
                {problems.map((problem) => (
                  <div
                    key={problem.id}
                    className={`w-3 h-3 rounded-full ${
                      isCompleted('problems', problem.id) ? 'bg-success' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {completedCount > 0 && (
              <div className="flex items-center space-x-2">
                <Target size={16} className="text-error" />
                <span className="text-sm font-medium text-error">
                  {completedCount} {completedCount === 1 ? 'problema resuelto' : 'problemas resueltos'}
                </span>
              </div>
            )}
          </div>
        </div>

        {completedCount === problems.length && (
          <div className="p-4 bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg text-center">
            <Target className="w-8 h-8 mx-auto mb-2" />
            <h3 className="font-bold mb-1">¡Maestro Resolvedor!</h3>
            <p className="text-sm opacity-90">Has resuelto todos los problemas prácticos</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProblemsList;