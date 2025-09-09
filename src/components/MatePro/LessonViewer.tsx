import React, { useState } from 'react';
import { ArrowLeft, Play, CheckCircle } from 'lucide-react';
import { markAsCompleted, isCompleted, type Lesson } from '../../data/mateproData';

interface LessonViewerProps {
  lesson: Lesson;
  onBack: () => void;
}

const LessonViewer: React.FC<LessonViewerProps> = ({ lesson, onBack }) => {
  const [videoStarted, setVideoStarted] = useState(false);
  const completed = isCompleted('lessons', lesson.id);

  const handleCompleteLesson = () => {
    markAsCompleted('lessons', lesson.id);
    // Force re-render by going back and forth
    window.location.reload();
  };

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
          <h1 className="text-lg font-bold">Lección</h1>
        </div>
        {completed && (
          <CheckCircle size={20} className="text-success-foreground" />
        )}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-6">
          {/* Lesson Info */}
          <div className="matepro-card">
            <h2 className="text-xl font-bold text-primary-dark mb-2">{lesson.title}</h2>
            <p className="text-muted-foreground">{lesson.description}</p>
          </div>

          {/* Video Container */}
          <div className="matepro-card">
            <div className="aspect-video bg-black rounded-lg overflow-hidden relative">
              {!videoStarted ? (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/90 to-primary-dark/90">
                  <button
                    onClick={() => setVideoStarted(true)}
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
                  >
                    <Play size={32} className="text-white ml-1" />
                  </button>
                </div>
              ) : (
                <iframe
                  src={lesson.videoUrl + '?autoplay=1&rel=0'}
                  title={lesson.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
            
            {videoStarted && (
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  ¿Ya terminaste de ver el video?
                </p>
                {!completed ? (
                  <button
                    onClick={handleCompleteLesson}
                    className="btn-success"
                  >
                    <CheckCircle size={16} className="mr-2" />
                    Marcar como Completada
                  </button>
                ) : (
                  <div className="inline-flex items-center text-success font-medium">
                    <CheckCircle size={16} className="mr-2" />
                    ¡Lección Completada!
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Learning Tips */}
          <div className="matepro-card">
            <h3 className="font-bold text-primary-dark mb-3">💡 Tips para Aprender Mejor</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Toma notas mientras ves el video</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Pausa el video si necesitas tiempo para entender</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Repite el video si es necesario</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span>Practica los ejercicios que muestra el profesor</span>
              </li>
            </ul>
          </div>

          {completed && (
            <div className="p-4 bg-gradient-to-r from-success to-success-light text-success-foreground rounded-lg text-center">
              <CheckCircle className="w-8 h-8 mx-auto mb-2" />
              <h3 className="font-bold mb-1">¡Excelente Trabajo!</h3>
              <p className="text-sm opacity-90">Has completado esta lección. ¡Sigue así!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LessonViewer;