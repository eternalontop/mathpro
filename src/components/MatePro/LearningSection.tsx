import React, { useState } from 'react';
import { ArrowLeft, BookOpen, HelpCircle, Target, Trophy } from 'lucide-react';
import LessonsList from './LessonsList';
import QuizzesList from './QuizzesList';
import ProblemsList from './ProblemsList';
import LessonViewer from './LessonViewer';
import QuizViewer from './QuizViewer';
import ProblemViewer from './ProblemViewer';
import { Lesson, Quiz, Problem } from '../../data/mateproData';

type LearningView = 'menu' | 'lessons' | 'quizzes' | 'problems' | 'lesson' | 'quiz' | 'problem';

interface LearningSectionProps {
  onBack: () => void;
  onShowTip: () => void;
  currentTip: string;
}

const LearningSection: React.FC<LearningSectionProps> = ({ onBack, onShowTip, currentTip }) => {
  const [currentView, setCurrentView] = useState<LearningView>('menu');
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [selectedProblem, setSelectedProblem] = useState<Problem | null>(null);

  const renderMenuScreen = () => (
    <div className="flex flex-col h-full bg-gradient-to-br from-primary-light to-background">
      {/* Header */}
      <div className="flex items-center p-4 bg-primary text-primary-foreground">
        <button
          onClick={onBack}
          className="p-2 hover:bg-primary-dark rounded-lg transition-colors mr-3"
        >
          <ArrowLeft size={20} />
        </button>
        <h1 className="text-xl font-bold">Aprender</h1>
      </div>

      {/* Motivational Tip */}
      <div className="mx-4 mt-4">
        <div className="motivation-tip">
          {currentTip}
        </div>
      </div>

      {/* Learning Options */}
      <div className="flex-1 p-6 space-y-6">
        <div className="text-center mb-6">
          <Trophy className="w-16 h-16 text-warning mx-auto mb-3" />
          <h2 className="text-xl font-bold text-primary-dark">¡A por todas!</h2>
          <p className="text-muted-foreground">Elige cómo quieres aprender hoy</p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              setCurrentView('lessons');
              onShowTip();
            }}
            className="matepro-card w-full p-6 flex items-center space-x-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <BookOpen size={24} className="text-primary-foreground" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-primary-dark">Lecciones</h3>
              <p className="text-muted-foreground text-sm">Videos explicativos paso a paso</p>
            </div>
          </button>

          <button
            onClick={() => {
              setCurrentView('quizzes');
              onShowTip();
            }}
            className="matepro-card w-full p-6 flex items-center space-x-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
              <HelpCircle size={24} className="text-success-foreground" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-primary-dark">Quizzes</h3>
              <p className="text-muted-foreground text-sm">Pon a prueba tus conocimientos</p>
            </div>
          </button>

          <button
            onClick={() => {
              setCurrentView('problems');
              onShowTip();
            }}
            className="matepro-card w-full p-6 flex items-center space-x-4 cursor-pointer"
          >
            <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center">
              <Target size={24} className="text-warning-foreground" />
            </div>
            <div className="flex-1 text-left">
              <h3 className="text-lg font-bold text-primary-dark">Problemas</h3>
              <p className="text-muted-foreground text-sm">Resuelve ejercicios prácticos</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case 'menu':
        return renderMenuScreen();
      case 'lessons':
        return (
          <LessonsList
            onBack={() => setCurrentView('menu')}
            onSelectLesson={(lesson) => {
              setSelectedLesson(lesson);
              setCurrentView('lesson');
            }}
          />
        );
      case 'quizzes':
        return (
          <QuizzesList
            onBack={() => setCurrentView('menu')}
            onSelectQuiz={(quiz) => {
              setSelectedQuiz(quiz);
              setCurrentView('quiz');
            }}
          />
        );
      case 'problems':
        return (
          <ProblemsList
            onBack={() => setCurrentView('menu')}
            onSelectProblem={(problem) => {
              setSelectedProblem(problem);
              setCurrentView('problem');
            }}
          />
        );
      case 'lesson':
        return selectedLesson ? (
          <LessonViewer
            lesson={selectedLesson}
            onBack={() => setCurrentView('lessons')}
          />
        ) : renderMenuScreen();
      case 'quiz':
        return selectedQuiz ? (
          <QuizViewer
            quiz={selectedQuiz}
            onBack={() => setCurrentView('quizzes')}
            onComplete={() => {
              setCurrentView('quizzes');
              onShowTip();
            }}
          />
        ) : renderMenuScreen();
      case 'problem':
        return selectedProblem ? (
          <ProblemViewer
            problem={selectedProblem}
            onBack={() => setCurrentView('problems')}
            onComplete={() => {
              setCurrentView('problems');
              onShowTip();
            }}
          />
        ) : renderMenuScreen();
      default:
        return renderMenuScreen();
    }
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {renderCurrentView()}
    </div>
  );
};

export default LearningSection;