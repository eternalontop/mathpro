import React from 'react';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';
import { lessons, isCompleted, type Lesson } from '../../data/mateproData';

interface LessonsListProps {
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

const LessonsList: React.FC<LessonsListProps> = ({ onBack, onSelectLesson }) => {
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
        <h1 className="text-xl font-bold">Lecciones</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="text-center mb-6 pt-2">
          <h2 className="text-lg font-bold text-primary-dark mb-2">Videos Educativos</h2>
          <p className="text-muted-foreground text-sm">Aprende con explicaciones claras y ejemplos prácticos</p>
        </div>

        {lessons.map((lesson, index) => {
          const completed = isCompleted('lessons', lesson.id);
          
          return (
            <div
              key={lesson.id}
              onClick={() => onSelectLesson(lesson)}
              className={`matepro-card cursor-pointer relative ${completed ? 'progress-complete' : ''}`}
            >
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    completed ? 'bg-success' : 'bg-primary'
                  }`}>
                    {completed ? (
                      <CheckCircle size={24} className="text-success-foreground" />
                    ) : (
                      <Play size={20} className="text-primary-foreground" />
                    )}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-primary-dark">Lección {index + 1}</h3>
                    {completed && (
                      <span className="text-xs bg-success text-success-foreground px-2 py-1 rounded-full font-medium">
                        Completada
                      </span>
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{lesson.title}</h4>
                  <p className="text-sm text-muted-foreground">{lesson.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Progress Summary */}
        <div className="mt-8 p-4 bg-gradient-to-r from-primary/10 to-success/10 rounded-lg border border-primary/20">
          <h3 className="font-bold text-primary-dark mb-2">Tu Progreso</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">
              Lecciones completadas: {lessons.filter(lesson => isCompleted('lessons', lesson.id)).length}/{lessons.length}
            </span>
            <div className="flex space-x-1">
              {lessons.map((lesson) => (
                <div
                  key={lesson.id}
                  className={`w-3 h-3 rounded-full ${
                    isCompleted('lessons', lesson.id) ? 'bg-success' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsList;